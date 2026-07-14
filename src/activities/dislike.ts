import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APDislike = APActivity & { type: "Dislike" };

export const isAPDislike = (activity: APObject): activity is APDislike => {
	return isAPActivity(activity) && activity.type == "Dislike";
};
