import { ContaBancaria } from "./ContaBancaria";

class ContapPoupanca extends ContaBancaria

aplicarRendimento (taxa:number):void{
let total;
total =this.saldo * taxa
this.saldo = this.saldo + total

}