import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APDislike = APActivity & { type: "Dislike" };

export const isAPDislike = (activity: APObject): activity is APDislike => {
	return isAPObject(activity) && activity.type == "Dislike";
};
