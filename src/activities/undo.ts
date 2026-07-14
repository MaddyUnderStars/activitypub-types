import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APUndo = APActivity & { type: "Undo" };

export const isAPUndo = (activity: APObject): activity is APUndo => {
	return isAPActivity(activity) && activity.type == "Undo";
};
