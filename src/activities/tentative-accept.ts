import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APTentativeAccept = APActivity & { type: "TentativeAccept" };

export const isAPTentativeAccept = (activity: APObject): activity is APTentativeAccept => {
	return isAPActivity(activity) && activity.type == "TentativeAccept";
};
