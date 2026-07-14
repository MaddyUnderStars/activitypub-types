import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APRead = APActivity & { type: "Read" };

export const isAPRead = (activity: APObject): activity is APRead => {
	return isAPActivity(activity) && activity.type == "Read";
};
