import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APListen = APActivity & { type: "Listen" };

export const isAPListen = (activity: APObject): activity is APListen => {
	return isAPObject(activity) && activity.type == "Listen";
};
