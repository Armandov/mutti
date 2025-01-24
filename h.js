const tiempoTranscurridoPreciso = (diferenciaEnMilisegundos) => {
    const diasEnUnAño = 365.25;
    const diasEnUnMes = 30.437;
    const milisegundosEnUnSegundo = 1000;
    const milisegundosEnUnMinuto = milisegundosEnUnSegundo * 60;
    const milisegundosEnUnaHora = milisegundosEnUnMinuto * 60;
    const milisegundosEnUnDia = milisegundosEnUnaHora * 24;
    const milisegundosEnUnMes = milisegundosEnUnDia * diasEnUnMes;
    const milisegundosEnUnAño = milisegundosEnUnDia * diasEnUnAño;
    const años = Math.floor(diferenciaEnMilisegundos / milisegundosEnUnAño);
    diferenciaEnMilisegundos -= años * milisegundosEnUnAño;
    const meses = Math.floor(diferenciaEnMilisegundos / milisegundosEnUnMes);
    diferenciaEnMilisegundos -= meses * milisegundosEnUnMes;
    const dias = Math.floor(diferenciaEnMilisegundos / milisegundosEnUnDia);
    diferenciaEnMilisegundos -= dias * milisegundosEnUnDia;
    const horas = Math.floor(diferenciaEnMilisegundos / milisegundosEnUnaHora);
    diferenciaEnMilisegundos -= horas * milisegundosEnUnaHora;
    const minutos = Math.floor(diferenciaEnMilisegundos / milisegundosEnUnMinuto);
    diferenciaEnMilisegundos -= minutos * milisegundosEnUnMinuto;
    const segundos = Math.floor(diferenciaEnMilisegundos / milisegundosEnUnSegundo);
    diferenciaEnMilisegundos -= segundos * milisegundosEnUnSegundo;
    return { años, meses, dias, horas, minutos, segundos };
    console.log(dias)
}


