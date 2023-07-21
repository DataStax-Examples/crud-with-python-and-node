const cassandra = require("cassandra-driver");

// This is the Zip file you downloaded
const SECURE_CONNECT_BUNDLE =
  "/workspace/crud-with-python-and-node/crud-nodejs/creds.zip";

// Your Astra-specific credentials and keyspace
// Here is the fix where i have used the Token Authentication instead of the username and password authentication because of the updated policy by Cassandra DB.
const CLIENT_ID = "kxPbavsfqWoZaBxqHceZxxeq";
const CLIENT_SECRET =
  "tCP7.jnWxa1YHyxsblH4nd2ymsct9UgZj+RxF6d0ruKB1f,z-EdPOL3b2K4w6OQkhdMbkoCMk77D4sNuqXXe4TBRvuLDQS3wkwuTY8uk-5sb+ELC0d8Wws.GCSWPmqe4";
const KEYSPACE = "spacecraft";

// Init the connection and return the client
function init_connection() {
  var connection = {};
  connection.client = new cassandra.Client({
    cloud: { secureConnectBundle: SECURE_CONNECT_BUNDLE },
    keyspace: KEYSPACE,
    authProvider: new cassandra.auth.PlainTextAuthProvider(
      CLIENT_ID,
      CLIENT_SECRET
    ),
  });
  return connection;
}

connection = init_connection();
module.exports = connection;
