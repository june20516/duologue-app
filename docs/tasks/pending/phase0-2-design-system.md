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
- [ ] Tamagui 설치 및 설정
- [ ] 테마 설정 (라이트/다크 모드)
- [ ] 컬러 팔레트 정의
- [ ] 타이포그래피 정의
- [ ] 공통 컴포넌트 구현
  - Button (Primary, Secondary, Outline)
  - Input (Text, Email, Password)
  - Card
  - Modal
  - Loading Spinner
  - Toast

### 제외 사항
- 복잡한 비즈니스 컴포넌트
- 화면별 특수 컴포넌트
- 애니메이션 (기본만)

## 기술적 접근

### 사용할 기술/라이브러리

- **Tamagui**: React Native UI 라이브러리
- **@tamagui/theme-base**: 기본 테마
- **React Native Reanimated**: 애니메이션 (이미 설치됨)

### 파일 구조

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Spinner.tsx
│   │   ├── Toast.tsx
│   │   └── index.ts           # 전체 export
│   └── index.ts
├── constants/
│   └── theme.ts                # Tamagui 테마 설정
└── types/
    └── theme.ts                # 테마 관련 타입
```

### 구현 단계

1. **Tamagui 설치**
   ```bash
   npm install tamagui @tamagui/config
   ```

2. **Tamagui 설정**
   - `tamagui.config.ts` 생성
   - 컬러, 폰트, 스페이싱 정의
   - `app/_layout.tsx`에 TamaguiProvider 추가

3. **테마 정의** (`src/constants/theme.ts`)
   ```typescript
   export const colors = {
     primary: '#6366F1',      // Indigo
     secondary: '#EC4899',    // Pink
     success: '#10B981',      // Green
     error: '#EF4444',        // Red
     warning: '#F59E0B',      // Amber
     background: '#FFFFFF',
     surface: '#F9FAFB',
     text: '#111827',
     textSecondary: '#6B7280',
   };
   ```

4. **Button 컴포넌트**
   - Variant: primary, secondary, outline, ghost
   - Size: sm, md, lg
   - Disabled 상태
   - Loading 상태

5. **Input 컴포넌트**
   - Type: text, email, password, number
   - 에러 상태 표시
   - Label, placeholder, helper text
   - 아이콘 지원

6. **Card 컴포넌트**
   - 기본 카드 레이아웃
   - 그림자 효과
   - Pressable 지원

7. **Modal 컴포넌트**
   - 하단에서 슬라이드 업 애니메이션
   - Backdrop 터치 시 닫기
   - 커스텀 헤더/푸터 지원

8. **Spinner 컴포넌트**
   - 로딩 인디케이터
   - Size 조절 가능

9. **Toast 컴포넌트**
   - Success, Error, Warning, Info
   - 자동 dismiss (3초)
   - 최상단 표시

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
