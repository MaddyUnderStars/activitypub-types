import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APView = APActivity & { type: "View" };

export const isAPView = (activity: APObject): activity is APView => {
	return isAPActivity(activity) && activity.type == "View";
};
