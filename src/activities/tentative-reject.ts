import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APTentativeReject = APActivity & { type: "TentativeReject" };

export const isAPTentativeReject = (activity: APObject): activity is APTentativeReject => {
	return isAPActivity(activity) && activity.type == "TentativeReject";
};
