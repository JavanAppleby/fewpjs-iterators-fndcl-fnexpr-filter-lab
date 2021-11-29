function findMatching(drivers, name) {
    return drivers.filter( find =>
        find.toLowerCase() === name.toLowerCase()
        )
}

function fuzzyMatch(drivers, name) {
    return drivers.filter ( find =>
        find.toLowerCase().indexOf(name.toLowerCase()) === 0
        )
}

function matchName(drivers, name) {
    return drivers.filter( list => list.name === name)
}