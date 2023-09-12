import cls from "./AssociationWidget.module.scss";
import { useEffect, useRef, useState } from "react";
import { Images } from "./gallery";

function AssociationWidget() {
  const myRef = useRef(null);
  const [imgNumb, setImgNumb] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setImgNumb(imgNumb > 0 ? imgNumb - 1 : Images.length - 1);
    }, 5000);
    // console.log(myRef.current.className);
    return () => {
      clearTimeout(timer);
    };
  });

  const classes = `${cls.svg_import} ${cls.anistep}`;

  return (
    <>
      {imgNumb}
      <div
        ref={myRef}
        className={classes}
        dangerouslySetInnerHTML={{ __html: Images[imgNumb].toString() }}
      />
    </>
  );
}

export default AssociationWidget;
