import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APJoin = APActivity & { type: "Join" };

export const isAPJoin = (activity: APObject): activity is APJoin => {
	return isAPActivity(activity) && activity.type == "Join";
};
