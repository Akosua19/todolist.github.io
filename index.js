let buttonList = document.getElementById('listButton');
let containerToDo = document.getElementById('todos');
let inputField = document.getElementById('listName');


buttonList.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    containerToDo.appendChild(paragraph);
    inputField.value = " ";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function() {
        containerToDo.removeChild(paragraph)
    })
})
