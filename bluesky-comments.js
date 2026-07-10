document.addEventListener("DOMContentLoaded", function () {
  var script = document.querySelector("script[data-post-uri]");
  if (!script) return;

  var postUri = script.getAttribute("data-post-uri");
  var loadBtn = document.getElementById("load-bluesky-comments");
  if (!loadBtn) return;

  loadBtn.addEventListener("click", function () {
    loadBtn.textContent = "Loading…";
    loadBtn.disabled = true;
    fetchComments(postUri);
  });

  function fetchComments(uri) {
    var params = new URLSearchParams({ uri: uri, depth: 6, parentHeight: 3 });
    fetch("https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread?" + params)
      .then(function (res) {
        if (!res.ok) throw new Error("Failed to load comments");
        return res.json();
      })
      .then(function (data) {
        var container = document.getElementById("bluesky-comments-list");
        container.innerHTML = "";

        if (
          !data.thread ||
          !data.thread.replies ||
          data.thread.replies.length === 0
        ) {
          container.innerHTML = "<p>No comments yet. Be the first to reply!</p>";
          return;
        }

        var sortedReplies = data.thread.replies
          .filter(function (r) {
            return r.$type === "app.bsky.feed.defs#threadViewPost";
          })
          .sort(function (a, b) {
            return (b.post.likeCount || 0) - (a.post.likeCount || 0);
          });

        container.appendChild(renderReplies(sortedReplies));
      })
      .catch(function (err) {
        var container = document.getElementById("bluesky-comments-list");
        container.innerHTML =
          "<p>Could not load comments. <a href='https://bsky.app/profile/" +
          postUri.split("/")[2] +
          "/post/" +
          postUri.split("/").pop() +
          "'>View on Bluesky</a></p>";
      });
  }

  function renderReplies(replies) {
    var list = document.createElement("ul");
    list.className = "bluesky-replies";

    replies.forEach(function (reply) {
      if (reply.$type !== "app.bsky.feed.defs#threadViewPost") return;

      var post = reply.post;
      var author = post.author;
      var record = post.record;

      var li = document.createElement("li");
      li.className = "bluesky-comment";

      var header = document.createElement("div");
      header.className = "bluesky-comment-header";

      var avatar = document.createElement("img");
      avatar.className = "bluesky-avatar";
      avatar.src = author.avatar || "";
      avatar.alt = "";
      avatar.width = 24;
      avatar.height = 24;

      var authorLink = document.createElement("a");
      authorLink.href = "https://bsky.app/profile/" + author.handle;
      authorLink.className = "bluesky-author external";
      authorLink.textContent = author.displayName || author.handle;

      var handle = document.createElement("span");
      handle.className = "bluesky-handle";
      handle.textContent = " @" + author.handle;

      header.appendChild(avatar);
      header.appendChild(authorLink);
      header.appendChild(handle);

      var body = document.createElement("div");
      body.className = "bluesky-comment-body";
      body.textContent = record.text || "";

      var footer = document.createElement("div");
      footer.className = "bluesky-comment-footer";
      footer.innerHTML =
        (post.likeCount ? "&#9829; " + post.likeCount : "") +
        (post.repostCount ? " &nbsp;&#8634; " + post.repostCount : "") +
        (post.replyCount ? " &nbsp;&#9993; " + post.replyCount : "");

      li.appendChild(header);
      li.appendChild(body);
      li.appendChild(footer);

      if (reply.replies && reply.replies.length > 0) {
        var nested = reply.replies.filter(function (r) {
          return r.$type === "app.bsky.feed.defs#threadViewPost";
        });
        if (nested.length > 0) {
          li.appendChild(renderReplies(nested));
        }
      }

      list.appendChild(li);
    });

    return list;
  }
});
