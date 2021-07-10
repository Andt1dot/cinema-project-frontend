import React from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import UnauthorizedModal from "../UnauthorizedModal";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const [modalShow, setModalShow] = React.useState(true);
  const history = useHistory();
  const onClickRead = (e) => {
    setModalShow(false);
    history.push("/login");
    // return (<Redirect to="/login" />);
  };

  if (!isAuthenticated) {
    return <UnauthorizedModal show={modalShow} onHide={onClickRead} />;
  }
  return <Route {...props} />;
};

export default PrivateRoute;

export const AdminRoute = ({ isAuthenticated, isAdmin, ...props }) => {
  if (!isAuthenticated || (isAuthenticated && !isAdmin)) {
    return <Redirect to="/login" />;
  }
  return <Route {...props} />;
};
