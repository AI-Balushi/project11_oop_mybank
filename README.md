# Bank Account Management System

## Overview

The Bank Account Management System is a command-line interface (CLI) application designed to simulate basic banking operations. This project is built using TypeScript and utilizes the `inquirer` package to handle user interactions. Users can create and manage bank accounts, perform deposits and withdrawals, and check account balances.

## Features

- **Account Management**: Create and manage bank accounts with unique account numbers and initial balances.
- **Customer Management**: Create customers with personal details (first name, last name, gender, age, mobile number) and associate them with bank accounts.
- **Deposit Functionality**: Deposit money into accounts, with a $1 fee charged for deposits over $100.
- **Withdrawal Functionality**: Withdraw money from accounts, ensuring sufficient balance.
- **Balance Inquiry**: Check the current balance of an account.
- **User Interaction**: Simple and intuitive user interface for performing banking operations through the command line.

## Installation

1. **Clone the repository:**

    Clone the project repository to your local machine using the following command:
    ```bash
    git clone https://github.com/yourusername/bank-account-management.git
    cd bank-account-management
    ```

2. **Install dependencies:**

    Install the required dependencies by running:
    ```bash
    npm install
    ```

3. **Run the application:**

    Start the application using:
    ```bash
    ts-node index.ts
    ```

## Usage

Upon running the application, you will be prompted to enter your account number. If the account exists, you will be welcomed and presented with a menu of operations to choose from:

1. **Deposit**: Enter the amount to deposit into the account.
2. **Withdrawal**: Enter the amount to withdraw from the account.
3. **Check Balance**: Display the current balance of the account.
4. **Exit**: Exit the application.

The system will guide you through each step, ensuring a user-friendly experience for managing your bank account.

## Project Structure

- **index.ts**: The main entry point of the application.
- **BankAccount.ts**: Defines the `BankAccount` class and its methods for handling deposits, withdrawals, and balance inquiries.
- **Customer.ts**: Defines the `Customer` class and its properties, associating customers with their respective bank accounts.

## Contributing

Contributions to the project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the project's GitHub repository.

## License

This project is licensed under the ISC License.

## Contact

For any questions or feedback, please feel free to contact the project maintainer at waheedjdk@hotmail.com

