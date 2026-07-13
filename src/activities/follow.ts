import { type APActivity, isAPActivity } from "../activity.js";

export type APFollow = APActivity & { type: "Follow" };

export const ActivityIsFollow = (activity: APActivity): activity is APFollow => {
	return isAPActivity(activity) && activity.type == "Follow";
};
