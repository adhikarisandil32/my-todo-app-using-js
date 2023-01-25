let addTodoButton = document.querySelector(".add-todo");
let taskInput = document.querySelector(".task-input");
let tableDataArray = [];

addTodoButton.addEventListener("click", () => {
    if (taskInput.value.trim() === ""){
        return
    }

    //tbody creates a tr first.
    document.querySelector("tbody").appendChild(document.createElement("tr"));
    
    //and then on the tableDataArray, the td info like number, task and edit and delete sign is pushed
    tableDataArray.push({
        td1: document.querySelector("tbody").children.length,
        td2: taskInput.value,
        td3: '<i class="fa-solid fa-pen px-2">',
        td4: '<i class="fa-solid fa-trash px-2">'
    })

    //lastElementChild of tbody is the last tr where the td is pushed
    document.querySelector("tbody").lastElementChild.innerHTML = 
    `
        <td>${tableDataArray[tableDataArray.length-1].td1}</td>
        <td>${tableDataArray[tableDataArray.length-1].td2}</td>
        <td>${tableDataArray[tableDataArray.length-1].td3}</td>
        <td>${tableDataArray[tableDataArray.length-1].td4}</td>
    `;

    //the input form is then set to blank
    taskInput.value = '';
})

