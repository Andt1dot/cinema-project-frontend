import React, { useEffect } from "react";
import { getAllReservations } from "../../actions/Reservation";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";

const ReservationsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReservations());
  }, [dispatch]);

  const { reservations, loading, error } = useSelector((state) => ({
    reservations: state.Reservation.reservations,
    loading: state.Reservation.loading,
    error: state.Reservation.error,
  }));

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
              <th>Created_At</th>
              <th>Updated_At</th>
              <th>Options</th>
              {/* <th>Premiere</th> */}
              {/* <th>Seats</th> */}
              {/* <th>Status</th> */}
              {/* <th>Reserv_Hour</th> */}
            </tr>
          </thead>
          <tbody>
            {reservations.map((reserv) => (
              <tr key={reserv._id}>
                <td className="table-col-width">{reserv._id}</td>
                <td className="table-col-width">{reserv.parent_user}</td>
                <td>{reserv.reserv_date}</td>
                <td>{reserv.total_price}</td>
                <td>{reserv.createdAt}</td>
                <td>{reserv.updatedAt}</td>
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
