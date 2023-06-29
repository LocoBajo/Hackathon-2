import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import styles from "./Status.module.css";
import { useUserContext } from "../../contexts/UserContext";
import phone from "../../assets/phone.svg";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

export default function Status() {
  const { setStatus } = useUserContext();
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    status: Yup.string().required("*"),
  });

  const formik = useFormik({
    initialValues: {
      status: "",
    },
    validationSchema,

    onSubmit: (values) => {
      setStatus(values.status);
      navigate("/brand");
      // récupérer brand et model dans un state pour pouvoir les afficher en fin de parcours
    },
  });
  return (
    <div>
      <Header />
      <div className={styles.body}>
        <div className={styles.descriptioncontainer}>
          <img src={phone} alt="memory" />
          <h2> Etat de l'appareil </h2>
        </div>
        <h2 className={styles.instructions}>
          {" "}
          Veuillez indiquer l'état général de l'appareil{" "}
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.rowcontainer}>
            <div className={styles.checkbox}>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="DEEE"
                  checked={formik.values.status === "DEEE"}
                  onChange={formik.handleChange}
                />
                DEEE
              </label>
            </div>
            <div className={styles.checkbox}>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="Réparable"
                  checked={formik.values.status === "Réparable"}
                  onChange={formik.handleChange}
                />
                Réparable
              </label>
            </div>
          </div>
          <div className={styles.singlecheckbox}>
            <label>
              <input
                type="radio"
                name="status"
                value="Reconditionné"
                checked={formik.values.status === "Reconditionné"}
                onChange={formik.handleChange}
              />
              Reconditionné
            </label>
          </div>
          <div className={styles.rowcontainer}>
            <div className={styles.checkbox}>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="Bloqué"
                  checked={formik.values.status === "Bloqué"}
                  onChange={formik.handleChange}
                />
                Bloqué
              </label>
            </div>
            <div className={styles.checkbox}>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="Reconditionnable"
                  checked={formik.values.status === "Reconditionnable"}
                  onChange={formik.handleChange}
                />
                Reconditionnable
              </label>
            </div>
          </div>
          <div className={styles.buttoncontainer}>
            <button className={styles.statebutton} type="submit">
              Suivant
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
