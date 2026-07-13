import { type APActivity, isAPActivity } from "../activity.js";

export type APRead = APActivity & { type: "Read" };

export const ActivityIsRead = (activity: APActivity): activity is APRead => {
	return isAPActivity(activity) && activity.type == "Read";
};
