import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APLeave = APActivity & { type: "Leave" };

export const isAPLeave = (activity: APObject): activity is APLeave => {
	return isAPObject(activity) && activity.type == "Leave";
};
