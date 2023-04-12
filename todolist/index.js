let addtoButton = document.getElementById("button")
let container = document.getElementById("toDoContainer")
let inputField = document.getElementById("inputfield");

addtoButton.addEventListener('click', function () {
    var paragraph = document.createElement("p")
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value;
    toDoContainer.append(paragraph)
    inputField.value = '';
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through"
    })
})
