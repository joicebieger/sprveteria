Lucas.addEventListener('click', function () {

    var nomecliente = nome.value;
    var quantiaSorvetes = quantidades.value;
    var saborSorvete = sabores.value;

   // alert("Nome: " + nomecliente + " Qnt.: " + quantiaSorvetes + "sabor: "+ saborSorvete);
    
   pedidoNome.innerHTML = "Nome:  " + nomecliente;
   pedidoQuantia.innerHTML  = "Quantia: " + quantiaSorvetes;
   pedidoSabor.innerHTML =  "Sabor:  " + saborSorvete;


});