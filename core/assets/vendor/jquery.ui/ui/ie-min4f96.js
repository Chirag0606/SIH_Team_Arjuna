
!function (a) { "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery) }(function (a) { return a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()) });