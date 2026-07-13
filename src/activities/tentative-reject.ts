import { type APActivity, isAPActivity } from "../activity.js";

export type APTentativeReject = APActivity & { type: "TentativeReject" };

export const ActivityIsTentativeReject = (activity: APActivity): activity is APTentativeReject => {
	return isAPActivity(activity) && activity.type == "TentativeReject";
};
