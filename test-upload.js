const fs = require('fs');
const path = require('path');
const uploadFile = require('./index');

async function testUpload() {
    const filePath = path.resolve(__dirname, 'test-image.jpg');
    const fileStream = fs.createReadStream(filePath);
    const fileName = `test-image-${new Date().toISOString()}.jpg`
    
    try {
        const result = await uploadFile(fileStream, fileName);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

testUpload();