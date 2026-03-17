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

//from codepen updated code
const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");


buttonElement.addEventListener("click", function () {

	if (inputElement.value != "") {
		
		const li = document.createElement("li");
		li.textContent = inputElement.value;
		
		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "❌";
		deleteBtn.addEventListener("click", function () {
			listElement.removeChild(li);
			inputElement.focus();
		});
		
		li.appendChild(deleteBtn);
		
		listElement.appendChild(li);
		inputElement.value = "";
	}
	inputElement.focus();
});

