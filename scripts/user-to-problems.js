// ==UserScript==
// @name         userpage to problems
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  AtCoderのuserページでAtCoder Problemsのuserページへのリンクを貼ります。
// @author       soraie
// @match        https://atcoder.jp/users/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    $("li").eq(19).after(`<li><a href=https://kenkoooo.com/atcoder/#/user/${location.href.split("/")[4]} target="_blank"><img src="https://kenkoooo.com/atcoder/favicon.ico" id="user-script-icon"> AtCoder Problems</a></li>`);
    $("#user-script-icon").css("width","15px").css("height","15px").css("filter","hue-rotate(120deg)");
})();