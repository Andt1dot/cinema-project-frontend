import React from "react";
import "./index.css";

const Seats = () => {
  const [selected, setSelected] = React.useState(false);

  return (
    <div className="theatre">
      <div className="cinema-seats left">
        <div className="cinema-row row-1">
          <div className="seat">
            <span className="tooltiptext">
              <div className="t">
                Loc.1
                <br />
                Rîndul 1
              </div>
              Tipul Gold
              <br />
              Preț 90 Lei
            </span>
          </div>
          <div className="seat">
            <span className="tooltiptext">
              <div className="t">
                Loc.1
                <br />
                Rîndul 1
              </div>
              Tipul Gold
              <br />
              Preț 90 Lei
            </span>
          </div>
          <div
            className={selected ? "seat-selected" : "seat"}
            onClick={(e) => setSelected(!selected)}
          >
            {!selected ? (
              <span className="tooltiptext">
                <div className="t">
                  Loc.1
                  <br />
                  Rîndul 1
                </div>
                Tipul Gold
                <br />
                Preț 90 Lei
              </span>
            ) : null}
          </div>
          <div className="seat">
            <span className="tooltiptext">
              <div className="t">
                Loc.1
                <br />
                Rîndul 1
              </div>
              Tipul Gold
              <br />
              Preț 90 Lei
            </span>
          </div>
          <div className="seat">
            <span className="tooltiptext">
              <div className="t">
                Loc.1
                <br />
                Rîndul 1
              </div>
              Tipul Gold
              <br />
              Preț 90 Lei
            </span>
          </div>
          <div className="seat">
            <span className="tooltiptext">
              <div className="t">
                Loc.1
                <br />
                Rîndul 1
              </div>
              Tipul Gold
              <br />
              Preț 90 Lei
            </span>
          </div>
          <div className="seat">
            <span className="tooltiptext">
              <div className="t">
                Loc.1
                <br />
                Rîndul 1
              </div>
              Tipul Gold
              <br />
              Preț 90 Lei
            </span>
          </div>
        </div>

        <div className="cinema-row row-2">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>

        <div className="cinema-row row-3">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>

        <div className="cinema-row row-4">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>

        <div className="cinema-row row-5">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>

        <div className="cinema-row row-6">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>

        <div className="cinema-row row-7">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
      </div>
    </div>
  );
};

export default Seats;
