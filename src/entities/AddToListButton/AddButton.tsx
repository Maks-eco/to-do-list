import cls from "./AddButton.module.scss";

const AddButton = (props: { onPress: () => void }) => {
  return (
    <button onClick={props.onPress} className={cls["button-add"]}>
      <span className={cls.sign}>+</span>
      <span className={cls.descr}>добавить задачу</span>
    </button>
  );
};

export default AddButton;
