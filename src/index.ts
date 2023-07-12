import * as _ from "lodash";
import "./styles/main.css";
import "./styles/text.less";
import "./styles/inputs.scss";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(
    [
      "Тестовый текст на русском для осмотра шрифта",
      "Hello man",
      "yo wewewewebpack",
      "with",
      "TS",
    ],
    " "
  );

  return element;
}

const message: string | number = 3; //"Ts rulz";
console.log(message.toString());

// document.getElementsByClassName("container")[0].appendChild(component());

const containerActivation = (state: boolean) => {
  return "container container-" + (state ? "enactive" : "active");
};

const addToggleViewEvent = (element: HTMLElement) => {
  const input: HTMLInputElement = element.getElementsByTagName("input")[0];
  input.addEventListener("click", function () {
    element.className = containerActivation(input.checked);
  });
  element.className = containerActivation(input.checked);
};

const list = document.getElementsByClassName("container");
for (let item = 0; item < list.length; item++) {
  let element = list[item] as HTMLElement;
  addToggleViewEvent(element);
}

const listComponent = (value: string) => {
  const container = document.createElement("div");
  const label = document.createElement("label");
  container.className = "task";
  label.className = "container container-active";
  label.innerHTML = `${value}<input type="checkbox" />
  <span class="checkmark"></span>`;
  addToggleViewEvent(label);
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
});

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
