// Function to create an employee record
function createEmployeeRecord(employeeArray)  {
    return {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: [],
    };
}

// Function to create employee records from an array of arrays

function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(createEmployeeRecord);
}

// Function to add a time-in event to an employee's record

function createTimeInEvent(dateTimeString) {
    const [date, hour] = dateTimeString.split(' ');
    this.timeInEvents.push({ type: 'TimeIn', date, hour: parseInt(hour, 10) });
    return this;
}

// Function to add a time-out event to an employee's record

function createTimeOutEvent(dateTimeString) {
    const [date, hour] = dateTimeString.split(' ');
    this.timeOutEvents.push({ type: 'TimeOut', date, hour: parseInt(hour, 10) });
    return this;
}

// Function to calculate hours worked on a specific date
function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);

    return (timeOutEvent.hour - timeInEvent.hour) / 100;
}

// Function to calculate pay for a specific date
function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
}

// Function to calculate total pay for all dates worked by an employee
function allWagesFor() {
    const eligibleDates = this.timeInEvents.map(event => event.date);

    const totalWages = eligibleDates.reduce((total, date) => {
        return total + wagesEarnedOnDate.call(this, date);
    }, 0);

    return totalWages;
}

// Function to find employee record by first name

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
}

// Function for calculating total pay for all employees
function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPayroll, employee) => {
        return totalPayroll + allWagesFor.call(employee);
    }, 0);
}

module.exports = {
    createEmployeeRecord,
    createEmployeeRecords,
    createTimeInEvent,
    createTimeOutEvent,
    hoursWorkedOnDate,
    wagesEarnedOnDate,
    allWagesFor,
    findEmployeeByFirstName,
    calculatePayroll,
};
