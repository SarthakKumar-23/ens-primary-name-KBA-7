# ENS Primary Name Resolver

Resolves the primary `ENS` name for an `Ethereum` address using viem, then verifies the result through forward resolution.

**How it works**
```
Ethereum Address
       ↓
getEnsName()
       ↓
Primary ENS Name
       ↓
getEnsAddress()
       ↓
Compare Addresses
       ↓
Verified / Invalid
```

- Requirements
```
Node.js
npm
viem
```

- Install
```
npm install
```

- Run
```
npm start
```

**Example**
```
Address:          0xd213...507B
ENS Name:         wevm.eth
Resolved Address: 0xd2135CfB216b74109775236E36d4b433F1DF507B
Verification:     VALID
```

- Purpose

This project demonstrates ENS reverse resolution, forward resolution, and primary-name verification for Ethereum addresses.