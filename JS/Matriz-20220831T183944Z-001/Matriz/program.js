function apagar() {
    document.getElementById("demo").innerHTML = "";
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    window.alert("Você apagou tudo");
}

//Matriz
//function matrizInverte (num1,num2) {
//M=[[],[],[]];
//for(var i = 0; i<num1; i++){
//for(var j = 0; j<num2; j++){
//if(){

// }
// }
//}
//}

function matrizP(num1) {
    var m1 = [], linha = [];
    for (var i = 0; i < num1; i++) {
        for (var j = 0; j < num1; j++) {
            if (i < j) {
                linha.push(Math.pow(-1, i + j + 2));
            }
            else if (i == j) {
                linha.push(2 * (i + 1) + (j + 1));
            }
            else {
                linha.push(i - j);
            }
        }
        m1.push(linha);
        linha = []
    }

    var m2 = [], linha2 = [];
    for (var i = 0; i < num1; i++) {
        for (var j = 0; j < num1; j++) {
            if (i < j) {
                linha2.push(j - i);
            }
            else if (i == j) {
                linha2.push(1);
            }
            else {
                linha2.push(Math.pow(-1, i - j + 2));
            }
        }
        m2.push(linha2);
        linha2 = []
    }

    var result = [];
    for (var i = 0; i < num1; i++) {
        for (var j = 0; j < num1; j++) {
            result.push(m1[i][j] * m2[i][j]);
        }
    }
    return result;
}

function matrizInverte(num1) {
    var m1 = [], linha = [];
    for (var i = 0; i < num1; i++) {
        for (var j = 0; j < num1; j++) {
            if (i < j) {
                linha.push(Math.pow(-1, i + j + 2));
            }
            else if (i == j) {
                linha.push(2 * (i + 1) + (j + 1));
            }
            else {
                linha.push(i - j);
            }
        }
        m1.push(linha);
        linha = []
    }

    matrizN = [m1], aux = [];
    for (var i = 0; i < num1; i++) {
        for (var j = 0; j < num1; j++) {
            if (i == j) {
                matrizN.push([i][j] = 1);
            }
            else {
                matrizN.push([i][j] = 0);
            }
        }
    }
    return matrizN;
}

function imprimeParagrafo(par1, par2, op) {
    //Matriz
    if (op == 1) {
        document.getElementById("demo").innerHTML = "" + matrizInverte(par1, par2);
    }
    else if (op == 2) {
        document.getElementById("demo").innerHTML = "" + matrizP(par1);
    }
}