import { hash } from "@node-rs/argon2";
import { generateIdFromEntropySize } from "lucia";
import db from "~/database/client";
import { user } from "~/database/schema";

export default eventHandler(async (event) => {
  const formData = await readFormData(event);
  const email = formData.get("email");
  if (typeof email !== "string") {
    throw createError({
      message: "Invalid email",
      statusCode: 400,
    });
  }
  const password = formData.get("password");
  if (
    typeof password !== "string" ||
    password.length < 6 ||
    password.length > 255
  ) {
    throw createError({
      message: "Invalid password",
      statusCode: 400,
    });
  }

  const passwordHash = await hash(password, {
    // recommended minimum parameters
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });
  const userId = generateIdFromEntropySize(10); // 16 characters long

  // TODO: check if email is already used
  await db.insert(user).values({
    id: userId,
    email: email,
    password_hash: passwordHash,
  });

  const session = await lucia.createSession(userId, {});
  appendHeader(
    event,
    "Set-Cookie",
    lucia.createSessionCookie(session.id).serialize()
  );
});
