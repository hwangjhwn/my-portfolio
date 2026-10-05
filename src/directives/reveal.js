// 아래에서 들어오는 콘텐츠를 한 번만 표시합니다. 관찰을 지원하지 않으면 그대로 보입니다.
const states = new WeakMap();

const reveal = {
  mounted(element) {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || !('IntersectionObserver' in window)) return;
    if (element.getBoundingClientRect().top < window.innerHeight - 40) return;

    let observer;
    const show = () => {
      element.classList.add('is-revealed');
      observer?.disconnect();
    };
    const onMotionChange = event => { if (event.matches) show(); };
    observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) show();
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

    element.classList.add('scrollReveal');
    element.addEventListener('focusin', show);
    motion.addEventListener('change', onMotionChange);
    observer.observe(element);
    states.set(element, { observer, motion, onMotionChange, show });
  },
  unmounted(element) {
    const state = states.get(element);
    if (!state) return;
    state.observer.disconnect();
    state.motion.removeEventListener('change', state.onMotionChange);
    element.removeEventListener('focusin', state.show);
    states.delete(element);
  },
};

export default reveal;
