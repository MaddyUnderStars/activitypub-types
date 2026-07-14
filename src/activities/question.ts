import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APQuestion = APActivity & { type: "Question" };

export const isAPQuestion = (activity: APObject): activity is APQuestion => {
	return isAPObject(activity) && activity.type == "Question";
};
