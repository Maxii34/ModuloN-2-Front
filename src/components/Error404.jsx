import React from "react";
import error404 from "../assets/404.jpg";
import { Link } from "react-router";
import { Button } from "react-bootstrap";

const Error404 = () => {
  return (
    <div id="pag404" className="text-center py-5">
      <img src={error404} alt="imagen de error 404" id="img404" />
      <h2 className="text-light">¡Error 404, página no encontrada!</h2>
      <p className="text-light">
        Esta página no se encuentra o no existe, revisa la URL o vuelve a
        intentarlo más tarde.
      </p>
      <Button as={Link} to="/" className="btn-success text-light">
        Volver al inicio
      </Button>
    </div>
  );
};

export default Error404;
