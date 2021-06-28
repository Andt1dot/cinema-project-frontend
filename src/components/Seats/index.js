import React from "react";
import "./index.css";

const Seats = () => {

  const seats = [
    { row_num: "1", seat: "1" },
    { row_num: "2", seat: "1" },
    { row_num: "3", seat: "1" },
    { row_num: "4", seat: "1" },
    { row_num: "1", seat: "2" },
    { row_num: "1", seat: "3" },
    { row_num: "1", seat: "4" },
    { row_num: "1", seat: "5" },
    { row_num: "1", seat: "6" },
    { row_num: "2", seat: "2" },
    { row_num: "2", seat: "3" },
    { row_num: "3", seat: "2" },
    { row_num: "3", seat: "4" },
    { row_num: "3", seat: "5" },
    { row_num: "2", seat: "4" },
    { row_num: "2", seat: "5" },
    { row_num: "3", seat: "3" },
  ];



  const [selected, setSelected] = React.useState(false);
  
  let count = 0;
  const seatHtml = seats
    .sort((a, b) =>
      a.seat === b.seat ? a.row_num - b.row_num : a.seat - b.seat
    )
    .map((el1) => {
      if (count !== el1.seat) {
        count = el1.seat;
        return (
          <div className={`cinema-row row-${el1.sea}`}>
            {seats
              .sort((a, b) => a.seat - b.seat)
              .map((el2) => {
                if (el1.seat === el2.seat) {
          //        console.log(el2.row_num, el2.seat);
                  return (
                    <div
                      className={selected ? "seat-selected" : "seat"}
                      onClick={(e) => {
                        setSelected(!selected);
                      }}
                    >
                      {!selected ? (
                        <span className="tooltiptext">
                          <div className="t">
                            Locul {el2.seat}
                            <br />
                            Rîndul {el2.row_num}
                          </div>
                          Tipul Gold
                          <br />
                          Preț 90 Lei
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
