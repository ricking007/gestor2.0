export class Parcelamento {
    constructor(
        public id_conta_parcela: string,
        public id_conta: string,
        public nm_parcela: string,
        public nm_valor: string,
        public dt_data_parcela: string,
        public id_status: string,
        public dt_pagamento: string
    ) { }
}