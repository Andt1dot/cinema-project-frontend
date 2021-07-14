import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPremiereMovies } from "../../actions/Premiere";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../../components/MovieCard";
import FilterCustom from "../../components/FilterCustom";

const PremieresList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPremiereMovies());
  }, [dispatch]);

  const { premieres, loading, error } = useSelector((state) => ({
    premieres: state.Premiere.premieres,
    loading: state.Premiere.loading,
    error: state.Premiere.error,
  }));

  return (
    <>
      {loading ? (
        <div>Loading....</div>
      ) : !loading && premieres ? (
        <div className="row">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <span
              style={{ padding: 10, fontSize: "30px", textAlign: "center" }}
            >
              Premieres
            </span>
            <FilterCustom
              addButtonTitle="Add Premiere"
              pathName="/admin/premieres/premiere-add"
            />
          </div>
          {premieres.map((premiere) => {
            return (
              <Link
                to={`/admin/premieres/${premiere._id}`}
                key={premiere._id}
                style={{ width: 250, marginLeft: 20 }}
              >
                <MovieCard premiere={premiere} />
              </Link>
            );
          })}
        </div>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
};

export default PremieresList;
