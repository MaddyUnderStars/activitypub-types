import { type APActivity, isAPActivity } from "../activity.js";

export type APJoin = APActivity & { type: "Join" };

export const ActivityIsJoin = (activity: APActivity): activity is APJoin => {
	return isAPActivity(activity) && activity.type == "Join";
};
