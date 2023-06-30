import styles from "./TutoModal.module.css";
import bulb from "../../assets/bulb.svg";

// eslint-disable-next-line react/prop-types
export default function TutoModal({ setShowTutoModal }) {
  const handleClick = () => {
    setShowTutoModal(false);
  };
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <div className={styles.imagecontainer}>
          <img src={bulb} alt="bulb" />
        </div>
        <div className={styles.textcontainer}>
          <p>
            {" "}
            Vous pouvez parcourir notre base de données afin de trouver un
            modèle de téléphone spécifique. Si aucun des téléphones ne
            correspond à votre recherche, cliquez sur l'icône "+" pour utiliser
            notre outil et calculer le coût de votre téléphone.
          </p>
        </div>
        <button type="submit" onClick={handleClick}>
          {" "}
          Fermer{" "}
        </button>
      </div>
    </div>
  );
}
