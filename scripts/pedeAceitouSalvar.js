import { aceitouSalvar, setAceitouSalvar  } from "./storage/aceitouSalvar.js";

if(aceitouSalvar === null){
    let aceitou = confirm(' Voce aceita que possamos salvar suas informações?');

    if(!aceitou){
        alert('Voce pode mudar isso na pagina osteriormente');
    }
    setAceitouSalvar(aceitou);
}


//TODA VARIAVEL QUE VEM DE UM PROCESSO DE IMPORTAÇÃO Ŕ UMA CONSTANTE