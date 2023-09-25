import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function WindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const dispatch = useDispatch();

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
      dispatch({ type: "WINDOW_RESIZE", payload: getWindowSize().innerWidth });
    }
    dispatch({ type: "WINDOW_RESIZE", payload: getWindowSize().innerWidth });

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      {/* <h2>Width: {windowSize.innerWidth}</h2>
      <h2>Height: {windowSize.innerHeight}</h2> */}
    </>
  );
}

export default WindowSize;
