export const isRecord = (obj: unknown): obj is Record<string, unknown> => {
	if (!obj || typeof obj !== "object") return false;

	return Object.getPrototypeOf(obj).constructor === Object;
};
