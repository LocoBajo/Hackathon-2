import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import styles from "./Storage.module.css";
import { useUserContext } from "../../contexts/UserContext";
import Database from "../../assets/Database.svg";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

export default function Storage() {
  const { setStorage } = useUserContext();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    storage: Yup.number().integer().required("*"),
  });

  const formik = useFormik({
    initialValues: {
      storage: "",
    },
    validationSchema,

    onSubmit: (values) => {
      setStorage(values.storage);
      navigate("/memory");
      // récupérer brand et model dans un state pour pouvoir les afficher en fin de parcours
    },
  });
  return (
    <div>
      <Header />
      <div className={styles.body}>
        <div className={styles.descriptioncontainer}>
          <img src={Database} alt="database" />
          <h2> Choisissez la capacité de stockage </h2>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.rowcontainer}>
            <div className={styles.checkbox}>
              <label>
                <input
                  type="radio"
                  name="storage"
                  value="16"
                  checked={formik.values.storage === "16"}
                  onChange={formik.handleChange}
                />
                16 gos
              </label>
            </div>
            <div className={styles.checkbox}>
              <label>
                <input
                  type="radio"
                  name="storage"
                  value="32"
                  checked={formik.values.storage === "32"}
                  onChange={formik.handleChange}
                />
                32 gos
              </label>
            </div>
          </div>
          <div className={styles.rowcontainer}>
            <div className={styles.checkbox}>
              <label>
                <input
                  type="radio"
                  name="storage"
                  value="64"
                  checked={formik.values.storage === "64"}
                  onChange={formik.handleChange}
                />
                64 gos
              </label>
            </div>
            <div className={styles.checkbox}>
              <label>
                <input
                  type="radio"
                  name="storage"
                  value="128"
                  checked={formik.values.storage === "128"}
                  onChange={formik.handleChange}
                />
                128 gos
              </label>
            </div>
          </div>
          <div className={styles.rowcontainer}>
            <div className={styles.checkbox}>
              <label>
                <input
                  type="radio"
                  name="storage"
                  value="256"
                  checked={formik.values.storage === "256"}
                  onChange={formik.handleChange}
                />
                256 gos
              </label>
            </div>
            <div className={styles.checkbox}>
              <label>
                <input
                  type="radio"
                  name="storage"
                  value="512"
                  checked={formik.values.storage === "512"}
                  onChange={formik.handleChange}
                />
                512 gos
              </label>
            </div>
          </div>
          <div className={styles.singlecheckbox}>
            <label>
              <input
                type="radio"
                name="storage"
                value="1000"
                checked={formik.values.storage === "1000"}
                onChange={formik.handleChange}
              />
              1 To
            </label>
          </div>
          <div className={styles.buttoncontainer}>
            <button type="submit">Suivant</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
