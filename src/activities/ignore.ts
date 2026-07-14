import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APIgnore = APActivity & { type: "Ignore" };

export const isAPIgnore = (activity: APObject): activity is APIgnore => {
	return isAPObject(activity) && activity.type == "Ignore";
};
