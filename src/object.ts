import { type APActivity, isAPActivity } from "./activity.js";
import { type APActor, isAPActor } from "./actor.js";
import { isAPCollection, type APCollection } from "./collection.js";
import { type APLink, isAPLink } from "./link.js";
import { isRecord } from "./util.js";

export type ObjectId = string | URL;
export type ObjectField = ObjectId | APObject | APLink;
export type LdContextField = string | Record<string, string>;

export type APObject = {
	"@context"?: LdContextField | LdContextField[];

	id: ObjectId;

	type?: string;

	attachment?: ObjectField | ObjectField[];

	attributedTo?: ObjectField | ObjectField[];

	audience?: ObjectField | ObjectField[];

	content?: string;

	contentMap?: Record<string, string>;

	mediaType?: string;

	name?: string;

	nameMap?: Record<string, string>;

	endTime?: string | Date;

	startTime?: string | Date;

	generator?: ObjectField;

	icon?: ObjectField;

	image?: ObjectField;

	inReplyTo?: ObjectField;

	location?: ObjectField;

	preview?: ObjectField;

	published?: string | Date;

	replies?: ObjectId | APCollection;

	summary?: string;

	summaryMap?: Record<string, string>;

	tag?: ObjectField | ObjectField[];

	updated?: string | Date;

	url?: string | URL | APLink;

	to?: ObjectField | ObjectField[];
	bto?: ObjectField | ObjectField[];
	cc?: ObjectField | ObjectField[];
	bcc?: ObjectField | ObjectField[];

	duration?: string;

	source?: {
		content: string;
		mediaType?: string;
	};

	likes?: ObjectId | APCollection;

	shares?: ObjectId | APCollection;

	context?: ObjectId | APCollection;

	accuracy?: number;

	altitude?: number;

	latitude?: number;

	longitude?: number;

	radius?: number;

	units?: string;

	subject?: ObjectField;

	object?: ObjectField;

	relationship?: string | AnyAPObject;

	formerType?: string;

	deleted?: string | Date;

	describes?: string | AnyAPObject;
};

export type AnyAPObject = APObject | APActivity | APLink | APActor | APCollection;

export const isAPObject = (obj: unknown): obj is APObject => {
	return (
		isRecord(obj) &&
		"id" in obj &&
		isObjectId(obj.id) &&
		!isAPActor(obj) &&
		// !isVerificationMethod &&
		// !isPublicKey &&
		!isAPLink(obj) &&
		!isAPActivity(obj) &&
		!isAPCollection(obj)
	);
};

export const isAnyAPObject = (obj: Record<string, unknown>): obj is AnyAPObject => {
	return (
		isAPActor(obj) ||
		// isVerificationMethod ||
		// isPublicKey ||
		isAPLink(obj) ||
		isAPActivity(obj) ||
		isAPCollection(obj) ||
		(isRecord(obj) && "id" in obj && isObjectId(obj.id))
	);
};

export const isObjectField = (obj: unknown): obj is ObjectField => {
	return isObjectId(obj) || (isRecord(obj) && isAnyAPObject(obj));
};

export const isObjectId = (obj: unknown): obj is ObjectId => {
	return typeof obj === "string" || obj instanceof URL;
};
