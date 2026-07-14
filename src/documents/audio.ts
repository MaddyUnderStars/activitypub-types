import { type APObject, isAPObject } from "../object.js";

export type APAudio = APObject & { type: "Audio" };

export const isAPAudio = (object: APObject): object is APAudio => {
	return isAPObject(object) && object.type == "Audio";
};
