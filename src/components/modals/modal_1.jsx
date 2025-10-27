import styles from "./modal_1.module.css";

function Modal1({ modalAbierto, closeModal }) {
  if (!modalAbierto) return null;

  return (
    <div className={styles.container}>
      <div id="modal__apertura" className={styles.modalContainer}>
        <form className={styles.formularioModalAperturas}>
          {/* Contenedor de Ingreso de Placa */}
          <section className={styles.containerApertura}>
            <section className={styles.containerPlaca}>
              <input
                id="inputPlaca"
                className={styles.ingresePlaca}
                type="text"
                placeholder="PLACA"
              />
            </section>

            {/* Contenedor de Tipo de Inspección */}
            <section className={styles.containerTipoInspeccion}>
              <div className={styles.containerTipoInspeccion2}>
                <div className={styles.containerItemInspeccion}>
                  <label
                    className={styles.tipoCategoria}
                    htmlFor="tipoCategoria"
                  >
                    Categoria
                  </label>
                  <input
                    className={`${styles.inputsTipo} ${styles.categoria}`}
                    list="categorias"
                    id="tipoCategoria"
                  />
                  <datalist id="categorias">
                    <option>M1</option>
                    <option>M2</option>
                    <option>M3</option>
                    <option>N1</option>
                    <option>N2</option>
                    <option>N3</option>
                    <option>O4</option>
                  </datalist>
                </div>

                <div className={styles.containerItemInspeccion}>
                  <label
                    className={styles.tipoInspeccion}
                    htmlFor="tipoInspeccion"
                  >
                    Tipo de Inspección
                  </label>
                  <input
                    className={`${styles.inputsTipo} ${styles.tipoInspeccionInput}`}
                    list="tipo__Inspeccion"
                    id="tipoInspeccion"
                  />
                  <datalist id="tipo__Inspeccion">
                    <option>Ordinaria</option>
                    <option>Complementaria</option>
                    <option>Ordinaria Complementaria</option>
                  </datalist>
                </div>

                <div className={styles.containerItemInspeccion}>
                  <label className={styles.ambito} htmlFor="ambito">
                    Ámbito
                  </label>
                  <input
                    className={`${styles.inputsTipo} ${styles.ambitoInput}`}
                    list="ambitos"
                    id="ambito"
                  />
                  <datalist id="ambitos">
                    <option>Nacional</option>
                    <option>Provincial</option>
                    <option>Regional</option>
                    <option>Distrital</option>
                  </datalist>
                </div>

                <div className={styles.containerItemInspeccion}>
                  <label className={styles.tipoServicio} htmlFor="tipoServicio">
                    Tipo de Servicio
                  </label>
                  <input
                    className={`${styles.inputsTipo} ${styles.tipoServicioInput}`}
                    list="tipo__Servicio"
                    id="tipoServicio"
                  />
                  <datalist id="tipo__Servicio">
                    <option>Particular</option>
                    <option>Transporte Regular</option>
                    <option>Taxi</option>
                    <option>Transporte Escolar</option>
                    <option>Turismo</option>
                    <option>Ambulancia</option>
                  </datalist>
                </div>

                <div className={styles.containerItemInspeccion}>
                  <label
                    className={styles.tipoCertificado}
                    htmlFor="tipoCertificado"
                  >
                    Tipo de Certificado
                  </label>
                  <input
                    className={`${styles.inputsTipo} ${styles.tipoCertificadoInput}`}
                    list="tipo__Certificado"
                    id="tipoCertificado"
                  />
                  <datalist id="tipo__Certificado">
                    <option>Certificado Ordinario</option>
                    <option>Certificado Complementario</option>
                    <option>Certificado Vehículo Nuevo</option>
                    <option>Certificado de Retesteo</option>
                  </datalist>
                </div>
              </div>
            </section>
            <div className={styles.containerRegistrarApertura}>
              <button className={styles.registrarApertura}>REGISTRAR</button>
              <svg
                className={styles.botonCerrarModalApertura}
                onClick={closeModal}
                id="botonMinimizar"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="icomoon-ignore"></g>
                  <path
                    d="M6.576 6.576c-5.205 5.205-5.205 13.643 0 18.849s13.643 5.205 18.849-0c5.206-5.206 5.206-13.643 0-18.849s-13.643-5.205-18.849 0zM24.67 24.67c-4.781 4.781-12.56 4.781-17.341 0s-4.781-12.56 0-17.341c4.781-4.781 12.56-4.781 17.341 0s4.78 12.56-0 17.341z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M10.722 9.969l-0.754 0.754 5.278 5.278-5.253 5.253 0.754 0.754 5.253-5.253 5.253 5.253 0.754-0.754-5.253-5.253 5.278-5.278-0.754-0.754-5.278 5.278z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
            </div>
          </section>
          {/* Contenedor de sections de Datos de Tarjeta */}
          <section className={styles.containerSectionsTarjetaPropiedad}>
            <div className={styles.containerTitleDatos}>
              <h2 className={styles.titleDatos}>TARJETA DE PROPIEDAD</h2>
              <h2 className={styles.titleDatos}>SOAT</h2>
              <h2 className={styles.titleDatos}>FACTURACION</h2>
            </div>

            {/* Contenedor de Datos de tarjeta de Propiedad */}
            <section className={styles.containerRegistral}>
              <div className={styles.cotainerInputRegistral}>
                <label htmlFor="partidaRegistral">Partida Registral</label>
                <input
                  className={styles.inputRegistral}
                  type="text"
                  id="partidaRegistral"
                  placeholder="ejmp. 57841984"
                />
              </div>

              <div className={styles.containerForma}>
                <h3 className={styles.textForma}>FORM:</h3>
                <input
                  className={`${styles.checkbox} ${styles.checkbox1}`}
                  type="checkbox"
                />
                <input
                  className={`${styles.checkbox} ${styles.checkbox2}`}
                  type="checkbox"
                />
                <input
                  className={`${styles.checkbox} ${styles.checkbox3}`}
                  type="checkbox"
                />
              </div>
            </section>

            <section className={styles.containerDatosTarjetaPropiedad}>
              <div className={styles.dataTarjetaPropiedad1}>
                <div className={styles.containerData1}>
                  <div className={styles.containerData11}>
                    <div className={styles.containerItem1Data1}>
                      <label className={styles.labelData1} htmlFor="modelo">
                        Modelo
                      </label>
                      <input
                        className={`${styles.inputData1} ${styles.modelo}`}
                        type="text"
                        id="modelo"
                      />
                    </div>

                    <div className={styles.containerItem1Data1}>
                      <label className={styles.labelData1} htmlFor="marca">
                        Marca
                      </label>
                      <input
                        className={`${styles.inputData1} ${styles.marca}`}
                        type="text"
                        id="marca"
                      />
                    </div>

                    <div className={styles.containerItem1Data1}>
                      <label className={styles.labelData1} htmlFor="serie">
                        Serie / Chasis
                      </label>
                      <input
                        className={`${styles.inputData1} ${styles.serie}`}
                        type="text"
                        id="serie"
                      />
                    </div>

                    <div className={styles.containerItem1Data1}>
                      <label className={styles.labelData1} htmlFor="nMotor">
                        N. Motor
                      </label>
                      <input
                        className={`${styles.inputData1} ${styles.nMotor}`}
                        type="text"
                        id="nMotor"
                      />
                    </div>

                    <div className={styles.containerItem1Data1}>
                      <label className={styles.labelData1} htmlFor="colores">
                        Colores
                      </label>
                      <input
                        className={`${styles.inputData1} ${styles.colores}`}
                        type="text"
                        id="colores"
                      />
                    </div>

                    <div className={styles.containerItem1Data1}>
                      <label className={styles.labelData1} htmlFor="carroceria">
                        Carroceria
                      </label>
                      <input
                        className={`${styles.inputData1} ${styles.carroceria}`}
                        type="text"
                        id="carroceria"
                      />
                    </div>

                    <div className={styles.containerItem1Data1}>
                      <label
                        className={styles.labelData1}
                        htmlFor="combustible"
                      >
                        Combustible
                      </label>
                      <input
                        className={`${styles.inputData1} ${styles.combustible}`}
                        type="text"
                        id="combustible"
                      />
                    </div>
                  </div>

                  {/* Contenedor de datos 1.2 */}
                  <div className={styles.containerData12}>
                    <div className={styles.containerItem1Data1}>
                      <label
                        className={styles.labelData1}
                        htmlFor="añoFabricacion"
                      >
                        Año Fab.
                      </label>
                      <input
                        className={`${styles.inputData1} ${styles.añoFabricacion}`}
                        type="text"
                        id="añoFabricacion"
                      />
                    </div>

                    <div className={styles.containerItem1Data2}>
                      <label className={styles.labelData1} htmlFor="añoModelo">
                        Año Mod.
                      </label>
                      <input
                        className={`${styles.inputData1} ${styles.añoModelo}`}
                        type="text"
                        id="añoModelo"
                      />
                    </div>

                    <div className={styles.containerItem1Data2}>
                      <label className={styles.labelData1} htmlFor="fr">
                        F.R
                      </label>
                      <input
                        className={`${styles.inputData1} ${styles.fr}`}
                        type="text"
                        id="fr"
                      />
                    </div>

                    <div className={styles.containerItem1Data2}>
                      <label className={styles.labelData1} htmlFor="ejes">
                        Ejes
                      </label>
                      <input
                        className={`${styles.inputData1} ${styles.ejes}`}
                        type="text"
                        id="ejes"
                      />
                    </div>

                    <div className={styles.containerItem1Data2}>
                      <label className={styles.labelData1} htmlFor="ruedas">
                        Ruedas
                      </label>
                      <input
                        className={`${styles.inputData1} ${styles.ruedas}`}
                        type="text"
                        id="ruedas"
                      />
                    </div>

                    <div className={styles.containerItem1Data2}>
                      <label className={styles.labelData1} htmlFor="vin">
                        VIN
                      </label>
                      <input
                        className={`${styles.inputData1} ${styles.vin}`}
                        type="text"
                        id="vin"
                      />
                    </div>

                    <div className={styles.containerItem1Data2}>
                      <label
                        className={styles.labelData1}
                        htmlFor="marcaCarroceria"
                      >
                        Mrca Carroc.
                      </label>
                      <input
                        className={`${styles.inputData1} ${styles.marcaCarroceria}`}
                        type="text"
                        id="marcaCarroceria"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenedor de Seccion 2 de la Tarjeta de Propiedad */}
              <div className={styles.dataTarjetaPropiedad2}>
                <div className={styles.containerData2}>
                  <div className={styles.containerData21}>
                    <div className={styles.containerItem1Data2}>
                      <label className={styles.labelData2} htmlFor="asientos">
                        Asientos
                      </label>
                      <input
                        className={`${styles.inputData2} ${styles.modelo}`}
                        type="text"
                        id="asientos"
                      />
                    </div>

                    <div className={styles.containerItem1Data1}>
                      <label className={styles.labelData2} htmlFor="cilindrada">
                        Cilindrada
                      </label>
                      <input
                        className={`${styles.inputData2} ${styles.marca}`}
                        type="text"
                        id="cilindrada"
                      />
                    </div>

                    <div className={styles.containerItem1Data1}>
                      <label className={styles.labelData2} htmlFor="longitud">
                        Longitud
                      </label>
                      <input
                        className={`${styles.inputData2} ${styles.serie}`}
                        type="text"
                        id="longitud"
                      />
                    </div>

                    <div className={styles.containerItem1Data1}>
                      <label className={styles.labelData2} htmlFor="altura">
                        Altura
                      </label>
                      <input
                        className={`${styles.inputData2} ${styles.nMotor}`}
                        type="text"
                        id="altura"
                      />
                    </div>

                    <div className={styles.containerItem1Data1}>
                      <label className={styles.labelData2} htmlFor="ancho">
                        Ancho
                      </label>
                      <input
                        className={`${styles.inputData2} ${styles.colores}`}
                        type="text"
                        id="ancho"
                      />
                    </div>

                    <div className={styles.containerItem1Data1}>
                      <label className={styles.labelData2} htmlFor="km">
                        KM
                      </label>
                      <input
                        className={`${styles.inputData2} ${styles.carroceria}`}
                        type="text"
                        id="km"
                      />
                    </div>
                  </div>

                  {/* Contenedor de datos 1.2 */}
                  <div className={styles.containerData22}>
                    <div className={styles.containerItem1Data2}>
                      <label className={styles.labelData2} htmlFor="pasajeros">
                        Pasajeros
                      </label>
                      <input
                        className={`${styles.inputData2} ${styles.pasajeros}`}
                        type="text"
                        id="pasajeros"
                      />
                    </div>

                    <div className={styles.containerItem1Data2}>
                      <label className={styles.labelData2} htmlFor="cilindros">
                        Cilindros
                      </label>
                      <input
                        className={`${styles.inputData2} ${styles.cilindros}`}
                        type="text"
                        id="cilindros"
                      />
                    </div>

                    <div className={styles.containerItem1Data2}>
                      <label className={styles.labelData2} htmlFor="pBruto">
                        P. Bruto
                      </label>
                      <input
                        className={`${styles.inputData2} ${styles.pBruto}`}
                        type="text"
                        id="pBruto"
                      />
                    </div>

                    <div className={styles.containerItem1Data2}>
                      <label className={styles.labelData2} htmlFor="pSeco">
                        P. Seco
                      </label>
                      <input
                        className={`${styles.inputData2} ${styles.pSeco}`}
                        type="text"
                        id="pSeco"
                      />
                    </div>

                    <div className={styles.containerItem1Data2}>
                      <label className={styles.labelData2} htmlFor="cUtil">
                        C. Util
                      </label>
                      <input
                        className={`${styles.inputData2} ${styles.cUtil}`}
                        type="text"
                        id="cUtil"
                      />
                    </div>

                    <button type="button" className={styles.guardarApertura}>
                      GUARDAR
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </form>
      </div>
    </div>
  );
}

export default Modal1;
