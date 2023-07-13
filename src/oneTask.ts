import { TaskStorage } from "./store";
const storage = new TaskStorage();

const addCheckboxListener = (checkbox: Element) => {
  checkbox.addEventListener("change", function (e) {
    console.log(this);
    storage.toggleTask(this.parentElement.parentElement.id.toString());
    this.parentElement.className =
      "container container-" + (!this.checked ? "active" : "inactive");
    // e.stopPropagation();
  });
};

// const containerActivation = (state: boolean) => {
//   return "container container-" + (state ? "inactive" : "active");
// };

export const oneTaskComponent = (
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
  label.innerHTML = `${value}`;

  const input = document.createElement("input");
  input.type = "checkbox";
  input.name = "task";
  input.checked = !active;
  addCheckboxListener(input);
  label.appendChild(input);

  const span = document.createElement("span");
  span.className = "checkmark";
  label.appendChild(span);

  container.appendChild(label);

  // label.innerHTML += `<span class="checkmark"></span>`; //<input name="task" type="checkbox" />

  return { component: container, info: { id, value, active } };
};
