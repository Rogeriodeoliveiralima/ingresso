

function comprar(){
  let tipoIngresso = document.getElementById('tipo-ingresso');
  let quantidade = document.getElementById('qtd').value;

  if(isNaN(quantidade ) || (quantidade <= 0)){
    document.getElementById('qtd').value = 0;
    return alert('Informe a quantidade correta!!');
  }

  if (tipoIngresso.value == 'pista'){
    comprarPista(quantidade);
  }else if(tipoIngresso.value == 'inferior'){
    comprarInferior(quantidade);
  }else{
    comprarSuperior(quantidade);
  }
  

}

function comprarPista(quantidade){
  let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
  if(quantidade > qtdPista){
    alert('Quantidade de Ingresso Insuficiente para venda Pista!')
  }else{
    qtdPista = qtdPista - quantidade;
    document.getElementById('qtd-pista').textContent = qtdPista;
    alert('Compra efetuada com sucesso!');
  }
}
  
  function comprarInferior(quantidade){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantidade > qtdInferior ){
      alert('Quantidade de Ingresso Insuficiente para venda Inferior!')
    }else{
      qtdInferior = qtdInferior - quantidade;
      document.getElementById('qtd-inferior').textContent = qtdInferior ;
      alert('Compra efetuada com sucesso!');
    }
  }

  function comprarSuperior(quantidade){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidade > qtdSuperior ){
      alert('Quantidade de Ingresso Insuficiente para venda Superior!')
    }else{
      qtdSuperior = qtdSuperior - quantidade;
      document.getElementById('qtd-superior').textContent = qtdSuperior;
      alert('Compra efetuada com sucesso!');
    }
  }