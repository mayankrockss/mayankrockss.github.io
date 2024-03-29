
// debounce/ throttle plyfill ---------------------------------------

function debounce(fn, time) {
    let timer = 0;
    return function () {
        const that = this;
        const args = arguments;
        if (timer) clearTimeout(timer);
        timer = setTimeout(fn.bind(that, ...args), time);
    };
}

// function throttle(fn, time) {
//     let inProgress = false;
//     return function () {
//         if (inProgress) return;
//         inProgress = true;
//         fn.apply(this, arguments);
//         setTimeout(() => {
//             inProgress = false;
//         }, time);
//     };
// }

//----right throttle with last callback args saving feature
function throttle(func, wait) {
    let inProgress = false;
    let lastCbArgs;
    return throttledNow = (...args) => {
        if (inProgress) { lastCbArgs = args; return };
        inProgress = true;
        func(...args);
        setTimeout(() => {
            inProgress = false
            if (lastCbArgs) {
                throttledNow(...lastCbArgs)
                lastCbArgs = null;
            }
        }, wait)
    }
}

const onclick = (msg) => {
    console.log("button clicked with " + msg);
};

const handelClickWithDebounce = debounce(onclick, 1000);

const handelClickWithThrottle = throttle(onclick, 1000);

//------------loading bar------------------------------------

function initBar() {
    const innerBar = document.querySelector(".inner-bar");

    // // Method-1
    // let percentage = 0;
    // console.time();
    // const int = setInterval(() => {
    //     if (percentage !== 100) {
    //         percentage++;
    //         innerBar.style.width = percentage + "%";
    //     }
    //     else {
    //         clearInterval(int);
    //         console.timeEnd();
    //     }

    // }, 3000 / 100);

    // // Method-2
    const interval = setInterval(() => {
        const width = +innerBar.style.width.split("%")[0]
        if (width < 100)
            innerBar.style.width = width + 17 + "%";
        else {
            console.log("ended")
            clearInterval(interval);
        }
    }, 500);
}

//-------stars without avg, in initeger selection and event delegation---------------------------------
let targetId;
function handleRating(e) {
    if (e.target.matches("Span")) {
        targetId = +e.target.id;
        for (i = 1; i <= 5; i++) {
            const target = document.getElementById(i);
            if (i <= targetId) {
                target.innerHTML = "&#9733";
                target.style.color = "yellow"
            }
            else {
                target.innerHTML = "&#9734;";
                target.style.color = "black"
            }
        }
        alert(targetId)
    }
}

