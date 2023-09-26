import cls from "./RemoveButton.module.scss";
import { useDispatch } from "react-redux";

const RemoveButton = () => {
  const dispatch = useDispatch();

  function clearDoneTasks() {
    dispatch({ type: "DELETE_INACTIVE_TASK" });
  }

  return (
    <button className={cls["button-dec"]} onClick={clearDoneTasks}>
      <span className={cls.sign}>–</span>
      <span className={cls.descr}>очистить выполненное</span>
    </button>
  );
};

export default RemoveButton;
