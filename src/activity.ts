import { type APObject, isObjectField, type ObjectField } from "./object.js";

export type APActivity = APObject & {
	actor: ObjectField;

	object?: ObjectField;

	target?: ObjectField;

	result?: ObjectField;

	origin?: ObjectField;

	instrument?: ObjectField;

	oneOf?: ObjectField;

	anyOf?: ObjectField;

	closed?: Date | boolean | ObjectField;
};

export const isAPActivity = (obj: Record<string, unknown>): obj is APActivity => {
	return "actor" in obj && isObjectField(obj.actor) && !("attributedTo" in obj);
};
