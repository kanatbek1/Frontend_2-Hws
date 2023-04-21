const input = document.querySelector("#input")
const createButton = document.querySelector("#create_button")
const todolist = document.querySelector("#todo_list")

create_Button.addEventListener("click", () => {
    const todoText = input.value.trim()
    if (todoText.length > 0) {
        const todoItem = document.createElement("div")

        const todoTextSpan = document.createElement("span")
        todoTextSpan.className = "span"

        const deleteBtn = document.createElement("button")
        deleteBtn.className = "delete-btn"

        const editBtn = document.createElement("button")
        editBtn.className = "edit-btn"

        todoTextSpan.textContent = todoText
        deleteBtn.textContent = "delete"
        editBtn.textContent = "edit"

        deleteBtn.addEventListener("click", () => {
            todoItem.remove()

        })
        editBtn.addEventListener("click", () => {
            const editPromt = prompt("Измените текст", todoTextSpan.textContent)
            if (editPromt.trim().length > 0) {
                todoTextSpan.textContent = editPromt.trim()
            
            }
        })
        todoItem.appendChild(todoTextSpan)
        todoItem.appendChild(deleteBtn)
        todoItem.appendChild(editBtn)

        todolist.appendChild(todoItem)
        input.value =''
    }
})