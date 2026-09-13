# NKP4 Website

The public NKP4 website: a founder-led business home for companies, technology, investments and ideas built or backed by Nielsen Aragon.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001).

## Verification

```bash
npm run typecheck
npm run lint
npm run build
```

Public routes are `/`, `/companies`, `/companies/nkp4-technology`, `/companies/surehelp`, `/companies/manifest-network`, `/about`, and `/contact`. The retired `/links` and `/secret` routes should return 404.

Portfolio entries are centralized in `data/portfolio.ts`; shared presentation primitives live in `components/`.
