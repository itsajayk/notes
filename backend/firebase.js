const admin = require("firebase-admin");
const serviceAccount = require("./notes-app-ajanthan-n-firebase-adminsdk-w7mko-d1f6ba0951.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
