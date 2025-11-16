const productosBackend = import.meta.env.VITE_API_TURNOS;


const crearTurno = async (data) => {
    try {
        const respuesta = await fetch(productosBackend, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        console.log(respuesta);
    } catch (error) {
        console.log(error);
        return null;
    }
}