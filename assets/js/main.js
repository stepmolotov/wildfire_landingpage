document.addEventListener(
	"DOMContentLoaded",
	function () {
		new SweetScroll({});
		particlesJS("particles-js", {
			particles: {
				number: { value: 120, density: { enable: !0, value_area: 800 } },
				color: { value: "#fe8276" },
				shape: {
					type: "polygon",
					stroke: { width: 0, color: "#000000" },
					polygon: { nb_sides: 5 },
					image: { src: "img/github.svg", width: 100, height: 100 }
				},
				opacity: {
					value: 0.5,
					random: true,
					anim: { enable: false, speed: 1, opacity_min: 0.1, sync: !1 }
				},
				size: {
					value: 6,
					random: true,
					anim: {
						enable: !1,
						speed: 19.18081918081918,
						size_min: 0.1,
						sync: !1
					}
				},
				line_linked: {
					enable: false,
					distance: 150,
					color: "#ffffff",
					opacity: 0.4,
					width: 1
				},
				move: {
					enable: !0,
					speed: 4,
					direction: "top",
					random: true,
					straight: false,
					out_mode: "out",
					bounce: !1,
					attract: { enable: !1, rotateX: 600, rotateY: 1200 }
				},
				nb: 80
			},
			interactivity: {
				detect_on: "canvas",
				events: {
					onhover: { enable: true, mode: "bubble" },
					onclick: { enable: false, mode: "push" },
					resize: !0
				},
				modes: {
					grab: { distance: 400, line_linked: { opacity: 1 } },
					bubble: {
						distance: 400,
						size: 4,
						duration: 2,
						opacity: 1,
						speed: 3
					},
					repulse: { distance: 200, duration: 0.4 },
					push: { particles_nb: 4 },
					remove: { particles_nb: 2 }
				}
			},
			retina_detect: !0
		});
	},
	!1
);
