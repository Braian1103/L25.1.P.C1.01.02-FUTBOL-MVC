export default class Cl_controlador {
    constructor(modelo,vista) {
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarPartido() {
        this.modelo.procesarPartido(this.vista.procesarPartido());
        this.vista.reportarPartido(
            this.modelo.resultadoFinal().toFixed(2)
        );
    }
}