import { hasSubscribers } from 'diagnostics_channel';
import inquirer from 'inquirer';

// Bank Account interface
interface IBankAccount {
    accountNumber: number;
    balance: number;
    withdraw(amount: number): void;
    deposit(amount: number): void;
    checkBalance(): void;
}

// Bank Account class
class BankAccount implements IBankAccount {
    accountNumber: number;
    balance: number;

    constructor(accountNumber: number, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    // Debit money
    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawal of $${amount} successful. Remaining balance: $${this.balance}`);
        } else {
            console.log('Insufficient balance.');
        }
    }

    // Credit money
    deposit(amount: number): void {
        if (amount > 100) {
            amount -= 1; // $1 fee charged if more than $100 is deposited
        }
        this.balance += amount;
        console.log(`Deposit of $${amount} successful. Remaining balance: $${this.balance}`);
    }

    // Check balance
    checkBalance(): void {
        console.log(`Current balance: $${this.balance}`);
    }
}

// Customer class 
class Customer {
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    mobileNumber: number;
    account: BankAccount;

    constructor(firstName: string, lastName: string, gender: string, age: number, mobileNumber: number, account: BankAccount) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.account = account;
    }
}

// Create bank accounts
const accounts: BankAccount[] = [
    new BankAccount(1001, 500),
    new BankAccount(1002, 1000),
    new BankAccount(1003, 2000)
];

// Create customers
const customers: Customer[] = [
    new Customer('Abdul', 'Waheed', 'Male', 32, 3222392618, accounts[0]),
    new Customer('Muhammad', 'Amin', 'Male', 26, 3002115450, accounts[1]),
    new Customer('Rizwan', 'Ahmed', 'Male', 35, 3155454544, accounts[2])
];

// Function to interact with bank account
async function service() {
    do {
        const accountNumberInput = await inquirer.prompt({
            name: 'accountNumber',
            type: 'number',
            message: 'Enter your account number:'
        });

        const customer = customers.find(customer => customer.account.accountNumber === accountNumberInput.accountNumber);
        if (customer) {
            console.log(`Welcome, ${customer.firstName} ${customer.lastName}!\n`);
            const answer = await inquirer.prompt([{
                name: 'select',
                type: 'list',
                message: 'Select an operation',
                choices: ['Deposit', 'Withdrawal', 'Check Balance', 'Exit']
            }]);

            switch (answer.select) {
                case 'Deposit':
                    const depositAmount = await inquirer.prompt({
                        name: 'amount',
                        type: 'number',
                        message: 'Enter the amount to deposit:'
                    });
                    customer.account.deposit(depositAmount.amount);
                    break;

                case 'Withdrawal':
                    const withdrawalAmount = await inquirer.prompt({
                        name: 'amount',
                        type: 'number',
                        message: 'Enter the amount to withdraw:'
                    });
                    customer.account.withdraw(withdrawalAmount.amount);
                    break;

                case 'Check Balance':
                    customer.account.checkBalance();
                    break;
                case 'Exit':
                    console.log('Exiting bank program....');
                    return; // Exit the loop and the program
            }
        } else {
            console.log('Account not found. Please try again.');
        }
    } while (true);
}

service();
