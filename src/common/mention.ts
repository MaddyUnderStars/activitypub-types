import { type APLink, isAPLink } from "../link.js";
import type { APObject } from "../object.js";

export type APMention = APLink & { type: "Mention" };

export const isAPMention = (object: APObject): object is APMention => {
	return isAPLink(object) && object.type == "Mention";
};
