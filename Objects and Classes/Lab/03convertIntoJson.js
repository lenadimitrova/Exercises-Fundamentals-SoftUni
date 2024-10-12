function convert(data) {
    let converted = JSON.parse(data);
    console.log(converted);

    for(let key of Object.keys(converted)) {
        console.log(`${key}: ${converted[key]}`);
    }
}
convert('{"name": "George", "age": 40, "town": "Sofia"}')