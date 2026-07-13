import { type APActivity, isAPActivity } from "../activity.js";

export type APTentativeAccept = APActivity & { type: "TentativeAccept" };

export const ActivityIsTentativeAccept = (activity: APActivity): activity is APTentativeAccept => {
	return isAPActivity(activity) && activity.type == "TentativeAccept";
};
