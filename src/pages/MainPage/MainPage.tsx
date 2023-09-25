import TaskWidget from "widgets/TaskWidget";
import AssociationWidget from "widgets/AssociationWidget";
import cls from "./MainPage.module.scss";
import BackgroundMosaic from "widgets/BackgroundMosaic";

const MainPage = () => {
  return (
    <>
      <div className={cls.container}>
        <TaskWidget />
        {/* <AssociationWidget /> */}
      </div>
      <BackgroundMosaic />
    </>
  );
};

export default MainPage;
