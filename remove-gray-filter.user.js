// ==UserScript==
// @name        去除灰色滤镜
// @namespace   https://blog.rexhang.com
// @version     0.1
// @license     Apache 2.0
// @author      Rex Hang
// @description 去除 Bilibili、AcFun、知乎、简书、百度贴吧、京东等网站的哀悼灰色滤镜。
// @match       *://*.zhihu.com/*
// @match       *://*.jianshu.com/*
// @match       *://*.bilibili.com/*
// @match       *://*.acfun.cn/*
// @match       *://*.baidu.com/*
// @match       *://*.jd.com/*
// @grant       GM_addStyle
// ==/UserScript==


// https://stackoverflow.com/a/46516659/7659948
// reasele
GM_addStyle ( `
    html {
        filter:grayscale(0) !important;
        -webkit-filter:grayscale(0) !important;
    }
    body.big-event-gray #aging-tools-pc div[class^=item-wrap], body.big-event-gray #bottom_layer, body.big-event-gray #bottom_layer .tip-hover-panel, body.big-event-gray #form, body.big-event-gray #passport-login-pop, body.big-event-gray #s-hotsearch-wrapper, body.big-event-gray #s_content_1, body.big-event-gray #s_content_100, body.big-event-gray #s_menu_gurd, body.big-event-gray #s_side_wrapper, body.big-event-gray #u1, body.big-event-gray .advert-shrink, body.big-event-gray .bdlayer, body.big-event-gray .popup-advert, body.big-event-gray .s-ctner-menus .s-menu-item-underline, body.big-event-gray .s-menu-container, body.big-event-gray .s-news-rank-wrapper, body.big-event-gray .s-skin-container.skin-gray-event, body.big-event-gray .s-top-left-new.s-isindex-wrap, body.big-event-gray .under-searchbox-tips, body.big-event-gray>div[class^=cards_pop] {
        filter:grayscale(0) !important;
        -webkit-filter:grayscale(0) !important;
    }
` );
