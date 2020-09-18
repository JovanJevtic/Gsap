const tl = gsap.timeline({ defaults: { ease: "power1.out" }})
const tl2 = gsap.timeline({ defaults: { ease: "power3.out" }})

tl.from('#heading', { y: 50, opacity: 0 , duration: 1, delay: 4.2 })
tl.from('.subheading', { y: 20, opacity: 0 , duration: 1 }, '-=.4')
tl.from('.landing-cta', { x: -50, opacity: 0, duration: 0.5 },  '-=.35' )    

tl2.to(".text", { y: "0%", duration: 1, stagger: 0.35 });
tl2.to(".opening-scene", { scale: 1.4, duration: 1 });
tl2.to(".opening-scene", { y: '100%', opacity: 0 , duration: .7 });
tl2.to('.cover-bar', { y: '-100%', duration: 1, stagger: 0.25, delay: 0.4 })