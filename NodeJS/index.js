const express=require('express'); //Importante o express e colocando em uma constante
const app=express(); //Criando uma instancia

const port=8030; //Setando a porta de comunicação
const hostname='127.0.0.1' //Endereço de rede

app.get('/cadastro/:nome', function(req, res){
    req.params.nome;

    res.send("Boa noite " +req.params.nome);

    //res.send('Boa noite ${req.params.nome}');
});

app.get('/soma/:valor1/:valor2', function(req, res){
    //let conc=req.params.valor1+req.params.valor2; //contatenar valor1 e valor2
    let soma=parseFloat(req.params.valor1)+parseFloat(req.params.valor2); //somar valor 1 e valor2
    res.send("A soma é "+soma);
    //res.send("A concatenação é: "+conc);
});

app.get('/conc', function(req, res){
    let conc=req.params.valor1+req.params.valor2; //contatenar valor1 e valor2
    //let soma=parseFloat(req.params.valor1)+parseFloat(req.params.valor2); //somar valor 1 e valor2
    //res.send("A soma é "+soma);
    res.send("A concatenação é: "+conc);
});

app.get('/soma1', function(req, res){
    let soma=parseFloat(req.query.valor1)+parseFloat(req.query.valor2);
    res.send("A soma é: "+soma);
});

app.get('/parouimpar', function(req, res){

  let numero=parseFloat(req.query.valor1);
  let resp=numero%2==0?"Par":"Impar";
  res.send(resp);
  //if (numero % 2 == 0)
  //    res.send("O numero é par");
  //    else
  //    res.send("O numero é impar");
});

app.get('/tresprecos', function(req, res){
    let valor1=parseFloat(req.query.valor1);
    let valor2=parseFloat(req.query.valor2);
    let valor3=parseFloat(req.query.valor3);

    let maior = valor1;
    if(valor2 > maior)
    maior = valor2;
    if(valor3 > maior)
    maior=valor3;

    let menor = valor1;
    if(valor2 < menor)
    menor = valor2;
    if(valor3 > menor)
    menor=valor3;

    let media = (valor1 + valor2 + valor3) / 3;
    res.send("O numero maior é: " + maior + "<br> O numero menor é: " + menor + "<br>A media é: " + media);
});

app.get('/maior', function(req, res){
    let valor1=parseFloat(req.query.valor1);
    let valor2=parseFloat(req.query.valor2);
    let valor3=parseFloat(req.query.valor3);
    let maior = valor1;
    if(valor2 > maior)
    maior = valor2;
    if(valor3 > maior)
    maior=valor3;
    res.send("O numero maior: " + maior);
});

app.get('/menor', function(req, res){
    let valor1=parseFloat(req.query.valor1);
    let valor2=parseFloat(req.query.valor2);
    let valor3=parseFloat(req.query.valor3);
    let menor = valor1;
    if(valor2 < menor)
    menor = valor2;
    if(valor3 > menor)
    menor=valor3;
    res.send("O numero menor: " + menor);

});
app.get('/media', function(req, res){
    let valor1=parseFloat(req.query.valor1);
    let valor2=parseFloat(req.query.valor2);
    let valor3=parseFloat(req.query.valor3);
    let media = (valor1 + valor2 + valor3) / 3;
    res.send("A média é: " + media);
});

app.get('/triangulo', function(req, res){
let lado1 = parseFloat(req.query.valor1);
let lado2 = parseFloat(req.query.valor2);
let lado3 = parseFloat(req.query.valor3);
let resp = "Não é um triangulo valido";

if(lado1<lado2+lado3)
    if(lado2<lado2+lado3)
        if(lado3<lado1+lado2)
            resp = "E um triangulo válido";
            res.send(resp);
});

app.listen(port, hostname, function(){ 
    console.log("Servidor Rodando");

})