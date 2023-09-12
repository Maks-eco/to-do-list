import cls from "./AssociationWidget.module.scss";
import { useEffect, useRef, useState } from "react";
import { Images } from "./gallery";

function AssociationWidget() {
  const myRef = useRef(null);
  const [imgNumb, setImgNumb] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImgNumb(imgNumb < 8 ? imgNumb + 1 : 0);
    }, 5000);
    // console.log(myRef.current.className);
    return () => {
      clearTimeout(timer);
    };
  });

  const classes = `${cls.svg_import} ${cls.anistep}`;

  return (
    <>
      <div
        ref={myRef}
        className={classes}
        dangerouslySetInnerHTML={{ __html: Images[imgNumb].toString() }}
      />
    </>
  );
}

export default AssociationWidget;
