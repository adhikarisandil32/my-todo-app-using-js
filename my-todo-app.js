let addTodoButton = document.querySelector(".add-todo");
let taskInput = document.querySelector(".task-input");
let tableDataArray = [];

addTodoButton.addEventListener("click", () => {
    if (taskInput.value.trim() === ""){
        return
    }

    document.querySelector("tbody").appendChild(document.createElement("tr"));
    
    tableDataArray.push({
        td1: document.querySelector("tbody").children.length,
        td2: taskInput.value,
        td3: '<i class="fa-solid fa-pen px-2">',
        td4: '<i class="fa-solid fa-trash px-2">'
    })

    document.querySelector("tbody").lastElementChild.innerHTML = 
    `
        <td>${tableDataArray[tableDataArray.length-1].td1}</td>
        <td>${tableDataArray[tableDataArray.length-1].td2}</td>
        <td>${tableDataArray[tableDataArray.length-1].td3}</td>
        <td>${tableDataArray[tableDataArray.length-1].td4}</td>
    `;

    taskInput.value = '';

})