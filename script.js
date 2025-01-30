function calcularFactorial(){

    //Declaro la variable

    let n;
    let factorial;

    //Pido el número al usuario y lo transformo en entero

    
    n=prompt("Introduce un número del 0 al 10")
    
    n=parseInt(n);

    //Función para obtener el factorial de >=1

    function factorialGenerico(n){
        if (n===1) {return 1;
    }else{
        return factorial=n*factorialGenerico(n-1);
    
    }  
} 

    //Indicar excepciones

    if(isNaN(n) || n<0 || n>10){
        alert("El número debe estar entre 0 y 10, prueba de nuevo");
    }else if (n===0){
        alert("El factorial de 0 es 1");
    }else{
        factorialGenerico(n);
        alert(`El factorial de ${n} es ${factorial}`);
       
        }
}
