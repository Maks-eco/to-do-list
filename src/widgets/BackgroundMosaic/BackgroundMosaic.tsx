import { ListStorage } from "shared/store";
import { Task } from "app/interfaces/Task";
import { Images } from "shared/gallery";

import cls from "./BackgroundMosaic.module.scss";

import { useState, useEffect, memo } from "react";
import { TaskList } from "app/interfaces/StoreTest";
import { useSelector } from "react-redux";

interface ImgInfo {
  id: number;
  index: number;
  state: boolean;
}

const storage = new ListStorage<Task>();

function BackgroundMosaic() {
  const windowWidth = useSelector((state: TaskList) => state.windowWidth);

  const allImages: ImgInfo[] = Images.map((img, index) => {
    return { id: index, index, state: true };
  });

  const [items, setImgNumb] = useState<ImgInfo[]>(allImages.slice(0, 6));

  const [queue, setImgQueue] = useState<ImgInfo[]>(allImages.slice(6));

  let bufQueueIter: ImgInfo[] = [];

  useEffect(() => {
    const timer = setInterval(() => {
      bufQueueIter = [...queue];

      const some = items.map((it, index) => {
        const oldState = it.state;
        const state = Math.random() > 0.3 ? true : false;
        if (oldState === true && state === false) {
          const bufIt = { ...it };
          it.index = bufQueueIter.shift().index;
          bufQueueIter.push(bufIt);
        }
        return { id: it.id, index: it.index, state };
      });
      setImgQueue(bufQueueIter);
      setImgNumb(some);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  });

  const listItems = items.map((item) => (
    <div
      className={`${cls.item}  ${item.state ? cls["color-marker"] : ""}`}
      key={item.id}
    >
      <div
        className={`${cls["sub-item"]}  ${
          item.state ? cls["temporary-hidden"] : ""
        }`}
      >
        <div
          className={cls.anistep}
          dangerouslySetInnerHTML={{ __html: Images[item.index].toString() }}
        ></div>
      </div>
    </div>
  ));

  return windowWidth <= 600 ? (
    <div className={cls.container}>{listItems}</div>
  ) : null;
}

export default BackgroundMosaic;
