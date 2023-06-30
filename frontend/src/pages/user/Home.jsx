/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useFormik } from "formik";
import * as Yup from "yup";
import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";
import registered from "../../assets/registered.svg";
import plus from "../../assets/plus.svg";
import question from "../../assets/question.png";
import Header from "../../components/user/Header";
import TutoModal from "./TutoModal";
import PhoneCard from "../../components/user/PhoneCard";
import APIService from "../../services/APIService";

export default function Home() {
  const [showTutoModal, setShowTutoModal] = useState(false);
  const handleClick = () => {
    setShowTutoModal(true);
  };
  const validationSchema = Yup.object({
    brand: Yup.string().required("*"),
  });
  const [phones, setPhones] = useState(null);
  const formik = useFormik({
    initialValues: {
      brand: "",
    },
    validationSchema,

    onSubmit: () => {
      APIService.get(`/api/phones`).then((response) => {
        setPhones(response.data);
      });
    },
  });

  return (
    <div>
      <Header />
      <h1 className={styles.title2}>Rechercher un téléphone</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.select}>
          <select
            className={styles.select1}
            name="brand"
            onChange={formik.handleChange}
            value={formik.values.brand}
            type="select"
          >
            <option value="">Sélectionnez une marque</option>
            <option value="Samsung">Samsung</option>
            <option value="Apple">Apple</option>
            <option value="Huawei">Huawei</option>
            <option value="Xiaomi">Xiaomi</option>
          </select>
          <button className={styles.validate} type="submit">
            Valider
          </button>
        </div>
      </form>
      <div>
        {showTutoModal ? (
          <TutoModal setShowTutoModal={setShowTutoModal} />
        ) : null}
      </div>
      <ul>
        {phones &&
          phones
            .filter((phone) => phone.Brand === formik.values.brand)
            .map((phone) => (
              <li key={phone.id}>
                <PhoneCard phone={phone} />
              </li>
            ))}
      </ul>
      <div className={styles.body} />
      <div className={styles.footer}>
        <NavLink to="/home">
          <img src={registered} alt="arrow" />
        </NavLink>
        <NavLink to="/status">
          <img src={plus} alt="logo" />
        </NavLink>
        {/*         // eslint-disable-next-line jsx-a11y/click-events-have-key-events,
        jsx-a11y/click-events-have-key-events,
        jsx-a11y/click-events-have-key-events,
        jsx-a11y/click-events-have-key-events,
        jsx-a11y/no-noninteractive-element-interactions */}
        <img src={question} alt="question" onClick={handleClick} />
      </div>
    </div>
  );
}
