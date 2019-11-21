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
