import React, { useEffect } from "react";
import getUsers from "../../actions/User";
import { useDispatch, useSelector } from "react-redux";
import { Spinner, Table } from "react-bootstrap";

const UsersList = () => {
  const dispatch = useDispatch();

  const { users, loading, error } = useSelector((state) => ({
    users: state.User.users,
    loading: state.User.loading,
    error: state.User.error,
  }));

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log("users: ", users);

  return (
    <>
      {loading ? (
        <div className="spinner-style">
          <Spinner animation="border" variant="light" />
        </div>
      ) : !loading && users ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <h2>Users</h2>
          </div>
          <Table bordered hover variant="dark" className="table-style">
            <thead>
              <tr>
                <th className="table-col-width">#ID</th>
                <th className="table-col-width">Role</th>
                <th className="table-col-width">Email</th>
                <th className="table-col-width">Status</th>
                <th className="table-col-width">First Name</th>
                <th className="table-col-width">Last Name</th>
                <th className="table-col-width">Username</th>
                <th className="table-col-width">Age</th>
                <th className="table-col-width">Phone</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="table-col-width">{user._id}</td>
                  <td className="table-col-width">{user.role}</td>
                  <td className="table-col-width">{user.email}</td>
                  <td className="table-col-width">{user.status}</td>
                  <td className="table-col-width">{user.firstname}</td>
                  <td className="table-col-width">{user.lastname}</td>
                  <td className="table-col-width">{user.username}</td>
                  <td className="table-col-width">{user.age}</td>
                  <td className="table-col-width">{user.mobile}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
};

export default UsersList;
