function Encriptar() {
    var pro = prompt('Hola, ingresa una llave')
    pro = pro.split('');

    for(let i = 0; i < pro.length; ++i) {
        if(pro[i]) {
                pro[i] = String.fromCharCode(pro[i].charCodeAt(0) + 2);
        }
        
    }
    console.log(pro); 
}

Encriptar()