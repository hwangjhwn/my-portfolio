// textarea 자동 높이 조절
const resizeArea = ($event) => {
    $event.target.style.overflow = "hidden";
    $event.target.style.height = "1px";
    $event.target.style.height = $event.target.scrollHeight + "px";
}

export { resizeArea };
