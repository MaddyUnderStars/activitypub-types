import { type APObject, isAPObject } from "../object.js";

export type APEvent = APObject & { type: "Event" };

export const isAPEvent = (object: APObject): object is APEvent => {
	return isAPObject(object) && object.type == "Event";
};
