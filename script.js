function validaCampos(){
    var moeda = $("input[name=moeda]:checked").val();
    var varlorDig = $("#valordig").val();

    if(moeda != "dolar" && moeda != "euro" && moeda != "bitcoin"){
        $("#svazio2").css("color","red");
        $("#svazio2").html("Escolha o tipo de moeda.");
        return false;
    }
    else if(varlorDig == ""){
        $("#svazio1").css("color","red");
        $("#svazio1").html("Digite o valor a ser convertido");
        return false;
    }
    else{
        return true;
    }
}