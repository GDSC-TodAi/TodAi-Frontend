# TodAi-Frontend

TodAi 프론트엔드 모노레포 (npm workspaces).

## 구조

```
todai/
├── apps/
│   ├── admin/      사회복지사용 관리 대시보드 (Next.js, :3000)
│   └── user/       어르신용 말동무 앱 "토닥" (Next.js PWA, :3001)
└── packages/
    └── api/        @todai/api — 백엔드 API 타입 · fetch 클라이언트 (앱 공유)
```

## 시작하기

루트에서 한 번만 설치하면 모든 워크스페이스 의존성이 잡힙니다.

```bash
npm install
```

개발 서버 실행:

```bash
npm run dev:admin   # 관리 대시보드  → http://localhost:3000
npm run dev:user    # 어르신 앱      → http://localhost:3001
```

빌드:

```bash
npm run build:admin
npm run build:user
```

## 환경 변수

각 앱의 `.env.local` 에 백엔드 주소를 설정합니다. `/proxy/*` 요청이
`next.config.ts` 의 rewrites 를 거쳐 `API_BASE_URL` 로 전달됩니다.

```
API_BASE_URL=http://<backend-host>:<port>
```

## 공유 패키지

`@todai/api` 는 TypeScript 소스를 그대로 export 하며, 각 앱 `next.config.ts`
의 `transpilePackages: ["@todai/api"]` 로 트랜스파일됩니다. API 계약(타입)이
바뀌면 이 패키지만 고치면 두 앱에 동시 반영됩니다.
