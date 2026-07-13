import { type APObject, isAPObject } from "../object.js";

export type APPlace = APObject & { type: "Place" };

export const isAPPlace = (object: APObject): object is APPlace => {
	return isAPObject(object) && object.type == "Place";
};
