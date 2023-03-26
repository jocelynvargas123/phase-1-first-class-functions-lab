const drivers = ['Antonia','Nuru','Amari','Mo']

function returnFirstTwoDrivers(drivers){
    return returnFirstTwoDrivers = drivers.slice(0,2)
}

function returnLastTwoDrivers(drivers){
    return returnLastTwoDrivers = drivers.slice(2)
}

let selectingDrivers = ([returnFirstTwoDrivers, returnLastTwoDrivers])

const fareMultiplier = createFareMultiplier()

function createFareMultiplier(x) {
    function fareQuintupler(i) {
        return x * i
    }
    return fareQuintupler
}

const fareDoubler = function(fareMultiplier) {
    return fareMultiplier * 2
}

const fareTripler = function(fareMultiplier){
    return fareMultiplier * 3
}

function selectDifferentDrivers(drivers, func) {
    return func(drivers)
}