var remain = 5;
var timer = setInterval(function() {
  remain = remain - 1;
  if(remain < 0) {
    $.post('/pomodoro', { done: "hogehoge" });
    clearInterval(timer);
    return;
  }
  document.getElementById('timer').innerHTML = remain;
}, 1000);
