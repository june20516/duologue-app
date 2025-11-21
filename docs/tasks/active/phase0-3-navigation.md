# Phase 0-3: 네비게이션 구조

## 작성일

2025-11-19

## 우선순위

- [x] 긴급
- [ ] 높음
- [ ] 보통
- [ ] 낮음

## 작업 개요

커스텀 탭 네비게이션 구현 및 인증 가드 구현

- 파일 기반 라우팅 구조 정립
- Pan Gesture 기반 커스텀 탭 네비게이션 컴포넌트 개발
- 인증 상태에 따른 화면 접근 제어 (로그인 페이지로 리다이렉트)

## 작업 목적

사용자 경험을 고려한 네비게이션 흐름을 구축하고, 인증되지 않은 사용자의 접근을 제어

## 작업 범위

### 포함 사항

- [ ] Zustand 설치 및 인증 스토어 생성
- [ ] 커스텀 탭 네비게이션 컴포넌트 구현
  - [ ] Pan Gesture 기반 좌우 스와이프
  - [ ] 탭 전환 애니메이션
  - [ ] 탭 인디케이터
- [ ] 인증 가드 구현
  - [ ] 인증 상태 체크
  - [ ] 미인증 시 로그인 페이지로 리다이렉트
- [ ] 라우팅 구조 정리
  - [ ] 로그인 화면 (빈 화면)
  - [ ] 메인 앱 화면 구조

### 제외 사항

- 실제 로그인 로직 구현 (Phase 1)
- 복잡한 딥링킹 로직
- 화면별 세부 내용 구현

## 기술적 접근

### 사용할 기술/라이브러리

- **Expo Router**: 파일 기반 라우팅 (이미 설치됨)
- **React Native Gesture Handler**: Pan Gesture (이미 설치됨)
- **React Native Reanimated**: 탭 전환 애니메이션 (이미 설치됨)
- **Zustand**: 인증 상태 관리 (설치 필요)

### 파일 구조

```
app/
├── _layout.tsx                 # 루트 레이아웃 (이미 존재, 수정 필요)
├── index.tsx                   # 시작 화면 (인증 체크 후 리다이렉트)
├── login.tsx                   # 로그인 화면 (빈 화면)
│
├── (tabs)/                     # 메인 앱 (이미 존재)
│   ├── _layout.tsx            # 수정: 커스텀 탭 컴포넌트 사용
│   ├── index.tsx              # 홈 (이미 존재)
│   ├── explore.tsx            # 탐색 (이미 존재)
│   ├── ui.tsx                 # UI 테스트 (이미 존재, 유지)
│   └── (추가 탭들...)
│
├── components/
│   └── navigation/
│       └── TabNavigator.tsx   # 커스텀 탭 네비게이션 컴포넌트
│
├── stores/
│   └── authStore.ts           # Zustand 인증 스토어
│
└── +not-found.tsx             # 404 화면 (이미 존재)
```

### 구현 단계

#### 1. Zustand 설치

- `yarn add zustand` 실행

#### 2. 인증 스토어 생성

- `stores/authStore.ts` 생성
- 기본 인증 상태 관리 (isAuthenticated, accessToken)
- 간단한 setter 함수

#### 3. 인증 가드 구현

- `app/index.tsx` 수정
- 인증 상태 확인 후 적절한 페이지로 리다이렉트
  - 인증됨: `/(tabs)` 이동
  - 미인증: `/login` 이동

#### 4. 로그인 화면 생성

- `app/login.tsx` 생성
- 빈 화면 (간단한 텍스트만)

#### 5. 커스텀 탭 네비게이션 컴포넌트 개발

- `components/navigation/TabNavigator.tsx` 생성
- Pan Gesture Handler로 좌우 스와이프 구현
- Reanimated로 탭 전환 애니메이션
- 탭 인디케이터 UI
- 탭 목록 props로 받기

#### 6. 탭 레이아웃 수정

- `app/(tabs)/_layout.tsx` 수정
- Expo Router 기본 Tabs 제거
- 커스텀 TabNavigator 컴포넌트 사용

## 검증 방법

### 테스트 케이스

1. **인증되지 않은 상태**
   - 입력: 앱 실행
   - 예상 결과: `/login`으로 리다이렉트

2. **인증된 상태**
   - 입력: authStore에서 `isAuthenticated: true` 설정 후 앱 실행
   - 예상 결과: `/(tabs)`로 리다이렉트

3. **탭 스와이프**
   - 입력: 화면을 좌우로 스와이프
   - 예상 결과: 다음/이전 탭으로 전환

4. **탭 인디케이터 클릭**
   - 입력: 탭 인디케이터 클릭
   - 예상 결과: 해당 탭으로 이동

### 수동 확인

- [ ] 앱 실행 시 로그인 화면 표시 (미인증 상태)
- [ ] 좌우 스와이프로 탭 전환 동작
- [ ] 탭 전환 애니메이션 부드러움
- [ ] 탭 인디케이터 정확히 표시
- [ ] 현재 활성 탭 시각적으로 구분됨

## 의존성

### 선행 작업

- Phase 0-1: 프로젝트 초기 설정 완료
- Phase 0-2: UI 라이브러리 설정 완료 (TamaguiProvider 필요)

### 후속 작업

- Phase 1: 인증 화면 실제 구현
- 모든 Phase에서 네비게이션 활용

## 주의사항

- **타입 안전성**: Zustand store 타입 정의 필수
- **성능**: Pan Gesture 성능 최적화 (worklet 사용)
- **애니메이션**: Reanimated의 UI thread 활용
- **인증 가드**: 단순 리다이렉트만 구현, 실제 로그인 로직은 Phase 1
- **코드 작성**: 문서에는 구현 방향만 명시, 상세 코드 제외

## 참고 자료

- [Expo Router 공식 문서](https://docs.expo.dev/router/introduction/)
- [React Native Gesture Handler - Pan](https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/pan-gesture/)
- [React Native Reanimated 공식 문서](https://docs.swmansion.com/react-native-reanimated/)
- [Zustand 공식 문서](https://zustand-demo.pmnd.rs/)
- [프론트엔드 로드맵](../roadmap.md)

---

## 작업 이력

### [2025-11-19] 작업 문서 작성

- Phase 0-3 작업 문서 작성 완료
