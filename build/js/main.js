(function() {
  document.addEventListener("DOMContentLoaded", function(event) {
    var removeDashForwardClass, removeDashReverseClass, startAnimations, wave1, wave2, wave3;
    wave1 = document.getElementById("wave1");
    wave2 = document.getElementById("wave2");
    wave3 = document.getElementById("wave3");
    startAnimations = function() {
      return setTimeout(function() {
        return document.body.classList.remove("loading", 800);
      });
    };
    removeDashReverseClass = function(event) {
      event.target.classList = [];
      return event.target.classList.add("dash-offset-zero");
    };
    removeDashForwardClass = function(event) {
      event.target.classList = [];
      return event.target.classList.add("dash-offset-zero");
    };
    // add loading class to body
    document.body.classList.add("loading");
    // add animation class to each wave
    wave1.classList.add("wave-animation-dashreverse");
    wave2.classList.add("wave-animation-dashforward");
    wave3.classList.add("wave-animation-dashreverse");
    // detect when load is done and start animations
    window.addEventListener("load", startAnimations);
    // step 2: remove animation class from each wave when animation is done
    wave1.addEventListener("webkitAnimationEnd", removeDashReverseClass);
    wave1.addEventListener("mozAnimationEnd", removeDashReverseClass);
    wave1.addEventListener("animationend", removeDashReverseClass);
    wave2.addEventListener("webkitAnimationEnd", removeDashForwardClass);
    wave2.addEventListener("mozAnimationEnd", removeDashForwardClass);
    wave2.addEventListener("animationend", removeDashForwardClass);
    wave3.addEventListener("webkitAnimationEnd", removeDashReverseClass);
    wave3.addEventListener("mozAnimationEnd", removeDashReverseClass);
    wave3.addEventListener("animationend", removeDashReverseClass);
    // step 3: on hover, add back animation class to each wave
    wave1.addEventListener("mouseover", function() {
      wave1.classList = [];
      return wave1.classList.add("wave-animation-dashreverse");
    });
    wave2.addEventListener("mouseover", function() {
      wave2.classList = [];
      return wave2.classList.add("wave-animation-dashforward");
    });
    return wave3.addEventListener("mouseover", function() {
      wave3.classList = [];
      return wave3.classList.add("wave-animation-dashreverse");
    });
  });

}).call(this);
