import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APReject = APActivity & { type: "Reject" };

export const isAPReject = (activity: APObject): activity is APReject => {
	return isAPObject(activity) && activity.type == "Reject";
};
