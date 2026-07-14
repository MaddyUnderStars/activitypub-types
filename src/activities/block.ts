import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APBlock = APActivity & { type: "Block" };

export const isAPBlock = (activity: APObject): activity is APBlock => {
	return isAPObject(activity) && activity.type == "Block";
};
