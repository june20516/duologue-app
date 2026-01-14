# Connect RPC 마이그레이션

## 작성일

2025-12-12

## 우선순위

- [x] 긴급
- [ ] 높음
- [ ] 보통
- [ ] 낮음

## 작업 개요

기존 axios + REST API를 @connectrpc/connect + Protobuf로 마이그레이션

## 작업 목적

- 프론트/백엔드 타입 안전성 확보 (Proto 스키마 공유)
- 타입 수동 정의 제거, 코드 생성으로 자동화
- 향후 실시간 기능은 WebSocket + Protobuf로 확장

## 작업 범위

### 포함 사항

- [ ] buf 설정 및 코드 생성 파이프라인
- [ ] Metro 설정 (package exports 활성화)
- [ ] Connect Transport 및 클라이언트 설정
- [ ] 인증 인터셉터 (토큰 주입, 갱신)
- [ ] 에러 핸들링 (ConnectError)
- [ ] 기존 API 마이그레이션 (auth, profile, interest)
- [ ] React Query 훅 수정
- [ ] axios 제거

### 제외 사항

- Proto 스키마 정의 (백엔드에서 관리, 공유)
- 백엔드 Connect 서버 구현
- WebSocket 실시간 기능 (별도 작업)
- 스트리밍 RPC (React Native 미지원)

## 기술적 접근

### 사용 패키지

- `@connectrpc/connect` - Connect 클라이언트
- `@connectrpc/connect-web` - fetch 기반 Transport
- `@bufbuild/protobuf` - Protobuf 런타임
- `@bufbuild/buf` (dev) - 코드 생성 CLI
- `@bufbuild/protoc-gen-es` (dev) - 메시지 타입 생성
- `@connectrpc/protoc-gen-connect-es` (dev) - 서비스 정의 생성

### 파일 구조

```
duologue-app/
├── buf.gen.yaml              # 코드 생성 설정
├── metro.config.js           # package exports 활성화
├── gen/                      # 생성된 코드 (gitignore 또는 커밋)
│   └── duologue/v1/
│       ├── auth_pb.ts
│       ├── profile_pb.ts
│       └── interest_pb.ts
├── api/
│   ├── transport.ts          # Connect Transport 설정
│   ├── clients.ts            # 서비스 클라이언트
│   ├── interceptors.ts       # 인증, 에러 인터셉터
│   └── error.ts              # ConnectError 핸들링
└── (삭제)
    └── client.ts             # axios 클라이언트 제거
```

### 구현 단계

1. **패키지 설치**
   - Connect, Protobuf 런타임
   - buf, protoc 플러그인 (dev)

2. **buf 설정**
   - `buf.gen.yaml` 작성
   - Proto 경로 설정 (백엔드 공유 저장소 또는 로컬)

3. **Metro 설정**
   - `unstable_enablePackageExports: true` 필수

4. **코드 생성 스크립트**
   - `package.json`에 `generate` 스크립트 추가
   - 생성된 코드 확인

5. **Transport 설정**
   - baseUrl, fetch 커스터마이징
   - 인증 헤더 주입

6. **인터셉터 구현**
   - 토큰 갱신 로직 (401 처리)
   - ConnectError → ApiError 변환

7. **클라이언트 생성**
   - AuthService, ProfileService, InterestService

8. **기존 API 교체**
   - `api/auth.ts` → Connect 클라이언트 사용
   - `api/profile.ts` → Connect 클라이언트 사용
   - `api/interest.ts` → Connect 클라이언트 사용

9. **React Query 훅 수정**
   - queryFn에서 Connect 클라이언트 호출

10. **정리**
    - axios 제거
    - 미사용 파일 삭제
    - 타입 검사 및 린트

## 검증 방법

### 테스트 케이스

1. **인증 플로우**
   - 회원가입 요청/검증
   - 로그인 요청/검증
   - 토큰 갱신 (401 → 자동 재시도)

2. **프로필 CRUD**
   - 프로필 조회
   - 프로필 수정
   - 닉네임 중복 체크

3. **에러 처리**
   - 네트워크 오류
   - 서버 에러 (4xx, 5xx)
   - 인증 만료

### 수동 확인

- [ ] iOS 시뮬레이터 정상 동작
- [ ] Android 시뮬레이터 정상 동작
- [ ] 로그인/회원가입 플로우
- [ ] 프로필 온보딩 플로우
- [ ] 토큰 갱신 정상 동작
- [ ] 에러 토스트/모달 표시

## 의존성

### 선행 작업

- 백엔드 Connect 서버 구현 완료
- Proto 스키마 정의 완료 (백엔드 저장소)
- Proto 스키마 접근 방법 확정 (git submodule, 복사, buf registry 등)

### 후속 작업

- Phase 1-3 프로필 작업 계속
- WebSocket + Protobuf 실시간 기능 (필요 시)

## 주의사항

- **Unary RPC만 사용**: 스트리밍은 React Native에서 미지원
- **Metro 설정 필수**: package exports 미활성화 시 런타임 에러
- **JSON 포맷 권장**: 디버깅 용이 (`useBinaryFormat: false`)
- **Yarn 사용**: npm 금지
- **코드 생성 타이밍**: Proto 변경 시 재생성 필요

## 참고 자료

- [Connect-ES 공식 문서](https://connectrpc.com/docs/web/getting-started/)
- [Connect-ES React Native 예제](https://github.com/connectrpc/examples-es/tree/main/react-native)
- [buf 문서](https://buf.build/docs/)
- [React Native 스트리밍 제한 이슈](https://github.com/connectrpc/connect-es/issues/199)

---

## 작업 이력

### [2025-12-12] 작업 문서 작성

- 마이그레이션 계획 수립
- 백엔드 작업 완료 대기 중
