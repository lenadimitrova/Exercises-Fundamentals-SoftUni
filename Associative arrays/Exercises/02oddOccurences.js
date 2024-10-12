function oddOccurences(input) {

    let elementsToBeExtracted = {};

    let elements = input.split(" ").map(w => w.toLowerCase());

    for (const word of elements) {
        if (!elementsToBeExtracted[word]) {
            elementsToBeExtracted[word] = 0;
        }
        elementsToBeExtracted[word]++
    }

    let sortedElements = Object.entries(elementsToBeExtracted).sort((a, b) => b[1] - a[1]);
    
    let result = []
    for (const [key, value] of sortedElements) {
        if (value % 2 === 1) {
            result.push(key)
        }
    }
    console.log(result.join(" "));
}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')