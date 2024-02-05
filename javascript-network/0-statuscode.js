const fetch = require('node-fetch');

const getUrlStatusCode = async (url) => {
    try {
        const response = await fetch(url);
        console.log(`code: ${response.status}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

if (process.argv.length !== 3) {
    console.error('Usage: node script.js <URL>');
    process.exit(1);
}

const url = process.argv[2];
getUrlStatusCode(url);
