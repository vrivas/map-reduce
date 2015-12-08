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

var tortillas = [
    new Tortilla(200, 3, true)
            , new Tortilla(450, 4, false)
            , new Tortilla(250, 2, true, ["cebolla", "pimiento"])
            , new Tortilla(600, 5, true, ["berenjena", "ajo"])
            , new Tortilla(300, 2, false, ["cebolla"])
];

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

function duplicar(v) {
    v.forEach(function (e) {
        e.huevos *= 2;
        e.patatas *= 2;
    });
}

function solo_huevos(v) {
    return v.map(function (e) {
        return e.huevos;
    });
}

function con_sal(v) {
    return v.filter(function (e) {
        return e.sal;
    });
}

function tiene_cebolla(t) {
    return t.extras
            ? t.extras.reduce(function (prev, e) {
                return prev || e === "cebolla";
            }, false)
            : false;
}

function sumar_huevos(v) {
    return v.reduce(function (prev, e) {
        return prev + e.huevos;
    }, 0);
}

function con_cebolla(v) {
    return v.filter(tiene_cebolla);
}

function listar(v) {
    var init = "<table>\n" + tabular();
    var toRet = v.reduce(function (prev, e) {
        return prev + tabular(e);
    }, init);
    return toRet + "</table>\n";
}
