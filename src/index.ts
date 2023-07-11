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
