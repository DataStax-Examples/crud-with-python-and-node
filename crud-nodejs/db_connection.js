const cassandra = require("cassandra-driver");
const TimeUuid = require("cassandra-driver").types.TimeUuid;

// This is the Zip file you downloaded
const SECURE_CONNECT_BUNDLE =
  "/workspace/crud-with-python-and-node/crud-nodejs/creds.zip";

// Update the values with the ones you have
const CLIENT_ID = "kxPbavsfqWoZaBxqHceZxxeq";
const CLIENT_SECRET =
  "tCP7.jnWxa1YHyxsblH4nd2ymsct9UgZj+RxF6d0ruKB1f,z-EdPOL3b2K4w6OQkhdMbkoCMk77D4sNuqXXe4TBRvuLDQS3wkwuTY8uk-5sb+ELC0d8Wws.GCSWPmqe4";
const TOKEN =
  "AstraCS:kxPbavsfqWoZaBxqHceZxxeq:0dfd26f25273e1b6a98318cfc915eb21ad2ccf827518abd379a8f76c4585fe13";

// This is the username, recommended value was SUser
const USERNAME = "SUser";
// This is the password, recommended value was SPassword1
const PASSWORD = "SPassword1";
// This is the keyspace name, recommended value was spacecraft
const KEYSPACE = "spacecraft";

// Init the connection and return the client
function init_connection() {
  var connection = {};
  connection.client = new cassandra.Client({
    cloud: { secureConnectBundle: SECURE_CONNECT_BUNDLE },
    keyspace: KEYSPACE,
    credentials: { username: USERNAME, password: PASSWORD },
    authProvider: new cassandra.auth.PlainTextAuthProvider(
      CLIENT_ID,
      CLIENT_SECRET
    ),
  });
  return connection;
}

connection = init_connection();

module.exports = connection;
