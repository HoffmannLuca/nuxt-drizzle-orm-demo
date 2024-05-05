import { projects } from "~/database/schema/project";
import db from '~/database/client'
import { eq } from "drizzle-orm";

export default defineEventHandler( async (event) => {
    const body = await readBody(event);

    return await db.delete(projects)
        .where(eq(projects.id, body.id))
        .returning();

})