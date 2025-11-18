const productosBackend = import.meta.env.VITE_API_TURNOS;


export const crearTurno = async (data) => {
    try {
        const respuesta = await fetch(productosBackend, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        console.log(respuesta);
        return respuesta;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const listarTurnos = async () => {
    try {
        const respuesta = await fetch(productosBackend);
        return respuesta;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const editarTurnos = async (id, data) => {
    try {
    const respuesta = await fetch(`${productosBackend}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    console.log(respuesta);
    return respuesta;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const obtenerTurnoPorId = async (id) => {
    try {
        const respuesta = await fetch(`${productosBackend}/${id}`);
        return respuesta;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const eliminarTurno = async (id) => {
    try {
        const respuesta = await fetch(`${productosBackend}/${id}`, {
            method: "DELETE",
        });
        return respuesta;
    } catch (error) {
        console.error(error)
        return null;
    }
}
