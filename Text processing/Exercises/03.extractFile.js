function extractFile(string) {

    let wordsArr = string.split("\\");

    let file = wordsArr.pop();

    let lastComma = file.lastIndexOf(".");
    let fileName = file.substring(0, lastComma);
    let extension = file.substring(lastComma + 1);

    console.log(`File name: ${fileName}
File extension: ${extension}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx')