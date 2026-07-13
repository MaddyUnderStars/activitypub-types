import { type APActivity, isAPActivity } from "../activity.js";

export type APView = APActivity & { type: "View" };

export const ActivityIsView = (activity: APActivity): activity is APView => {
	return isAPActivity(activity) && activity.type == "View";
};
