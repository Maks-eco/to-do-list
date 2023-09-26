import { ListStorage } from "shared/store";
import OneTaskComponent from "entities/TaskRow";
import { Task } from "app/interfaces/Task";
import ShowPopup from "features/ShowPopup";
import RemoveButton from "entities/RemoveFromListButton";
import classes from "./TaskWidget.module.scss";

import { useSelector } from "react-redux";
import { TaskList } from "app/interfaces/StoreTest";
// import {card} from 'shared/gallery/card6.svg'

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
      {/* <img
        src="https://raw.githubusercontent.com/Maks-eco/to-do-list/9dbc6da036660a2fc1cbbb975e49401a88d7e033/src/shared/gallery/card7.svg"
        alt="A Rectangle Image with SVG"
        height="450px"
        width="450px"
      /> */}
    </>
  );
}

export default TaskWidget;
