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

const list = document.getElementsByClassName("container");
for (let item = 0; item < list.length; item++) {
  let element = list[item] as HTMLElement;
  const input: HTMLInputElement = element.getElementsByTagName("input")[0];
  // console.log(input.checked);
  input.addEventListener("click", function () {
    // console.log(this);
    element.className = containerActivation(input.checked);
  });
  element.className = containerActivation(input.checked);
}
