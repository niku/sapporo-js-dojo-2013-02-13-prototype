$(function() {
  var remain = 5;
  $('#start-button').click(function() {
    var task = $('#task').val();
    var timer = setInterval(function() {
      remain = remain - 1;
      if(remain < 0) {
        $.post('/pomodoro', { done: task }, function (data) {
          $('#doneList').text(data.join(','));
        });
        clearInterval(timer);
        remain = 5; // reset remain
        return;
      }
      document.getElementById('timer').innerHTML = remain;
    }, 1000);
  });
});
