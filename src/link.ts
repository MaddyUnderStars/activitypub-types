import type { APObject } from "./object.js";

export type APLink = APObject & {
	href: string;
};

export const isAPLink = (obj: Record<string, unknown>): obj is APLink => {
	return "href" in obj && typeof obj.href === "string";
};
