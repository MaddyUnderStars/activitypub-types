import { type APActivity, isAPActivity } from "../activity.js";

export type APRemove = APActivity & { type: "Remove" };

export const ActivityIsRemove = (activity: APActivity): activity is APRemove => {
	return isAPActivity(activity) && activity.type == "Remove";
};
