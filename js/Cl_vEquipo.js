import Cl_vJuego from "./Cl_vJuego.js";
import Cl_mJuego from "./Cl_mJuego.js";

export default class Cl_vEquipo {
    constructor() {
        this.controlador = null;
        this.salida = document.getElementById("mainForm_salida");
        this.vJuego = new Cl_vJuego();
        this.vJuego.btProcesar.onclick = () => this.controlador.procesarPartido();
    }

            procesarPartido() {
                let mJuego = new Cl_mJuego({
                    resultado: this.vJuego.resultado
                });
                return mJuego;
            }

            reportarPartido(resultado) {
                this.salida.innerHTML = `El equipo ha ganado ${resultado}% de los partidos`;
            }
}