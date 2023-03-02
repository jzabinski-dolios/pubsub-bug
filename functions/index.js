const functions = require("firebase-functions");

exports.signupMntnce = functions.pubsub
    .schedule('every 30 seconds')
    .timeZone('America/New_York')
    .onRun(async () => {
        console.log('every 30 seconds');
        return null;
    });