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

- [ ] 초기 프로필 설정 화면 (`app/auth/profile-setup.tsx`)
- [ ] 내 프로필 조회 화면 (`app/(tabs)/profile.tsx`)
- [ ] 프로필 수정 화면 (`app/profile/edit.tsx`)
- [ ] 프로필 이미지 업로드 기능
- [ ] 닉네임 중복 체크
- [ ] React Query 훅 구현
- [ ] 프로필 API 연동

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

- [ ] 프로필 설정 화면 정상 동작
- [ ] 필수 항목 미입력 시 완료 버튼 비활성화
- [ ] 닉네임 중복 체크 정상 동작
- [ ] 프로필 이미지 업로드 정상 동작
- [ ] 프로필 생성 성공
- [ ] 프로필 조회 화면 정상 표시
- [ ] 프로필 수정 화면 정상 동작
- [ ] 프로필 수정 성공 및 반영
- [ ] 프로필 미완성 시 접근 제어 동작
- [ ] 에러 케이스 처리

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

### [2025-11-24] 작업 문서 작성

- Phase 1-3 작업 문서 작성 완료
- Phase 1-1, 1-2 완료 후 진행 예정
