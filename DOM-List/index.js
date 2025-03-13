const add = document.querySelector('.create');
const cont = document.querySelector('.todo-container');

add.addEventListener('click', () => {
    let task = prompt("What task do you wish to add? ");
    let li = document.createElement('li');
    li.innerHTML = `<div class="items">
                <input type="checkbox" class="checked">
                <span class="item">${task}</span>
                <button>Delete</button>
            </div>`;
    cont.append(li);
})

cont.addEventListener('click', (e) => {
    let target = e.target;

    if (target.type === "checkbox") {
        if (target.checked) {
            target.parentElement.children[1].style.textDecoration = "line-through";
        } else {
            target.parentElement.children[1].style.textDecoration = "none";
        }
    }
    if (target.tagName === "BUTTON") {
        target.parentElement.parentElement.remove();
    }
})