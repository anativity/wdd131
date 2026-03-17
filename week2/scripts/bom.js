/*const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('_____'); //fill in
const li = document.createElement('li');
const delButton = document.createElement('button');
li.textContent = input.value;
delButton.textContent = "❌";
li.append(delButton);
list.append(li);
<button aria-label="Close" id="close-button">❌</button>;
*/

//updated code
const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");


buttonElement.addEventListener("click", function () {

    if (inputElement.value.trim() !== "") {

        const li = document.createElement("li");
        li.textContent = inputElement.value;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        
        deleteButton.addEventListener("click", function () {
            listElement.removeChild(li);
            inputElement.focus();
        });

        li.appendChild(deleteButton);

        listElement.appendChild(li);
        inputElement.value = "";
    }
    inputElement.focus();
});