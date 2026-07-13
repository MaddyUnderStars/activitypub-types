import { type APActivity, isAPActivity } from "../activity.js";

export type APReject = APActivity & { type: "Reject" };

export const ActivityIsReject = (activity: APActivity): activity is APReject => {
	return isAPActivity(activity) && activity.type == "Reject";
};
