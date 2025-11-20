# Phase 0-2: UI 라이브러리 및 디자인 시스템

## 작성일

2025-11-19

## 우선순위

- [x] 긴급
- [ ] 높음
- [ ] 보통
- [ ] 낮음

## 작업 개요

Tamagui 설치 및 디자인 시스템 구축, 공통 컴포넌트 개발
- 컬러 팔레트, 타이포그래피 정의
- 재사용 가능한 기본 UI 컴포넌트 제작

## 작업 목적

일관된 디자인과 재사용 가능한 컴포넌트를 통해 개발 속도를 높이고, UI/UX 품질을 유지

## 작업 범위

### 포함 사항

#### 1. 환경 설정
- [x] Tamagui 패키지 설치
- [x] tamagui.config.ts 생성
- [x] app.config.ts 업데이트 (다크모드 지원)
- [x] Babel 플러그인 설정
- [x] TamaguiProvider 추가 (app/_layout.tsx)
- [x] 폰트 설정
- [x] 캐시 클리어 후 첫 실행 확인

#### 2. 디자인 토큰 정의
- [x] 컬러 팔레트 정의 (styles/tokens.ts)
  - [x] Primary colors (라임, 보라)
  - [x] Semantic colors (success, error, warning, info)
  - [x] Neutral colors (배경, 텍스트, 경계선)
  - [x] 라이트/다크 모드별 variation (tamagui.config.ts)
- [x] 타이포그래피 정의
  - [x] 폰트 크기 스케일
  - [x] 폰트 weight
  - [x] Line height
- [x] 스페이싱 스케일 정의
- [x] Border radius 정의

#### 3. Button 컴포넌트
- [x] 기본 Button 구조 생성 (components/ui/Button.tsx)
- [x] Variant 구현
  - [x] filled (primary/secondary)
  - [x] outline (primary/secondary)
  - [x] ghost (primary/secondary)
- [x] Size 구현 (sm, md, lg)
- [x] 상태 구현
  - [x] default
  - [x] pressed
  - [x] disabled
  - [x] loading (스피너 포함)
- [x] Props 타입 정의
- [x] 테스트 화면에서 확인 (app/(tabs)/ui.tsx)

#### 4. Input 컴포넌트
- [x] 기본 Input 구조 생성 (components/ui/Input.tsx)
- [x] Type 지원 (text, email, password, number)
- [x] 상태 구현
  - [x] default
  - [x] focused
  - [x] error
  - [x] disabled
- [x] UI 요소
  - [x] Label
  - [x] Placeholder
  - [x] Helper text
  - [x] Error message
  - [x] 좌측 아이콘 슬롯
  - [x] 우측 아이콘 슬롯
- [x] Props 타입 정의
- [x] 테스트 화면에서 확인

#### 5. Card 컴포넌트
- [x] 기본 Card 구조 생성 (components/ui/Card.tsx)
- [x] Variant 구현
  - [x] default (그림자 있음)
  - [x] outlined (테두리만)
  - [x] elevated (더 큰 그림자)
- [x] Pressable 지원
- [x] Compound components (Card.Header, Card.Footer)
- [x] 라이트/다크 모드 대응
- [x] Props 타입 정의
- [x] 테스트 화면에서 확인

#### 6. Modal 컴포넌트
- [x] 기본 Modal 구조 생성 (components/ui/Modal.tsx)
- [x] Variant 구현
  - [x] adaptive (Dialog/Sheet 자동 전환)
  - [x] dialog (항상 Dialog)
  - [x] sheet (항상 Sheet)
- [x] Sheet 애니메이션 (스프링 제거, timing으로 변경)
- [x] Backdrop 구현 (오버레이 클릭 시 닫기)
- [x] snapPoints 외부 주입 가능
- [x] 조건부 타입으로 variant별 props 제한
- [x] Props 타입 정의 (제네릭 사용)
- [x] 테스트 화면에서 확인

#### 7. Spinner 컴포넌트
- [x] 기본 Spinner 구조 생성 (components/ui/Spinner.tsx)
- [x] Size 옵션 (small, medium, large)
- [x] Color 커스터마이징 지원
- [x] Props 타입 정의
- [x] 테스트 화면에서 확인

#### 8. Toast 컴포넌트
- [x] 기본 Toast 구조 생성 (components/ui/Toast.tsx)
- [x] Type 구현
  - [x] success (초록색)
  - [x] error (빨간색)
  - [x] warning (노란색)
  - [x] info (파란색)
- [x] 자동 dismiss (3초, 커스터마이징 가능)
- [x] 애니메이션 구현
  - [x] 나타날 때: 위→아래 슬라이드
  - [x] 사라질 때: 아래→위 슬라이드 (timeout 시에도 애니메이션 적용)
- [x] 제스처 지원
  - [x] 위로 스와이프하면 닫기
  - [x] 탭하면 닫기
- [x] useToast hook 생성
- [x] ToastProvider 설정
- [x] Props 타입 정의
- [x] 테스트 화면에서 확인

#### 9. Typography 컴포넌트
- [x] 기본 Typography 구조 생성 (components/Typography.tsx)
- [x] Variant 구현
  - [x] regular (기본 본문)
  - [x] semiBold (강조 본문)
  - [x] title (페이지 제목)
  - [x] subtitle (섹션 제목)
  - [x] heading (카드/컴포넌트 제목)
  - [x] caption (작은 설명)
  - [x] tag (작은 레이블/태그)
  - [x] link (링크)
- [x] Props 타입 정의
- [x] 테스트 화면에서 확인

#### 10. Export 및 문서화
- [x] components/ui/index.ts에서 모든 컴포넌트 export
- [x] 테스트 화면 생성 (app/(tabs)/ui.tsx)

### 제외 사항
- 복잡한 비즈니스 컴포넌트
- 화면별 특수 컴포넌트
- 복잡한 애니메이션 (기본만)

## 기술적 접근

### 사용할 기술/라이브러리

- **Tamagui**: React Native UI 라이브러리
- **@tamagui/theme-base**: 기본 테마
- **React Native Reanimated**: 애니메이션 (이미 설치됨)

### 파일 구조

```
duologue-app/
├── components/
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Card.tsx
│       ├── Modal.tsx
│       ├── Spinner.tsx
│       ├── Toast.tsx
│       └── index.ts           # 전체 export
├── constants/
│   └── theme.ts               # 컬러 팔레트 및 디자인 토큰
├── types/
│   └── theme.ts               # 테마 관련 타입
├── tamagui.config.ts          # Tamagui 설정
├── app.config.ts              # Expo 설정 (다크모드)
└── app/
    ├── _layout.tsx            # TamaguiProvider 추가
    └── test-ui.tsx            # 컴포넌트 테스트 화면
```

### 구현 단계

#### 1. 환경 설정
- Tamagui 및 Babel 플러그인 설치
- `tamagui.config.ts`, `babel.config.js` 생성
- `app/_layout.tsx`에 TamaguiProvider 추가
- 캐시 클리어 후 첫 실행 (`npx expo start -c`)

#### 2. 디자인 토큰 정의
- `constants/theme.ts`: 컬러, 타이포그래피, 스페이싱, radius, shadows
- `types/theme.ts`: TypeScript 타입 정의

#### 3. 컴포넌트 구현
각 컴포넌트별 체크리스트는 "작업 범위 > 포함 사항" 참조

#### 4. Export 및 테스트
- `components/ui/index.ts`에서 모든 컴포넌트 export
- `app/test-ui.tsx`에서 테스트

## 검증 방법

### 테스트 케이스

1. **컴포넌트 렌더링**
   - 입력: 각 컴포넌트를 테스트 화면에 배치
   - 예상 결과: 정상 렌더링

2. **다크 모드 전환**
   - 입력: 시스템 다크 모드 토글
   - 예상 결과: 테마 자동 전환

3. **반응형**
   - 입력: 다양한 화면 크기 테스트
   - 예상 결과: 적절한 레이아웃 유지

### 수동 확인

- [ ] Button 모든 variant 정상 표시
- [ ] Button press 애니메이션 동작
- [ ] Input 포커스/blur 상태 정상
- [ ] Input 에러 상태 빨간색 표시
- [ ] Card 그림자 효과 확인
- [ ] Modal 열기/닫기 애니메이션 부드러움
- [ ] Spinner 회전 애니메이션 확인
- [ ] Toast 자동 dismiss 동작
- [ ] 라이트/다크 모드 전환 확인

## 의존성

### 선행 작업
- Phase 0-1: 프로젝트 초기 설정 완료

### 후속 작업
- Phase 0-3: 네비게이션 구조
- 이후 모든 Phase에서 이 컴포넌트 사용

## 주의사항

- **타입 안전성**: 모든 컴포넌트 Props 타입 명시
- **성능**: Pressable 대신 Tamagui의 최적화된 컴포넌트 활용
- **접근성**: accessibilityLabel, accessibilityRole 추가
- **일관성**: 디자인 토큰 (색상, 스페이싱)을 반드시 theme에서 가져오기

## 참고 자료

- [Tamagui 공식 문서](https://tamagui.dev/)
- [Tamagui Theme 가이드](https://tamagui.dev/docs/intro/themes)
- [React Native Accessibility](https://reactnative.dev/docs/accessibility)
- [프론트엔드 로드맵](../roadmap.md)

---

## 작업 이력

### [2025-11-19] 작업 문서 작성

- Phase 0-2 작업 문서 작성 완료
