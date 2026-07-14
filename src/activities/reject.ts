import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APReject = APActivity & { type: "Reject" };

export const isAPReject = (activity: APObject): activity is APReject => {
	return isAPActivity(activity) && activity.type == "Reject";
};
