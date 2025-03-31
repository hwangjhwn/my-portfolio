// 스타일 적용
function setStyle(el, binding, isInit = false) {
  if(!el.style) return; // el.style의 undefined 예외처리

  if (isInit) { // 초기화
    el.style.opacity = 0;
    const time = binding.value?.time ?? 0.8;
    el.style.transition += `opacity ${time}s`;
  } else {
    el.style.opacity = 1;
  }
}

function init(el, binding) {
  if (binding.modifiers.child) {  // 자식 요소에 차례로
    const childrenEl = el.childNodes;
    for (let i = 0; i < childrenEl.length; i++) {
      setStyle(childrenEl[i], binding, true);
    }
  } else {  // 해당 요소에 직접
    setStyle(el, binding, true);
  }
}

// v-fade
// v-fade:keep.child="{ time: 0.7, delay: 0 }"
const fade = {
  beforeMount(el, binding) {  // 초기화
    init(el, binding);
  },
  mounted(el, binding) {
    function motion() { // 모션
      if (binding.modifiers.child) {  // 자식 요소에 차례로
        const childrenEl = el.childNodes;
        for (let i = 0; i < childrenEl.length; i++) {
          setTimeout(() => {
            setStyle(childrenEl[i], binding);
          }, i * (binding.value?.delay ?? 200));
        }
      } else {  // 해당 요소에 직접
        setTimeout(() => {
          setStyle(el, binding);
        }, binding.value?.delay ?? 0);
      }
    }

    function createObserver() {
      // InsertionObserver 생성
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) { // 대상이 교차영역에 진입 할 경우
              motion();
              if (binding.arg != "keep") {
                observer.unobserve(el); // keep 아니면 감시할 필요 x
              }
            } else {  // 대상이 교차영역에서 나간 경우
              if (binding.arg == "keep") {
                init(el, binding);
              }
            }
          });
        },
        { // 감지영역 조정
          rootMargin: binding.value?.rootMargin ?? "0% 0px -8%",
          threshold: binding.value?.threshold ?? 0,
        }
      );

      observer.observe(el);
    }

    // 지원하지 않는 브라우저는 바로 모션을 시켜도록 호환성 체크
    window["IntersectionObserver"] ? createObserver() : motion();
  },
};

export default fade;
