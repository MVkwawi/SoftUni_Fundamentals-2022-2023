function extractFile(filePath) {
    let fileReconstructed = filePath.split('\\');
    let file = fileReconstructed.pop().split('.');

    let fileExtension = file.pop();
    let fileName = file.join('.');

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');

extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');