import React from "react";
import ReactDOM from "react-dom";
import styles from "./CartItemsModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onRemoveModal}></div>;
};

const Modal = (props) => {
  return (
    <React.Fragment>
      <aside className={styles.modal}>
        <ul>
          <li>
            <div>
              <h5>Schnitzel</h5>
              <div className={styles.price}>
                <h6>$14.23</h6>
                <p>*2</p>
              </div>
              {/* <h6>$14.23 <p>*2</p></h6> */}
            </div>
            <div>
              <button className={styles.negativebtn}> - </button>
              <button className={styles.positivebtn}> + </button>
            </div>
          </li>
          {/* <hr></hr>
          <li>
            <div>
              <h5>Schnitzel</h5>
              <div className={styles.price}>
                <h6>$17.23</h6>
                <p>*2</p>
              </div>
            </div>
            <div>
              <button className={styles.negativebtn}> - </button>
              <button className={styles.positivebtn}> + </button>
            </div>
          </li>
          <hr></hr> */}
          {/* <li>
            <div>
              <h5>Schnitzel</h5>
              <div className={styles.price}>
                <h6>$11.23</h6>
                <p>*1</p>
              </div>
            </div>
            <div>
              <button className={styles.negativebtn}> - </button>
              <button className={styles.positivebtn}> + </button>
            </div>
          </li> */}
        </ul>
        <hr></hr>
        <div className={styles.totalMeals}>
          <h4>Total Amount</h4>
          <div className={styles.totalPrice}>
            <h4>$33.00</h4>
            <div>
              <button onClick={props.onRemoveModal} className={styles.closeBtn}>Close</button>
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
     {ReactDOM.createPortal(<Backdrop onRemoveModal = {props.onRemoveModal}/>, document.getElementById("backdrop")) }
      {ReactDOM.createPortal(<Modal onRemoveModal = {props.onRemoveModal}/>, document.getElementById("overlays")) }
    </section>
  );
};

export default CartItemsModal;
