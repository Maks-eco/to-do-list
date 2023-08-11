import MainPage from "pages/MainPage";
import cls from "./main.module.scss";
import { configureStore } from "@reduxjs/toolkit";

import { Provider } from "react-redux";
interface NumberGoodThings {
  ass: number;
}
interface ActionType {
  type: string;
}
const defaultState: NumberGoodThings = {
  ass: 0,
};

const reducer = (state = defaultState, action: ActionType) => {
  switch (action.type) {
    case "ADD_ONE":
      return { ...state, ass: state.ass + 1 };
    default:
      return state;
  }
};

const store = configureStore({
  reducer,
});

const App = () => (
  <Provider store={store}>
    <div className={cls.app}>
      <MainPage />
    </div>
  </Provider>
);

export default App;
