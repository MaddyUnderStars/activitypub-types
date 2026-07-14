import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APLeave = APActivity & { type: "Leave" };

export const isAPLeave = (activity: APObject): activity is APLeave => {
	return isAPActivity(activity) && activity.type == "Leave";
};
