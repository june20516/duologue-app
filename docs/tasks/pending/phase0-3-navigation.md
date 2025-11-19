# Phase 0-3: 네비게이션 구조

## 작성일

2025-11-19

## 우선순위

- [x] 긴급
- [ ] 높음
- [ ] 보통
- [ ] 낮음

## 작업 개요

Expo Router를 활용한 네비게이션 구조 설정 및 인증 가드 구현
- 파일 기반 라우팅 구조 정립
- 탭 네비게이션 설정
- 인증 상태에 따른 화면 접근 제어

## 작업 목적

사용자 경험을 고려한 네비게이션 흐름을 구축하고, 인증되지 않은 사용자의 접근을 제어

## 작업 범위

### 포함 사항
- [ ] Expo Router 레이아웃 설정
- [ ] 탭 네비게이션 구현
- [ ] 인증 가드 구현
- [ ] 기본 화면 생성 (빈 화면)
- [ ] 딥링킹 설정 (기본)
- [ ] 화면 전환 애니메이션

### 제외 사항
- 실제 화면 내용 구현
- 복잡한 딥링킹 로직
- 네비게이션 히스토리 관리

## 기술적 접근

### 사용할 기술/라이브러리

- **Expo Router ~6.0**: 파일 기반 라우팅
- **@react-navigation/bottom-tabs**: 탭 네비게이션 (Expo Router 내장)
- **Zustand**: 인증 상태 관리

### 파일 구조

```
app/
├── _layout.tsx                 # 루트 레이아웃 (인증 체크)
├── index.tsx                   # 시작 화면 (리다이렉트)
│
├── auth/                       # 인증 플로우
│   ├── _layout.tsx            # 인증 레이아웃
│   ├── email-input.tsx        # 이메일 입력 (빈 화면)
│   └── code-verify.tsx        # 코드 검증 (빈 화면)
│
├── (tabs)/                     # 메인 탭 네비게이션
│   ├── _layout.tsx            # 탭 레이아웃
│   ├── index.tsx              # 홈 (매칭 히스토리)
│   ├── match.tsx              # 매칭
│   ├── chat.tsx               # 채팅
│   └── profile.tsx            # 프로필
│
└── +not-found.tsx             # 404 화면
```

### 구현 단계

1. **루트 레이아웃 설정** (`app/_layout.tsx`)
   ```typescript
   import { Stack } from 'expo-router';
   import { TamaguiProvider } from 'tamagui';

   export default function RootLayout() {
     return (
       <TamaguiProvider>
         <Stack screenOptions={{ headerShown: false }}>
           <Stack.Screen name="index" />
           <Stack.Screen name="auth" />
           <Stack.Screen name="(tabs)" />
         </Stack>
       </TamaguiProvider>
     );
   }
   ```

2. **인증 가드 구현** (`app/index.tsx`)
   ```typescript
   import { Redirect } from 'expo-router';
   import { useAuthStore } from '@/stores/authStore';

   export default function Index() {
     const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

     if (isAuthenticated) {
       return <Redirect href="/(tabs)" />;
     }

     return <Redirect href="/auth/email-input" />;
   }
   ```

3. **탭 네비게이션 설정** (`app/(tabs)/_layout.tsx`)
   ```typescript
   import { Tabs } from 'expo-router';
   import { Home, Heart, MessageCircle, User } from 'lucide-react-native';

   export default function TabsLayout() {
     return (
       <Tabs screenOptions={{
         tabBarActiveTintColor: '#6366F1',
         headerShown: false,
       }}>
         <Tabs.Screen
           name="index"
           options={{
             title: '홈',
             tabBarIcon: ({ color }) => <Home color={color} />,
           }}
         />
         <Tabs.Screen
           name="match"
           options={{
             title: '매칭',
             tabBarIcon: ({ color }) => <Heart color={color} />,
           }}
         />
         <Tabs.Screen
           name="chat"
           options={{
             title: '채팅',
             tabBarIcon: ({ color }) => <MessageCircle color={color} />,
           }}
         />
         <Tabs.Screen
           name="profile"
           options={{
             title: '프로필',
             tabBarIcon: ({ color }) => <User color={color} />,
           }}
         />
       </Tabs>
     );
   }
   ```

4. **기본 화면 생성** (빈 화면)
   - `app/auth/email-input.tsx`
   - `app/auth/code-verify.tsx`
   - `app/(tabs)/index.tsx`
   - `app/(tabs)/match.tsx`
   - `app/(tabs)/chat.tsx`
   - `app/(tabs)/profile.tsx`
   - 각 화면에 간단한 Text만 표시

5. **인증 스토어 생성** (`src/stores/authStore.ts`)
   ```typescript
   import { create } from 'zustand';

   interface AuthState {
     isAuthenticated: boolean;
     accessToken: string | null;
     setAuthenticated: (value: boolean) => void;
   }

   export const useAuthStore = create<AuthState>((set) => ({
     isAuthenticated: false,
     accessToken: null,
     setAuthenticated: (value) => set({ isAuthenticated: value }),
   }));
   ```

6. **딥링킹 설정** (`app.json`)
   - scheme 설정
   - 기본 URL 패턴 정의

7. **404 화면** (`app/+not-found.tsx`)
   - 존재하지 않는 경로 접근 시 표시

## 검증 방법

### 테스트 케이스

1. **인증되지 않은 상태**
   - 입력: 앱 실행
   - 예상 결과: `/auth/email-input`으로 리다이렉트

2. **인증된 상태**
   - 입력: `useAuthStore`에서 `isAuthenticated: true` 설정 후 앱 실행
   - 예상 결과: `/(tabs)`로 리다이렉트

3. **탭 전환**
   - 입력: 하단 탭 아이콘 클릭
   - 예상 결과: 해당 화면으로 이동

4. **뒤로가기**
   - 입력: 안드로이드 뒤로가기 버튼 (또는 스와이프)
   - 예상 결과: 이전 화면으로 이동

### 수동 확인

- [ ] iOS에서 앱 실행 시 인증 화면 표시
- [ ] Android에서 앱 실행 시 인증 화면 표시
- [ ] 하단 탭 네비게이션 정상 동작
- [ ] 탭 아이콘 색상 변경 확인
- [ ] 화면 전환 애니메이션 부드러움
- [ ] 존재하지 않는 경로 접근 시 404 화면 표시
- [ ] iOS 스와이프 뒤로가기 동작
- [ ] Android 하드웨어 뒤로가기 동작

## 의존성

### 선행 작업
- Phase 0-1: 프로젝트 초기 설정 완료
- Phase 0-2: UI 라이브러리 설정 완료 (TamaguiProvider 필요)

### 후속 작업
- Phase 1: 인증 화면 실제 구현
- 모든 Phase에서 네비게이션 활용

## 주의사항

- **타입 안전성**: Expo Router의 타입 추론 활용
- **성능**: 탭 화면은 lazy loading 되므로 초기 로딩 최적화
- **접근성**: 탭 아이콘에 accessibilityLabel 추가
- **인증 가드**: 모든 보호된 화면에서 인증 체크 필요

## 참고 자료

- [Expo Router 공식 문서](https://docs.expo.dev/router/introduction/)
- [Expo Router 인증 가이드](https://docs.expo.dev/router/reference/authentication/)
- [React Navigation 공식 문서](https://reactnavigation.org/)
- [프론트엔드 로드맵](../roadmap.md)

---

## 작업 이력

### [2025-11-19] 작업 문서 작성

- Phase 0-3 작업 문서 작성 완료
