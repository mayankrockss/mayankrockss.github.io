const innerBar = document.querySelector(".progressInner");

const interval = setInterval(() => {
    const width = +innerBar.style.width.split("%")[0]
    if (width < 100)
        innerBar.style.width = width + 17 + "%";
    else {
        console.log("ended")
        clearInterval(interval);
    }

}, 500);

const innerStar = document.querySelector(".innerStar");

function findCor(e) {
    const width = e.target.scrollWidth;
    innerStar.style.width = Math.floor((((e.layerX) / width) * 100)) + '%';
}

const a = {}
Object.defineProperty(a, 'name', { get: function () { return "mak" } });
console.log(a);

const obj = {
    div:  
}
