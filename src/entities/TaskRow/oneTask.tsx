import { FC, Fragment, useState } from "react";
import { ListStorage } from "shared/store";
import { Task } from "app/interfaces/Task";
// const storage = new ListStorage<Task>();
import classes from "./styles/OneTask.module.scss";

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

function oneTaskComponent(props: { info: Task }) {
  const [labelClass, setLabelClass] = useState(
    `${classes.container} ${
      props.info.active
        ? classes["container-active"]
        : classes["container-inactive"]
    }`
    //"container container-" + (props.info.active ? "active" : "inactive")
  );

  // console.log(props.info.id);
  function toggleChange(e: React.ChangeEvent<HTMLInputElement>, id: string) {
    //console.log(e.target.checked); //= e.target.value
    setLabelClass(
      `${classes.container} ${
        !e.target.checked
          ? classes["container-active"]
          : classes["container-inactive"]
      }`
      //"container container-" + (!e.target.checked ? "active" : "inactive")
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
        <span className={classes.checkmark}></span>
        {props.info.value}
      </label>
    </>
  );
}

export default oneTaskComponent;
