document.addEventListener("DOMContentLoaded", function() {
  const taskInput = document.getElementById("taskInput");
  const taskDateTime = document.getElementById("taskDateTime");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    const taskDateTimeValue = taskDateTime.value;
    if (taskText !== "" && taskDateTimeValue !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${taskText}</span>
        <span>${formatDateTime(taskDateTimeValue)}</span>
        <button class="remove-btn">Remover</button>
      `;
      taskList.appendChild(li);
      taskInput.value = "";
      taskDateTime.value = "";
    }
  });

  taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("remove-btn")) {
      event.target.parentElement.remove();
    }
  });

  function formatDateTime(dateTimeString) {
    const dateTime = new Date(dateTimeString);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
    return dateTime.toLocaleDateString('pt-BR', options);
  }
});
