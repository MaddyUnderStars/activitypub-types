# ActivityPub Types
Extracted types and refactor from [activitypub-models](https://github.com/SiranWeb/activitypub-models) repo.

## Available types
Implemented and documented every structure from [specification](https://www.w3.org/TR/activitystreams-vocabulary).
You can use interfaces and extend them by yourself, or you can use specified fields types:
```typescript
// All models interfaces starts with AP
import { APObject, APNote, LdContextField, ContentMapField } from 'activitypub-types';
```

## License
[MIT](LICENSE)