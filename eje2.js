function Banco(){

    let monto = 325;

    for(i=0; i<1; i++){
        cin = monto/50; 
        resto_c = monto%50;

        ven = resto_c/20;
        resto_v = monto%20;

        diez = resto_v/10;
        resto_d = monto%10;

        cinco = resto_d/5;
        resto_ci = monto%5;

        uno = resto_ci/1;

        console.log('Monto a retirar: ', monto)
        console.log('___________________________')
        console.log('cincuenta: ', Math.trunc(cin))
        console.log('veinte: ', Math.trunc(ven))
        console.log('diez: ', Math.trunc(diez))
        console.log('cinco: ', Math.trunc(cinco))
        console.log('uno: ', Math.trunc(uno))


    }

    }

Banco()