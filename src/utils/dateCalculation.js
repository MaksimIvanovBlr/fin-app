
export const dayToSalary = (userInputDay) => {
    const dateNow = new Date()
    // const daysInMonth = (y, m) => new Date(y, m, 0).getDate()
    let estimatedDate = new Date(dateNow.getFullYear(),dateNow.getMonth(),userInputDay)

    if(estimatedDate <= dateNow){
        estimatedDate.setMonth(dateNow.getMonth()+1)
    }
    const difference = estimatedDate - dateNow
    const daysToSalary = Math.ceil(difference/(1000 * 60 * 60 * 24))

    return daysToSalary
}