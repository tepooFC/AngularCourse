//string, number, boolean, null, undefined
let myName;
myName = 'test';

//Arays doesn't need to be established with a type
let items = [5, 'luis'];

//Interfaces

interface IAccount{
    name: string,
    balance: number,
    status?: string
    deposit?: () => void
};


const account: IAccount = {
    name: 'luis',
    balance: 10
};

let accounts: IAccount[];

class InvestmenAccount implements IAccount{
    constructor(
        public name, public balance
    ){
        
    }

    private withdraw(){

    }
}