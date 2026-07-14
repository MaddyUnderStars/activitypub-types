import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APUpdate = APActivity & { type: "Update" };

export const isAPUpdate = (activity: APObject): activity is APUpdate => {
	return isAPActivity(activity) && activity.type == "Update";
};
