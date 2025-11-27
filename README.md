# Duologue

소셜 매칭 기반의 미니게임 모바일 애플리케이션

## 기술 스택

- **Framework**: Expo SDK 54.0 + React Native 0.81.5
- **Language**: TypeScript 5.9 (Strict Mode)
- **Router**: Expo Router 6.0 (파일 기반 라우팅)
- **Package Manager**: Yarn 1.22+

## 시작하기

### 필수 요구사항

- Node.js 18.0 이상
- Yarn 1.22 이상 (npm 사용 금지)
- iOS 개발: Xcode 및 iOS Simulator
- Android 개발: Android Studio 및 Android Emulator

### 설치

```bash
# 의존성 설치
yarn install
```

### 환경 변수 설정

프로젝트 루트에 환경 변수 파일을 생성하세요:

```bash
# 로컬 개발용
cp .env.example .env.local
```

`.env.local` 파일을 열어 필요한 값을 입력하세요:

```env
EXPO_PUBLIC_API_URL=http://localhost:8080/api/v1
EXPO_PUBLIC_WS_URL=ws://localhost:8080
```

### 실행

```bash
# 개발 서버 시작
yarn start

# iOS 시뮬레이터에서 실행
yarn ios

# Android 에뮬레이터에서 실행
yarn android
```

## 개발 가이드

### 코드 품질 검사

```bash
# TypeScript 타입 체크
yarn tsc

# ESLint 검사
yarn lint

# ESLint 자동 수정
yarn lint:fix

# Prettier 포맷팅
yarn format
```

### 커밋 전 자동 검사

Husky pre-commit hook이 설정되어 있어 커밋 시 자동으로:

1. TypeScript 타입 체크
2. ESLint 검사

가 실행됩니다. 검사를 통과하지 못하면 커밋이 차단됩니다.

### 프로젝트 규칙

프로젝트의 모든 코드 작성 규칙은 `.claude-project-rules.md`에 정의되어 있습니다.

**주요 규칙:**

- ⚠️ **패키지 매니저**: 반드시 `yarn` 사용 (`npm` 사용 금지)
- TypeScript `any` 타입 사용 금지
- React 컴포넌트는 Arrow Function으로 작성
- Import 순서 준수 (ESLint가 자동 정렬)
- 하드코딩된 텍스트 금지 (상수로 분리)

### 폴더 구조

```
duologue-app/
├── app/          # Expo Router 화면 (파일 기반 라우팅)
├── api/          # API 클라이언트
├── components/   # 재사용 가능한 컴포넌트
├── hooks/        # 커스텀 React Hooks
├── stores/       # 상태 관리 (Zustand)
├── types/        # TypeScript 타입 정의
├── utils/        # 유틸리티 함수
├── constants/    # 상수 정의
├── assets/       # 이미지, 폰트 등
└── docs/         # 프로젝트 문서
```

## VSCode 설정

프로젝트에 VSCode 설정이 포함되어 있어 파일 저장 시 자동으로:

- Prettier 포맷팅 적용
- ESLint 자동 수정

## 문서

- [프로젝트 규칙](./.claude-project-rules.md)
- [작업 문서](./docs/tasks/)
- [도메인 모델](./docs/specs/domain-model.md)

## 라이선스

Private
