import React, { useState } from "react";
import "./index.css";
import LegendSeats from "./Legend/index";
const Seats = ({ seats }) => {
  const [reservations, setReservations] = useState([]);

  console.log("state", reservations);

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
          <div className={`cinema-row row-${el1.seat_num}`}>
            {seats
              .sort((a, b) => b.seat_num - a.seat_num)
              .map((el2) => {
                if (el1.seat_num === el2.seat_num) {
                  return (
                    <div
                      className={
                        reservations.find(
                          ({ seat }) =>
                            seat._id === el2._id && seat.seat_status !== "busy"
                        )
                          ? `seat-selected`
                          : `seat-${el2.seat_status}`
                      }
                      onClick={(e) => {
                        if (el2.seat_status === "free") {
                          if (
                            reservations.find(
                              ({ seat }) => seat._id === el2._id
                            )
                          ) {
                            setReservations(
                              reservations.filter(
                                ({ seat }) => seat._id !== el2._id
                              )
                            );
                          } else {
                            setReservations([...reservations, { seat: el2 }]);
                          }
                        }
                      }}
                    >
                      {el2.seat_status == "busy" ? null : (
                        <span className="tooltiptext">
                          <div className="t">
                            Locul {el2.seat_num}
                            <br />
                            Rîndul {el2.row_num}
                          </div>
                          {el2.seat_type}
                          <br />
                          {el2.seat_price} Lei
                        </span>
                      )}
                    </div>
                  );
                }
              })}
          </div>
        );
      }
    });

  return (
    <div className="container">
      <div className="theatre">
        <div className="cinema-seats left">{seatHtml}</div>
      </div>
      <LegendSeats reservations={reservations} />
    </div>
  );
};

export default Seats;
