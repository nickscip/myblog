(function () {
	"use strict";

	const TRIANGLES = [
		{
			id: "bermuda",
			name: "Bermuda Triangle",
			color: "#38bdf8",
			description:
				"A loosely defined region of the western North Atlantic where ships and aircraft are folklorically said to vanish under mysterious circumstances.",
			corners: [
				[25.7617, -80.1918],
				[32.2949, -64.7834],
				[18.4655, -66.1057]
			]
		},
		{
			id: "historic",
			name: "Historic Triangle",
			color: "#fbbf24",
			description:
				"Three Virginia colonial sites — Jamestown, Williamsburg, and Yorktown — linked by the Colonial Parkway and a shared early-American story.",
			corners: [
				[37.2707, -76.7075],
				[37.2098, -76.7775],
				[37.2387, -76.5097]
			]
		},
		{
			id: "lithium",
			name: "Lithium Triangle",
			color: "#a3e635",
			description:
				"Three Andean salt flats holding more than half of the world's known lithium reserves, central to the global EV battery supply chain.",
			corners: [
				[-20.1338, -67.4891],
				[-23.5, -68.25],
				[-25.45, -67.0667]
			]
		},
		{
			id: "parliamentary",
			name: "Parliamentary Triangle, Canberra",
			color: "#a78bfa",
			description:
				"The ceremonial heart of Australia's capital, designed by Walter Burley Griffin, with vertices at Capital Hill, City Hill, and Russell Hill.",
			corners: [
				[-35.3081, 149.1244],
				[-35.2783, 149.1294],
				[-35.2939, 149.1499]
			]
		},
		{
			id: "research",
			name: "Research Triangle",
			color: "#fb7185",
			description:
				"Anchored by Duke, NC State, and UNC-Chapel Hill, the Raleigh–Durham–Chapel Hill region became a U.S. hub for biotech and tech research.",
			corners: [
				[35.7796, -78.6382],
				[35.994, -78.8986],
				[35.9132, -79.0558]
			]
		},
		{
			id: "sunni",
			name: "Sunni Triangle",
			color: "#059669",
			description:
				"A densely populated region northwest of Baghdad — anchored by Baghdad, Ramadi, and Tikrit — that saw heavy fighting during the Iraq War.",
			corners: [
				[33.3152, 44.3661],
				[33.4209, 43.3037],
				[34.5984, 43.6772]
			]
		},
		{
			id: "trade",
			name: "Triangular Trade",
			color: "#e879f9",
			description:
				"The 16th–19th-century Atlantic trade circuit: manufactured goods from Europe to West Africa, enslaved Africans to the Americas, and raw goods back to Europe.",
			corners: [
				[53.4084, -2.9916],
				[5.0848, -1.35],
				[17.9714, -76.7931]
			]
		},
		{
			id: "rhubarb",
			name: "Rhubarb Triangle",
			color: "#2dd4bf",
			description:
				"A nine-square-mile patch of West Yorkshire between Wakefield, Morley, and Rothwell that produces most of Britain's forced rhubarb.",
			corners: [
				[53.6833, -1.4977],
				[53.7461, -1.6011],
				[53.7449, -1.4774]
			]
		},
		{
			id: "bass-strait",
			name: "Bass Strait Triangle",
			color: "#f97316",
			description:
				"A stretch of water between Tasmania and mainland Australia where ships and aircraft have reportedly vanished, including the 1978 Bass Strait UFO incident.",
			corners: [
				[-39.05, 146.4],
				[-39.9333, 143.85],
				[-38.8556, 143.5167]
			]
		},
		{
			id: "bennington",
			name: "Bennington Triangle",
			color: "#6366f1",
			description:
				"A patch of southwestern Vermont around Glastenbury Mountain where five people vanished between 1945 and 1950, never to be found.",
			corners: [
				[42.8781, -73.1968],
				[42.9764, -73.0322],
				[42.9722, -72.9647]
			]
		},
		{
			id: "bridgewater",
			name: "Bridgewater Triangle",
			color: "#8b5cf6",
			description:
				"A 200-square-mile region of southeastern Massachusetts around the Hockomock Swamp, long tied to UFO sightings, cryptid encounters, and unexplained phenomena.",
			corners: [
				[42.1051, -70.9453],
				[41.8451, -71.2545],
				[41.7595, -71.0414]
			]
		},
		{
			id: "broad-haven",
			name: "Broad Haven Triangle",
			color: "#0ea5e9",
			description:
				"Pembrokeshire site of the 1977 \"Welsh Triangle\" UFO flap, including school-yard sightings of a silver-suited figure and a glowing craft.",
			corners: [
				[51.7779, -5.1146],
				[51.7672, -5.1097],
				[51.7642, -5.1864]
			]
		},
		{
			id: "devil-sea",
			name: "Devil's Sea",
			color: "#dc2626",
			description:
				"A Pacific zone around the Izu Islands south of Japan that fishermen historically deemed dangerous and that folklore later linked to vanished vessels.",
			corners: [
				[34.0794, 139.5294],
				[32.4581, 139.7642],
				[33.0858, 139.7886]
			]
		},
		{
			id: "dragon",
			name: "Dragon's Triangle",
			color: "#f59e0b",
			description:
				"A larger Pacific zone — sometimes drawn from Tokyo to Iwo Jima to Yap — popularized by Charles Berlitz as a Bermuda-Triangle counterpart on the opposite side of the world.",
			corners: [
				[35.6762, 139.6503],
				[24.7833, 141.3167],
				[9.5167, 138.1167]
			]
		},
		{
			id: "falkirk",
			name: "Falkirk Triangle",
			color: "#ec4899",
			description:
				"A central Scotland zone — Bonnybridge, Falkirk, and Dechmont — that reports more UFO sightings per capita than almost anywhere else in the UK.",
			corners: [
				[56.0167, -3.8917],
				[56.0011, -3.7833],
				[55.9111, -3.6178]
			]
		},
		{
			id: "nevada",
			name: "Nevada Triangle",
			color: "#facc15",
			description:
				"A vast region between Las Vegas, Fresno, and Reno where, by some counts, more than 2,000 aircraft have disappeared since the 1960s, often blamed on the Sierra Nevada's harsh terrain and weather.",
			corners: [
				[36.1699, -115.1398],
				[36.7378, -119.7871],
				[39.5296, -119.8138]
			]
		}
	];

	function buildFeatureCollection() {
		return {
			type: "FeatureCollection",
			features: TRIANGLES.map((t) => ({
				type: "Feature",
				id: t.id,
				properties: {
					id: t.id,
					name: t.name,
					description: t.description,
					color: t.color
				},
				geometry: {
					type: "Polygon",
					coordinates: [
						[
							[t.corners[0][1], t.corners[0][0]],
							[t.corners[1][1], t.corners[1][0]],
							[t.corners[2][1], t.corners[2][0]],
							[t.corners[0][1], t.corners[0][0]]
						]
					]
				}
			}))
		};
	}

	function init() {
		const container = document.getElementById("triangles-globe");
		const list = document.getElementById("triangles-list");
		if (!container || !list) return;
		if (typeof mapboxgl === "undefined") {
			container.innerHTML =
				'<p class="triangles-noscript">Map library failed to load.</p>';
			return;
		}
		if (!window.MAPBOX_TOKEN || /YOUR_TOKEN/.test(window.MAPBOX_TOKEN)) {
			container.innerHTML =
				'<p class="triangles-noscript">Missing Mapbox token. Copy <code>static/mapbox-token.example.js</code> to <code>static/mapbox-token.js</code> and paste your token.</p>';
			return;
		}

		mapboxgl.accessToken = window.MAPBOX_TOKEN;

		const map = new mapboxgl.Map({
			container: "triangles-globe",
			style: "mapbox://styles/mapbox/satellite-streets-v12",
			projection: "globe",
			zoom: 1.4,
			center: [0, 20],
			attributionControl: true
		});

		map.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), "top-right");

		// If Mapbox rejects auth or we exceed quota, the page should fail
		// gracefully instead of dumping repeated console errors. Triggers on
		// 401 (bad token), 403 (URL restriction / disabled / quota), or 429
		// (rate limit).
		let mapDisabled = false;
		function disableMap(reason) {
			if (mapDisabled) return;
			mapDisabled = true;
			try {
				map.remove();
			} catch (_) {}
			container.innerHTML = `
				<div class="triangles-error" role="alert">
					<strong>The interactive globe is unavailable right now.</strong>
					<p>${reason}</p>
					<p class="triangles-error-detail">The triangle list on the left is still good for reference.</p>
				</div>
			`;
		}
		map.on("error", (e) => {
			const err = e && e.error;
			if (!err) return;
			const status = err.status || (err.message && err.message.match(/\b(401|403|429)\b/));
			const msg = ((err.message || "") + "").toLowerCase();
			if (
				status === 401 ||
				/401|unauthor/.test(msg)
			) {
				disableMap(
					"The map service rejected the access token. (HTTP 401)"
				);
			} else if (
				status === 403 ||
				/403|forbidden/.test(msg)
			) {
				disableMap(
					"The map service blocked this request — possibly because the domain isn't on the token's allowlist or the monthly quota was reached. (HTTP 403)"
				);
			} else if (
				status === 429 ||
				/429|rate.*limit/.test(msg)
			) {
				disableMap(
					"The map service hit a rate limit. Try again in a minute. (HTTP 429)"
				);
			}
		});

		const tooltip = document.createElement("div");
		tooltip.className = "triangle-tip triangle-tip-floating";
		tooltip.style.display = "none";
		container.appendChild(tooltip);

		function moveTooltip(event) {
			const rect = container.getBoundingClientRect();
			const x = event.clientX - rect.left;
			const y = event.clientY - rect.top;
			tooltip.style.left =
				Math.min(rect.width - tooltip.offsetWidth - 8, x + 14) + "px";
			tooltip.style.top =
				Math.min(rect.height - tooltip.offsetHeight - 8, y + 14) + "px";
		}

		function showTooltip(name, description, event) {
			tooltip.innerHTML = `<strong>${name}</strong><div>${description}</div>`;
			tooltip.style.display = "block";
			moveTooltip(event);
		}

		function hideTooltip() {
			tooltip.style.display = "none";
		}

		let hoveredId = null;
		let userInteracting = false;

		function setHover(id) {
			if (hoveredId !== null && hoveredId !== id) {
				map.setFeatureState(
					{ source: "triangles", id: hoveredId },
					{ hover: false }
				);
			}
			hoveredId = id;
			if (id !== null) {
				map.setFeatureState(
					{ source: "triangles", id },
					{ hover: true }
				);
			}
			updateActive(id);
		}

		function updateActive(id) {
			list.querySelectorAll("li").forEach((li) => {
				li.classList.toggle("active", li.dataset.id === id);
			});
		}

		function flyToFeature(t) {
			const coords = [
				[t.corners[0][1], t.corners[0][0]],
				[t.corners[1][1], t.corners[1][0]],
				[t.corners[2][1], t.corners[2][0]]
			];
			const bounds = coords.reduce(
				(b, c) => b.extend(c),
				new mapboxgl.LngLatBounds(coords[0], coords[0])
			);
			userInteracting = true;
			map.fitBounds(bounds, {
				padding: 80,
				duration: 1400,
				maxZoom: 14
			});
			map.once("moveend", () => {
				userInteracting = false;
			});
		}

		function setupTriangleLayers() {
			map.addSource("triangles", {
				type: "geojson",
				data: buildFeatureCollection(),
				promoteId: "id"
			});

			map.addLayer({
				id: "triangles-fill",
				type: "fill",
				source: "triangles",
				paint: {
					"fill-color": ["get", "color"],
					"fill-opacity": [
						"case",
						["boolean", ["feature-state", "hover"], false],
						0.55,
						0.3
					]
				}
			});

			map.addLayer({
				id: "triangles-line",
				type: "line",
				source: "triangles",
				paint: {
					"line-color": ["get", "color"],
					"line-width": [
						"case",
						["boolean", ["feature-state", "hover"], false],
						3,
						1.5
					],
					"line-opacity": 0.95
				}
			});

			map.on("mousemove", "triangles-fill", (e) => {
				if (!e.features.length) return;
				const f = e.features[0];
				if (f.id !== hoveredId) setHover(f.id);
				showTooltip(
					f.properties.name,
					f.properties.description,
					e.originalEvent
				);
				map.getCanvas().style.cursor = "pointer";
			});

			map.on("mouseleave", "triangles-fill", () => {
				setHover(null);
				hideTooltip();
				map.getCanvas().style.cursor = "";
			});

			map.on("click", "triangles-fill", (e) => {
				if (!e.features.length) return;
				const id = e.features[0].id;
				const t = TRIANGLES.find((x) => x.id === id);
				if (t) flyToFeature(t);
			});
		}

		map.on("load", () => {
			map.setFog({
				color: "rgb(186, 210, 235)",
				"high-color": "rgb(36, 92, 223)",
				"horizon-blend": 0.02,
				"space-color": "rgb(11, 11, 25)",
				"star-intensity": 0.6
			});
			setupTriangleLayers();
		});

		// Auto-spin while idle, just like Mapbox's globe demo. Disabled when
		// the user is interacting and at high zoom.
		const SPIN_SECS_PER_REV = 240; // slow rotation
		map.on("mousedown", () => (userInteracting = true));
		map.on("dragstart", () => (userInteracting = true));
		map.on("touchstart", () => (userInteracting = true));
		map.on("moveend", spinIfIdle);

		function spinIfIdle() {
			if (userInteracting) return;
			const zoom = map.getZoom();
			if (zoom > 4) return;
			const distancePerSecond = 360 / SPIN_SECS_PER_REV;
			const center = map.getCenter();
			center.lng -= distancePerSecond;
			map.easeTo({
				center,
				duration: 1000,
				easing: (n) => n
			});
		}

		map.once("idle", spinIfIdle);

		// Sidebar.
		TRIANGLES.forEach((t) => {
			const li = document.createElement("li");
			li.dataset.id = t.id;
			li.setAttribute("role", "option");
			li.tabIndex = 0;
			li.innerHTML = `
				<button type="button" class="triangle-row">
					<span class="triangle-swatch" style="background:${t.color}" aria-hidden="true"></span>
					<span class="triangle-meta">
						<span class="triangle-name">${t.name}</span>
						<span class="triangle-desc">${t.description}</span>
					</span>
				</button>
			`;
			const btn = li.querySelector("button");
			btn.addEventListener("click", () => {
				if (mapDisabled) return;
				flyToFeature(t);
				setHover(t.id);
			});
			btn.addEventListener("mouseenter", () => {
				if (mapDisabled) return;
				if (map.getSource("triangles")) setHover(t.id);
			});
			btn.addEventListener("mouseleave", () => {
				if (mapDisabled) return;
				if (map.getSource("triangles")) setHover(null);
			});
			list.appendChild(li);
		});
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
})();
