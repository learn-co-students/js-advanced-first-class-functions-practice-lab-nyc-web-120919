const logDriverNames = function(drivers) {
    drivers.forEach(element => {
        console.log(element.name)
    });
}

const logDriversByHometown = function(drivers, location) {
    for (const driver of drivers) {
        if (driver.hometown === location) {
            console.log(driver.name)
        }
    }
}

const driversByRevenue = function(drivers) {
    return drivers.slice().sort(function (driverOne, driverTwo) {
        return driverOne.revenue - driverTwo.revenue;
    });
}

const driversByName = function(drivers) {
    return drivers.slice().sort(function(a, b) {
        return a.name.localeCompare(b.name);
    })
}

const totalRevenue = function(drivers) {
    let total = 0
    drivers.forEach(function(driver) {
        total += driver.revenue
    })
    return total
}

const averageRevenue = function(drivers) {
    return totalRevenue(drivers) / drivers.length
}