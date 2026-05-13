# 현재 디자인 시스템 감사 (Phase 0-A)

- **Date:** 2026-05-11
- **Status:** 완료
- **용도:** Phase 1–2 작업 시 Claude 참조용 스냅샷

---

## 1. 토큰 레이어 현황

### 컬러 (`styles/tokens.ts`)

**있는 것:**
- 브랜드 팔레트: Lime/Purple/Aqua (50~900 스케일)
- 중립: gray50~900, offWhite, offBlack, white, black
- 시맨틱 원시값: success, error, warning, info (+ Light/Dark 변형)

**없는 것 / 문제:**
- 시맨틱 토큰이 `tokens.ts`가 아닌 `tamagui.config.ts`의 `lightTheme`/`darkTheme`에만 존재 → JS에서 직접 import 불가, Tamagui 테마 변수(`$primary` 등)로만 접근 가능
- `size`, `space`, `radius`가 **완전히 비어 있음** → Tamagui `defaultConfig` 기본값 그대로 사용

### 테마 시맨틱 (`tamagui.config.ts`)

**있는 것 (light/dark 모두):**
- background, backgroundSoft, color, colorSoft, colorSurface, shadowColor
- primary / primaryHover / primaryPress / primarySurface / primarySurfaceHover / primarySurfacePress / colorOnPrimary
- secondary (동일 구조)
- tertiary (동일 구조)
- borderColor / borderColorHover / borderColorFocus
- inputBackground / inputBackgroundDisabled / placeholderColor
- success / successBackground / error / errorBackground / warning / info

**없는 것:**
- `successLight`, `warningLight`, `infoLight` — Toast에서 직접 쓰이나 테마에 없음(Toast가 원시값으로 처리)
- `borderColorError` (에러 상태 border) — Input이 `$error`를 직접 사용 중
- elevation/shadow 시맨틱 (level별 의미 없이 `$shadowColor`만 있음)

### 타이포그래피

- Pretendard 폰트 등록 (400/600/700)
- 크기 스케일: Tamagui `defaultConfig` 위임 (숫자 키 1~10, 11px~46px 추정)
- **line-height 미정의**
- seed-design 스케일(t1=11px, t2=12px, t3=13px, t4=14px, t5=16px, t6=18px, t7=20px...)과 값은 유사하나 키 체계 불일치

### 스페이싱·사이즈·라디우스

- `tokens.ts`의 `space`, `size`, `radius` 모두 `{}` — Tamagui 기본값
- seed-design: 4pt grid(`x1=4px, x2=8px...`), 라디우스(`r1=4px ... r6=24px, full`)
- 현재 컴포넌트들이 `$2`, `$3`, `$4` 같은 Tamagui 기본 숫자 토큰을 직접 사용 중

### 섀도우 (`styles/shadow.ts`)

- sm / md / lg 3단계
- `shadowColor: '$shadowColor'` 참조는 올바르나 seed-design elevation(level 1~5, semantic) 구조와 무관
- elevation 값: 2 / 5 / 8

---

## 2. 컴포넌트 현황

| 컴포넌트 | 현재 variant·prop | seed-design 대응 | 주요 갭 |
|---|---|---|---|
| `Button` | variant(filled/outline/ghost) + priority(primary/secondary) + size(sm/md/lg) + loading | action-button | tertiary priority 없음, tone 개념 없음 |
| `Input` | variant(default/error) + label/helperText/errorText + leftIcon/rightIcon | text-input, field | 원시 컬러 토큰 직접 사용(`$lime`, `$gray200`, `$offBlack`등) — 시맨틱 미적용 |
| `FormInput` | react-hook-form Controller 래퍼 | field | Input 갭 그대로 상속 |
| `Typography` | type(regular/semiBold/title/subtitle/heading/caption/tag/link) | — | line-height 없음, 스케일 키가 숫자($2~$9) |
| `Badge` | color(primary/secondary) | — | `$colorOnPrimary` 등 시맨틱 잘 사용 중 — 갭 없음 |
| `Card` | variant(default/outlined/elevated) | — | radius `$2` 하드코딩, `$colorSoft`로 outline border |
| `BaseModal` | variant(adaptive/dialog/sheet) + snapPoints | bottom-sheet, alert-dialog | radius `$4` 하드코딩, 애니메이션 상수 하드코딩 |
| `ConfirmModal` | BaseModal 래퍼 + confirm/cancel 버튼 | alert-dialog | BaseModal 갭 상속 |
| `Toast` | type(success/error/warning/info) + gesture dismiss | snackbar | 원시 토큰(`tokens.color.success`) + 테마 변수 혼용, `$successLight` 등 테마 미등록 |
| `DynamicTabBar` | 커스텀 애니메이션 탭 | tabs | seed-design 시각 토큰 미적용 |
| `IconSymbol` | 플랫폼 분기 아이콘 | — | lucide-react-native 의존 (Phase 3 대상) |

---

## 3. 핵심 원칙 및 제약

### 네이밍 컨벤션 — Tamagui 기준

**Tamagui 네이밍 패턴을 기준으로 삼고, seed-design은 구조·케이스 참고용으로만 사용한다.**

- 토큰/테마 키 이름은 Tamagui 컨벤션을 따른다 (`primaryPress`, `colorOnPrimary`, `backgroundSoft` 등)
- seed-design은 "어떤 상태·케이스가 필요한가"를 파악하는 데만 활용한다
- seed-design 아이디어 중 우리 체계와 맞지 않는 것은 버린다
- 현재 테마(`primaryHover`, `colorOnPrimary`, `primarySurface` 등)가 이미 이 방향으로 작성되어 있음

### Tamagui 호환성

### 테마 키

`defaultConfig` light 테마가 정의하는 키 중 우리 테마와 **겹치는 것 7개:**

```
background, color, shadowColor,
borderColor, borderColorHover, borderColorFocus, placeholderColor
```

이는 **의도적 오버라이드**이며 정상이다. Tamagui 빌트인 컴포넌트가 이 키를 읽을 때 우리 값을 사용하게 된다.

우리 테마에 **없는** Tamagui 인터랙션 키들:

```
backgroundHover, backgroundPress, backgroundFocus
colorHover, colorPress, colorFocus
borderColorPress, accentBackground, accentColor, outlineColor
```

이 키들이 undefined여도 현재까지 문제없는 이유: 우리 컴포넌트가 `hoverStyle`/`pressStyle` prop을 명시적으로 지정해 테마 키를 우회하기 때문. 새 시맨틱 키 추가는 충돌 없이 순수 추가.

### 토큰 키 (진짜 위험 지점)

Tamagui `defaultConfig`의 실제 토큰 키 체계:
- `space`: `$0`, `$0.25`, `$0.5` ... `$20`, `$true` (+ 음수 변형)
- `size`: `$0`, `$0.25` ... `$20`, `$true`
- `radius`: `'0'`, `'1'` ... `'12'`, `'true'` (숫자 문자열, `$` 없음)

**규칙:**
- 이 숫자 키들을 절대 제거하거나 값을 바꾸지 않는다.
- 새 시맨틱 키(`r-sm`, `r-md` 등)는 Tamagui 기본값 위에 **추가(add)** 만 한다.
- 타이포그래피 스케일 키 변경 시 Tamagui 숫자 키를 alias로 유지한다.

---

## 4. 갭 요약 (Phase별 인풋)

### Phase 1-A — 시맨틱 토큰 구조 재설계
- `tokens.ts`에 시맨틱 키 정의 필요 (현재 테마에만 존재)
- 누락된 테마 키 추가: `successLight`, `warningLight`, `infoLight`, `borderColorError`
- Input·Toast의 원시 컬러 참조를 시맨틱 토큰으로 교체

### Phase 1-B — 타이포그래피 스케일
- line-height 정의 없음 → seed-design line-height 토큰 참고해 추가
- 스케일 키 체계를 seed-design t1~t10 방식으로 맞출지 결정 필요

### Phase 1-C — 스페이싱·라디우스·elevation
- `space`, `size`, `radius` 정의 없음 → 4pt grid 기반 토큰 정의
- 라디우스 토큰 정의 후 Card(`$2`)·Modal(`$4`) 등에서 의미 기반 키로 교체
- Shadow를 elevation 시맨틱(level 1~3)으로 재명명 검토

### Phase 2 — 컴포넌트 재정렬
- Input: 시맨틱 토큰 교체 (Phase 1-A 이후)
- Button: tertiary 추가 여부 결정
- Toast: `successLight` 등 테마 등록 후 원시 토큰 참조 제거
- Typography: line-height 추가 (Phase 1-B 이후)
- Card·Modal: 라디우스 토큰 교체 (Phase 1-C 이후)

### Phase 3 — 아이콘
- `IconSymbol` + `lucide-react-native` 의존 → 교체 대상
