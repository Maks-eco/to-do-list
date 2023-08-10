import { ListStorage } from "shared/store";
import { Task } from "app/interfaces/Task";
// import { useState } from "react";
const storage = new ListStorage<Task>();

const RemoveButton = (props: { onPress: () => void }) => {
  function clearDoneTasks() {
    storage.deleteInactiveTaskFromList();
    props.onPress();
  }

  return (
    <button className="clear-list button-dec" onClick={clearDoneTasks}>
      <span className="sign">-</span>
      <span className="descr">очистить выполненное</span>
    </button>
  );
};

export default RemoveButton;
