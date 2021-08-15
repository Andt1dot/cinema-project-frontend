import React, { useEffect, useMemo, useState } from "react";
import { getAllReservations } from "../../actions/Reservation";
import { useSearch } from "../../contexts/SearchContext";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, Table } from "react-bootstrap";
import { CaretUp, CaretDown } from "react-bootstrap-icons";

const ReservationsList = () => {
  const [sortState, setSortState] = useState({ key: "", direction: "" });
  const [pageIndex] = useState(0);
  const [pageSize] = useState(15);
  const { filteredData } = useSearch();
  const dispatch = useDispatch();

  const { reservations, loading, error, pageCount } = useSelector((state) => ({
    reservations: state.Reservation.reservations,
    loading: state.Reservation.loading,
    error: state.Reservation.error,
    pageCount: state.Reservation.pageCount,
  }));
  console.log("reserv: ", reservations);

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

  useEffect(() => {
    dispatch(
      getAllReservations({ limit: pageSize, skip: pageSize * pageIndex })
    );
  }, [dispatch, pageIndex, pageSize]);

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

  let active = 1;
  let items = [];
  for (let number = 1; number <= pageCount; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : !loading && reservations ? (
        <>
          <Table bordered hover variant="dark" className="table-style">
            <thead>
              <tr>
                <th className="table-col-width">#ID</th>
                <th className="table-col-width">Premiere</th>
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
                {/* <th>Seats</th> */}
                {/* <th>Status</th> */}
                {/* <th>Reserv_Hour</th> */}
              </tr>
            </thead>

            <tbody>
              {sortedItems.map((reserv) => (
                <tr key={reserv._id}>
                  <td className="table-col-width">{reserv._id}</td>
                  <td className="table-col-width">
                    {reserv.premiere.movie.title}
                  </td>
                  <td className="table-col-width">{reserv.parent_user}</td>
                  <td>{reserv.reserv_date.split("T", 1)}</td>
                  <td>{reserv.total_price}</td>
                  <td>{reserv.createdAt.split("T", 1)}</td>
                  <td>{reserv.updatedAt.split("T", 1)}</td>
                  <td style={{ textAlign: "center" }}>
                    <button className="btn btn-primary">Manage</button>
                  </td>
                  {/* <td>reserv.seats</td> */}
                  {/* <td>{reserv.status}</td> */}
                  {/* <td>{reserv.reserv_hour}</td> */}
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination>{items}</Pagination>
        </>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
};

export default ReservationsList;
