const AWS = require('aws-sdk');
require('dotenv').config();

const credentials = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY
}

const useLocal = process.env.NODE_ENV !== 'production';

const bucketName = process.env.AWS_BUCKET_NAME;

const s3Client = new AWS.S3({
    credentials,
    endpoint: useLocal ? 'http://localhost:4572' : undefined,
    s3ForcePathStyle: true
})

function uploadFile(data, fileName) {
    return s3Client.upload({Bucket: bucketName, Key: fileName, Body: data}).promise();
};

module.exports = uploadFile;