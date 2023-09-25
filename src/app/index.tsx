import MainPage from "pages/MainPage";
import cls from "./main.module.scss";
import { configureStore } from "@reduxjs/toolkit";
import { TaskList } from "./interfaces/StoreTest";
import { Task } from "./interfaces/Task";

import { Provider } from "react-redux";

import { ListStorage } from "shared/store";
import WindowSize from "features/WindowSize";

class ListStorageToggle extends ListStorage<Task> {
  toggleTask(id: string) {
    let list: Task[] = this.get()?.list;
    if (list) {
      list.map((task) => {
        // if(task?.id && task?.active)
        if (task.id === id) {
          task.active = !task.active;
        }
        return task;
      });
      const data = this.get();
      data.list = list;
      this.save(data);
    }
  }
}
const storage = new ListStorageToggle();

interface ActionType {
  type: string;
  payload: Task;
}
const defaultState: TaskList = {
  list: storage.getList(),
  windowWidth: 0,
};

const reducer = (state = defaultState, action: ActionType) => {
  switch (action.type) {
    case "WINDOW_RESIZE": {
      // storage.addToList(action.payload);
      return {
        ...state,
        windowWidth: action.payload,
        // state.windowWidth: action.payload,
      };
    }
    case "ADD_TASK": {
      storage.addToList(action.payload);
      return {
        ...state,
        list: storage.getList(),
      };
    }
    case "DELETE_INACTIVE_TASK": {
      storage.deleteInactiveTaskFromList();
      return {
        ...state,
        list: storage.getList(),
      };
    }
    case "TOGGLE_TASK": {
      storage.toggleTask(action.payload.id);
      return {
        ...state,
        list: storage.getList(),
      };
    }
    default:
      return state;
  }
};

const store = configureStore({
  reducer,
});

function App() {
  return (
    <Provider store={store}>
      <WindowSize />
      <div className={cls.app}>
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
