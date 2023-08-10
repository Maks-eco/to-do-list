const AddButton = (props: { onPress: () => void }) => {
  return (
    <button onClick={props.onPress} className="open-popup button-add">
      <span className="sign">+</span>
      <span className="descr">добавить задачу</span>
    </button>
  );
};

export default AddButton;
