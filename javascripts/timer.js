var remain = 25;
var timer = setInterval(function() {
  remain = remain - 1;
  if(remain < 0) {
    clearInterval(timer);
    return;
  }
  document.getElementById('timer').innerHTML = remain;
}, 1000);
