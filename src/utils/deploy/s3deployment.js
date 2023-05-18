// This runs with node, not NextJS
require('dotenv').config({ path: './.env' }) 

const s3 = require('s3-lambo');

const handler = async () => await s3.uploadDirectory({
    path: './out',
    params: {
      Bucket: process.env.AWS_BUCKET,
    },
  }).then((r) => console.log('S3 Updated: ', r));

handler();