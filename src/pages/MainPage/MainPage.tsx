import TaskWidget from "widgets/TaskWidget";
import AssociationWidget from "widgets/AssociationWidget";
import cls from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={cls.container}>
      <TaskWidget />
      <AssociationWidget />
    </div>
  );
};

export default MainPage;
