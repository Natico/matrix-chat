import * as sdk from "matrix-js-sdk";

const client = sdk.createClient({
    baseUrl: "https://matrix.alphaco.cloud",
    accessToken: "syt_bi5hbWphZGlhbg_djNpImaYsmyVEjIKlNhG_4G8jxw",
    userId: "@n.amjadian:alphaco.cloud"
});

client.startClient();

client.once('sync', function(state, prevState, res) {
    console.log("*** natico : " + state); // state will be 'PREPARED' when the client is ready to use
});

var rooms = client.getRooms();
rooms.forEach(room => {
    var members = room.getJoinedMembers();
    members.forEach(member => {
        console.log(member.name);
    });
});