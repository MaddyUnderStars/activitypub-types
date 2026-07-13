import { type APObject, isAPObject } from "../object.js";

export type APDocument = APObject & { type: "Document" };

export const isAPDocument = (object: APObject): object is APDocument => {
	return isAPObject(object) && object.type == "Document";
};
