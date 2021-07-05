import { useDispatch, useSelector } from "react-redux";
import Seats from "../components/Seats";

import fetchSeatsPremiere from "../actions/Seat";
import fetchReservationsPremiere from "../actions/Reservation";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { addReservation } from "../actions/Reservation";
import { fetchPremiereMovies } from "../actions/Premiere";
const Reservation = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { premiere_id, cinema_id, hall_id } = useParams();
  const [finalReservation, setFinalReservation] = useState({
    seats: [],
    price: 0,
  });

  const handleClickReservation = (seats, total_price) => (e) => {
    const reserv_hour = location.search.split("=")[2];
    const reserv_date = location.search.split("=")[1].split("&")[0];

    let seatsReservation = seats.map((el) => {
      return { _id: el.seat._id, client_type: el.client_type };
    });

    dispatch(
      addReservation(
        seatsReservation,
        premiere_id,
        reserv_date,
        reserv_hour,
        total_price
      )
    );
  };

  useEffect(() => {
    dispatch(fetchPremiereMovies());
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

  const { premiere } = useSelector((state) => ({
    premiere: state.Premiere.premieres.find((el) => el._id === premiere_id),
  }));

  if (reservations) {
    seats = seats.map((el) => {
      for (let seat in reservations) {
        if (el._id === reservations[seat]._id) {
          return { ...el, seat_status: "busy" };
        }
      }

      return el;
    });
  }

  return (
    <div className="container">
      <Seats
        seats={seats}
        premiere={premiere}
        setFinalReservation={setFinalReservation}
        handleClickReservation={handleClickReservation}
      ></Seats>
    </div>
  );
};

export default Reservation;
