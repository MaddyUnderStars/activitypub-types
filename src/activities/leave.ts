import { type APActivity, isAPActivity } from "../activity.js";

export type APLeave = APActivity & { type: "Leave" };

export const ActivityIsLeave = (activity: APActivity): activity is APLeave => {
	return isAPActivity(activity) && activity.type == "Leave";
};
