/** 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Declaración de la clase Tortilla
 * @param {integer} patatas Peso en gramos de las patatas
 * @param {integer} huevos Número de huevos
 * @param {boolean} sal Tiene o no tiene sal
 * @param {array de string} extras Otros ingredientes extra
 * @returns {Tortilla}
 */
function Tortilla(patatas, huevos, sal, extras) {
    this.patatas = patatas || 0;
    this.huevos = huevos || 0;
    this.sal = sal || false;
    this.extras = extras;
}


/**
 * Muestra una tortilla en formato tabulado, o la cabecera de la tabla si no le pasamos parámetro
 * @param {Tortilla} t La tortilla a tabular, o vacío para imprimir la cabecera
 * @returns {String} Cadena con la fila de tabla que contiene los datos de la tortilla
 */
function tabular(t) {
    return  "<tr>"
            +
            (!t
                    ? "<th>Patatas</th><th>Huevos</th><th>Sal</th><th>Extras</th>"
                    : "<td>" + t.patatas + "</td>"
                    + "<td>" + t.huevos + "</td>"
                    + "<td>" + (t.sal ? "Sí" : "No") + "</td>"
                    + "<td>" + (t.extras ? t.extras : " ") + "</td>")
            + "</tr>\n";
}

/**
 * Duplica las patatas y huevos de cada una de las tortillas de un vector
 * @param {type} v Vector de tortillas
 * @returns {undefined} Nada
 */
function duplicar(v) {
    v.forEach(function (e) {
        e.huevos *= 2;
        e.patatas *= 2;
    });
}

/**
 * Devuelve un vector solo con los huevos de cada tortilla
 * @param {type} v VEctor de tortillas
 * @returns {unresolved} VEctor con el número de huevos de cada tortilla
 */
function solo_huevos(v) {
    return v.map(function (e) {
        return e.huevos;
    });
}

/**
 * Devuelve solo las tortillas que llevan sal
 * @param {type} v Vector de tortillas
 * @returns {unresolved} Devuelve un nuevo vector solo con las tortillas que llevan sal
 */
function con_sal(v) {
    return v.filter(function (e) {
        return e.sal;
    });
}

/**
 * Devuelve el número de huevos que necesitaríamos para hacer todas las tortillas
 * @param {type} v VEctor de tortillas
 * @returns {unresolved} Númeero de huevos que harían falta
 */
function sumar_huevos(v) {
    return v.reduce(function (prev, e) {
        return prev + e.huevos;
    }, 0);
}

/**
 * Función que comprueba si una tortilla tiene cebolla en sus extras
 * @param {Tortilla} t La tortilla a comprobar
 * @returns {Boolean} Treue si los extras contienen el ingrediente, false en otro caso
 */
function tiene_cebolla(t) {
    return t.extras
            ? t.extras.reduce(function (prev, e) {
                return prev || e === "cebolla";
            }, false)
            : false;
}

/**
 * Devuelve las tortillas que tienen cebolla
 * @param {Vector} v VEctor de tortillas
 * @returns {Vector} Vector con las tortillas que tienen cebolla
 */
function con_cebolla(v) {
    return v.filter(tiene_cebolla);
}


/**
 * Crea una tabla con todos los elementos de vector tabulados
 * @param {Vector} v VEctor de tortillas
 * @returns {String} Tabla con todos los elementos del vector tabulados
 */
function listar(v) {
    var init = "<table>\n" + tabular();
    var toRet = v.reduce(function (prev, e) {
        return prev + tabular(e);
    }, init);
    return toRet + "</table>\n";
}



/**
 * Iniciación de las tortillas
 * @type Array Vector de tortillas
 */
var tortillas = [
    new Tortilla(200, 3, true)
            , new Tortilla(450, 4, false)
            , new Tortilla(250, 2, true, ["cebolla", "pimiento"])
            , new Tortilla(600, 5, true, ["berenjena", "ajo"])
            , new Tortilla(300, 2, false, ["cebolla"])
];