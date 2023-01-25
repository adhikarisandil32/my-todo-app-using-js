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
    

    tableDataArray.forEach((element, idx) => {
        let tableRow = document.querySelectorAll("tbody > tr")[idx];
        let count = 0;
        for (key in element){
            tableRow.appendChild(document.createElement("td"));
            tableRow.children[count].innerHTML = element[key];
            count++;
        }
    })

    console.log(document.querySelector("tbody").children);
})