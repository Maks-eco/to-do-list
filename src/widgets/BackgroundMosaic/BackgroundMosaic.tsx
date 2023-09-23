import { ListStorage } from "shared/store";
import { Task } from "app/interfaces/Task";

import classes from "./BackgroundMosaic.module.scss";

import { useSelector } from "react-redux";
import { TaskList } from "app/interfaces/StoreTest";

const storage = new ListStorage<Task>();

function BackgroundMosaic() {
  // const tasks = useSelector((state: TaskList) => state.list);
  const items = [1, 2, 3, 4, 5, 6];

  const listItems = items.map((item) => (
    <div className={classes.item}>{item}</div>
  ));

  return <div className={classes.container}>{listItems}</div>;
}

export default BackgroundMosaic;
