import React, { useEffect, useMemo, useState } from "react";
import { getAllReservations } from "../../actions/Reservation";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";

const ReservationsList = () => {
  const [sortState, setSortState] = useState({ key: "", direction: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReservations());
  }, [dispatch]);

  const { reservations, loading, error } = useSelector((state) => ({
    reservations: state.Reservation.reservations,
    loading: state.Reservation.loading,
    error: state.Reservation.error,
  }));

  const getClassNamesFor = (name) => {
    if (!sortState) {
      return;
    }
    return sortState.key === name ? sortState.direction : undefined;
  };

  const sortedItems = useMemo(() => {
    let sortableItems = [...reservations];

    if (sortState !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortState.key] < b[sortState.key]) {
          return sortState.direction === "ascending" ? -1 : 1;
        }
        if (a[sortState.key] > b[sortState.key]) {
          return sortState.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [sortState, reservations]);

  const handleSort = (key) => {
    let direction = "ascending";
    if (
      sortState &&
      sortState.key === key &&
      sortState.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortState({ key, direction });
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : !loading && reservations ? (
        <Table bordered hover variant="dark" className="table-style">
          <thead>
            <tr>
              <th className="table-col-width">#ID</th>
              <th className="table-col-width">Parent_User</th>
              <th>Reserv_Date</th>
              <th>Total_Price</th>
              <th>
                {" "}
                <button
                  onClick={() => handleSort("createdAt")}
                  className={getClassNamesFor("createdAt")}
                >
                  Created_At
                </button>
              </th>
              <th>
                <button
                  onClick={() => handleSort("updatedAt")}
                  className={getClassNamesFor("updatedAt")}
                >
                  Updated_At
                </button>
              </th>
              <th>Options</th>
              {/* <th>Premiere</th> */}
              {/* <th>Seats</th> */}
              {/* <th>Status</th> */}
              {/* <th>Reserv_Hour</th> */}
            </tr>
          </thead>
          <tbody>
            {sortedItems.map((reserv) => (
              <tr key={reserv._id}>
                <td className="table-col-width">{reserv._id}</td>
                <td className="table-col-width">{reserv.parent_user}</td>
                <td>{reserv.reserv_date.split("T", 1)}</td>
                <td>{reserv.total_price}</td>
                <td>{reserv.createdAt.split("T", 1)}</td>
                <td>{reserv.updatedAt.split("T", 1)}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    style={{ width: "60px", marginRight: "7px" }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    style={{ width: "60px" }}
                  >
                    Delete
                  </button>
                </td>
                {/* <td>{reserv.premiere}</td> */}
                {/* <td>reserv.seats</td> */}
                {/* <td>{reserv.status}</td> */}
                {/* <td>{reserv.reserv_hour}</td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
};

export default ReservationsList;
