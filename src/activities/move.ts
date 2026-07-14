import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APMove = APActivity & { type: "Move" };

export const isAPMove = (activity: APObject): activity is APMove => {
	return isAPObject(activity) && activity.type == "Move";
};
