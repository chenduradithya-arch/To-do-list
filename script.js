// Create input, button, and list dynamically
const input = document.createElement("input");
input.placeholder = "Enter task";

const addBtn = document.createElement("button");
addBtn.textContent = "Add";

const list = document.createElement("ul");

document.body.appendChild(input);
document.body.appendChild(addBtn);
document.body.appendChild(list);

// Function to add tasks
function addTask() {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  // Toggle complete on click
  li.addEventListener("click", () => {
    li.style.textDecoration =
      li.style.textDecoration === "line-through" ? "none" : "line-through";
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.style.marginLeft = "10px";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = "";
}

// Attach event
addBtn.addEventListener("click", addTask);
