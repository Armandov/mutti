/* var nacimiento = new Date(2024, 9, 23)
var hoy = new Date()

var tiempoPasado= hoy - nacimiento
var segs = 1000;
var mins = segs * 60;
var hours = mins * 60;
var days = hours * 24;
var months = days * 30.416666666666668;
var years = months * 12;

//calculo 
var anos = Math.floor(tiempoPasado / years);

tiempoPasado = tiempoPasado - (anos * years);
var meses = Math.floor(tiempoPasado / months)

tiempoPasado = tiempoPasado - (meses * months);
var dias = Math.floor(tiempoPasado / days)

tiempoPasado = tiempoPasado - (dias * days);
var horas = Math.floor(tiempoPasado / hours)

tiempoPasado = tiempoPasado - (horas * hours);
var minutos = Math.floor(tiempoPasado / mins)

tiempoPasado = tiempoPasado - (minutos * mins);
var segundos = Math.floor(tiempoPasado / segs)

console.log(`Han pasado ${anos} años, ${meses} meses,  ${dias} dias, ${horas} horas, y ${minutos} minutos desde que naciste. Ya chocheas...!!`)
*/

var fechaInicio = new Date('2024-09-23').getTime();
var fechaFin  = Date.now();
var diff = fechaFin - fechaInicio;

console.log(diff/(1000*60*60*24) );
                 // (1000*60*60*24) --> milisegundos -> segundos -> minutos -> horas -> días