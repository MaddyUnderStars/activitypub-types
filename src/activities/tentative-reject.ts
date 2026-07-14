import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APTentativeReject = APActivity & { type: "TentativeReject" };

export const isAPTentativeReject = (activity: APObject): activity is APTentativeReject => {
	return isAPObject(activity) && activity.type == "TentativeReject";
};
