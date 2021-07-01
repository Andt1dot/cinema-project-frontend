import React from "react";
import "./index.css";

const initalState = { id: 0, checked: false };

const Seats = ({ seats }) => {
  const [seatStatus, setSeatStatus] = React.useState(initalState);

  console.log("vin datele", seats);

  let count = 0;
  const seatHtml = seats
    .sort((a, b) =>
      a.seat_num === b.seat_num
        ? b.row_num - a.row_num
        : b.seat_num - a.seat_num
    )
    .map((el1) => {
      if (count !== el1.seat_num) {
        count = el1.seat_num;
        return (
          <div className={`cinema-row row-${el1.sea}`}>
            {seats
              .sort((a, b) => b.seat_num - a.seat_num)
              .map((el2) => {
                if (el1.seat_num === el2.seat_num) {
                  return (
                    <div
                      className={
                        seatStatus.id === el2._id && seatStatus.checked === true
                          ? "seat-selected"
                          : "seat"
                      }
                      onClick={(e) => {
                        setSeatStatus({
                          id: el2._id,
                          checked: !seatStatus.checked,
                        });
                      }}
                    >
                      {!seatStatus.checked ? (
                        <span className="tooltiptext">
                          <div className="t">
                            Locul {el2.seat_num}
                            <br />
                            Rîndul {el2.row_num}
                          </div>
                          Tipul {el2.seat_type}
                          <br />
                          {el2.seat_price} Lei
                        </span>
                      ) : null}
                    </div>
                  );
                }
              })}
          </div>
        );
      }
    });

  return (
    <div className="theatre">
      <div className="cinema-seats left">{seatHtml}</div>
    </div>
  );
};

export default Seats;
