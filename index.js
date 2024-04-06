const sdk = require("matrix-js-sdk");

// const client = sdk.createClient({ baseUrl: "https://matrix.alphaco.cloud/" });

const client = sdk.createClient({
    baseUrl: "https://matrix.alphaco.cloud",
    accessToken: "syt_bi5hbWphZGlhbg_djNpImaYsmyVEjIKlNhG_4G8jxw",
    userId: "@n.amjadian:alphaco.cloud"
});

client.publicRooms(function (err, data) {
    console.log("Public Rooms: %s", JSON.stringify(data));
});

client.startClient({ initialSyncLimit: 10 }).then(() => {
    console.log("Matrix client started successfully!");
}).catch((err) => {
    console.error("Error starting Matrix client:", err);
});