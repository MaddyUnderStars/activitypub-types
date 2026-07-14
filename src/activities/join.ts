import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APJoin = APActivity & { type: "Join" };

export const isAPJoin = (activity: APObject): activity is APJoin => {
	return isAPObject(activity) && activity.type == "Join";
};
