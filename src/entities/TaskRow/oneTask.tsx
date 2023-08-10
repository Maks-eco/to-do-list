import { FC, Fragment, useState } from "react";
import { ListStorage } from "shared/store";
import { Task } from "app/interfaces/Task";
// const storage = new ListStorage<Task>();

class ListStorageToggle extends ListStorage<Task> {
  toggleTask(id: string) {
    let list: Task[] = this.get()?.list;
    if (list) {
      list.map((task) => {
        // if(task?.id && task?.active)
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

const storage = new ListStorageToggle();

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
  function toggleChange(e: React.ChangeEvent<HTMLInputElement>, id: string) {
    console.log(e.target.checked); //= e.target.value
    setLabelClass(
      "container container-" + (!e.target.checked ? "active" : "inactive")
    );
    storage.toggleTask(id);
  }

  return (
    <>
      <label className={labelClass}>
        <input
          type="checkbox"
          name="task"
          defaultChecked={!props.info.active}
          onChange={(e) => toggleChange(e, props.info.id)}
        />
        <span className="checkmark"></span>
        {props.info.value}
      </label>
      {/* </div> */}
    </>
  );
}

export default oneTaskComponent;
