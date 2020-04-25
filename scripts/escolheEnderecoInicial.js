import { aceitouSalvar } from './storage/aceitouSalvar.js';
import { paginaInicial, setPaginaInicial } from './storage/paginaInicial.js';
import { formataEndereco } from './endereco/formataEndereco.js';
let enderecoInicial = localStorage.getItem("paginaInicial")

if(aceitouSalvar === true){ 
   

    if(enderecoInicial === null){
        enderecoInicial = prompt("Escolha a pagina inicial:")
    }


    if(enderecoInicial){ 
       enderecoInicial = formataEndereco(enderecoInicial);
        setPaginaInicial(enderecoInicial);
    }

}
//tudo que é guardado no localStorage é String
//localStorage = getItem =>Salva

