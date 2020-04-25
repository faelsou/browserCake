/*export function CakeEnderecoInvalidoError(endereco)
{
    this.endereco = endereco;
    this.message = `Não consegui entender o endereço: \n\n${endereco}`;
}

CakeEnderecoInvalidoError.prototype = Error.prototype;
*/


//ES6
export class CakeEnderecoInvalidoError extends Error {
    constructor(endereco){
        /* o comando super() efetiva a herança e faz com que o 
        contruto da classe-pai sejam chamdo fazendo com que 
        as caracteristica do pai sejam "trazidas" para a classe-filha*/
        super();
        this.endereco = endereco;
        this.message = `Não consegui entender o endereço: \n\n${endereco}`;
    }
}