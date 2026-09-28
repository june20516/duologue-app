<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/skeleton
fetched: 2026-09-28T04:52:52.342Z
-->

ComponentsLLMS.txt

# Skeleton

콘텐츠가 로딩되는 동안 이후 나타날 요소의 윤곽을 미리 보여주어 로딩 시간을 짧게 느끼게 하는 UI 요소입니다.

Figma[React](/react/components/skeleton)iOSAndroid

![Skeleton cover image](/og/components/skeleton.webp)

## [Anatomy](#anatomy)

![Skeleton의 Anatomy 이미지. Background와 Corner Radius로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9387fd6-ac13-4c60-9162-d313322d62bf)

Skeleton은 background, Corner radius로 구성되며 로딩 시작 시 shimmer animation이 나타납니다.

## [Properties](#properties)

### [Size](#size)

![Skeleton의 Size - Width와 Height를 자유롭게 조절할 수 있습니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7d1a22f-b449-485f-96a2-e88f4bd4def7)

Skeleton의 너비(Width)와 높이(Height)는 자유롭게 조절할 수 있습니다.

표시될 실제 콘텐츠의 크기를 반영해 조절합니다.

### [Radius](#radius)

![Skeleton의 Radius Property - 0, 8, 16, 9999](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97fbfaf3-fb61-4203-a299-e4cd521d6e2b)

Skeleton의 Radius 값은 표현하려는 콘텐츠의 형태에 따라 0, 8, 16, 9999를 사용합니다.

콘텐츠 유형

Radius

**텍스트**

8

**카드 및 썸네일**

16

**[Avatar](/components/avatar) (원형)**

9999

### [Tone](#tone)

![Skeleton의 Tone Property - Neutral, Magic](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/afc9f1d3-457c-471d-8cfc-f7cb4d6e5220)

일반 콘텐츠는 neutral, AI 활용 콘텐츠는 magic 스타일을 사용합니다.

### [Animation](#animation)

![Skeleton의 Animation - Shimmer 애니메이션](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64910042-c7c1-44fe-bcb3-f4343227d89e)

Skeleton은 로딩 중임을 나타내기 위해 시머(Shimmer) 애니메이션을 기본으로 제공합니다.

[

### SEED React Skeleton

SEED React Skeleton을 통해 Skeleton의 Shimmer 애니메이션을 확인합니다.







](/react/components/skeleton)

## [Guidelines](#guidelines)

### [Skeleton의 사용](#skeleton의-사용)

![Skeleton 사용 예시 - 검색 화면에서의 활용](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4604eab1-1a66-4c6a-b9a9-4026ef9be4a6)

![Skeleton 사용 예시 - 게시글 상세 화면에서의 활용](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0964e6d-200e-4619-9112-9e060eeadeb5)

![Skeleton과 Progress Circle을 함께 사용하여 로딩 상태를 나타낸 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b56d413-83a8-4641-bb1f-a663f4ee6a06)

Don’t

Progress Circle과 같이 사용하는 것은 최대한 지양해요.

Skeleton은 주로 목록이나 카드 뷰, 리스트 뷰 등 반복되는 데이터 기반의 화면 또는 곧 나타날 콘텐츠의 구조를 미리 보여줄 수 있는 페이지에서 사용됩니다.

**Skeleton을 언제 사용해야 하는지에 대한 자세한 기준은 로딩 가이드를 참고해 주세요.**

### [상황에 맞는 Tone 사용하기](#상황에-맞는-tone-사용하기)

![Tone 사용 예시 - Neutral](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55b1cccc-4b2b-468d-bd47-6149a9166ac6)

![Tone 사용 예시 - Magic](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6d2e4c4-564f-431f-891e-1a01e19ab961)

데이터 종류에 따라 Skeleton이 다른 색상으로 표시됩니다. 맥락에 알맞은 Tone을 선택하여 사용해주세요.

Tone

사용 상황

**Neutral**

데이터를 불러오는 일반적인 로딩 경험일 때 표시됩니다.

**Magic**

빈 공간을 자동으로 채워주는 등 AI 기능이 활성화되었을 때 나타납니다.

**AI 로딩에 대한 자세한 내용은 AI UI 가이드를 참고해 주세요.**

### [Skeleton vs. Progress Circle](#skeleton-vs-progress-circle)

![로딩 상태를 나타내기 위해 Skeleton을 사용한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a86e1a0-98b8-497c-9afe-11b83854ec49)

![로딩 상태를 나타내기 위해 Progress Circle을 사용한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee3e0634-f3f1-421a-9eba-d41011ffe6fc)

Skeleton과 [Progress Circle](/components/progress-circle)은 콘텐츠 로딩 상태를 보여준다는 공통점 때문에 자주 혼동될 수 있습니다.

Skeleton은 무엇이 로딩될지 콘텐츠의 구조를 보여주는 반면, [Progress Circle](/components/progress-circle)은 '지금 로딩 중'이라는 상태 자체를 알려준다는 점에서 핵심적인 차이가 있습니다.

**Skeleton**

**Progress Circle (Indeterminate)**

**핵심 용도**

콘텐츠의 구조를 미리 볼 수 있음

콘텐츠의 형태와 상관 없이 시스템이 작동 중이라는 사실을 알려줌

**위치**

콘텐츠가 실제로 표시될 영역에 표시

특정 영역(특정 컴포넌트)의 중앙 또는 화면 전체에 표시

**특징**

넓은 영역의 콘텐츠가 한 번에 로딩될 때 반복되는 콘텐츠가 로딩될 때

데이터 저장, 일부 새로고침 등 특정 행동으로 인해 로딩될 때

**로딩 시간**

상대적으로 긴 로딩 시간에 적합 (1~10초 내)

짧은 로딩 시에 적합 (1~4초 내)

**애니메이션**

곧 내용이 나타날 것을 표현하는 shimmer 애니메이션이 나타남

지속적인 회전 애니메이션이 나타남

## [Specification](#specification)

### base

상태

슬롯

속성

값

enabled

shimmer

duration

1.5s

timingFunction

[$timing-function.easing](/foundations/design-token/reference/%24timing-function.easing)

### radius=0

-   기본값입니다.

상태

슬롯

속성

값

enabled

root

cornerRadius

0px

### radius=8

-   텍스트 콘텐츠에 사용합니다.

상태

슬롯

속성

값

enabled

root

cornerRadius

8px

### radius=16

-   카드 및 썸네일에 사용합니다.

상태

슬롯

속성

값

enabled

root

cornerRadius

16px

### radius=full

-   Avatar(원형) 콘텐츠에 사용합니다.

상태

슬롯

속성

값

enabled

root

cornerRadius

[$radius.full](/foundations/design-token/reference/%24radius.full)

### tone=neutral

-   데이터를 불러오는 일반적인 로딩 경험에 사용합니다.

상태

슬롯

속성

값

enabled

root

color

[$color.palette.gray-200](/foundations/design-token/reference/%24color.palette.gray-200)

shimmer

gradient

[$gradient.shimmer-neutral](/foundations/design-token/reference/%24gradient.shimmer-neutral)

Skeleton shimmer

### tone=magic

-   AI 기능이 활성화되었을 때 사용합니다.

상태

슬롯

속성

값

enabled

root

color

[$color.bg.magic-weak](/foundations/design-token/reference/%24color.bg.magic-weak)

shimmer

gradient

[$gradient.shimmer-magic](/foundations/design-token/reference/%24gradient.shimmer-magic)

Skeleton AI shimmer

Last updated on

[이전 문서Side Panel](/components/side-panel)[다음 문서Slider](/components/slider)
