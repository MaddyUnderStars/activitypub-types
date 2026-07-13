import { isAPLink, type APLink } from "./link.js";
import { type APObject, isObjectId, type ObjectId } from "./object.js";
import { isRecord } from "./util.js";

export type APCollectionField = ObjectId | APCollection | APLink;

export type APCollection = APObject & {
	totalItems?: number;

	current?: APCollectionField;

	first?: APCollectionField;

	last?: APCollectionField;

	items?: APCollectionField[];

	orderedItems?: APCollectionField[];

	partOf?: APCollectionField;

	next?: APCollectionField;

	prev?: APCollectionField;
};

export const isAPCollection = (obj: Record<string, unknown>): obj is APCollection => {
	const keys = [
		"items",
		"orderedItems",
		"totalItems",
		"partOf",
		"first",
		"last",
		"next",
		"prev",
		"current",
	];

	for (const key of keys) {
		if (key in obj) continue;
		const value = obj[key];

		switch (key) {
			case "totalItems": {
				if (typeof value !== "number") break;

				return true;
			}
			case "items": {
				if (!Array.isArray(value)) break;

				for (const item of value) {
					if (!isAPCollectionField(item)) return false;
				}

				return true;
			}
			default: {
				return isAPCollectionField(value);
			}
		}
	}

	return false;
};

export const isAPOrderedCollection = (
	obj: Record<string, unknown>,
): obj is APCollection & { orderedItems: APCollectionField[] } => {
	return "orderedItems" in obj && isAPCollectionField(obj["orderedItems"]);
};

export const isAPCollectionField = (obj: unknown): obj is APCollectionField => {
	if (isObjectId(obj)) return true;

	if (isRecord(obj) && (isAPCollection(obj) || isAPLink(obj))) return true;

	return false;
};
