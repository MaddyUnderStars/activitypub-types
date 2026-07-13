import { type APObject, isAPObject } from "../object.js";

export type APNote = APObject & { type: "Note" };

export const isAPNote = (object: APObject): object is APNote => {
	return isAPObject(object) && object.type == "Note";
};
