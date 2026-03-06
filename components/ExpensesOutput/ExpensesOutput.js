import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

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

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={Dummy_Data} periodName={expensesPeriod}  />
      <ExpensesList expenses={Dummy_Data} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    }
})