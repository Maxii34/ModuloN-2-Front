const productosBackend = import.meta.env.VITE_API_TURNOS;
const usuariosBackend = import.meta.env.VITE_API_USUARIOS;

export const crearTurno = async (data) => {
  try {
    const respuesta = await fetch(productosBackend, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioKey")).token,
      },
      body: JSON.stringify(data),
    });
    const datos = await respuesta.json();
    console.log(respuesta);
    return {
      status: respuesta.status,
      data: datos,
      ok: respuesta.ok,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const listarTurnos = async () => {
  try {
    const respuesta = await fetch(productosBackend);
    return respuesta;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const editarTurnos = async (id, data) => {
  try {
    const respuesta = await fetch(`${productosBackend}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioKey")).token,
      },
      body: JSON.stringify(data),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const obtenerTurnoPorId = async (id) => {
  try {
    const respuesta = await fetch(`${productosBackend}/${id}`);
    return respuesta;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const eliminarTurno = async (id) => {
  try {
    const respuesta = await fetch(`${productosBackend}/${id}`, {
      method: "DELETE",
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem("usuarioKey")).token,
      },
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const registroUsuario = async (nuevoUsuario) => {
  try {
    const respuesta = await fetch(usuariosBackend, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoUsuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const usuarioLogin = async (usuario) => {
  try {
    const respuesta = await fetch(`${usuariosBackend}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });

    // ← AGREGAR ESTO TEMPORALMENTE
    const datos = await respuesta.clone().json();
    console.log("RESPUESTA COMPLETA DEL BACKEND:", datos);
    console.log("Usuario recibido:", datos.usuario);
    console.log("Tipo recibido:", datos.usuario?.tipo);

    return respuesta;
  } catch (error) {
    console.log(error);
    return null;
  }
};
