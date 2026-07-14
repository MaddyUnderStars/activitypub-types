import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APView = APActivity & { type: "View" };

export const isAPView = (activity: APObject): activity is APView => {
	return isAPObject(activity) && activity.type == "View";
};
