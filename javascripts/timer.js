$(function() {
  var remain = 5;
  $('#start-button').click(function() {
  var timer = setInterval(function() {
    remain = remain - 1;
    if(remain < 0) {
      $.post('/pomodoro', { done: "hogehoge" }, function (data) {
        $('#doneList').text(data.join(','));
      });
      clearInterval(timer);
      return;
    }
    document.getElementById('timer').innerHTML = remain;
  }, 1000);
  });
});
