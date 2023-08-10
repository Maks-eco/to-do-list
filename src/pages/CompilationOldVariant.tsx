// import { Fragment } from "react";
import { ListStorage } from "shared/store";
import OneTaskComponent from "entities/TaskRow";
import { Task } from "app/interfaces/Task";
// import Popup from "../entities/PopupAddMenu";
// import AddButton from "../entities/AddToListButton";
import ShowPopup from "features/ShowPopup";
import { useState } from "react";
import { update } from "lodash";

const storage = new ListStorage<Task>();

// function ListItemsE ()  {
//     return (
//       <a>some</a>
//     )
//     }
function CompilationOldVariant() {
  const [tasks, setTasksList] = useState(storage.getList() as Task[]);
  function updateState() {
    setTasksList(storage.getList() as Task[]);
  }

  return (
    <>
      <div className="container-main">
        <h3 className="header">Список задач на будущее:</h3>
      </div>
      <ShowPopup updateList={updateState} />
      <div className="task-list">
        {tasks.map((task: Task) => (
          <div className="task" id={task.id}>
            <OneTaskComponent key={task.id} info={task} />
          </div>
        ))}
      </div>
      <button className="clear-list button-dec">
        <span className="sign">-</span>
        <span className="descr">очистить выполненное</span>
      </button>
    </>
  );
}

export default CompilationOldVariant;
