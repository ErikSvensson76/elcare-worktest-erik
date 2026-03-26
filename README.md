# Service Order Integration - Node.js Test Task

* Insurance provider (SOAP API)
* Dyson (SFTP file integration)

The Data is normalized into a unified JSON format and printed to the console.

---
## Tech Stack
- Node.js
- Typescript
- axios (HTTP requests)
- xml2js (XML parsing)
- ssh2-sftp-client (SFTP access)
- dotenv (environment variables)

## Project Structure
```
├── src
|   |__ config/
|   |   └── config.ts
│   ├── integrations/
│   │   ├── insuranceApi.ts
│   │   └── dysonSftp.ts
|   ├── mappers/
│   │   ├── insuranceMapper.ts
│   │   └── dysonMapper.ts
|   |__ utils/
|   |   |__ utils.ts
|   ├── models/
│   │   └── Order.ts
|   |   |__ CallInfoDomain.ts
|   |index.ts
```
