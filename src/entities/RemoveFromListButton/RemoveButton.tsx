import { ListStorage } from "shared/store";
import { Task } from "app/interfaces/Task";
import cls from "./RemoveButton.module.scss";
// import { useState } from "react";
const storage = new ListStorage<Task>();

const RemoveButton = (props: { onPress: () => void }) => {
  function clearDoneTasks() {
    storage.deleteInactiveTaskFromList();
    props.onPress();
  }

  return (
    <button className={cls["button-dec"]} onClick={clearDoneTasks}>
      <span className={cls.sign}>-</span>
      <span className={cls.descr}>очистить выполненное</span>
    </button>
  );
};

export default RemoveButton;
