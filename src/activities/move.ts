import { type APActivity, isAPActivity } from "../activity.js";

export type APMove = APActivity & { type: "Move" };

export const ActivityIsMove = (activity: APActivity): activity is APMove => {
	return isAPActivity(activity) && activity.type == "Move";
};
