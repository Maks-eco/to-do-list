import { ListStorage } from "shared/store";
import { Task } from "app/interfaces/Task";
import cls from "./RemoveButton.module.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { NumberGoodThings } from "app/interfaces/StoreTest";
// import { useState } from "react";
const storage = new ListStorage<Task>();

// interface NumberGoodThings {
//   ass: number;
// }

const RemoveButton = (props: { onPress: () => void }) => {
  // const dispatch = useDispatch();
  // const count = useSelector((state: NumberGoodThings) => state.ass);
  // console.log(count);

  function clearDoneTasks() {
    storage.deleteInactiveTaskFromList();
    props.onPress();

    // dispatch({ type: "ADD_ONE" });
  }

  return (
    <button className={cls["button-dec"]} onClick={clearDoneTasks}>
      <span className={cls.sign}>-</span>
      <span className={cls.descr}>очистить выполненное</span>
    </button>
  );
};

export default RemoveButton;
