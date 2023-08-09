import { Fragment } from "react";
import { TaskStorage } from "../entities/TaskRow/store";
import OneTaskComponent /* , type Task */ from "../entities/TaskRow";
import { Task } from "entities/TaskRow/interfaces";

const storage = new TaskStorage();

function CompilationOldVariant() {
  //   const initList = () => {
  //     const list: Task[] = storage.getTaskList();
  //     // const container = document.getElementsByClassName("task-list")[0];

  //     for (const task of list) {
  //       const { component } = oneTaskComponent(task.value, task.active, task.id);
  //       // component.id = task.id;
  //       //   container.appendChild(component);
  //     }
  //     return JSON.stringify(list);
  //   };
  const task: Task = storage.getTaskList()[0];
  //   const someFuck = { value: task.value, active: task.active, id: task.id }

  return (
    <Fragment>
      <div className="container-main">
        <h3 className="header">Список задач на будущее:</h3>
      </div>
      <button className="open-popup button-add">
        <span className="sign">+</span>
        <span className="descr">добавить задачу</span>
      </button>
      <div className="task-list">
        <OneTaskComponent info={task} />
        {/* initList() */}
      </div>
      {/* <div className="popup-back">
        <div className="popup">
          <form id="newTask">
            <input className="form-textinput" name="field" type="text" />
            <input className="form-submit" type="submit" value="Добавить" />
          </form>
          <button className="form-closebutton" id="close-button">
            Закрыть
          </button>
        </div>
      </div> */}
      <button className="clear-list button-dec">
        <span className="sign">-</span>
        <span className="descr">очистить выполненное</span>
      </button>
      <template id="tmpl">
        <label className="container container-active">
          <input type="checkbox" name="task" />
          <span className="checkmark"></span>
        </label>
      </template>
    </Fragment>
  );
}

export default CompilationOldVariant;
