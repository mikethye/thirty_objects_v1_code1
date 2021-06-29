
gsap.set('.roundlogo', {xPercent:-25});

var rotate = gsap.timeline({
  scrollTrigger:{
    trigger: "#wrap",
    pin: true,
    scrub:0.2,
    start: 'top top',
    end:'+=10000',
  }
})
.to('.roundlogo', {
  rotation:360*5,
  duration:10, ease:'none',
})