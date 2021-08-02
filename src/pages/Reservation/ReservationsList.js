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
        <Table bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Premiere</th>
              <th>Seats</th>
              <th>Parent_User</th>
              <th>Reserv_Date</th>
              <th>Reserv_Hour</th>
              <th>Total_Price</th>
              <th>Status</th>
              <th>Created_At</th>
              <th>Updated_At</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reserv) => (
              
              <tr key={reserv._id}>
                <td>{reserv._id}</td>
                {/* <td>{reserv.premiere}</td>
                <td>reserv.seats</td> */}
                <td>{reserv.parent_user}</td>
                <td>{reserv.reserv_date}</td>
                <td>{reserv.reserv_hour}</td>
                <td>{reserv.total_price}</td>
                <td>{reserv.status}</td>
                <td>{reserv.createdAt}</td>
                <td>{reserv.updatedAt}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
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
