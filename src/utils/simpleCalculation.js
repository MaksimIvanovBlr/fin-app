
export const sumOfTrueOrFalseValue = (values, status) => {
    return (values.filter((e) => e.status === status)).reduce((n, {value}) => n + value, 0)
}


export const dailyExpForMonth = (daysToSalary, perDay) => {
    return daysToSalary * perDay
}

export const predictedBalance = (...args) =>{
    return [...args].reduce((a, b) => a + b, 0)
}