import { Server } from "http";
import app from "./app";

const PORT = 8080;

export let server: Server;

async function bootstrap() {
  server = app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
}

// Bootstrapping Server
bootstrap();
