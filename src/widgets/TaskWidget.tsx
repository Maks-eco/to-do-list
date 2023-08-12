import { ListStorage } from "shared/store";
import OneTaskComponent from "entities/TaskRow";
import { Task } from "app/interfaces/Task";
import ShowPopup from "features/ShowPopup";
import RemoveButton from "entities/RemoveFromListButton";
import classes from "./TaskWidget.module.scss";

import { useSelector } from "react-redux";
import { TaskList } from "app/interfaces/StoreTest";

const storage = new ListStorage<Task>();

function TaskWidget() {
  const tasks = useSelector((state: TaskList) => state.list);

  return (
    <>
      <div>
        <h3 className={classes.header}>Список задач на будущее:</h3>
      </div>
      <ShowPopup />
      <div className={classes["task-list"]}>
        {tasks.map((task: Task) => (
          <div className={classes.task} id={task.id} key={task.id}>
            <OneTaskComponent info={task} />
          </div>
        ))}
      </div>
      <RemoveButton />
    </>
  );
}

export default TaskWidget;
