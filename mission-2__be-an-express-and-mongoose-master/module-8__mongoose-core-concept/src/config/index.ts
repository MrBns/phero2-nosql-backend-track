import dotenv from "dotenv";
import path from "path";

dotenv.config({
	path: path.join(process.cwd(), ".env"),
});

export function env(key: string): string | undefined {
	return process.env[key];
}

const config = {
	PORT: process.env.PORT || 8080,
	DB_URL: process.env.DB_URL as string,
};

export default config;
