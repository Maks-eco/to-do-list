import { useState } from "react";
import { ListStorage } from "shared/store";
import OneTaskComponent from "entities/TaskRow";
import { Task } from "app/interfaces/Task";
import ShowPopup from "features/ShowPopup";
import RemoveButton from "entities/RemoveFromListButton";
import classes from "./TaskWidget.module.scss";
const storage = new ListStorage<Task>();

function TaskWidget() {
  const [tasks, setTasksList] = useState(storage.getList() as Task[]);
  function updateState() {
    setTasksList(storage.getList() as Task[]);
  }

  return (
    <>
      <div>
        <h3 className={classes.header}>Список задач на будущее:</h3>
      </div>
      <ShowPopup updateList={updateState} />
      <div className={classes["task-list"]}>
        {tasks.map((task: Task) => (
          <div className={classes.task} id={task.id} key={task.id}>
            <OneTaskComponent info={task} />
          </div>
        ))}
      </div>
      <RemoveButton onPress={updateState} />
    </>
  );
}

export default TaskWidget;
