class ContaEspecial extends ContaBancaria{



    private limite;

    constructor(numeroConta : string, titular:string, limite: number){
super(numeroConta, titular);
this.limite =limite;


    }
}