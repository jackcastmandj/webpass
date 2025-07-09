document.addEventListener('keydown', function (e) {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
      (e.ctrlKey && e.key === 'U')
    ) {
      e.preventDefault();
      e.stopPropagation();
      // alert("🚫 ฮั่นแน่ ~~~ จะทำอะไรวัยรุ่น");
      return false;
    }
  });

  // ป้องกันคลิกขวา
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    // alert("🚫 ฮั่นแน่ ~~~ คลิกขวาจะทำอะไร วัยรุ่น");
    return false;
  });