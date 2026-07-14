# ActivityPub Types

[ActivityPub](https://www.w3.org/TR/activitystreams-vocabulary/) types package with support for [FEP-2277 Activitypub core types](https://codeberg.org/fediverse/fep/src/branch/main/fep/2277/fep-2277.md) (duck typing).

```ts
import { isAPObject } from "activitypub-types/object";
import { isAPNote } from "activitypub-types/common/note";

const note = { type: "Note", content: "hi!" };

isAPObject(note); // true
isAPNote(note); // true

const actor = { inbox: "https://example.com/inbox" };

isAPActor(actor); // true
isAPObject(actor); // false
```

# Installation

```sh
npm i @shootpub/activitypub-types
```

# Credits

This was originally a fork of [siranweb/activitypub-types](https://github.com/siranweb/activitypub-types) however now deviates too greatly from upstream.
