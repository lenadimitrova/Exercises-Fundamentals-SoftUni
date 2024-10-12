function town(data) {

    let coordinates = {};

    for (let line of data) {
        let [town, latitude, longitude] = line.split(" | ")
        coordinates.town = town;
        coordinates.latitude = Number(latitude).toFixed(2);
        coordinates.longitude = Number(longitude).toFixed(2);

        console.log(coordinates);
    }
}
town(['Sofia | 42.696552 | 23.32601', 
    'Beijing | 39.913818 | 116.363625'])