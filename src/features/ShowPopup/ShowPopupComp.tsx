import AddButton from "entities/AddToListButton";
import Popup from "entities/PopupAddMenu";
import { useState } from "react";

function ShowPopup(props: { updateList: () => void }) {
  const [visibEl, setVisibEl] = useState(false);

  function togglePopup() {
    setVisibEl(!visibEl);
  }

  return (
    <>
      <AddButton onPress={togglePopup} />
      {visibEl && <Popup onPress={togglePopup} updateList={props.updateList} />}
    </>
  );
}

export default ShowPopup;
