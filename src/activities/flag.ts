import { type APActivity, isAPActivity } from "../activity.js";

export type APFlag = APActivity & { type: "Flag" };

export const ActivityIsFlag = (activity: APActivity): activity is APFlag => {
	return isAPActivity(activity) && activity.type == "Flag";
};
