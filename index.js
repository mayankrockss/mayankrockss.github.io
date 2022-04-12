
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

function throttle(fn, time) {
    let inProgress = false;
    return function () {
        if (inProgress) return;
        inProgress = true;
        fn.apply(this, arguments);
        setTimeout(() => {
            inProgress = false;
        }, time);
    };
}

const onclick = (msg) => {
    console.log("button clicked with " + msg);
};

const handelClickWithDebounce = debounce(onclick, 1000);

const handelClickWithThrottle = throttle(onclick, 1000);


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
    innerBar.style.transition = "width linear 1000ms";
    innerBar.style.width = "100%";
}

//-------stars without avg, in initeger selection and event delegation---------------------------------
let targetId;
function handleRating(e) {
    if (e.target.tagName === "SPAN") {
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