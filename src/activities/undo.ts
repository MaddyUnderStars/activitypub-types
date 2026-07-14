import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APUndo = APActivity & { type: "Undo" };

export const isAPUndo = (activity: APObject): activity is APUndo => {
	return isAPObject(activity) && activity.type == "Undo";
};
