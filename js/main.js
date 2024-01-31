// gsap_scrollTrigger

gsap.registerPlugin(ScrollTrigger);

const titleElements = gsap.utils.toArray('.title');

titleElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 800px',
      end: 'center 20%',
      scrub: true,
    },
  });
});