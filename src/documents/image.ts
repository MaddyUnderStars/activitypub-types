import { type APObject, isAPObject } from "../object.js";

export type APImage = APObject & { type: "Image" };

export const isAPImage = (object: APObject): object is APImage => {
	return isAPObject(object) && object.type == "Image";
};
