import { type APActivity, isAPActivity } from "../activity.js";

export type APBlock = APActivity & { type: "Block" };

export const ActivityIsBlock = (activity: APActivity): activity is APBlock => {
	return isAPActivity(activity) && activity.type == "Block";
};
