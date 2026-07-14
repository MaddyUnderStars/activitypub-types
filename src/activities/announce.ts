import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APAnnounce = APActivity & { type: "Announce" };

export const isAPAnnounce = (activity: APObject): activity is APAnnounce => {
	return isAPActivity(activity) && activity.type == "Announce";
};
