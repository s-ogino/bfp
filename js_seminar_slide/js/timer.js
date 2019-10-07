var ZENTSUJI = ZENTSUJI || {};

(function(global) {
  var Timer = function() {}

  Timer.prototype.getFinishTime = function(val) {
    var date = new Date();
    var changeMsec = val * 60 * 1000;
    return date.setTime(date.getTime() + changeMsec);

  }

  Timer.prototype.countDown = function(finishTime) {
    var $timerText = $("#timer-text");
    var that = this;

    var startTime = new Date(),
        endTime = new Date(finishTime);

    var diff = endTime - startTime;
    var hour = Math.floor(diff / (60 * 60 * 1000)),
        min = Math.floor(diff / (60 * 1000)) % 60,
        sec = Math.floor(diff / 1000) % 60;

    if (hour < 10) hour = "0" + hour;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    if(diff > 0){
        $timerText.text(hour+':'+min+':'+sec);
        setTimeout(function() {
          that.countDown(finishTime);
        }, 1000)
    } else $timerText.text('終了しました！');
  }

  global.Timer = Timer;
})(ZENTSUJI);
