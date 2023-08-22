import TaskWidget from "widgets/TaskWidget";
import cls from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={cls.container}>
      <TaskWidget />
    </div>
  );
};

export default MainPage;
