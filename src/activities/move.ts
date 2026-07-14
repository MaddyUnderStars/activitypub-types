import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APMove = APActivity & { type: "Move" };

export const isAPMove = (activity: APObject): activity is APMove => {
	return isAPActivity(activity) && activity.type == "Move";
};
