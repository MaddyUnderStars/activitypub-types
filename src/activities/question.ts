import { type APActivity, isAPActivity } from "../activity.js";

export type APQuestion = APActivity & { type: "Question" };

export const ActivityIsQuestion = (activity: APActivity): activity is APQuestion => {
	return isAPActivity(activity) && activity.type == "Question";
};
