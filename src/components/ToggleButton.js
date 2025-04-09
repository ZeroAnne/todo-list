import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

export default function ToggleButton() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const isOrange = theme === "orange";

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="switchCheckChecked"
        checked={isOrange}
        onChange={() => dispatch(toggleTheme())}
      />
      <label className="form-check-label" htmlFor="switchCheckChecked">
        <h5>
          {" "}
          <b>{isOrange ? "橘色模式" : "紫色模式"}</b>
        </h5>
      </label>
    </div>
  );
}
