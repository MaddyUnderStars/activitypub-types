import { type APObject, isAPObject } from "../object.js";

export type APTombstone = APObject & { type: "Tombstone" };

export const isAPTombstone = (object: APObject): object is APTombstone => {
	return isAPObject(object) && object.type == "Tombstone";
};
