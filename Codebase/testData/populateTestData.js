// Codebase
// Populate database with sample data

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const axios = require('axios');
const https = require('https');
const fs = require('fs');

const agent = new https.Agent({ rejectUnauthorized: false });

fs.readFile('Codebase/testData/testData.json', 'utf-8', (err, data) => {
    if (err) console.error(err);
    const sampleData = JSON.parse(data);

    sampleData.forEach((item) => {
        axios({
            method: 'POST',
            url: 'https://localhost:7040/codebase/createCodeblock',
            headers: {
                'Content-Type': 'application/json'
            },
            data: item,
            httpsAgent: agent,
            NODE_TLS_REJECT_UNAUTHORIZED: '0'
        });
    });
});