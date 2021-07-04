import "./index.css";

const LegendSeats = ({ price }) => {
  return (
    <div>
      <div className="title-info ">
        <h1>Legenda</h1>
        <h1>Total</h1>
      </div>

      <div className="content-about-seats">
        <div className="seat-status">
          <div className="seat-free-legend">
            <p>Liber</p>
          </div>

          <div className="seat-busy-legend">
            <p>Ocupat</p>
          </div>
          <div className="seat-selected-legend">
            <p>Selectat</p>
          </div>
        </div>
        <div className="total-price">
          <div className="number-seats">{`X${price.countTicket} Bilete`}</div>
          <div className="price">{`${price.totalPrice} Lei`}</div>
        </div>
      </div>
      <div className="confirmation-container">
        <button className="confirmation-btn">Rezerveaza</button>
      </div>
    </div>
  );
};

export default LegendSeats;
