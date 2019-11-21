// https://raw.githubusercontent.com/uBlock-user/uBO-Scriptlets/master/scriptlets.txt
// https://raw.githubusercontent.com/NanoAdblocker/NanoCore2/master/src/snippets.js
// https://raw.githubusercontent.com/gorhill/uBlock/9367a6015b8cbb6b49347b00a105aab8f24df861/assets/resources/scriptlets.js
// https://github.com/bogachenko/presstheattack/blob/personal/scriptlets.txt

// These are things I've found that I believe to be useful
// Mainly for my personal use but feel free to use it

// https://github.com/gorhill/uBlock/issues/1228
/// window.name-defuser.js
/// alias wnd.js
(function() {
    if ( window === window.top ) {
        window.name = '';
    }
})();

// element-clicker-onload (No Delay)
/// eclick.js
/// alias ec.js
(() => {
    'use strict';
    let selector = '{{1}}';
    if (selector === '' || selector === '{{1}}') {
        return;
}
    let click = () => {
        let element = document.querySelector(selector);
        element.click();
    };
    if (document.readyState === 'complete') {
        click();
    } else {
        addEventListener('DOMContentLoaded', click);
    }
})();

// element-clicker-onload (1 Second Delay)
/// eclick1.js
/// alias ec1.js
(() => {
    'use strict';
    let selector = '{{1}}';
    if (selector === '' || selector === '{{1}}') {
        return;
}
    let click = () => {
        let element = document.querySelector(selector);
        element.click();
    };
    if (document.readyState === 'complete') {
        click();
    } else {
        addEventListener('DOMContentLoaded', setTimeout(click, 1000));
    }
})();

// element-clicker-onload (2 Second Delay)
/// eclick2.js
/// alias ec2.js
(() => {
    'use strict';
    let selector = '{{1}}';
    if (selector === '' || selector === '{{1}}') {
        return;
}
    let click = () => {
        let element = document.querySelector(selector);
        element.click();
    };
    if (document.readyState === 'complete') {
        click();
    } else {
        addEventListener('DOMContentLoaded', setTimeout(click, 2000));
    }
})();

// element-clicker-onload (3 Second Delay)
/// eclick3.js
/// alias ec3.js
(() => {
    'use strict';
    let selector = '{{1}}';
    if (selector === '' || selector === '{{1}}') {
        return;
}
    let click = () => {
        let element = document.querySelector(selector);
        element.click();
    };
    if (document.readyState === 'complete') {
        click();
    } else {
        addEventListener('DOMContentLoaded', setTimeout(click, 3000));
    }
})();

// element-clicker-onload (4 Second Delay)
/// eclick4.js
/// alias ec4.js
(() => {
    'use strict';
    let selector = '{{1}}';
    if (selector === '' || selector === '{{1}}') {
        return;
}
    let click = () => {
        let element = document.querySelector(selector);
        element.click();
    };
    if (document.readyState === 'complete') {
        click();
    } else {
        addEventListener('DOMContentLoaded', setTimeout(click, 4000));
    }
})();

// element-clicker-onload (5 Second Delay)
/// eclick5.js
/// alias ec5.js
(() => {
    'use strict';
    let selector = '{{1}}';
    if (selector === '' || selector === '{{1}}') {
        return;
}
    let click = () => {
        let element = document.querySelector(selector);
        element.click();
    };
    if (document.readyState === 'complete') {
        click();
    } else {
        addEventListener('DOMContentLoaded', setTimeout(click, 5000));
    }
})();

// Testing

// URL-Strip-Tracking-Tokens
/// strip.js
    (() => {
var searchPattern = new RegExp('utm_|fb_|campaign|click_|site_|country_|device_|user_|bv_|adv_|user.|cmpid|_openstat|aff_|beaconFlowId|ip|isp|os|browser|geo|brand|rpcToken|clkredir|originalReferrer|TracingTag|adpk|client_');

var replacePattern = new RegExp(
    '([?&%]' +
    '(utm_(source|medium|term|campaign|content|cid|reader|referrer|name|social|social-type|place|userid|pubreferrer|swu|viz_id|channel)|fb_(actiion_ids|action_types|ref|source)|campaign(_id|_item_id|.id|.name)|click_(id)|site_(id)|country_(code|name)|device_(id|os_name|make)|user_(id)|bv_(adname|clickid|keyword|srcid)|adv_(targets)|user.(browser|country|os)|cmpid|_openstat|aff_(platform|trace_key)|beaconFlowId|ip|isp|os|browser|geo|brand|rpcToken|clkredir|originalReferrer|TracingTag|adpk|client_(id|name))' +
    '=[^&#]*)');
chrome.webRequest.onBeforeRequest.addListener(function(details) {
    var url = details.url;
    var queryStringIndex = url.indexOf('?');
    if (url.search(searchPattern) > queryStringIndex) {
        var stripped = url.replace(replacePattern, '');
        if (stripped.charAt(queryStringIndex) === '&') {
            stripped = stripped.substr(0, queryStringIndex) + '?' +
                stripped.substr(queryStringIndex + 1)
        }
        if (stripped != url) {
            return {
                redirectUrl: stripped
            };
        }
    }
}
    })();
