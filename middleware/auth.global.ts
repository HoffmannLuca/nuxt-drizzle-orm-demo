export default defineNuxtRouteMiddleware(async () => {
	const user = useAuthUser();
	const data = await useRequestFetch()("/api/user");
	if (data) {
		user.value = data;
	} else {
		user.value = null;
	}
});