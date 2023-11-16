import React, { useContext } from "react";
import ReactDOM from "react-dom";
import AuthContext from "../../store/auth-context";
import styles from "./CartItemsModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onRemoveModal}></div>;
};

const Modal = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      <aside className={styles.modal}>
        <ul>
          {authCtx.outPutToCartValues.map((outPutValue) => {
            return (
              <li key={outPutValue.id}>
                <div>
                  <h5>{outPutValue.name}</h5>
                  <div className={styles.price}>
                    <h6>{outPutValue.price}</h6>
                    <p>*1</p>
                  </div>
                </div>
                <div>
                  <button className={styles.negativebtn}> - </button>
                  <button className={styles.positivebtn}> + </button>
                </div>
              </li>
            );
          })}
        </ul>
        <hr></hr>
        <div className={styles.totalMeals}>
          <h4>Total Amount</h4>
          <div className={styles.totalPrice}>
            <h4>$33.00</h4>
            <div>
              <button onClick={props.onRemoveModal} className={styles.closeBtn}>
                Close
              </button>
              <button className={styles.orderBtn}>Order</button>
            </div>
          </div>
        </div>
      </aside>
    </React.Fragment>
  );
};

const CartItemsModal = (props) => {
  return (
    <section className={styles.overlays}>
      {ReactDOM.createPortal(
        <Backdrop onRemoveModal={props.onRemoveModal} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <Modal onRemoveModal={props.onRemoveModal} />,
        document.getElementById("overlays")
      )}
    </section>
  );
};

export default CartItemsModal;
