import { type APObject, isAPObject } from "../object.js";

export type APProfile = APObject & { type: "Profile" };

export const isAPProfile = (object: APObject): object is APProfile => {
	return isAPObject(object) && object.type == "Profile";
};
