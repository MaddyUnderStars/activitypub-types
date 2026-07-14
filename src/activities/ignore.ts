import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APIgnore = APActivity & { type: "Ignore" };

export const isAPIgnore = (activity: APObject): activity is APIgnore => {
	return isAPActivity(activity) && activity.type == "Ignore";
};
