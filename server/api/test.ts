export default defineEventHandler( async (event) => {
  const body = await readBody(event)
  body.password = '*'.repeat(body.password.length);
  return {
    message: "test",
    event: event,
    body: body
  }
})
