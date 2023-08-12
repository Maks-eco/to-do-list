import AddButton from "entities/AddToListButton";
import Popup from "entities/PopupAddMenu";
import { useState } from "react";

function ShowPopup() {
  const [visibEl, setVisibEl] = useState(false);

  function togglePopup() {
    setVisibEl(!visibEl);
  }

  return (
    <>
      <AddButton onPress={togglePopup} />
      {visibEl && <Popup onClose={togglePopup} />}
    </>
  );
}

export default ShowPopup;
