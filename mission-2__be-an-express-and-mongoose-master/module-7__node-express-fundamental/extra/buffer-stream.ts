import { createReadStream } from "node:fs";
import { createServer } from "node:http";
import path from "node:path";
import { EventEmitter } from "node:stream";

const httpEmitter = new EventEmitter();

const server = createServer();

server.on("request", (req, res) => {
  console.log(req.method);
  console.log(req.url);

  if (req.url === "/read-stream" && req.method === "GET") {
    const rs = createReadStream(path.resolve(process.cwd(), "./stream.txt"));

    rs.on("data", (chunk) => {
      res.write(chunk);
    });

    rs.on("end", () => res.end());
  } else {
    res.end("Hello World");
  }
});

server.listen(8080, () => console.log("Server Listening on Port 8080"));
