// JavaScript Document

var JwSpecialEntrance = (function (mod){
  var closedBannerClassName = 'close-special-entrance';

  // 关闭banner入口
  var doClose = function(animation) {
    animation = animation || false
    if (animation) {
      document.body.classList.add(closedBannerClassName + '--animation');
      setTimeout(function() {
        document.body.classList.add(closedBannerClassName);
      }, 200);
    } else {
      document.body.classList.add(closedBannerClassName);
    }
  }

  // 关闭banner
  mod.closeBanner = function () {
    doClose(true);
    return false;
  }

  return mod;
})(window.JwSpecialEntrance || {});