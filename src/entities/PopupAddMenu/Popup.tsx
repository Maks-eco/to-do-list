import { ListStorage } from "shared/store";
import { Task } from "app/interfaces/Task";
import { useState } from "react";
const storage = new ListStorage<Task>();

const Popup = (props: { onPress: () => void; updateList: () => void }) => {
  const [fieldVal, setFieldVal] = useState("");

  function addNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let data = fieldVal;
    var regex = /(<([^>]+)>)/gi;
    var result = data.replace(regex, "");
    // console.log(result);
    if (result == "") return;
    const info: Task = { id: Date.now().toString(), value: data, active: true };
    storage.addToList(info);

    props.updateList();
  }

  function handleFieldChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFieldVal(e.target.value.toString());
  }

  function dblBackgrondWasClicked(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  return (
    <div className="popup-back" onClick={props.onPress}>
      <div className="popup" onClick={dblBackgrondWasClicked}>
        <form id="newTask" onSubmit={addNewTask}>
          <input
            className="form-textinput"
            name="field"
            type="text"
            onChange={handleFieldChange}
          />
          <input className="form-submit" type="submit" value="Добавить" />
        </form>
        <button
          onClick={props.onPress}
          className="form-closebutton"
          id="close-button"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

export { Popup };
