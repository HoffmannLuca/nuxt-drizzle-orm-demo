import { projects } from "~/database/schema/project";
import db from '~/database/client'

export default defineEventHandler( async (event) => {

    return db.select().from(projects);
})