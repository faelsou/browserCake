import { formataEndereco } from "../endereco/formataEndereco.js";
import { carregarUrl } from "./carregar.js";
import { Endereco } from "../endereco/Endereco.js";
import { CakeEnderecoInvalidoError } from "../erros/CakeEnderecoInvalidoError.js";

let endereco;

iframe.addEventListener('load', () =>{
    endereco = new Endereco(iframe.contentWindow.location.href);
});
iframe.addEventListener('load', exibeEnderecoCompleto);
inputEndereco.addEventListener('focus', exibeEnderecoCompleto);
inputEndereco.addEventListener('blur', exibeEnderecoResumido);
inputEndereco.addEventListener('keypress', event => {
    if(event.key === 'Enter') {
        try { 
            let url = formataEndereco(inputEndereco.value);
            endereco = new Endereco(url);
            carregarUrl(endereco);
        } 
        catch (error){
            if (error instanceof CakeEnderecoInvalidoError) {
                alert(error.message);
            }
            else {
                throw error; //exibe erros gerais no console
            }
        }
    }
});


function exibeEnderecoCompleto()
{
    inputEndereco.value = endereco.urlCompleta;
}

function exibeEnderecoResumido()
{
    
    inputEndereco.value = endereco.urlResumida;
}