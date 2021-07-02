import { useDispatch, useSelector } from "react-redux";
import Seats from "../components/Seats";

import fetchSeatsPremiere from "../actions/Seat";
import fetchReservationsPremiere from "../actions/Reservation";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const Reservation = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { premiere_id, cinema_id, hall_id } = useParams();

  useEffect(() => {
    dispatch(fetchSeatsPremiere());
    dispatch(
      fetchReservationsPremiere(
        premiere_id,
        cinema_id,
        hall_id,
        location.search
      )
    );
  }, [dispatch, premiere_id, cinema_id, hall_id, location.search]);

  let { seats, errorSeats } = useSelector((state) => ({
    seats: state.Seat.seats,
    errorSeats: state.Seat.error,
  }));

  const { reservations, errorReservations } = useSelector((state) => ({
    reservations: state.Reservation.reservations,
    errorReservations: state.Reservation.error,
  }));

  if (reservations) {
    seats = seats.map((el) => {
      for (let seat in reservations.seats) {
        if (el._id === reservations.seats[seat]._id) {
          return { ...el, seat_status: "busy" };
        }
      }

      return el;
    });
  }

  return (
    <div className="container">
      <Seats seats={seats}></Seats>
    </div>
  );
};

export default Reservation;
