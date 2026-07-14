import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APTentativeAccept = APActivity & { type: "TentativeAccept" };

export const isAPTentativeAccept = (activity: APObject): activity is APTentativeAccept => {
	return isAPObject(activity) && activity.type == "TentativeAccept";
};
