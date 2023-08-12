import { useState } from "react";
import { Task } from "app/interfaces/Task";
import classes from "./styles/OneTask.module.scss";
import { useDispatch } from "react-redux";

function oneTaskComponent(props: { info: Task }) {
  const [labelClass, setLabelClass] = useState(
    `${classes.container} ${
      props.info.active
        ? classes["container-active"]
        : classes["container-inactive"]
    }`
  );

  const dispatch = useDispatch();

  function toggleChange(e: React.ChangeEvent<HTMLInputElement>, id: string) {
    setLabelClass(
      `${classes.container} ${
        !e.target.checked
          ? classes["container-active"]
          : classes["container-inactive"]
      }`
    );
    dispatch({ type: "TOGGLE_TASK", payload: { id } });
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
