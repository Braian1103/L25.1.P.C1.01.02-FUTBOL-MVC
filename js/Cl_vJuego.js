export default class Cl_vJuego {
    constructor() {
        this.inresultado = document.getElementById("juegoForm_inresultado");
        this.btProcesar = document.getElementById("juegoForm_btProcesar");
    }

    get resultado() {
        return this.inresultado.value;
    }
}