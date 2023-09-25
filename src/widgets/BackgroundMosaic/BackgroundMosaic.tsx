import { ListStorage } from "shared/store";
import { Task } from "app/interfaces/Task";
import { Images } from "shared/gallery";

import cls from "./BackgroundMosaic.module.scss";

import { useState, useEffect, memo } from "react";
import { TaskList } from "app/interfaces/StoreTest";

interface ImgInfo {
  id: number;
  index: number;
  state: boolean;
}

const storage = new ListStorage<Task>();

function BackgroundMosaic() {
  // const tasks = useSelector((state: TaskList) => state.list);
  // const items = [1, 2, 3, 4, 5, 6];

  const allImages: ImgInfo[] = Images.map((img, index) => {
    return { id: index, index, state: true };
  });

  const [items, setImgNumb] = useState<ImgInfo[]>(
    /* [
    { index: 1, state: true },
    { index: 2, state: true },
    { index: 3, state: true },
    { index: 4, state: true },
    { index: 5, state: true },
    { index: 6, state: true },
  ] */
    allImages.slice(0, 6)
  );

  const [queue, setImgQueue] = useState<ImgInfo[]>(allImages.slice(6));

  let bufQueueIter: ImgInfo[] = [];

  useEffect(() => {
    const timer = setInterval(() => {
      // const first = items.shift();
      // setImgNumb([...items, first]);
      bufQueueIter = [...queue];

      const some = items.map((it, index) => {
        // it.index = index;
        const oldState = it.state;
        const state = Math.random() > 0.3 ? true : false;
        if (oldState === true && state === false) {
          const bufIt = { ...it };
          it.index = bufQueueIter.shift().index;
          // setImgQueue([...queue.slice(1), bufIt]);

          // console.log(bufQueueIter);
          bufQueueIter.push(bufIt);
          // console.log(bufQueueIter);
        }
        return { id: it.id, index: it.index, state };
      });
      setImgQueue(bufQueueIter);
      // console.log(queue);
      // console.log(some);
      setImgNumb(some);
    }, 2000);
    // console.log(myRef.current.className);
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
        {/* {item} */}
        <div
          className={cls.anistep}
          dangerouslySetInnerHTML={{ __html: Images[item.index].toString() }}
        ></div>
      </div>
    </div>
  ));

  return <div className={cls.container}>{listItems}</div>;
}

export default BackgroundMosaic;
// const BackgroundMosaic = memo(unBackgroundMosaic);
// export default BackgroundMosaic;
