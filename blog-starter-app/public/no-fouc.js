(function (storageKey) {
  var SYSTEM = "system";
  var DARK = "dark";
  var LIGHT = "light";

  var modifyTransition = function () {
    var css = document.createElement("style");
    css.textContent = "*,*:after,*:before{transition:none !important;}";
    document.head.appendChild(css);
    return function () {
      getComputedStyle(document.body);
      setTimeout(function () {
        document.head.removeChild(css);
      }, 1);
    };
  };

  var media = window.matchMedia("(prefers-color-scheme: dark)");

  window.updateDOM = function () {
    var restoreTransitions = modifyTransition();
    var mode =
      typeof localStorage !== "undefined" && localStorage.getItem(storageKey)
        ? localStorage.getItem(storageKey)
        : SYSTEM;
    var systemMode = media.matches ? DARK : LIGHT;
    var resolvedMode = mode === SYSTEM ? systemMode : mode;
    var classList = document.documentElement.classList;
    if (resolvedMode === DARK) {
      classList.add(DARK);
    } else {
      classList.remove(DARK);
    }
    document.documentElement.setAttribute("data-mode", mode);
    restoreTransitions();
  };

  window.updateDOM();
  media.addEventListener("change", window.updateDOM);
})("nextjs-blog-starter-theme");
