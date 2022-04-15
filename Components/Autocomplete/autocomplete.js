
const input = document.querySelector("input");
const suggestionContainer = document.querySelector(".suggestion-container");
const shadow = document.querySelector(".shadow");
const debouncedHandelInput = debounce(function handleInput(e) {
    if (input.value) {
        suggestionContainer.classList.remove("hidden");
        // make network call to get filtered data, loop over it and add it to dom
        for (let i = 0; i < 10; i++) {
            const newDiv = document.createElement("div");
            newDiv.innerHTML = "mayank" + i;
            newDiv.tabIndex = 0;
            suggestionContainer.appendChild(newDiv);
        }
        shadow.innerText = suggestionContainer.children[0].textContent;
    } else {
        suggestionContainer.classList.add("hidden");
        suggestionContainer.innerHTML = "";
        shadow.innerText = "";
    }

}, 400);

input.addEventListener("keyup", (e) => {
    if (e.keyCode === 39) {
        const val = suggestionContainer.children[0].textContent;
        input.value = val;
    } else if (e.keyCode === 13) {
        // do something on enter
    } else if ([40].includes(e.keyCode)) {
        suggestionContainer.children[0].focus();
    }
})

suggestionContainer.addEventListener("click", function (event) {
    const val = event.target.textContent;
    input.value = val;
})

suggestionContainer.addEventListener("keyup", function (e) {
    if ([13, 39].includes(e.keyCode)) {
        const val = e.target.textContent;
        input.value = val;
        shadow.innerText = "";
        input.focus();
    } else if ([9].includes(e.keyCode)) {
        shadow.innerText = e.target.textContent;
    } else if ([40].includes(e.keyCode)) {
        if (e.target.nextSibling) {
            console.log(e)
            shadow.innerText = e.target.nextSibling.textContent;
            e.target.nextSibling.focus()
        }
    } else if ([38].includes(e.keyCode)) {
        if (e.target.previousSibling.nodeName !== "#text") {
            shadow.innerText = e.target.previousSibling.textContent;
            e.target.previousSibling.focus()
        }
    }
})