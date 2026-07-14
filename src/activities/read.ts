import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APRead = APActivity & { type: "Read" };

export const isAPRead = (activity: APObject): activity is APRead => {
	return isAPObject(activity) && activity.type == "Read";
};
