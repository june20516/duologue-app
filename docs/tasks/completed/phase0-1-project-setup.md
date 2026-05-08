# Phase 0-1: 프로젝트 초기 설정

## 작성일

2025-11-19

## 우선순위

- [x] 긴급
- [ ] 높음
- [ ] 보통
- [ ] 낮음

## 작업 개요

Duologue 프론트엔드 프로젝트의 기본 구조와 개발 환경을 설정

- Expo 프로젝트 초기화 및 TypeScript 설정
- 코드 품질 도구 (ESLint, Prettier) 구성
- 프로젝트 폴더 구조 정립

## 작업 목적

일관된 코드 스타일과 구조를 갖춘 프로젝트 기반을 마련하여, 이후 개발 작업의 효율성을 높이고 유지보수를 용이하게 함

## 작업 범위

### 포함 사항

- [x] Expo 프로젝트 초기화 (완료됨)
- [ ] TypeScript 설정 확인 및 최적화
- [ ] ESLint + Prettier 설정 (상세 규칙 포함)
- [ ] 프로젝트 폴더 구조 생성
- [ ] 환경 변수 설정 (환경별 분리)
- [ ] Husky 설정 (pre-commit hook)
- [ ] Git 설정 (.gitignore 확인)
- [ ] 기본 README 작성

### 제외 사항

- UI 라이브러리 설치 (Phase 0-2에서 진행)
- 실제 기능 구현
- 배포 설정

## 기술적 접근

### 사용할 기술/라이브러리

- **Expo SDK ~54.0**: React Native 개발 환경
- **TypeScript ~5.9**: 타입 안전성
- **ESLint**: 코드 린팅
- **Prettier**: 코드 포맷팅
- **Husky**: Git hooks 관리
- **expo-router ~6.0**: 파일 기반 라우팅

> **패키지 매니저**: Yarn 사용 ([프로젝트 규칙](../../../.claude-project-rules.md) 참조)

### 폴더 구조

```
duologue-app/
├── app/                        # Expo Router 화면
│   ├── _layout.tsx
│   ├── index.tsx
│   └── (tabs)/
│       └── _layout.tsx
├── api/                        # API 클라이언트
├── components/                 # 재사용 컴포넌트 (기존)
├── hooks/                      # 커스텀 훅 (기존)
├── stores/                     # Zustand 스토어
├── types/                      # TypeScript 타입
├── utils/                      # 유틸리티 함수
├── constants/                  # 상수 (기존)
├── assets/                     # 이미지, 폰트 등 (기존)
├── docs/                       # 문서
├── .env.local                  # 로컬 개발 환경 변수
├── .env.development            # 개발 환경 변수
├── .env.production             # 프로덕션 환경 변수
├── .env.example                # 환경 변수 예시
├── eslint.config.js            # ESLint 설정
├── .prettierrc                 # Prettier 설정
├── tsconfig.json               # TypeScript 설정
└── package.json
```

### 구현 단계

1. **TypeScript 설정 최적화**
   - `tsconfig.json` 확인 및 strict 모드 활성화
   - path alias 설정 (`@/` → 루트 경로)

2. **ESLint 설정**
   - 필요한 플러그인 설치
     ```bash
     yarn add -D eslint-plugin-react-hooks eslint-plugin-import
     ```
   - `.eslintrc.js` 생성 및 규칙 추가

     ```javascript
     module.exports = {
       extends: ['expo', 'prettier'],
       plugins: ['react-hooks', 'import'],
       rules: {
         // Memoization 훅 의존성 검증
         'react-hooks/rules-of-hooks': 'error',
         'react-hooks/exhaustive-deps': 'warn',

         // Import 정렬 및 미사용 import 제거
         'import/order': [
           'error',
           {
             groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
             'newlines-between': 'always',
             alphabetize: { order: 'asc', caseInsensitive: true },
           },
         ],
         'no-unused-vars': 'off',
         '@typescript-eslint/no-unused-vars': [
           'error',
           { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
         ],

         // 미사용 변수 경고
         'no-unused-expressions': 'warn',

         // Inline text 경고 (i18n 대비)
         'react-native/no-inline-styles': 'warn',
         'react-native/no-raw-text': 'warn',

         // 함수형 컴포넌트 arrow function 강제
         'react/function-component-definition': [
           'error',
           {
             namedComponents: 'arrow-function',
             unnamedComponents: 'arrow-function',
           },
         ],
       },
     };
     ```

3. **Prettier 설정**
   - `.prettierrc` 생성
     ```json
     {
       "semi": true,
       "singleQuote": true,
       "tabWidth": 2,
       "trailingComma": "es5",
       "printWidth": 100,
       "arrowParens": "always"
     }
     ```
   - ESLint와 충돌 방지 플러그인 설치
     ```bash
     yarn add -D eslint-config-prettier
     ```

4. **Husky 설정**
   - Husky 설치
     ```bash
     yarn add -D husky
     npx husky init
     ```
   - Pre-commit hook 설정 (`.husky/pre-commit`)

     ```bash
     #!/usr/bin/env sh
     . "$(dirname -- "$0")/_/husky.sh"

     # TypeScript 타입 체크
     echo "🔍 Running TypeScript compiler..."
     npx tsc --noEmit

     # ESLint 검사
     echo "🔍 Running ESLint..."
     yarn lint

     echo "✅ Pre-commit checks passed!"
     ```

5. **폴더 구조 생성**
   - 필요한 루트 디렉토리 생성 (기존 폴더는 유지)
     ```bash
     mkdir -p api stores types utils
     ```
   - 각 폴더에 `index.ts` 추가
     ```typescript
     // api/index.ts
     export {};
     ```

6. **환경 변수 설정 (환경별 분리)**
   - `.env.local` 생성 (로컬 개발용, git 무시)
     ```
     EXPO_PUBLIC_API_URL=http://localhost:8080/api/v1
     EXPO_PUBLIC_WS_URL=ws://localhost:8080
     ```
   - `.env.development` 생성 (개발 서버용)
     ```
     EXPO_PUBLIC_API_URL=https://dev-api.duologue.com/api/v1
     EXPO_PUBLIC_WS_URL=wss://dev-api.duologue.com
     ```
   - `.env.production` 생성 (프로덕션용)
     ```
     EXPO_PUBLIC_API_URL=https://api.duologue.com/api/v1
     EXPO_PUBLIC_WS_URL=wss://api.duologue.com
     ```
   - `.env.example` 생성 (예시 파일)
     ```
     EXPO_PUBLIC_API_URL=
     EXPO_PUBLIC_WS_URL=
     ```
   - `.gitignore`에 추가 확인
     ```
     .env.local
     .env.development
     .env.production
     ```

7. **package.json 스크립트 추가**

   ```json
   {
     "scripts": {
       "start": "expo start",
       "android": "expo start --android",
       "ios": "expo start --ios",
       "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
       "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
       "tsc": "tsc --noEmit",
       "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md}\""
     }
   }
   ```

8. **기본 README 작성**
   - 프로젝트 소개
   - 실행 방법 (Yarn 사용 명시)
   - 개발 환경 설정

9. **검증**
   - `yarn lint` 실행
   - `yarn tsc` 실행
   - iOS/Android 시뮬레이터 실행

## 검증 방법

### 테스트 케이스

1. **TypeScript 검증**
   - 입력: `yarn tsc`
   - 예상 결과: 컴파일 에러 없음

2. **ESLint 검증**
   - 입력: `yarn lint`
   - 예상 결과: 린트 에러 없음

3. **Prettier 검증**
   - 입력: `yarn format`
   - 예상 결과: 포맷팅 적용

4. **Husky Pre-commit Hook 검증**
   - 입력: 의도적으로 에러가 있는 파일 커밋 시도
   - 예상 결과: 커밋 차단 및 에러 메시지 표시

5. **프로젝트 실행**
   - 입력: `yarn start`
   - 예상 결과: 정상 실행 및 QR 코드 표시

### 수동 확인

- [ ] TypeScript strict 모드 활성화
- [ ] ESLint 규칙 적용 확인
  - [ ] Memoization 의존성 경고 동작
  - [ ] Import 순서 검증
  - [ ] 안쓰는 import 에러
  - [ ] 안쓰는 변수 경고
  - [ ] Inline text 경고
  - [ ] Arrow function 컴포넌트 강제
- [ ] Prettier 자동 포맷팅 동작
- [ ] Husky pre-commit hook 동작
- [ ] `.env.local`, `.env.development`, `.env.production`, `.env.example` 존재
- [ ] `.gitignore`에 `.env.*` 파일 추가됨 (`.env.example` 제외)
- [ ] iOS 시뮬레이터에서 정상 실행
- [ ] Android 시뮬레이터에서 정상 실행

## 의존성

### 선행 작업

- 없음 (Phase 0 첫 작업)

### 후속 작업

- Phase 0-2: UI 라이브러리 및 디자인 시스템
- Phase 0-3: 네비게이션 구조
- Phase 0-4: API 클라이언트 설정

## 주의사항

- **패키지 매니저**: 반드시 Yarn 사용 ([프로젝트 규칙](../../../.claude-project-rules.md) 참조)
- **타입 안전성**: tsconfig strict 모드 반드시 활성화
- **일관성**: ESLint/Prettier 규칙을 팀 전체가 따를 수 있도록 설정
- **환경 변수**:
  - `.env.local`, `.env.development`, `.env.production`는 git에 커밋하지 않음
  - `.env.example`만 git에 커밋
  - 환경별로 다른 API URL 사용
- **폴더 구조**: 한 번 정한 구조는 프로젝트 전체에서 일관되게 유지
- **Git Hooks**: Husky pre-commit hook이 실패하면 커밋 불가

## 참고 자료

- [Expo 공식 문서](https://docs.expo.dev/)
- [TypeScript 설정 가이드](https://www.typescriptlang.org/tsconfig)
- [ESLint 설정](https://eslint.org/docs/latest/use/configure/)
- [Prettier 설정](https://prettier.io/docs/en/configuration.html)
- [프론트엔드 로드맵](../roadmap.md)

---

## 작업 이력

### [2025-11-19 14:30] 작업 문서 작성

- Phase 0-1 작업 문서 작성 완료
- Expo 프로젝트 초기화는 이미 완료된 상태

### [2025-11-19 14:35] 작업 시작 및 요구사항 추가

- 작업 문서를 active로 이동
- 상세 요구사항 추가:
  1. ESLint 규칙 상세화 (memoization, import, inline text 등)
  2. 환경 변수 파일 분리 (local/development/production)
  3. Husky pre-commit hook 추가
  4. Yarn 패키지 매니저 사용 명시

### [2025-11-19 17:15] 작업 완료

**완료된 항목:**

- TypeScript 설정 최적화 (strict mode, path alias, exclude)
- ESLint + Prettier 설정 (Expo flat config 기반)
- VSCode 설정 (format on save, ESLint 자동 수정)
- 프로젝트 폴더 구조 생성 (api, stores, types, utils)
- 환경 변수 파일 설정 (.env.local, .env.development, .env.production, .env.example)
- Husky pre-commit hook 설정 (TypeScript + ESLint 검사)
- README.md 작성 (Yarn 사용, 개발 가이드)

**특이사항:**

- eslint-plugin-react-native의 flat config 호환성 문제로 해당 플러그인은 제외
- Expo config 기본 설정으로 충분히 동작
- yarn lint, yarn tsc 모두 정상 동작 확인

**검증 완료:**

- yarn tsc: 통과
- yarn lint: 3개 warning (기존 Expo 템플릿 코드의 inline styles)
- 저장 시 자동 포맷팅 및 ESLint 수정 동작 확인
