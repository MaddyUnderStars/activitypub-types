import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APFollow = APActivity & { type: "Follow" };

export const isAPFollow = (activity: APObject): activity is APFollow => {
	return isAPObject(activity) && activity.type == "Follow";
};
