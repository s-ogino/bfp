var ZENTSUJI = ZENTSUJI || {};

(function(global) {
  var Slider = function(selector) {
    this.translate = 0;
    this.selector = $(selector);
  }

  var $sliderItem = $('.slider-item');
  var sliderItemLength = $sliderItem.length;

  Slider.prototype.prev = function() {
    if (this.translate <= 0) return;

    this.translate -= 100 / sliderItemLength;
    this.selector.css('transform', 'translate(-'+this.translate+'%, 0)');
    this.indicator();
  }

  Slider.prototype.next = function() {
    if (this.translate >= 100 - (100 / sliderItemLength)) return;

    this.translate += 100 / sliderItemLength;
    this.selector.css('transform', 'translate(-'+this.translate+'%, 0)');
    this.indicator();
  }

  Slider.prototype.indicator = function() {
    $('.indicator').css('width', this.translate+'%');
  }

  global.Slider = Slider;
})(ZENTSUJI);
