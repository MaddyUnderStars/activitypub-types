import { type APObject, isObjectField, type ObjectField } from "./object.js";

export type APActor = APObject & {
	inbox: ObjectField;

	outbox?: ObjectField;

	followers?: ObjectField;

	following?: ObjectField;

	liked?: ObjectField;

	streams?: ObjectField;

	preferredUsername?: string;

	preferredUsernameMap?: Record<string, string>;

	endpoints?: {
		proxyUrl?: string | URL;
		oauthAuthorizationEndpoint?: string | URL;
		oauthTokenEndpoint?: string | URL;
		provideClientKey?: string | URL;
		signClientKey?: string | URL;
		sharedInbox?: string | URL;
	};

	publicKey?: {
		id: string | URL;

		owner: string;

		publicKeyPem: string;
	};

	webfinger?: string;

	manuallyApprovesFollowers?: boolean;
};

export const isAPActor = (obj: Record<string, unknown>): obj is APActor => {
	return isObjectField(obj.inbox);
};
