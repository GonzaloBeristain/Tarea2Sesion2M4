let boton = document.getElementById("boton");

const calcular = () => {
    let semanas = document.getElementById("semanas").value;
    let dias = document.getElementById("dias").value;
    let diasEjercicio = 1;
    let diasSemanas = dias * semanas;
    

    let elementos = ["Sentadilla", "Banco", "Peso muerto", "Prensa"];

    function* generator(cantidad) {
    for (let index = 0; index < cantidad; index++) {
        yield elementos[index % elementos.length];
    }
    }
    console.log()
    console.log(`Semanas: ${semanas}` );
    console.log(`Días: ${dias}` );


    const gen = generator(diasSemanas);

    for (let i = 1; i <= diasSemanas; i++) {
    console.log(`Día ${diasEjercicio} : ${gen.next().value}`);
    let numero = 7/dias;
    let maximo = semanas * 7;
    let max = Math.ceil(numero);
    if (max > maximo){
        max = maximo;
        
    }
        diasEjercicio = diasEjercicio + (max);
    }
    
}

boton.addEventListener("click", calcular)

