// A bank system that creates accounts, deposits money, and checks balance.

class Bank
{
    public name : string ;
    private balance : number ;

    constructor(name : string, balance : number)
    {
        this.name = name;
        this.balance = balance;
    }

    public deposit(amount : number) : void
    {
        this.balance += amount;
    }

    public withdraw(amount : number) : boolean
    {
        if(this.balance >= amount){
            this.balance -= amount;
            return true;
        }
        else{
            return false;
        }
    }


    public checkBalance() : number
    {
        return this.balance;
    }

}

let bank = new Bank("Vemacitrind", 1000);
console.log("Balance : "+bank.checkBalance());
bank.deposit(500);
console.log("Balance : "+bank.checkBalance());
bank.withdraw(2000);
console.log("Balance : "+bank.checkBalance());
