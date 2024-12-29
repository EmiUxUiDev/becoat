import React from "react";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import "../styles/Modal.css";
import "../styles/Hero.css";
import trabajosData from "../data/trabajos.json";
import becoatLogo from "../assets/LogoBecoat.png"

const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <section className="hero_section">
      <div className="hero">
        <div className="hero_text">
          <h1>¡Pinta tú Espacio Ideal!</h1>
          <p>Obtén un presupuesto rápido y sencillo.</p>
        </div>

        <video
          className="video"
          src="Latex_con_airless.mp4"
          width="auto"
          height="100%"
          controls
          autoPlay
          muted
          loop
        />
      </div>

      <button id="cta-button" onClick={openModal}>
               Calculalo vos mismo!
      </button>

      <PresupuestoModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </section>
  );
};

const PresupuestoModal = ({ isOpen, onRequestClose }) => {
  const [ancho, setAncho] = useState("");
  const [alto, setAlto] = useState("");
  const [tipoTrabajo, setTipoTrabajo] = useState("");
  const [precioMetroCuadrado, setPrecioMetroCuadrado] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");
  const [guardando, setGuardando] = useState(false);
  const [estadoMuro, setEstadoMuro] = useState("regular");
  

  useEffect(() => {
    const trabajoSeleccionado = trabajosData.find(
      (trabajo) => trabajo.tipo === tipoTrabajo
    );
    if (trabajoSeleccionado) {
      setPrecioMetroCuadrado(trabajoSeleccionado.precioMetroCuadrado);
    } else {
      setPrecioMetroCuadrado("");
    }
  }, [tipoTrabajo]);

  const registrarClick = async (presupuestoCalculado) => {
    setGuardando(true);
    try {
      const userAgent = navigator.userAgent;

      const response = await fetch(  
        "https://script.google.com/macros/s/AKfycbz1ECfDqMgPwzuqEUkZp7koEh2nTma_mRJRrUK4ARv_5O3-Dts8v6nvgYP74yxSIlmjKg/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Muy importante para enviar datos JSON
          },
          body: JSON.stringify({
            userAgent,
            tipoTrabajo,
            ancho: `${ancho}mtrs`,
            alto: `${alto}mtrs`,
            resultado: `$${presupuestoCalculado}`,
            estadoMuro,
          }),
        }
      );
      console.log(response);

      if (!response.ok) {
        // Comprobar si la respuesta NO es exitosa
        const errorText = await response.text(); // Obtener el texto del error del servidor
        throw new Error(
          `Error en la solicitud: ${response.status} - ${errorText}`
        ); // Lanzar un error con más detalles
      }

      const data = await response.json(); // Intentar parsear la respuesta como JSON
      console.log("Respuesta del servidor:", data);
      alert("Click registrado con exito");
    } catch (error) {
      console.error("Error en la solicitud:", error);
      /* alert("Error al registrar el click: " + error.message); // Mostrar el mensaje de error al usuario */
    } finally {
      setGuardando(false);
    }
  };

  const calcularPresupuesto = () => {
    setError("");

    if (!ancho || !alto || !precioMetroCuadrado || !tipoTrabajo) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    const anchoNum = parseFloat(ancho.trim());
    const altoNum = parseFloat(alto.trim());
    const precioNum = parseFloat(precioMetroCuadrado);

    if (
      isNaN(anchoNum) ||
      isNaN(altoNum) ||
      isNaN(precioNum) ||
      anchoNum <= 0 ||
      altoNum <= 0 ||
      precioNum <= 0
    ) {
      setError("Por favor, ingresa valores numéricos válidos mayores a 0.");
      return;
    }

    const porcentajes = {
      nuevo: 1.15, // 15% más
      regular: 1, // Sin incremento
      reparar: 1.4, // 40% más
    };

    const porcentajeAdicional = porcentajes[estadoMuro];
    const area = anchoNum * altoNum;
    const presupuesto = area * precioNum * porcentajeAdicional;

    setResultado(presupuesto);
    registrarClick(presupuesto); // Registrar el click después de calcular el presupuesto
  };

  return (
    
    <Modal
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="my-modal" // Clase para el modal
      overlayClassName="my-overlay" // Clase para el overlay
      contentLabel="Modal de Presupuesto"
    >
      
      <div className="modal-content">
        <div className="LogoTitulo">
        <img id="becoatLogo" src={becoatLogo} alt="Logo de Becoat" />
        <h2>Presupuesto de Pintura</h2>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="inputs_container">
          <label id="Select_trabajo">
            Tipo de Trabajo:
            <select
              className="tipo_trabajo"
              value={tipoTrabajo}
              onChange={(e) => setTipoTrabajo(e.target.value)}
            >
              <option value="">Selecciona un trabajo</option>
              {trabajosData.map((trabajo) => (
                <option key={trabajo.tipo} value={trabajo.tipo}>
                  {trabajo.tipo}
                </option>
              ))}
            </select>
          </label>

          <label className="input_container">
            Precio por m²:
            <input
              id="precio_m2"
              type="number"
              value={precioMetroCuadrado}
              readOnly
            />
          </label>
          <div className="data_entry">
            <label>
              Largo (mtrs):
              <input
                type="number"
                value={ancho}
                onChange={(e) => setAncho(e.target.value)}
              />
            </label>
            <label>
              Alto (mtrs):
              <input
                type="number"
                value={alto}
                onChange={(e) => setAlto(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div>
          <label className="label_contenedor_radio">
            Estado del muro:
            <div className="radio_container">
              <label className="opcion" for="nuevo">
                <input
                  id="radio"
                  type="radio"
                  value="nuevo"
                  checked={estadoMuro === "nuevo"}
                  onChange={(e) => setEstadoMuro(e.target.value)}
                />
                Nuevo
              </label>

              <label className="opcion" for="nuevo">
                <input
                  id="radio"
                  type="radio"
                  value="regular"
                  checked={estadoMuro === "regular"}
                  onChange={(e) => setEstadoMuro(e.target.value)}
                />
                Regular
              </label>

              <label className="opcion" for="reparar">
                <input
                  id="radio"
                  type="radio"
                  value="reparar"
                  checked={estadoMuro === "reparar"}
                  onChange={(e) => setEstadoMuro(e.target.value)}
                />
                Reparar
              </label>
            </div>
          </label>
        </div>
        <div className="button_container">
          <button
            id="calcular_btn"
            onClick={calcularPresupuesto}
            disabled={guardando}
          >
            <svg
              className="calcula_svg"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-play"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>{" "}
            {/* Deshabilitar mientras se guarda */}
            {guardando ? "Guardando..." : "Calcular"}{" "}
            {/* Mostrar mensaje mientras se guarda */}
          </button>

          {resultado !== null && (
            <div className="resultado">
              <h3>Presupuesto Total:</h3>
              <p>${resultado.toFixed(0)}</p>
            </div>
          )}
        </div>
        <button className="cerrar_btn" onClick={onRequestClose}>
            Cerrar
          </button>
      </div>
    </Modal>
  );
};

export default Hero;
