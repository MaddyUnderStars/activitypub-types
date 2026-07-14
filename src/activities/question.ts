import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APQuestion = APActivity & { type: "Question" };

export const isAPQuestion = (activity: APObject): activity is APQuestion => {
	return isAPActivity(activity) && activity.type == "Question";
};
