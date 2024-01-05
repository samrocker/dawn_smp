gsap.to(".container-nav", {
  backgroundColor:"rgba( 0, 0, 0, 0.426)",
  backdropFilter:"blur(5px)",
  duration: 1,
  height: "80px",
  scrollTrigger: {
      trigger: ".container-nav",
      scroller: "body",
      start: "top -15%",
      end: "top -16%",
      scrub: 1,
  }
})

gsap.to(".container-main", {
  backgroundColor: "rgba(0, 0, 0, 0.450)",
  scrollTrigger: {
      trigger: ".container-main",
      scroller: "body",
      start: "top -25%",
      end: "top -70%",
      scrub: 2,

  }
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});