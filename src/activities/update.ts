import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APUpdate = APActivity & { type: "Update" };

export const isAPUpdate = (activity: APObject): activity is APUpdate => {
	return isAPObject(activity) && activity.type == "Update";
};
