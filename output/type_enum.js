"use strict";
var Permission;
(function (Permission) {
    Permission[Permission["ADMIN"] = 0] = "ADMIN";
    Permission[Permission["USER"] = 1] = "USER";
    Permission[Permission["READONLY"] = 2] = "READONLY";
})(Permission || (Permission = {}));
console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);
var diasSemana;
(function (diasSemana) {
    diasSemana[diasSemana["Domingo"] = 0] = "Domingo";
    diasSemana[diasSemana["Segunda"] = 1] = "Segunda";
    diasSemana[diasSemana["Terca"] = 2] = "Terca";
    diasSemana[diasSemana["Quarta"] = 3] = "Quarta";
    diasSemana[diasSemana["Quinta"] = 4] = "Quinta";
    diasSemana[diasSemana["Sexta"] = 5] = "Sexta";
    diasSemana[diasSemana["Sabado"] = 6] = "Sabado";
})(diasSemana || (diasSemana = {}));
console.log(diasSemana);
console.log(diasSemana.Domingo);
//# sourceMappingURL=type_enum.js.map