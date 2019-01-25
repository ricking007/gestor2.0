export class Carddebito{
    constructor(
        public id_card: string,
        public id_pessoa: string,
        public no_bandeira: string,
        public no_banco: string,
        public dt_validade: string,
        public dc_skin: string
    ){}
}