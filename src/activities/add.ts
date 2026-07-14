import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APAdd = APActivity & { type: "Add" };

export const isAPAdd = (activity: APObject): activity is APAdd => {
	return isAPObject(activity) && activity.type == "Add";
};
