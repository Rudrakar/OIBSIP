const item = document.querySelector("#item");
const toDobox = document.querySelector("#todobox");

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addToDo(this.value);
    this.value = "";
  }
});

const addToDo = (itemText) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    ${itemText}
    <i class="fas fa-times"></i>
  `;
  listItem.addEventListener(
    "click",
    function(){
        this.classList.toggle("done");
    }
  )  
  listItem.querySelector("i").addEventListener(
    "click",
    function(){
        listItem.remove()
    }
  )
  toDobox.appendChild(listItem);
};
