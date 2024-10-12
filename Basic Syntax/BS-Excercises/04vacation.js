function vacation(totalCount, groupType, weekDay) {
    totalPrice = 0;

    if (weekDay === "Friday") {
        if (groupType === "Students") {
            if (totalCount >= 30) {
                totalPrice = (totalCount * 8.45) * 0.85
            } else {
                totalPrice = totalCount * 8.45
            }
        } else if (groupType === "Business") {
            if (totalCount >= 100) {
                totalPrice = (totalCount - 10) * 10.90
            } else {
                totalPrice = totalCount * 10.90
            }
        } else if (groupType === "Regular") {
            if (totalCount >= 10 && totalCount <= 20) {
                totalPrice = (totalCount * 15) * 0.95
            } else {
                totalPrice = totalCount * 15
            }
        }
    } else if (weekDay === "Saturday") {
        if (groupType === "Students") {
            if (totalCount >= 30) {
                totalPrice = (totalCount * 9.80) * 0.85
            } else {
                totalPrice = totalCount * 9.80
            }
        } else if (groupType === "Business") {
            if (totalCount >= 100) {
                totalPrice = (totalCount - 10) * 15.60
            } else {
                totalPrice = totalCount * 15.60
            }
        } else if (groupType === "Regular") {
            if (totalCount >= 10 && totalCount <= 20) {
                totalPrice = (totalCount * 20) * 0.95
            } else {
                totalPrice = totalCount * 20
            }
        }
    } else if (weekDay === "Sunday") {
        if (groupType === "Students") {
            if (totalCount >= 30) {
                totalPrice = (totalCount * 10.46) * 0.85
            } else {
                totalPrice = totalCount * 10.46
            }
        } else if (groupType === "Business") {
            if (totalCount >= 100) {
                totalPrice = (totalCount - 10) * 16
            } else {
                totalPrice = totalCount * 16
            }
        } else if (groupType === "Regular") {
            if (totalCount >= 10 && totalCount <= 20) {
                totalPrice = (totalCount * 22.50) * 0.95
            } else {
                totalPrice = totalCount * 22.50
            }
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday")
vacation(40, "Regular", "Saturday")