export default class Moeda {
    static formatar(valor: number) {
        return new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
        }).format(valor)
    }
}