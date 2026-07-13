import { type APActivity, isAPActivity } from "../activity.js";

export type APUndo = APActivity & { type: "Undo" };

export const ActivityIsUndo = (activity: APActivity): activity is APUndo => {
	return isAPActivity(activity) && activity.type == "Undo";
};
