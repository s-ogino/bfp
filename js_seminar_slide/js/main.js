// var timeVal = $('.select-time').val();
var timeVal = 10; // min

calcSliderWidth();

var Timer = new ZENTSUJI.Timer;
var Slider = new ZENTSUJI.Slider('.slider');
Slider.indicator();

$('#timer-btn').click(function(){
  finishTime = Timer.getFinishTime(parseInt(timeVal));

  Timer.countDown(finishTime);
});

document.onkeydown = function (e){

  if(e.keyCode == 13){ //「 Enter 」
    finishTime = Timer.getFinishTime(parseInt(timeVal));
    Timer.countDown(finishTime);
  }
  else if(e.keyCode == 37) Slider.prev(); //「 ← 」
  else if(e.keyCode == 39) Slider.next(); //「 → 」

};

function calcSliderWidth() {
  var $slider = $('.slider');
  var $sliderItem = $('.slider-item');
  var sliderItemLength = $sliderItem.length;
  $slider.css('width', 'calc(100% * '+sliderItemLength+')');
  $sliderItem.css('width', 'calc(100% / '+sliderItemLength+')');
}
