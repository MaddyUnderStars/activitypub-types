import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APFlag = APActivity & { type: "Flag" };

export const isAPFlag = (activity: APObject): activity is APFlag => {
	return isAPActivity(activity) && activity.type == "Flag";
};
