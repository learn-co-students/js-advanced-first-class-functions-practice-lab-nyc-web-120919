// Code your solution in this file!
const logDriverNames = function (driverArray) {
    for (const driver of driverArray) {
        console.log(driver.name)
    }
}

const logDriversByHometown = function (driverArray, home) {
    for (const driver of driverArray) {
        if (driver.hometown === home) {
        console.log(driver.name)
        }
    }
}

const driversByRevenue = function (driverArray) {
    let my_arr = driverArray.slice(0);
    return my_arr.sort((a, b) => (a.revenue > b.revenue) ? 1 : -1);
}

const driversByName = function (driverArray) {
    let my_arr = driverArray.slice();
    return my_arr.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    })
}

const totalRevenue = function (driverArray) {
    let rev = driverArray.map(driver => driver.revenue)
    //console.log(rev)
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return rev.reduce(reducer);
}

const averageRevenue = function (driverArray) {
    let rev = driverArray.map(driver => driver.revenue)
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return (rev.reduce(reducer) / rev.length)
}