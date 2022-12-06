// ==UserScript==
// @name        去除灰色滤镜 - By RexHang
// @namespace   https://github.com/rexhang/remove-gray-filter
// @version     1.0.4
// @license     Apache 2.0
// @author      RexHang
// @description 去除 Bilibili、AcFun、知乎、简书、百度贴吧、京东等网站的哀悼灰色滤镜。
// @match       *://*.zhihu.com/*
// @match       *://*.jianshu.com/*
// @match       *://*.bilibili.com/*
// @match       *://*.acfun.cn/*
// @match       *://*.baidu.com/*
// @match       *://*.jd.com/*
// @match       *://*.163.com/*
// @grant       GM_addStyle
// ==/UserScript==


// https://stackoverflow.com/a/46516659/7659948
// release https://github.com/rexhang/remove-gray-filter/blob/main/remove-gray-filter.user.js
GM_addStyle ( `
    html {
        filter:grayscale(0) !important;
        -webkit-filter:grayscale(0) !important;
    }
` );

(function(){
    const isBaidu = location.host.indexOf('baidu.com') >= 0;
    if (!isBaidu) return;
    const grayDom = document.getElementsByClassName('big-event-gray')[0];
    grayDom.classList.remove('big-event-gray')
})();
