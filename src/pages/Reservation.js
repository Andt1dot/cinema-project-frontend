import { useDispatch, useSelector } from "react-redux";
import Seats from "../components/Seats";
import LegendSeats from "../components/Seats/Legend";
import fetchSeatsPremiere from "../actions/Seat";
import { useEffect } from "react";

const Reservation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSeatsPremiere());
  }, [dispatch]);

  const { seats, error } = useSelector((state) => ({
    seats: state.Seat.seats,
    error: state.Seat.error,
  }));
  console.log("Date ==", seats);
  return (
    <div className="container">
      <Seats seats={seats}></Seats>
      <LegendSeats />
    </div>
  );
};

export default Reservation;
