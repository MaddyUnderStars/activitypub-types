import { type APActivity, isAPActivity } from "../activity.js";

export type APCreate = APActivity & { type: "Create" };

export const ActivityIsCreate = (activity: APActivity): activity is APCreate => {
	return isAPActivity(activity) && activity.type == "Create";
};
