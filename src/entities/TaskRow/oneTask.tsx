import { FC, Fragment } from "react";
import { TaskStorage } from "./store";
import { Task } from "./interfaces";
const storage = new TaskStorage();

// const addCheckboxListener = (checkbox: Element) => {
//   checkbox.addEventListener("change", function (e) {
//     storage.toggleTask(this.parentElement.parentElement.id.toString());
//     this.parentElement.className =
//       "container container-" + (!this.checked ? "active" : "inactive");
//     // e.stopPropagation();
//   });
// };

// export const oneTaskComponent = (
//   value: string,
//   active: boolean = true,
//   id: string = Date.now().toString()
// ) => {
//   const container = document.createElement("div");
//   container.className = "task";

//   const tmpl = <HTMLTemplateElement>document.getElementById("tmpl");
//   container.appendChild(tmpl.content.cloneNode(true));

//   container.id = id;
//   const label = container.querySelector("label");
//   label.className = "container container-" + (active ? "active" : "inactive");
//   label.innerHTML += value;

//   const input = label.querySelector("input");
//   input.checked = !active;
//   addCheckboxListener(input);

//   return { component: container, info: { id, value, active } };
// };

function oneTaskComponent(props: { info: Task }) {
  console.log(props.info.id);
  return (
    <Fragment>
      {/* <div className="task" key={props.info.id}> */}
      <label className="container container-active">
        <input type="checkbox" name="task" />
        <span className="checkmark"></span>
        {props.info.value}
      </label>
      {/* </div> */}
    </Fragment>
  );
}

export default oneTaskComponent;
