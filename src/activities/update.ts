import { type APActivity, isAPActivity } from "../activity.js";

export type APUpdate = APActivity & { type: "Update" };

export const ActivityIsUpdate = (activity: APActivity): activity is APUpdate => {
	return isAPActivity(activity) && activity.type == "Update";
};
