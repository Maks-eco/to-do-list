import { FC, Fragment, useState } from "react";
import { ListStorage } from "shared/store";
import { Task } from "app/interfaces/Task";
const storage = new ListStorage<Task>();

// export const oneTaskComponent = (
//   value: string,
//   active: boolean = true,
//   id: string = Date.now().toString()
// ) => {
//   const container = document.createElement("div");
//..........
// };

function oneTaskComponent(props: { info: Task }) {
  const [labelClass, setLabelClass] = useState(
    "container container-" + (props.info.active ? "active" : "inactive")
  );

  // console.log(props.info.id);
  function toggleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.checked); //= e.target.value
    setLabelClass(
      "container container-" + (!e.target.checked ? "active" : "inactive")
    );
  }

  return (
    <>
      <label className={labelClass}>
        <input
          type="checkbox"
          name="task"
          defaultChecked={!props.info.active}
          onChange={toggleChange}
        />
        <span className="checkmark"></span>
        {props.info.value}
      </label>
      {/* </div> */}
    </>
  );
}

export default oneTaskComponent;
