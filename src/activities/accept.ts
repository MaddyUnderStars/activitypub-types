import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APAccept = APActivity & { type: "Accept" };

export const isAPAccept = (activity: APObject): activity is APAccept => {
	return isAPActivity(activity) && activity.type == "Accept";
};
