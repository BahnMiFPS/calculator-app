// select DOM
const todoList = document.querySelector(".task-list")
const filterOption = document.getElementById("filter")
const form = document.querySelector(".form")
const taskInput = document.querySelector("#newitem")
const overlay = document.querySelector("#overlay")
const overlayOff = document.querySelector(".off")

// Mark Done Feature
function markDone(todoLi) {
	todoLi.classList.toggle("done")
}
// Remove a Task
function removeTask(todoLi) {
	todoLi.classList.add("fall")
	todoLi.addEventListener("transitionend", () => todoLi.remove())
}

function filterTasks(hideCompletedTasks) {
	todoList.querySelectorAll("li").forEach((todoLi) => {
		if (todoLi.classList.contains("done")) {
			todoLi.style.display = hideCompletedTasks ? "none" : "flex"
		}
	})
}

function addTask(taskLabel) {
	const todoLi = document.createElement("li")
	const labelSpan = document.createElement("span")
	labelSpan.className = "label"
	labelSpan.textContent = taskLabel
	todoLi.classList.add = "task-item"
	todoLi.appendChild(labelSpan)

	const divActions = document.createElement("div")
	divActions.className = "actions"
	divActions.innerHTML = `<input type="checkbox" class="btn-action btn-action-done" />
						<button class="btn-action btn-action-delete">x</button>`
	todoLi.appendChild(divActions)
	todoList.appendChild(todoLi)
	// const checkBox = document.createElement("input")
	// checkBox.type = "checkbox"
	// checkBox.className = ""
	// labelSpan.todoList.appendChild(todoLi)
}

function on() {
	document.getElementById("overlay").style.display = "block"
}

overlay.addEventListener("click", () => {
	document.getElementById("overlay").style.display = "none"
})

function off() {
	document.getElementById("overlay").style.display = "none"
}

todoList.addEventListener("click", (e) => {
	const element = e.target
	// console.log(element)
	if (element.classList[1] === "btn-action-done") {
		markDone(element.parentNode.parentNode)
	} else if (element.classList[1] === "btn-action-delete") {
		removeTask(element.parentNode.parentNode)
	}
})

// Filter tasks
filterOption.addEventListener("click", (e) => {
	// console.log(e.target.checked)
	filterTasks(e.target.checked)
})

// Add new tasks
form.addEventListener("submit", (e) => {
	e.preventDefault()
	const taskLabel = taskInput.value.trim()
	// Max tasks free shit
	const countLi = document.getElementsByTagName("li").length
	// Add task
	if (taskLabel) {
		if (countLi === 4) {
			on()
			taskInput.value = ""
		} else {
			addTask(taskLabel)
			taskInput.value = ""
		}
	}
})
