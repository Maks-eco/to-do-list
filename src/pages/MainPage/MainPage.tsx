import TaskWidget from "widgets/TaskWidget";
import AssociationWidget from "widgets/AssociationWidget";
import cls from "./MainPage.module.scss";
// import BackgroundMosaic from "widgets/BackgroundMosaic";
// import RotatingReminder from "widgets/RotatingReminder";
import { Suspense, lazy } from "react";

const RotatingReminder = lazy(() => import("widgets/RotatingReminder"));

const BackgroundMosaic = lazy(() => import("widgets/BackgroundMosaic"));

const MainPage = () => {
  return (
    <>
      <div className={cls.container}>
        <TaskWidget />
        {/* <AssociationWidget /> */}
      </div>

      <Suspense>
        <BackgroundMosaic />
        <RotatingReminder />
      </Suspense>
    </>
  );
};

export default MainPage;

// function delayForDemo(promise: Promise<any>) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 2000);
//   }).then(() => promise);
// }
