import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APListen = APActivity & { type: "Listen" };

export const isAPListen = (activity: APObject): activity is APListen => {
	return isAPActivity(activity) && activity.type == "Listen";
};
