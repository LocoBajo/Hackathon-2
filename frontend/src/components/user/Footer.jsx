import { useNavigate, NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import registered from "../../assets/registered.svg";
import plus from "../../assets/plus.svg";
import question from "../../assets/question.png";

export default function Footer() {
  const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/status");
  // };
  return (
    <div className={styles.footer}>
      <NavLink to="/home">
        <img src={registered} alt="arrow" />
      </NavLink>
      <NavLink to="/status">
        <img src={plus} alt="logo" />
      </NavLink>
      <NavLink to="/home">
        <img src={question} alt="question" />
      </NavLink>
    </div>
  );
}
