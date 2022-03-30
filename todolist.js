var listContainer = document.getElementById("list-container");
var inputItem = document.getElementById("input-item");
var buttonSubmit = document.getElementById("btn-submit");
var lists = [];

function pushList() {
  lists.push(inputItem.value);
  inputItem.value = "";
  listContainer.innerHTML = "";
  createList();
}
buttonSubmit.addEventListener("click", pushList);

function deleteList(id) {
  lists.splice(id, 1);
  listContainer.innerHTML = "";
  createList();
}

function editList(id) {
  inputItem.value = lists[id];
  lists.splice(id, 1, input);
  listContainer.innerHTML = "";
  createList();
}

function emptyList() {
  lists = [];
  listContainer.innerHTML = "";
  createList();
}

function createList() {
  lists.forEach((element, id) => {
    var divListCard = document.createElement("div");
    divListCard.classList += "list-card";
    var newParagraf = document.createElement("p");
    newParagraf.classList += "item";
    var divListAction = document.createElement("div");
    divListAction.classList += "list-action";
    var buttonEdit = document.createElement("button");
    buttonEdit.innerHTML = "Edit";
    buttonEdit.classList += "btn-edit";
    var buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = "Delete";
    buttonDelete.classList += "btn-delete";
    var newButtonSubmit = document.createElement("button");
    newButtonSubmit.innerHTML = "Submit";
    newButtonSubmit.classList +=
      "bg-green-300 text-white tracking-widest py-1 px-2";
    var buttonEmpty = document.getElementById("btn-empty");
    buttonEmpty.innerHTML = "Empty List";
    buttonEmpty.classList = +"bg-green-300 text-white ";

    newParagraf.innerHTML = element;

    buttonEdit.addEventListener("click", () => {
      newParagraf.innerHTML = "";
      var newInput = document.createElement("input");

      newButtonSubmit.addEventListener("click", () => {
        lists.splice(id, 1, newInput.value);
        console.log(lists);
        listContainer.innerHTML = "";
        createList();
      });

      newParagraf.appendChild(newInput);
      newParagraf.appendChild(newButtonSubmit);
    });
    buttonDelete.addEventListener("click", () => {
      deleteList(id);
    });
    buttonEmpty.addEventListener("click", () => {
      emptyList();
    });
    divListAction.appendChild(buttonEdit);
    divListAction.appendChild(buttonDelete);
    divListCard.appendChild(newParagraf);
    divListCard.appendChild(divListAction);
    listContainer.appendChild(divListCard);
  });
}

createList();
