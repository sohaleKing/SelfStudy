const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const { initializeApp, cert } = require("firebase-admin/app");
const serviceAccountKey = require("./firebaseServiceAccountKey.json");
initializeApp({ credential: cert(serviceAccountKey) });

const { getStorage } = require("firebase-admin/storage"); //when you / there will bring all option

app.use(express.static("public"));

// // Metadata
// const metadata = {
//   contentType: `image/jpeg`,
//   resumable: false,
//   firebaseStorageDownloadTokens: uuidv4(),
// };

app.post("/upload", (req, res) => {
  //   console.log(req.rawHeaders);
  //   req.on("data", (chunk) => {
  //     console.log(chunk);
  //   });
  const storage = getStorage();
  const bucket = storage.bucket("gs://upload-docs-mcgill.appspot.com");

  const file = bucket.file("1.jpg"); //imaging we just transfer jpg for simplicity

  fs.createReadStream("./1.jpg").pipe(file.createWriteStream());
  //   const firebaseStream = file.createWriteStream();
  //   req.pipe(firebaseStream);

  //   req.on("data", (chunk) => {
  //     firebaseStream.write(chunk);
  //     console.log(chunk);
  //   });

  req.on("end", () => {
    firebaseStream.end();
    res.status(200).send("TACOO");
  });
});

app.listen(3000, () => console.log("listenting in port 3000"));
