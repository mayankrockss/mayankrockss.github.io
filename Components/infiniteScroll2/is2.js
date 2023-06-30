// console.log("loadeed")
// const container = document.querySelector('.cont');

// const fetchData = async () => {
//     const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
//     loadDatatoHTML(data);
// }
// const loadDatatoHTML = (data) => {
//     data.map(item => {
//         const div = document.createElement('div');
//         div.textContent = item.id + " " + item.title;
//         container.append(div);
//     })
// }

// document.addEventListener("DOMContentLoaded", () => {
//     fetchData();
// })

// document.addEventListener("scroll", (e) => {
//     if (scrollY + innerHeight == document.documentElement.scrollHeight) {
//         fetchData();
//     }
// })
// -----------------------------------------------------------------

// by intersection observer


// ---------------selectors---------------

const container = document.querySelector('.cont');
const button = document.querySelector('.hamburger');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');


button.addEventListener("click", () => {
    container.classList.toggle("fly");
    modal.classList.add("applymodal");
})
closeButton.addEventListener("click", () => {
    modal.classList.remove("applymodal");
})

// -------- scroll thing-------------------
const fetchData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
    loadDatatoHTML(data);
}

const observer = new IntersectionObserver((entries) => {
    console.log(entries);
    if (entries[0].isIntersecting) {
        observer.unobserve(entries[0].target);
        fetchData();
    }
}, { threshold: 1 })
const loadDatatoHTML = (data) => {
    data.map((item, i) => {
        const div = document.createElement('div');
        div.textContent = item.id + " " + item.title;
        container.append(div);
        if (i === (data.length - 1)) {
            observer.observe(div);
        }
    })
}
document.addEventListener("DOMContentLoaded", () => {
    fetchData();
})



