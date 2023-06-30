//----- bekar approach-----------------------------------------------------------

// const list = document.getElementById("list");

// let pageNo = 0;
// async function callAPI() {
//     const res = await fetch(`https://api.instantwebtools.net/v1/passenger?page=${pageNo}&size=50`);
//     const result = await res.json();
//     loadDataOnScreen(result);
// }
// document.addEventListener("DOMContentLoaded", () => {
//     callAPI(pageNo);
// });

// function loadDataOnScreen({ data }) {
//     data.map((pas, i) => {
//         const newDiv = document.createElement("div")
//         newDiv.textContent = pas.name;
//         list.appendChild(newDiv);
//     })
// }

// document.addEventListener("scroll", function () {

//     const scrollHeight = document.documentElement.scrollHeight;
//     if (scrollY + innerHeight == scrollHeight) {
//         pageNo++;
//         callAPI();
//     }
// })

// -----------------goood approach---- some bugs remaining while reverse scroll-------------------------------
const list = document.getElementById("list");

let pageNo = 0;
let fromPageNo = 0;
async function callAPI(pageNo, addObserver = true) {
    const res = await fetch(`https://api.instantwebtools.net/v1/passenger?page=${pageNo}&size=70`);
    const result = await res.json();
    console.log(result);
    if (addObserver)
        loadDataOnScreen(result);
    else loadPrevDataOnScreen(result);
}
document.addEventListener("DOMContentLoaded", () => {
    callAPI(pageNo);
});

const observer = new IntersectionObserver(func, {});
const revObserver = new IntersectionObserver(revFunc, {});

function func(...args) {
    if (args[0][0].isIntersecting) {
        observer.disconnect();
        pageNo++;
        callAPI(pageNo);
        setTimeout(() => {
            if (pageNo > 2) {
                const toremove = [...list.children].slice(0, -150)
                for (let i = 0; i < toremove.length; i++) {
                    list.children?.[i].remove();
                }
                fromPageNo = pageNo - 3;
                revObserver.observe(list.children[0]);
            }
        }, 1000);

    }
}

function revFunc(...args) {
    if (args[0][0].isIntersecting) {
        revObserver.disconnect();
        if (fromPageNo > -1)
            callAPI(fromPageNo, false);
    }
}

function loadDataOnScreen({ data }) {
    data.map((pas, i) => {
        const newDiv = document.createElement("div")
        newDiv.textContent = pas.name;
        if (i === data.length - 1) {
            observer.observe(newDiv);
        }
        list.appendChild(newDiv);
    });
}

function loadPrevDataOnScreen({ data }) {
    for (let i = data.length - 1; i >= 0; i--) {
        const newDiv = document.createElement("div")
        newDiv.textContent = data[i].name;
        if (i === 0) {
            revObserver.observe(newDiv);
        }
        list.insertBefore(newDiv, list.children[0]);
    }
    fromPageNo--;

}

