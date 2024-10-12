function requiredReading(pagesTotal, pagesPerHour, daysTotal) {
    let totalHours = pagesTotal / pagesPerHour
    let hoursPerDay = totalHours / daysTotal
    console.log(hoursPerDay);
}
requiredReading(212, 20, 2)
requiredReading(432, 15, 4)