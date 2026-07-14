import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APRemove = APActivity & { type: "Remove" };

export const isAPRemove = (activity: APObject): activity is APRemove => {
	return isAPObject(activity) && activity.type == "Remove";
};
