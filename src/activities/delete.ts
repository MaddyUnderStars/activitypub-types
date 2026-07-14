import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APDelete = APActivity & { type: "Delete" };

export const isAPDelete = (activity: APObject): activity is APDelete => {
	return isAPObject(activity) && activity.type == "Delete";
};
