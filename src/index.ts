import * as _ from "lodash";
import "./styles/main.css";
import "./styles/text.less";
import "./styles/inputs.scss";
import { electron } from "webpack";

interface Task {
  id: string;
  value: string;
  active: boolean;
}

class Storage {
  // constructor() {}
  save(value: object) {
    localStorage.setItem("stor", JSON.stringify(value));
  }
  get() {
    return JSON.parse(localStorage.getItem("stor"));
  }
}

class TaskStorage extends Storage {
  getTaskList() {
    let data = this.get();
    if (data?.list) {
      return data?.list;
    } else {
      data = { list: [] };
      this.save(data);
      return [];
    }
  }
  addTaskToList(value: string) {
    let data = this.get();
    if (data?.list) {
    } else {
      data = { list: [] };
    }
    data.list.push({
      id: Date.now().toString(),
      value,
      active: true,
    });
    this.save(data);
  }
  deleteInactiveTaskFromList() {
    let data = this.get();
    if (data?.list) {
      data.list = data.list.filter((item: any) => item.active);
    } else {
      data = { list: [] };
      // data.list.push(value);
    }
    this.save(data);
  }
  toggleTask(id: string) {
    let list: Task[] = this.get()?.list;
    if (list) {
      list.map((task) => {
        if (task.id === id) {
          task.active = !task.active;
        }
        return task;
      });
      const data = this.get();
      data.list = list;
      this.save(data);
    }
  }
}

const storage = new TaskStorage();
// console.log(storage.get());

const addCheckboxListener = (checkbox: Element) => {
  checkbox.addEventListener("change", function () {
    console.log("tooggled");
    storage.toggleTask(this.parentElement.parentElement.id.toString());
    this.parentElement.className =
      "container container-" + (this.checked ? "inactive" : "active");
  });
};

// const containerActivation = (state: boolean) => {
//   return "container container-" + (state ? "inactive" : "active");
// };

const listComponent = (
  value: string,
  active: boolean = true,
  id: string = Date.now().toString()
) => {
  console.log(value, active);
  const container = document.createElement("div");
  const label = document.createElement("label");
  container.className = "task";
  container.id = id;
  label.className = "container container-" + (active ? "active" : "inactive");
  label.innerHTML = `${value}
  <span class="checkmark"></span>`; //<input name="task" type="checkbox" />

  const input = document.createElement("input");
  input.type = "checkbox";
  input.name = "task";
  addCheckboxListener(input);
  label.appendChild(input);

  container.appendChild(label);
  return container;
};

const formElem: HTMLFormElement = document.querySelector("form");

formElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formElem);
  let data = formData.get("field").toString();
  var regex = /(<([^>]+)>)/gi;
  var result = data.replace(regex, "");
  // console.log(result);
  if (result == "") return;
  document
    .getElementsByClassName("task-list")[0]
    .appendChild(listComponent(result));
  storage.addTaskToList(result);
});

const initList = () => {
  const list: Task[] = storage.getTaskList();
  const container = document.getElementsByClassName("task-list")[0];

  for (const task of list) {
    const component = listComponent(task.value, task.active, task.id);
    // component.id = task.id;
    container.appendChild(component);
  }
};
initList();

const backgr = document.getElementsByClassName("popup-back")[0] as HTMLElement;
backgr.hidden = true;
const closeButton = document.getElementById("close-button");
const popup = document.getElementsByClassName("popup")[0];

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
  });

document
  .getElementsByClassName("clear-list")[0]
  .addEventListener("click", function (event) {
    storage.deleteInactiveTaskFromList();
  });

// const checkboxes = document.querySelectorAll("input[name=task]");

// checkboxes.forEach((checkbox) => {
//   addCheckboxListener(checkbox);
// });
