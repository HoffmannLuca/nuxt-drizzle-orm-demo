import { Lucia } from "lucia";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import client from "~/database/client";
import { sessions, user } from "~/database/schema";

const adapter = new DrizzlePostgreSQLAdapter(client, sessions, user);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		// IMPORTANT!
		attributes: {
			// set to `true` when using HTTPS
			secure: !process.dev
		}
	}
});

// IMPORTANT!
declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
	}
}