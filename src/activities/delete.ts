import { type APActivity, isAPActivity } from "../activity.js";

export type APDelete = APActivity & { type: "Delete" };

export const ActivityIsDelete = (activity: APActivity): activity is APDelete => {
	return isAPActivity(activity) && activity.type == "Delete";
};
