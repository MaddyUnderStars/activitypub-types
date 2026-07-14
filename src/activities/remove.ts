import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APRemove = APActivity & { type: "Remove" };

export const isAPRemove = (activity: APObject): activity is APRemove => {
	return isAPActivity(activity) && activity.type == "Remove";
};
