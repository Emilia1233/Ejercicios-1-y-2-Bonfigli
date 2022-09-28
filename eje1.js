function Piramide(){
    
    alt=8;
    if (alt>1 && alt<9 ){
        for (i=0; i<alt; i++){
            cont = i;
            esp = alt - cont;
            cosito = "#";
            console.log(' '.repeat(esp) + cosito.repeat(cont) + ('  ') + cosito.repeat(cont)); 



        }
    }
    else{
        console.log("La altura debe ser un valor entre 2 y 9!!")
    }
    }

Piramide()

/*  6 #
   5 ##
  4 ###
3  ####
2 #####
1######
####### */