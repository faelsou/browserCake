export let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar'));

export function setAceitouSalvar(aceite)

{
    aceitouSalvar = aceite;
    localStorage.setItem('aceitouSalvar', aceite);
}