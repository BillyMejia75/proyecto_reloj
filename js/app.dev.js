const reloj = document.querySelector('.reloj');
let turno = '';

const getHora = () => {
    const fecha = new Date();

    const tiempo = {
        hora: fecha.getHours(),
        minuto: fecha.getMinutes(),
        segundo: fecha.getSeconds(),
    };

    if (tiempo.hora > 12){
        tiempo.hora = '0' + (tiempo.hora -= 12);
        turno = 'PM';
    } else {
        turno = 'AM';
    }

    if (tiempo.minuto <= 9) {
        tiempo.minuto = '0' + fecha.getMinutes();
    }

    if (tiempo.segundo <= 9) {
        tiempo.segundo = '0' + fecha.getSeconds();
    }

    reloj.innerHTML = `${tiempo.hora}:${tiempo.minuto}:${tiempo.segundo} ${turno}`;
};

setInterval(getHora, 500);

