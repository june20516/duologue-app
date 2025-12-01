# Phase 1-3: 프로필 설정 UI

## 작성일

2025-11-24

## 우선순위

- [x] 긴급
- [ ] 높음
- [ ] 보통
- [ ] 낮음

## 작업 개요

사용자 프로필 설정 및 관리 UI 구현

- 초기 프로필 설정 화면
- 내 프로필 조회 화면
- 프로필 수정 화면

## 작업 목적

회원가입 후 필수 프로필 정보를 입력받고, 사용자가 자신의 프로필을 조회하고 수정할 수 있는 UI 제공

## 작업 범위

### 포함 사항

- [x] 초기 프로필 설정 화면 (`app/onboarding/index.tsx` - 다단계 구현)
- [x] 프로필 설정 단계별 화면 (닉네임/성별, 관심사, 추가정보)
- [x] React Query 훅 구현 (`queries/useMutationProfile.ts`)
- [x] 프로필 API 연동 (`api/profile.ts`)
- [x] authStore를 통한 프로필 완성 여부 관리
- [x] 인증 가드에서 프로필 미완성 시 온보딩으로 리다이렉트
- [ ] 내 프로필 조회 화면 (`app/(tabs)/profile.tsx`) - 미확인
- [ ] 프로필 수정 화면 (`app/profile/edit.tsx`) - 미확인
- [ ] 프로필 이미지 업로드 기능 - 미확인
- [ ] 닉네임 중복 체크 - 미확인

### 제외 사항

- 상세 프로필 (Phase 4-1에서 진행)
- 타인 프로필 조회 (Phase 4-1에서 진행)

## 기술적 접근

### 백엔드 API

- `GET /api/v1/profiles/me` - 내 프로필 조회
- `PATCH /api/v1/profiles/me` - 프로필 수정
- `POST /api/v1/profiles/check-nickname` - 닉네임 중복 체크 (예상)

### 입력 필드

- 닉네임 (필수, 중복 체크)
- 프로필 이미지 (선택)
- 성별 (필수)
- 한줄 자기소개 (선택)
- 관심사 (다중 선택)
- 지역 (선택)

### React Query 훅

```typescript
// hooks/useProfile.ts
export const useProfile = () => {
  return useQuery({
    queryKey: ['profile', 'me'],
    queryFn: fetchMyProfile,
  });
};

export const useUpdateProfile = () => {
  return useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile', 'me'] });
    },
  });
};
```

### UX 플로우

**초기 설정**:
1. 회원가입 성공 후 프로필 설정 화면으로 이동
2. 필수 항목 입력
3. 완료 버튼 클릭 → 메인 화면으로 이동

**프로필 조회**:
1. 탭 바에서 프로필 탭 선택
2. 내 프로필 정보 표시
3. 수정 버튼 클릭 → 수정 화면으로 이동

**프로필 수정**:
1. 수정 화면에서 정보 변경
2. 저장 버튼 클릭 → 프로필 조회 화면으로 돌아가기

### 구현 단계

1. **프로필 타입 정의**
   ```typescript
   // types/profile.ts
   interface Profile {
     id: string;
     nickname: string;
     profileImage?: string;
     gender: 'male' | 'female' | 'other';
     bio?: string;
     interests: string[];
     location?: string;
     isComplete: boolean;
   }
   ```

2. **프로필 설정 화면**
   - 닉네임 입력 (중복 체크)
   - 프로필 이미지 선택 (Expo ImagePicker)
   - 성별 선택 (라디오 버튼)
   - 한줄 자기소개 입력
   - 관심사 선택 (체크박스)
   - 지역 선택 (드롭다운)
   - 완료 버튼

3. **프로필 조회 화면**
   - 프로필 이미지 표시
   - 닉네임, 성별, 한줄 자기소개 표시
   - 관심사, 지역 표시
   - 수정 버튼

4. **프로필 수정 화면**
   - 설정 화면과 동일한 폼
   - 기존 값 미리 채워짐
   - 저장 버튼

5. **이미지 업로드**
   - Expo ImagePicker로 이미지 선택
   - 이미지 크롭/리사이즈
   - 서버에 업로드
   - 프로필에 URL 저장

6. **닉네임 중복 체크**
   - 입력 중 디바운스 적용
   - API 호출로 중복 확인
   - 사용 가능/불가능 표시

7. **프로필 완성 여부 체크**
   - `isComplete` 필드로 확인
   - 미완성 시 메인 화면 접근 제한
   - `app/_layout.tsx`에서 리다이렉트

## 검증 방법

### 테스트 케이스

1. **프로필 설정**
   - 입력: 필수 항목 입력
   - 예상 결과: 프로필 생성 성공, 메인 화면으로 이동

2. **닉네임 중복 체크**
   - 입력: 이미 사용 중인 닉네임
   - 예상 결과: "이미 사용 중인 닉네임입니다" 표시

3. **프로필 조회**
   - 입력: 프로필 탭 선택
   - 예상 결과: 내 프로필 정보 표시

4. **프로필 수정**
   - 입력: 프로필 정보 변경 후 저장
   - 예상 결과: 프로필 업데이트 성공, 조회 화면에 반영

5. **이미지 업로드**
   - 입력: 이미지 선택
   - 예상 결과: 이미지 업로드 성공, 프로필에 표시

6. **프로필 미완성 접근 제어**
   - 입력: 프로필 미완성 상태에서 메인 화면 접근 시도
   - 예상 결과: 프로필 설정 화면으로 리다이렉트

### 수동 확인

- [x] 프로필 설정 화면 정상 동작 (3단계 온보딩)
- [x] 단계별 프로그레스 인디케이터
- [x] 프로필 생성 성공 (닉네임, 성별, 관심사, 지역, 한줄소개)
- [x] 프로필 미완성 시 접근 제어 동작 (`app/index.tsx`)
- [x] 에러 케이스 처리
- [ ] 필수 항목 미입력 시 완료 버튼 비활성화 (검증 필요)
- [ ] 닉네임 중복 체크 정상 동작 (미구현 가능성)
- [ ] 프로필 이미지 업로드 정상 동작 (미확인)
- [ ] 프로필 조회 화면 정상 표시 (미확인)
- [ ] 프로필 수정 화면 정상 동작 (미확인)
- [ ] 프로필 수정 성공 및 반영 (미확인)

## 의존성

### 선행 작업

- Phase 1-1: Passwordless 회원가입 UI
- Phase 1-2: Passwordless 로그인 UI
- Phase 0-4: API 클라이언트 설정
- 백엔드 Phase 1 API 완료

### 후속 작업

- Phase 2-1: 티켓 표시
- Phase 4-1: 상세 프로필 UI

## 주의사항

- 프로필 이미지는 적절한 크기로 리사이즈 (최대 1MB)
- 닉네임 중복 체크는 디바운스 적용 (500ms)
- 필수 항목 누락 시 완료 버튼 비활성화
- 프로필 미완성 시 메인 화면 접근 제한
- 이미지 업로드 실패 시 에러 처리
- Yarn 패키지 매니저 사용
- 코드 작성 시 프로젝트 규칙 준수
- 텍스트는 상수로 분리 (i18n 대비)

## 참고 자료

- [프론트엔드 로드맵](../roadmap.md)
- [프로젝트 규칙](../../../.claude-project-rules.md)
- [백엔드 API 문서](../../specs/backend-domain-model.md)
- [Expo ImagePicker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
- [React Query](https://tanstack.com/query/latest)

---

## 작업 이력

### [2025-12-01] 작업 대부분 완료

- 프로필 설정 UI 및 기본 로직 구현 완료
- 3단계 온보딩 프로세스 구현 (`app/onboarding/index.tsx`)
  - 1단계: 닉네임 + 성별
  - 2단계: 관심사 선택
  - 3단계: 추가 정보 (지역, 한줄소개)
- 단계별 프로그레스 인디케이터
- 프로필 API 연동 (`api/profile.ts`)
- React Query 훅 구현
- authStore 프로필 완성 여부 관리
- 인증 가드에서 프로필 체크

**남은 작업**:
- 닉네임 중복 체크 기능 확인
- 프로필 이미지 업로드 기능 확인
- 내 프로필 조회/수정 화면 확인
- 필수 항목 유효성 검증 확인

### [2025-11-24] 작업 문서 작성

- Phase 1-3 작업 문서 작성 완료
- Phase 1-1, 1-2 완료 후 진행 예정
