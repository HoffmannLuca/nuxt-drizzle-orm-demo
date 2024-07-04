import type { User } from "lucia";

export const useAuthUser = () => {
	const user = useState<User | null>("user", () => null);
	return user;
};