import { ListStorage } from "shared/store";
import { Task } from "app/interfaces/Task";
import { Images } from "shared/gallery";

import { TaskList } from "app/interfaces/StoreTest";

import cls from "./RotatingReminder.module.scss";

import { useState, useEffect, memo, useRef } from "react";
import { useSelector } from "react-redux";

interface ImgInfo {
  id: number;
  index: number;
  state: boolean;
}

const storage = new ListStorage<Task>();

function RotatingReminder() {
  const allImages: ImgInfo[] = Images.map((img, index) => {
    return { id: index, index, state: true };
  });

  const contnr = useRef(null);

  const [currentItem, setCurrentNumb] = useState<ImgInfo>(allImages[0]);

  let bufQueueIter: ImgInfo[] = [];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNumb(
        currentItem.index >= allImages.length - 1
          ? allImages[0]
          : allImages[currentItem.index + 1]
      );
      if (contnr.current) contnr.current.className = cls.nonShow;
      setTimeout(() => {
        if (contnr.current) contnr.current.className = cls.container;
      }, 50);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  });

  const windowWidth = useSelector((state: TaskList) => state.windowWidth);

  return windowWidth > 600 ? (
    <div ref={contnr} className={cls.container}>
      <div
        className={cls.anistep}
        dangerouslySetInnerHTML={{
          __html: Images[currentItem.index].toString(),
        }}
      ></div>
    </div>
  ) : null;
}
export default RotatingReminder;
