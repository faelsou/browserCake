import { Endereco } from "../endereco/Endereco.js";
import { CakeEnderecoInvalidoError } from "../erros/CakeEnderecoInvalidoError.js";

export function carregarUrl(enderecoRecebido){
    let endereco;

    if(typeof enderecoRecebido === 'string' || !enderecoRecebido) {
        endereco = new Endereco(enderecoRecebido);
    }
    else if (enderecoRecebido instanceof Endereco) {
        endereco = enderecoRecebido;

    }
    else {
        throw new Error(`
        Voce passou um endereço que não é uma STRING nem uma instancia de ENDEREÇO.
        Valor: ${JSON.stringify(enderecoRecebido)}
        Tipo: ${typeof enderecoRecebido}
        `);
    }

    carregarNoIframe(endereco);
}

async function carregarNoIframe(endereco){



    //Async await
    try
    {
        await fetch(endereco.urlCompleta);
        iframe.src = endereco.urlCompleta;
        inputEndereco.value = endereco.urlResumida;
    }
    catch(erro) {
        //deu erro de carregamento
        alert('opa ... essa url não rola');
    }

}

    //Promise = .than é executado sequencialmente .catch 
    /*fetch(endereco.urlCompleta).then(() =>{
        //deu certo o carregamnto
        alert('Okkkk..url é valida');
        iframe.src = endereco.urlCompleta;
        inputEndereco.value = endereco.urlResumida;
    
    })
    .catch(() => {
        //deu erro de carregamento
        alert('opa ... essa url não rola');
    })*/
    


