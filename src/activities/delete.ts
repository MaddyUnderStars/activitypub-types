import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APDelete = APActivity & { type: "Delete" };

export const isAPDelete = (activity: APObject): activity is APDelete => {
	return isAPActivity(activity) && activity.type == "Delete";
};
