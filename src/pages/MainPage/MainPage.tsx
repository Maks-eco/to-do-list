import TaskWidget from "widgets/TaskWidget";
import AssociationWidget from "widgets/AssociationWidget";
import cls from "./MainPage.module.scss";
import BackgroundMosaic from "widgets/BackgroundMosaic";
import RotatingReminder from "widgets/RotatingReminder";

const MainPage = () => {
  return (
    <>
      <div className={cls.container}>
        <TaskWidget />
        {/* <AssociationWidget /> */}
      </div>
      <BackgroundMosaic />
      <RotatingReminder />
    </>
  );
};

export default MainPage;
