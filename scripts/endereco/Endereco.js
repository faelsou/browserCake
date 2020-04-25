import { CakeEnderecoInvalidoError } from "../erros/CakeEnderecoInvalidoError.js";

export function Endereco(endereco)

{
    if (this instanceof Endereco === false){
        return new Endereco(endereco)
    }

    let enderecoCompleto;
    let enderecoResumido;

    if (!endereco || endereco === 'blank') {
        enderecoCompleto = enderecoResumido = 'blank'
    }
    else{
        try
        {
            const url = new URL(endereco);
            if (url.hostname ==='localhost'){
                let paginaLocal = url.pathname.replace('/', '');
                enderecoCompleto = paginaLocal;
                enderecoResumido = paginaLocal;
            }
            else{
                enderecoCompleto = url.toString();
                enderecoResumido = url.hostname;

            }
        }
        catch(erro){
            throw new CakeEnderecoInvalidoError(endereco);

        }
    }

    this.urlCompleta = enderecoCompleto;
    this.urlResumida = enderecoResumido;
}