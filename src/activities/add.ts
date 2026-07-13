import { type APActivity, isAPActivity } from "../activity.js";

export type APAdd = APActivity & { type: "Add" };

export const ActivityIsAdd = (activity: APActivity): activity is APAdd => {
	return isAPActivity(activity) && activity.type == "Add";
};
