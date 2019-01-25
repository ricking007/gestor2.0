export class Conta {
    constructor(
        public id_conta: string,
        public id_pessoa: string,
        public dc_descricao: string,
        public dt_data_compra: string,
        public dt_vencimento: string,
        public nm_valor: string,
        public id_parcelado: string,
        public nm_parcelas: string,
        public id_status: string,
        //parcelamento
        public id_conta_parcela: string,
        public nm_parcela: string,
        public dt_data_parcela: string,
        public dt_pagamento: string
    ) { }
}