import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APFlag = APActivity & { type: "Flag" };

export const isAPFlag = (activity: APObject): activity is APFlag => {
	return isAPObject(activity) && activity.type == "Flag";
};
