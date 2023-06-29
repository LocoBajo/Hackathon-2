import styles from "./Price.module.css";
import { useUserContext } from "../../contexts/UserContext";
import iPhone from "../../assets/iPhone.svg";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

export default function Price() {
  const calculateValueM = (number) => {
    let initial = 0;
    let finalValue = 30;
    for (let i = 1; i < number; i += 1) {
      finalValue += 10 + initial;
      initial += 4;
    }
    return finalValue;
  };

  const calculateValueS = (number) => {
    let finalValue = 31;
    let addedNumber = 0;
    // eslint-disable-next-line eqeqeq
    if (number == 1000) {
      // eslint-disable-next-line no-unused-expressions, eqeqeq
      number == 1024;
    }
    for (let i = 16; i < number; i += i) {
      finalValue += 14 + addedNumber;
      addedNumber += 7;
    }
    return finalValue;
  };
  const { status, model, storage, memory } = useUserContext();

  const addedValue = calculateValueM(memory) + calculateValueS(storage);

  let ponderation = null;
  if (status === "Réparable") ponderation = 0.5;
  else if (status === "Bloqué") ponderation = 0.1;
  else if (status === "Reconditionnable") ponderation = 0.05;

  const weighedValue = Math.floor(addedValue - addedValue * ponderation);

  const recommandedPrice = Math.floor(weighedValue / 10);
  /*   console.log(addedValue, weighedValue, recommandedPrice); */

  return (
    <div>
      <Header />
      <div className={styles.body}>
        <h2> Résultat </h2>
        <div className={styles.phonecontainer}>
          <div className={styles.picturecontainer}>
            <img src={iPhone} alt="" />
          </div>
          <div className={styles.infos}>
            <h3> Modèle : {model} </h3>
            <h3> Stockage : {storage} GO </h3>
            <h3> Mémoire RAM : {memory} GO </h3>
            <h3> Etat : {status} </h3>
            <h3> Pondération : {ponderation * 100}% </h3>
          </div>
        </div>
        <div className={styles.pricecontainer}>
          <h1> Prix conseillé : {recommandedPrice} euros </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
