// Code your solution in this file!

function logDriverNames(drivers) {
    drivers.forEach(function(driver){
        console.log(driver.name)
    })
}

function logDriversByHometown(drivers, location){
    drivers.forEach(function(driver){
        if (location == driver.hometown){
            console.log(driver.name)
        } 
    })
}
function driversByRevenue(drivers){
    const driversByRevenue = [...drivers]
    driversByRevenue.sort(function(driverA, driverB){
        return driverA.revenue - driverB.revenue;
    })
    return driversByRevenue;
}

function driversByName(drivers){
    const driversByName = [...drivers]
    driversByName.sort(function(driverA, driverB){
        return driverA.name.localeCompare(driverB.name);
    })
    return driversByName;
}

function totalRevenue(drivers){
    const sum = drivers.reduce(function(agg, el, i, arr){
        return agg + el.revenue;
    }, 0)
    return sum;
}

function averageRevenue(drivers){
    const total = totalRevenue(drivers);
    const averageRevenue = total/drivers.length;
    return averageRevenue;
}