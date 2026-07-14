import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APOffer = APActivity & { type: "Offer" };

export const isAPOffer = (activity: APObject): activity is APOffer => {
	return isAPActivity(activity) && activity.type == "Offer";
};
