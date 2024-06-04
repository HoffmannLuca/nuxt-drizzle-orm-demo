import { projects } from "~/database/schema";
import db from '~/database/client'

export default defineEventHandler( async (event) => {
    const body = await readBody(event);

    await db.insert(projects).values({
        title: body.title,
        description: body.description
    })

    return body;
})