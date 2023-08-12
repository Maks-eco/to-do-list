import { ListStorage } from "shared/store";
import { Task } from "app/interfaces/Task";
import { useState } from "react";
import cls from "./Popup.module.scss";
import { useDispatch } from "react-redux";

const storage = new ListStorage<Task>();

const Popup = (props: { onClose?: () => void; updateList?: () => void }) => {
  const [fieldVal, setFieldVal] = useState("");

  const dispatch = useDispatch();

  function addNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let data = fieldVal;
    var regex = /(<([^>]+)>)/gi;
    var result = data.replace(regex, "");
    // console.log(result);
    if (result == "") return;
    const info: Task = { id: Date.now().toString(), value: data, active: true };

    dispatch({ type: "ADD_TASK", payload: info });
  }

  function handleFieldChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFieldVal(e.target.value.toString());
  }

  function dblBackgrondWasClicked(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  return (
    <div className={cls["popup-back"]} onClick={props.onClose}>
      <div className={cls.popup} onClick={dblBackgrondWasClicked}>
        <form className={cls["new-task"]} onSubmit={addNewTask}>
          <input
            className={cls["form-textinput"]}
            name="field"
            type="text"
            onChange={handleFieldChange}
          />
          <input
            className={cls["form-submit"]}
            type="submit"
            value="Добавить"
          />
        </form>
        <button onClick={props.onClose} className={cls["form-closebutton"]}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export { Popup };
