import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APAccept = APActivity & { type: "Accept" };

export const isAPAccept = (activity: APObject): activity is APAccept => {
	return isAPObject(activity) && activity.type == "Accept";
};
