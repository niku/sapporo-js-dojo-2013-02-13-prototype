$(function() {
  var timer;
  var task;
  var remain = 5;
  $('#start-button').click(function() {
    task = $('#task').val();
    timer = setInterval(function() {
      remain = remain - 1;
      if(remain < 0) {
        $.post('/pomodoro', { done: task }, function (data) {
          $('#doneList').text(data.done.join(','));
        });
        clearInterval(timer);
        remain = 5; // reset remain
        return;
      }
      document.getElementById('timer').innerHTML = remain;
    }, 1000);
  });

  $('#cancel-button').click(function() {
    if(timer) {
      clearInterval(timer);
      remain = 5; // reset remain
      $.post('/pomodoro', { cancel: task }, function (data) {
        $('#cancelList').text(data.cancel.join(','));
      });
    }
  });
});
