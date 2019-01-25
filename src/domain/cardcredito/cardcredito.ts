export class Cardcredito{
    constructor(
        public id_card: string,
        public id_pessoa: string,
        public no_bandeira: string,
        public no_banco: string,
        public nm_limite: string,
        public dt_vencimento: string,
        public dt_fechamento_fatura: string,
        public dt_validade: string,
        public dc_skin: string
    ){}
}