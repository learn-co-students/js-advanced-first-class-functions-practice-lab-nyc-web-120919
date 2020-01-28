function logDriverNames(drivers) {
    for (const driver of drivers) {
        console.log(driver.name);
    }
}

function logDriversByHometown(drivers, hometown) {
    logDriverNames(drivers.filter(function (driver) {
        return driver.hometown === hometown;
    }))
}

function driversByRevenue(drivers) {
    let sortedDrivers = [...drivers];
    return sortedDrivers.sort(function(driver1, driver2) {
        return driver1.revenue - driver2.revenue;
    })
}

function driversByName(drivers) {
    let sortedDrivers = [...drivers];
    return sortedDrivers.sort(function(driver1, driver2) {
        return driver1.name.localeCompare(driver2.name);
    })
}
const revenueReducer = function (memo, driver, index, array) { memo += driver.revenue; return memo;};

function totalRevenue(drivers) {
    return drivers.reduce(revenueReducer, 0);
}

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length;
}