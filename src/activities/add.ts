import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APAdd = APActivity & { type: "Add" };

export const isAPAdd = (activity: APObject): activity is APAdd => {
	return isAPActivity(activity) && activity.type == "Add";
};
