/*---FUNCIÓN AUTOINVOCADA--*/
/*La información de la hora la trae de la computadora de dónde se esta viendo la pag*/
(function(){
 
    /*Esta función se ejecutará a cada segundo y se encargará de mostrar en pantalla la hora actual*/
    var actualizarHora = function(){
        /*Varíables que nos traen la información pero no las mostramos en pantalla*/
        var fecha = new Date(),
            horas  = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();

        /*Accedemos su ubicación en html y guaramos su valor en una variable */
        var pHoras = document.getElementById('horas'),
            pAMPM = document.getElementById('ampm'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDiaSemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pyear = document.getElementById('year');
        
        /*Mostramos en pantalla los datos*/
        var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
         pDiaSemana.textContent = semana[diaSemana] + ","; 
        pDia.textContent= dia;

        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        pMes.textContent = meses[mes];
        
        pyear.textContent = year;


        /*--Hora ---*/
        /*Reloj de 12 horas y no de 24hs*/
        if (horas >= 12){
            horas = horas - 12;
            ampm = 'pm';
        }
        else{
            ampm='am';
        }

        if (horas == 0){
            horas = 12;
        };

        pHoras.textContent = horas;
        pAMPM.textContent = ampm;
        pMinutos.textContent = minutos;
        if (minutos <10 ){
            minutos = "0"+ minutos
        };
        if ( segundos < 10){
          segundos = "0" + segundos
        };
        pSegundos.textContent = segundos

    };
   /*Aquí la función se ejecuta automaticamente*/
    actualizarHora(); 

    /*Decimos que la función se ejecute a casa segundo */
    /*setInterval nos actualiza la hora y recibe dos parametros, 1. Nuestra función y 2.cada cuánto segundos.*/
    var inter = setInterval(actualizarHora, 1000);


}())