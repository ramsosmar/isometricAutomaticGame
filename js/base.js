/*
 * 
 * Animation frame
 * 
 *  animacao dos segmentos
 * 
 *  Desenhar o ponteiro do sentido
 Definir pontos    
 * 
 */





var GerarChaveElemento = {
    validaPosicao: function (matriz, posicao_x, posicao_y) {
        if (posicao_x < 0 || posicao_y < 0) {
            return 0;
        }
        if (typeof matriz[posicao_y] === 'undefined' || typeof matriz[posicao_y][posicao_x] === 'undefined') {
            return 0;
        }
        return matriz[posicao_y][posicao_x];
    },
    verificarPontoChave: function (matriz, posicao_x, posicao_y) {

        var p5 = GerarChaveElemento.validaPosicao(matriz, posicao_x, posicao_y);
        if (p5 == 0) {
            return "0000";
        }
        var p2 = GerarChaveElemento.validaPosicao(matriz, posicao_x, posicao_y - 1);
        var p4 = GerarChaveElemento.validaPosicao(matriz, posicao_x - 1, posicao_y);
        var p6 = GerarChaveElemento.validaPosicao(matriz, posicao_x + 1, posicao_y);
        var p8 = GerarChaveElemento.validaPosicao(matriz, posicao_x, posicao_y + 1);

        return p2 + "" + p6 + "" + p8 + "" + p4;
    }
};




var mapa = [
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
];


var EstruturaRuaMatriz = function () {
    this.matriz = []; /*9x9*/
}

var radiano = function (grau) {
    return grau * (Math.PI / 180);
}
window.onload = function () {
    var mapaCache = null;
    var objCanvas = document.getElementById('myCanvas');
    var cenario = objCanvas.getContext("2d");
    var imagem = new Image();
    var imagemCarro = new Image();
    var desenharRua = function (EstruturaRuaMapa, posicaoTelaX, posicaoTelaY) {
        cenario.drawImage(imagem, EstruturaRuaMapa.posicao_x, EstruturaRuaMapa.posicao_y, EstruturaRuaMapa.largura, EstruturaRuaMapa.altura, posicaoTelaX, posicaoTelaY, EstruturaRuaMapa.largura, EstruturaRuaMapa.altura);
    }

    var desenharCarro = function (EstruturaRuaMapa, posicaoTelaX, posicaoTelaY) {
        cenario.drawImage(imagemCarro, EstruturaRuaMapa.posicao_x, EstruturaRuaMapa.posicao_y, EstruturaRuaMapa.largura, EstruturaRuaMapa.altura, posicaoTelaX, posicaoTelaY, EstruturaRuaMapa.largura, EstruturaRuaMapa.altura);
    }

    var definirPontos = function(width,height){
         cenario.fillStyle = "red";
            cenario.save();
            passoXm = width;
            passoYm = height;
            passo = 0*1;
            angulo =26; // 333.5;
            passoXm = Math.cos(converterRadianos(angulo)) * passo + passoXm;
            passoYm = Math.sin(converterRadianos(angulo)) * passo + passoYm;
            cenario.translate(passoXm, passoYm);
            cenario.fillRect(0, 0, 1, 1);
            cenario.restore();

            cenario.save();
            passoXm = width;
            passoYm = height;
            passo = 18*1;
            angulo =26; // 333.5;
            passoXm = Math.cos(converterRadianos(angulo)) * passo + passoXm;
            passoYm = Math.sin(converterRadianos(angulo)) * passo + passoYm;
            cenario.translate(passoXm, passoYm);
            cenario.fillRect(0, 0, 1, 1);
            cenario.restore();
            
            cenario.save();
            passoXm = width;
            passoYm = height;
            passo = 9*1;
            angulo =26; // 333.5;
            passoXm = Math.cos(converterRadianos(angulo)) * passo + passoXm;
            passoYm = Math.sin(converterRadianos(angulo)) * passo + passoYm;
            cenario.translate(passoXm, passoYm);
            cenario.fillRect(0, 0, 1, 1);
            cenario.restore();
            
            cenario.save();
            passoXm = width;
            passoYm = height;
            passo = 18*1;
            angulo =333.5; // 333.5;
            passoXm = Math.cos(converterRadianos(angulo)) * passo + passoXm;
            passoYm = Math.sin(converterRadianos(angulo)) * passo + passoYm;
            cenario.translate(passoXm, passoYm);
            cenario.fillRect(0, 0, 1, 1);
            cenario.restore();
            
            cenario.save();
            passoXm = width;
            passoYm = height;
            passo = 9*1;
            angulo =333.5; // 333.5;
            passoXm = Math.cos(converterRadianos(angulo)) * passo + passoXm;
            passoYm = Math.sin(converterRadianos(angulo)) * passo + passoYm;
            cenario.translate(passoXm, passoYm);
            cenario.fillRect(0, 0, 1, 1);
            cenario.restore();

            cenario.save();
            passoXm = width;
            passoYm = height;
            passo = 18*1;
            angulo =333.5; // 333.5;
            passoXm = Math.cos(converterRadianos(angulo)) * passo + passoXm;
            passoYm = Math.sin(converterRadianos(angulo)) * passo + passoYm;
            angulo = 26; // 333.5;
            passoXm = Math.cos(converterRadianos(angulo)) * passo + passoXm;
            passoYm = Math.sin(converterRadianos(angulo)) * passo + passoYm;

            cenario.translate(passoXm, passoYm);
            cenario.fillRect(0, 0, 1, 1);
            cenario.restore();


            cenario.save();
            passoXm = width;
            passoYm = height;
            passo = 9*1;
            angulo =333.5; // 333.5;
            passoXm = Math.cos(converterRadianos(angulo)) * passo + passoXm;
            passoYm = Math.sin(converterRadianos(angulo)) * passo + passoYm;
            angulo = 26; // 333.5;
            passoXm = Math.cos(converterRadianos(angulo)) * passo + passoXm;
            passoYm = Math.sin(converterRadianos(angulo)) * passo + passoYm;

            cenario.translate(passoXm, passoYm);
            cenario.fillRect(0, 0, 1, 1);
            cenario.restore();

            cenario.save();
            passoXm = width;
            passoYm = height;
            passo = 9*1;
            angulo =333.5; // 333.5;
            passoXm = Math.cos(converterRadianos(angulo)) * passo + passoXm;
            passoYm = Math.sin(converterRadianos(angulo)) * passo + passoYm;
            passo = 18*1;
            angulo = 26; // 333.5;
            passoXm = Math.cos(converterRadianos(angulo)) * passo + passoXm;
            passoYm = Math.sin(converterRadianos(angulo)) * passo + passoYm;

            cenario.translate(passoXm, passoYm);
            cenario.fillRect(0, 0, 1, 1);
            cenario.restore();

             cenario.save();
            passoXm = width;
            passoYm = height;
            passo = 18*1;
            angulo =333.5; // 333.5;
            passoXm = Math.cos(converterRadianos(angulo)) * passo + passoXm;
            passoYm = Math.sin(converterRadianos(angulo)) * passo + passoYm;
            passo = 9*1;
            angulo = 26; // 333.5;
            passoXm = Math.cos(converterRadianos(angulo)) * passo + passoXm;
            passoYm = Math.sin(converterRadianos(angulo)) * passo + passoYm;

            cenario.translate(passoXm, passoYm);
            cenario.fillRect(0, 0, 1, 1);
            cenario.restore();
    }
    var desenhaGrade = function () {
        var raio = 26;
        var basex = 200;
        var basey = 235;
        for (var i = 0; i <= 4; i++) {
            //calcular a distancia do proximo ponto


            raio = 74;
            angulo = 26;
            passoXm = Math.cos(converterRadianos(angulo)) * raio + basex;
            passoYm = Math.sin(converterRadianos(angulo)) * raio + basey;
            cenario.beginPath();
            cenario.moveTo(basex, basey);
            cenario.lineTo(passoXm, passoYm);
            cenario.stroke();

            raio = 18;
            angulo = 333;
            basex = Math.cos(converterRadianos(angulo)) * raio + basex;
            basey = Math.sin(converterRadianos(angulo)) * raio + basey;
        }

        var basex = 200;
        var basey = 235;

        for (var i = 0; i <= 4; i++) {
            //calcular a distancia do proximo ponto


            raio = 74;
            angulo = 333;
            passoXm = Math.cos(converterRadianos(angulo)) * raio + basex;
            passoYm = Math.sin(converterRadianos(angulo)) * raio + basey;
            cenario.beginPath();
            cenario.moveTo(basex, basey);
            cenario.lineTo(passoXm, passoYm);
            cenario.stroke();

            raio = 18;
            angulo = 26;
            basex = Math.cos(converterRadianos(angulo)) * raio + basex;
            basey = Math.sin(converterRadianos(angulo)) * raio + basey;
        }

    }

    imagem.onload = function () {
//
//      150 > 214 64
//      350 > 318 32
//

//        var baseX = 800;
//        var baseY = 50;
//        for (var y in mapa) {
//            y = parseInt(y);
//            baseX = 800 + (y * 64);
//            baseY = 50 + (y * 32);
//
//            for (var x in mapa[y]) {
//                x = parseInt(x);
//                var elementoMapa = GerarChaveElemento.verificarPontoChave(mapa, x,y);
//                desenharRua(mapaRuaIsometrico.listaSegmentos[elementoMapa],baseX,baseY);
//                baseX -= 64;
//                baseY += 32;                
//            }
//        }


        mapaCache = cenario.getImageData(0, 0, objCanvas.width, objCanvas.height);
        imagemCarro.onload = function () {
            var chave = '00100000';
            var baseX = 200;
            var baseY = 200;
            var angulo = 333.3; //333.5;
            var passo = 2.25; // animacao 32 quadros

//        desenharCarro(mapaCarroPickUpVerde.listaSegmentos[chave], 200, 200);
            // cos x 
            // sin y

            var passoXm = baseX;
            var passoYm = baseY;
            var loop = 180;
            desenharRua(mapaRuaIsometrico.listaSegmentos["1010"], baseX, baseY);
            definirPontos(200,235)
            definirPontos(232,235)

//            var teste = setInterval(function () {
//                   cenario.clearRect(0, 0, objCanvas.width, objCanvas.height);

//                cenario.beginPath();


////                cenario.putImageData(mapaCache, 0, 0);
////                cenario.lineWidth = 1;
//                cenario.rect(passoXm, passoYm, 5,5);
////                cenario.fill();
            //desenhaGrade();

           


/*
            cenario.save();
            passoXm = 200;
            passoYm = 235;
            passo = 9.5*1;
            angulo =333;
            passoXm = Math.cos(converterRadianos(angulo)) * passo + passoXm;
            passoYm = Math.sin(converterRadianos(angulo)) * passo + passoYm;
            cenario.translate(passoXm, passoYm);
            cenario.fillRect(0, 0, 1, 1);
            cenario.restore();

            cenario.save();
            passoXm = 200;
            passoYm = 235;
            passo = 9*2;
            angulo =26; // 333.5;
            passoXm = Math.cos(converterRadianos(angulo)) * passo + passoXm;
            passoYm = Math.sin(converterRadianos(angulo)) * passo + passoYm;
            passo = 9.5*1;
            angulo =333;
             passoXm = Math.cos(converterRadianos(angulo)) * passo + passoXm;
            passoYm = Math.sin(converterRadianos(angulo)) * passo + passoYm;
            cenario.translate(passoXm, passoYm);
            cenario.fillRect(0, 0, 1, 1);
            cenario.restore();

            cenario.save();
            passoXm = 200;
            passoYm = 235;
            passo = 9.5*2;
            angulo =333.5; // 333.5;
            passoXm = Math.cos(converterRadianos(angulo)) * passo + passoXm;
            passoYm = Math.sin(converterRadianos(angulo)) * passo + passoYm;
              passo = 9*1;
            angulo =26; // 333.5;
            passoXm = Math.cos(converterRadianos(angulo)) * passo + passoXm;
            passoYm = Math.sin(converterRadianos(angulo)) * passo + passoYm;
            cenario.translate(passoXm, passoYm);
            cenario.fillRect(0, 0, 1, 1);
            cenario.restore();
            */
 /*           cenario.save();
            passoXm = 200;
            passoYm = 235;
            passo = 9*5;
            angulo = 26; //333.5;
            passoXm = Math.cos(converterRadianos(angulo)) * passo + passoXm;
            passoYm = Math.sin(converterRadianos(angulo)) * passo + passoYm;
            cenario.translate(passoXm, passoYm);
            cenario.fillRect(0, 0, 1, 1);
            cenario.restore();

            cenario.save();
            passoXm = 200;
            passoYm = 235;
            passo = 9.2*3;
            angulo =333.5;
            passoXm = Math.cos(converterRadianos(angulo)) * passo + passoXm;
            passoYm = Math.sin(converterRadianos(angulo)) * passo + passoYm;
            cenario.translate(passoXm, passoYm);
            cenario.fillRect(0, 0, 1, 1);
            cenario.restore();
*/
           

            /*   angulo = 26;
             passoXm = Math.cos(converterRadianos(angulo)) * raio + basex;
             passoYm = Math.sin(converterRadianos(angulo)) * raio + basey;
             cenario.beginPath();
             cenario.moveTo(basex, basey);
             cenario.lineTo(passoXm, passoYm);
             cenario.stroke();
             */




            /*    raio = 74;
             angulo = 26;
             passoXm = Math.cos(converterRadianos(angulo)) * raio + basex;
             passoYm = Math.sin(converterRadianos(angulo)) * raio + basey;
             cenario.beginPath();
             cenario.moveTo(200, basey);
             cenario.lineTo(passoXm, passoYm);
             cenario.stroke();*/

            //  desenharCarro(mapaCarroPickUpVerde.listaSegmentos[chave], 0, 0);

//            }, 5000);

        }
        imagemCarro.src = mapaCarroPickUpVerde.imagem;

    };

    imagem.src = "image/iso_vertical_city.png";


};


//        desenharRua(mapaRuaIsometrico.listaSegmentos['1111'], 200, 200);
////        cenario.beginPath();
//        cenario.strokeStyle = "red";
//
//        var raio = 75;
//        var posicao_x = 200;
//        var posicao_y = 232;
//        var grau = 63;
//
////        cenario.lineWidth = 1;
////        cenario.moveTo(posicao_x, posicao_y);
////        cenario.lineTo(posicao_x + parseInt(Math.sin(radiano(grau)) * raio), posicao_y + parseInt(Math.cos(radiano(grau)) * raio));
////        cenario.stroke();
//        cenario.strokeStyle = "green";
//        
//        raio = 36;
//        posicao_x = 217;
//        posicao_y = 241;
//
//        var novoX = posicao_x + parseInt(Math.sin(radiano(grau)) * raio);
//        var novoY = posicao_y + parseInt(Math.cos(radiano(grau)) * raio);
//
//        cenario.moveTo(posicao_x, posicao_y);
//        cenario.lineTo(novoX, novoY);
////        
//   var novoXnovoX = novoX;
//   var novoYnovoY = novoY;
//        cenario.stroke();
//          raio = 74;
//          grau = 117;
//         novoX = posicao_x + parseInt(Math.sin(radiano(grau)) * raio);
//         novoY = posicao_y + parseInt(Math.cos(radiano(grau)) * raio);
//
//        cenario.moveTo(posicao_x, posicao_y);
//        cenario.lineTo(novoX, novoY);
//        cenario.stroke();
//        cenario.beginPath();
//        
//          raio = 70;
//          grau = 102;
//         novoX = posicao_x + parseInt(Math.sin(radiano(grau)) * raio);
//         novoY = posicao_y + parseInt(Math.cos(radiano(grau)) * raio);
//        cenario.moveTo(novoXnovoX,novoYnovoY);
//        console.log(novoX, novoY);
//        cenario.lineTo(novoX, novoY);
//        cenario.stroke();

//            raio = 75;
//        grau = 116;
//                for (var grau = 0; grau <= 117; grau += 2) {    
//            raio
//            grau
//        cenario.strokeStyle = "red";
//        cenario.moveTo(posicao_x, posicao_y);
//        cenario.lineTo(posicao_x + parseInt(Math.sin(radiano(grau)) * raio), posicao_y + parseInt(Math.cos(radiano(grau)) * raio));
//
//        cenario.stroke();

//        }

/*
 desenharRua(mapaRuaIsometrico.listaSegmentos['1111'], 200, 200);
 
 
 
 var raio = 36;
 var posicao_x = 217;//200
 var posicao_y = 243;//234
 var grau = 63;
 
 
 cenario.strokeStyle = "yellow";
 
 cenario.beginPath();
 cenario.lineWidth = 1;
 cenario.moveTo(posicao_x, posicao_y);
 cenario.lineTo(posicao_x + parseInt(Math.sin(radiano(grau)) * raio), posicao_y + parseInt(Math.cos(radiano(grau)) * raio));
 cenario.stroke();
 
 
 var raio = 18;
 var posicao_x = 217;//200
 var posicao_y = 243;//234
 var grau = 116;
 
 
 cenario.strokeStyle = "yellow";
 
 cenario.beginPath();
 cenario.lineWidth = 1;
 cenario.moveTo(posicao_x, posicao_y);
 cenario.lineTo(posicao_x + parseInt(Math.sin(radiano(grau)) * raio), posicao_y + parseInt(Math.cos(radiano(grau)) * raio));
 cenario.stroke();
 console.log(posicao_x + parseInt(Math.sin(radiano(grau)) * raio), posicao_y + parseInt(Math.cos(radiano(grau)) * raio));
 
 */



