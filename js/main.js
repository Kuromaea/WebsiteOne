gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray('.title');

textElements.forEach(text => {
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