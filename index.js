const tl = gsap.timeline({ defaults: { ease: "power1.out" }})
const tl2 = gsap.timeline({ defaults: { ease: "power4.out" }})

tl.from('#heading', { y: 50, opacity: 0 , duration: 1, delay: 1 })
tl.from('.subheading', { y: 20, opacity: 0 , duration: 1 }, '-=.4')
tl.from('.landing-cta', { x: -50, opacity: 0, duration: 0.5 },  '-=.35' )    

tl2.to('.cover-bar', { y: '-100%', duration: 1, stagger: 0.25, delay: 0.4 })