import React, { useEffect, useMemo, useState } from "react";
import { getAllReservations } from "../../actions/Reservation";
import { useSearch } from "../../contexts/SearchContext";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { CaretUp, CaretDown } from "react-bootstrap-icons";

const ReservationsList = () => {
  const [sortState, setSortState] = useState({ key: "", direction: "" });
  const { filteredData } = useSearch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReservations());
  }, [dispatch]);

  const { reservations, loading, error } = useSelector((state) => ({
    reservations: state.Reservation.reservations,
    loading: state.Reservation.loading,
    error: state.Reservation.error,
  }));

  const sortedItems = useMemo(() => {
    let sortableItems = [...filteredData];

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
  }, [sortState, filteredData]);

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

  const getIcon = (key) => {
    if (sortState.key === key && sortState.direction === "ascending") {
      return <CaretDown className="single-icon" />;
    } else if (sortState.key === key && sortState.direction === "descending") {
      return <CaretUp className="single-icon" />;
    }
    return (
      <span className="sort-icon">
        <CaretUp /> <CaretDown />
      </span>
    );
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
              <th>
                <button
                  onClick={() => handleSort("reserv_date")}
                  className="btn btn-dark sort-button"
                >
                  Reserv_Date {getIcon("reserv_date")}
                </button>
              </th>
              <th>
                <button
                  onClick={() => handleSort("total_price")}
                  className="btn btn-dark sort-button"
                >
                  Total_Price {getIcon("total_price")}
                </button>
              </th>
              <th>
                <button
                  onClick={() => handleSort("createdAt")}
                  className="btn btn-dark sort-button"
                >
                  Created_At
                  {getIcon("createdAt")}
                </button>
              </th>
              <th>
                <button
                  onClick={() => handleSort("updatedAt")}
                  className="btn btn-dark sort-button"
                >
                  Updated_At
                  {getIcon("updatedAt")}
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
                    View
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
