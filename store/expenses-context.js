import { createContext, useReducer } from "react";

const Dummy_Data = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 69.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of Trousers',
        amount: 89.99,
        date: new Date('2022-01-6')
    },
    {
        id: 'e3',
        description: 'A bunch of banana',
        amount: 5.98,
        date: new Date('2021-12-10')
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 19.26,
        date: new Date('2022-02-7')
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 15.23,
        date: new Date('2022-02-17')
    },
     {
        id: 'e6',
        description: 'A pair of shoes',
        amount: 69.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e7',
        description: 'A pair of Trousers',
        amount: 89.99,
        date: new Date('2022-01-6')
    },
    {
        id: 'e8',
        description: 'A bunch of banana',
        amount: 5.98,
        date: new Date('2021-12-10')
    },
    {
        id: 'e9',
        description: 'A book',
        amount: 19.26,
        date: new Date('2022-02-7')
    },
    {
        id: 'e10',
        description: 'Another book',
        amount: 15.23,
        date: new Date('2022-02-17')
    },
]

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {},
})

function expenseReducer(state, action) {
    switch(action.type){
        case 'ADD':
            const id = new Date().toString() + Math.random().toString()
            return [{...action.payload, id: id}, ...state ]

        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id)
            const updatableExpense = state[updatableExpenseIndex]
            const updatedItem = {...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;

        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload)

        default:
            return state
    }
}

const ExpensesContextProvider = ({children}) => {
    [expensesState, dispatch] = useReducer(expenseReducer, Dummy_Data)

    function addExpense(expenseData) {
        dispatch({type: 'ADD', payload: expenseData})
    }

    function deleteExpense(id) {
        dispatch({type: 'DELETE', payload: id})
    }

    function updateExpense(id, expenseData) {
        dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}})
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    }

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider