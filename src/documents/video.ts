import { type APObject, isAPObject } from "../object.js";

export type APVideo = APObject & { type: "Video" };

export const isAPVideo = (object: APObject): object is APVideo => {
	return isAPObject(object) && object.type == "Video";
};
