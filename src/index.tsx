import { createRoot } from "react-dom/client";
import Hello from "./pages/Hello";
import CompilationOldVariant from "./pages/CompilationOldVariant";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<CompilationOldVariant />);

//---------------------------------------------------------------

// import * as _ from "lodash";
import "./styles/main.css";
// import "./styles/text.less";
import "./styles/inputs.scss";
import { TaskStorage } from "./entities/TaskRow/store";
// import { Task } from "./entities/interfaces";
// import { oneTaskComponent, type Task } from "./entities/TaskRow";

const storage = new TaskStorage();
// console.log(storage.get());

// const formElem: HTMLFormElement = document.querySelector("form");

// formElem.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(formElem);
//   let data = formData.get("field").toString();
//   var regex = /(<([^>]+)>)/gi;
//   var result = data.replace(regex, "");
//   // console.log(result);
//   if (result == "") return;
//   const { component, info } = oneTaskComponent(result);
//   document.getElementsByClassName("task-list")[0].appendChild(component);
//   storage.addTaskToList(info);
//   clearTaskInput();
// });

// const initList = () => {
//   const list: Task[] = storage.getTaskList();
//   const container = document.getElementsByClassName("task-list")[0];

//   for (const task of list) {
//     const { component } = oneTaskComponent(task.value, task.active, task.id);
//     // component.id = task.id;
//     container.appendChild(component);
//   }
// };
// initList();

const backgr = document.getElementsByClassName("popup-back")[0] as HTMLElement;
backgr.hidden = true;
const closeButton = document.getElementById("close-button");
const popup = document.getElementsByClassName("popup")[0];
const inputTaskText = document.getElementsByClassName(
  "form-textinput"
)[0] as HTMLInputElement;

const clearTaskInput = () => {
  inputTaskText.value = "";
  inputTaskText.select();
};

backgr.addEventListener("click", function (event) {
  this.hidden = true;
});

closeButton.addEventListener("click", function (event) {
  backgr.hidden = true;
  event.stopPropagation();
});

popup.addEventListener("click", function (event) {
  event.stopPropagation();
});

// open-popup
document
  .getElementsByClassName("open-popup")[0]
  .addEventListener("click", function (event) {
    backgr.hidden = false;
    clearTaskInput();
  });

document
  .getElementsByClassName("clear-list")[0]
  .addEventListener("click", function (event) {
    storage.deleteInactiveTaskFromList();
    const inactive = document.querySelectorAll(".container-inactive");
    inactive.forEach((element: HTMLElement) => {
      element.parentElement.style.display = "none";
    });
  });
