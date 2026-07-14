import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APOffer = APActivity & { type: "Offer" };

export const isAPOffer = (activity: APObject): activity is APOffer => {
	return isAPObject(activity) && activity.type == "Offer";
};
