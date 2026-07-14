import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APFollow = APActivity & { type: "Follow" };

export const isAPFollow = (activity: APObject): activity is APFollow => {
	return isAPActivity(activity) && activity.type == "Follow";
};
