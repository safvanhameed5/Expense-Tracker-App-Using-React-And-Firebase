import { useState } from 'react'
import { useAddTransaction } from '../../hooks/useAddTransaction'
import { useGetTransactions } from '../../hooks/useGetTransactions'
import { useGetUserInfo } from '../../hooks/useGetUserInfo'

export const ExpenseTracker = () => {
    const { addTransaction } = useAddTransaction()
    const { transactions, transactionTotals } = useGetTransactions()
    const { name } = useGetUserInfo()

    const [description, setDescription] = useState("");
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [transactionType, setTransactionType] = useState("expenses");
    const {balance, income, expenses } = transactionTotals

    const onSubmit = (e) => {
        e.preventDefault()
        addTransaction({
            description,
            transactionAmount,
            transactionType,
        })
    }
    return (
    <>
        <div className="expense-tracker">
            <div className="container">
                <h1> {name}'s Expense Tracker </h1>
                <div className="balance">
                    <h3> Your Balance </h3>
                    {balance >= 0 ? (
                        <h2> ${balance} </h2>
                    ) : (
                        <h2> -${balance * -1} </h2>
                    )}
                </div>
                <div className="summary">
                    <div className="income">
                        <h4> Income </h4>
                        <p> ${income} </p>
                    </div>
                    <div className="expenses">
                        <h4> Expenses </h4>
                        <p> ${expenses} </p>
                    </div>
                </div>
                <form className="add-transaction" onSubmit={onSubmit}>
                    <input type="text" placeholder="Description" required onChange={(e) => setDescription(e.target.value)} />
                    <input type="number" placeholder="Amount" required onChange={(e) => setTransactionAmount(e.target.value)} />
                    <input type="radio" id="expenses" value="expenses" checked={transactionType === "expenses"} onChange={(e) => setTransactionType(e.target.value)} />
                    <label htmlFor="expenses"> Expense </label>
                    <input type="radio" id="income" value="income" checked={transactionType === "income"} onChange={(e) => setTransactionType(e.target.value)} />
                    <label htmlFor="income"> Income </label>
                    <button type="submit" class="btn btn-primary">Add Transaction</button>
                </form>
            </div>
        </div>
        <div className="transactions">
            <h3> Transactions </h3>
            <ul>
               {transactions.map((transaction) => {
                const { description, transactionAmount, transactionType } =
                transaction;
                return (
                    <li>
                        <h4> {description} </h4>
                        <p> ${transactionAmount} . <label style={{color: transactionType === "expenses" ? "red" : "green",
                    }}> {transactionType} </label></p>
                    </li>
                )
               })} 
            </ul>

        </div>
    </>
    )
}