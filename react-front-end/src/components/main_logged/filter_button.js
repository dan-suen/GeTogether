import "./filter_button.scss";
import classNames from "classnames";

export default function Button(props) {
  let buttonClass = classNames("btn", "btn-outline-info");
  return (
    <button
      className={buttonClass}
    >
      MOFO
    </button>
  );
}