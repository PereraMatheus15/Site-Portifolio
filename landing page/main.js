 // Definindo a data de término do contador regressivo
 var endDate = new Date("February 28, 2024 23:59:59").getTime();

 // Atualizando o contador a cada segundo
 var x = setInterval(function() {

     // Pegando a data e hora atual
     var now = new Date().getTime();

     // Calculando a diferença entre a data de término e a data atual
     var distance = endDate - now;

     // Calculando dias, horas, minutos e segundos restantes
     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

     // Exibindo o contador regressivo na página
     document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
     + minutes + "m " + seconds + "s ";

     // Quando o contador chegar a zero, exibir uma mensagem
     if (distance < 0) {
         clearInterval(x);
         document.getElementById("countdown").innerHTML = "EXPIRADO";
     }
 }, 1000);