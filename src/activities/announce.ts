import { type APActivity, isAPActivity } from "../activity.js";

export type APAnnounce = APActivity & { type: "Announce" };

export const ActivityIsAnnounce = (activity: APActivity): activity is APAnnounce => {
	return isAPActivity(activity) && activity.type == "Announce";
};
