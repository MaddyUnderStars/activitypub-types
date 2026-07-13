import { type APActivity, isAPActivity } from "../activity.js";

export type APListen = APActivity & { type: "Listen" };

export const ActivityIsListen = (activity: APActivity): activity is APListen => {
	return isAPActivity(activity) && activity.type == "Listen";
};
