import { type APActivity, isAPActivity } from "../activity.js";

export type APIgnore = APActivity & { type: "Ignore" };

export const ActivityIsIgnore = (activity: APActivity): activity is APIgnore => {
	return isAPActivity(activity) && activity.type == "Ignore";
};
