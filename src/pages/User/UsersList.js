import React, { useEffect, useState } from "react";
import getUsers from "../../actions/User";
import { useDispatch, useSelector } from "react-redux";
import { useSearch } from "../../contexts/SearchContext";
import { Spinner, Table } from "react-bootstrap";
import UserDetails from "../../components/UserDetails/index"

const UsersList = () => {

  const [showModal, setShowModal] = useState({onShow:false, onHide:true, userData:""});

  const dispatch = useDispatch();
  const { filteredData } = useSearch();

  const { users, loading, error } = useSelector((state) => ({
    users: state.User.users,
    loading: state.User.loading,
    error: state.User.error,
  }));

 const onHandleClickUser = (user) => {
   console.log("Salut")
   setShowModal({...showModal,onShow:true, onHide:false, userData:user});
 }


  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

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
          <Table bordered hover variant="dark" className="table-style" responsive >
            <thead>
              <tr>
                <th>ID</th>
                <th>Role</th>
                <th>Email</th>
                <th>Status</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Age</th>
                <th>Phone</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((user) => (
                <tr key={user._id} onClick={(e)=>onHandleClickUser(user)}>
                  <td>{user._id}</td>

                  <td align="center" >
                    {user.role === 1 ? "admin" : "user"}
                  </td>
                  <td align="center">{user.email}</td>
                  <td align="center">
                    {user.status}
                  </td>
                  <td align="center">{user.firstname}</td>
                  <td align="center">{user.lastname}</td>
                  <td align="center">{user.username}</td>
                  <td align="center">{user.age}</td>
                  <td align="center">{user.mobile}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <UserDetails onShow={showModal.onShow} onHide={(e)=>setShowModal({...showModal,onShow:false,onHide:true})} userData={showModal.userData}></UserDetails>
        </>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
};

export default UsersList;
