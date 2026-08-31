<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/segmented-control
fetched: 2026-08-31T04:59:00.491Z
-->

ComponentsLLMS.txt

# Segmented Control

여러 옵션 중 하나를 선택하여 관련 콘텐츠를 즉시 필터링하거나 전환할 때 사용하는 컴포넌트입니다.

Figma[React](/react/components/segmented-control)iOSAndroid

![Segmented Control cover image](/og/components/segmented-control.webp)

## [Anatomy](#anatomy)

![Segmented Control의 Anatomy 이미지. Container, Segment, Label, Badge (Optional)로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3c0d33e-b5a1-4dbb-a1c4-dd60f3d5b74c)

Segmented Control은 전체를 감싸는 컨테이너(Container) 안에 여러 개의 세그먼트(Segment)가 자리 잡고 있으며, 각 세그먼트는 텍스트 레이블(Label)을 포함하여 구성됩니다.

새로운 세그먼트 혹은 해당 세그먼트에 새로운 내용이 추가되는 경우 [Notification Badge](/components/notification-badge)를 선택적으로 표시할 수 있습니다.

## [Properties](#properties)

### [Number of Controls](#number-of-controls)

![Segmented Control의 Number of Controls - 2개, 3개, 4개](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b205e861-fdff-43a8-9923-0a010207e001)

세그먼트화된 아이템은 2~4개의 세그먼트로 구성될 수 있습니다.

### [State](#state)

![Segmented Control의 State - Selected-Enabled, Selected-Pressed, Pressed, Disabled, Selected-Disabled](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d54207f-d4f8-4635-abd1-c90c637efc66)

Segmented Control은 Selected/Unselected 상태를 통해 세그먼트화된 아이템을 표시하며, Enabled, Pressed, Disabled와 같은 상호작용 상태를 함께 가집니다.

## [Guidelines](#guidelines)

### [짧고 간단하게 작성하기](#짧고-간단하게-작성하기)

![인기순, 추천순 Label을 포함하는 Segmented Control](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/573c59a3-e5f0-4236-8ca7-fcff8aba38d9)

![가장 인기있는 리뷰, 추천이 많은 리뷰 Label을 포함하는 Segmented Control](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02c7b928-4b25-4fbf-b43d-fbc38ebc15a4)

Don’t

Segment를 표현하는 라벨은 짧고 간결하게 작성해주세요.

라벨은 짧고 간결하게 유지하세요. 라벨이 세그먼트에 비해 너무 길다면 다른 구성 요소를 사용하는 것을 고려해 보세요.

### [4개 이하로 사용하기](#4개-이하로-사용하기)

![3개의 선택지를 포함하는 Segmented Control](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2dac990-d8f9-44b6-87c3-545e0795ea2c)

![5개의 선택지를 포함하는 Segmented Control](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5128fef5-2069-4866-ab5b-5fc633b6bfb0)

Don’t

옵션을 5개 이상 사용하지 마세요.

선택지가 너무 많아지면 사용자가 인식하기 어렵고, 모바일 환경에서는 터치 영역이 좁아져 사용성이 떨어집니다. 더 많은 옵션이 필요하면 [Radio](/components/radio) Group, [Checkbox](/components/checkbox) Group과 같은 다른 구성 요소를 사용하는 것이 좋습니다.

### [한 화면에 한 개 이상 사용하지 않기](#한-화면에-한-개-이상-사용하지-않기)

![한 화면에 2개의 Segmented Control이 사용된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1e31f9a-60fb-4c8e-afd9-4ae1863f155e)

Don’t

한 화면에 한 개 이상 사용하는 것을 지양해요.

Segmented Control을 한 화면에 반복해서 사용하는 것은 권장되지 않습니다.

동일한 형태의 컨트롤이 여러 개 있으면 화면의 시각적 계층 구조가 모호해져, 사용자는 어떤 것을 먼저 조작해야 할지, 각 컨트롤이 어느 영역에 영향을 미치는지 파악하는 데 혼란을 느끼게 됩니다.

### [Segmented Control로 보기 전환하기](#segmented-control로-보기-전환하기)

![지도, 거리뷰, 3D 중 지도 보기 중 전환하는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f66eac7e-e9c1-40b7-87f8-7b238d794842)

Segmented Control은 특정 콘텐츠 영역에 직접적인 영향을 미치는 상호작용에 사용해야 합니다.

동일한 데이터의 다른 표현 방식을 보여줄 때 사용합니다. 예를 들어, '지도로 보기'와 '거리뷰로 보기' 전환이 대표적입니다. 사용자는 즉각적으로 화면의 내용이 바뀌는 것을 기대합니다.

### [필터링으로 활용하기](#필터링으로-활용하기)

![동네 필터링에 활용하는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8b6a864-9ff0-470a-8f44-d5380461a233)

연관된 콘텐츠 그룹을 필터링할 때 Segmented Control을 사용하면 사용자가 보기 내 콘텐츠의 범위를 좁히거나 넓히며 원하는 콘텐츠를 쉽게 찾을 수 있습니다.

### [보기 내에서 콘텐츠를 탐색하기](#보기-내에서-콘텐츠를-탐색하기)

![선택한 항목별로 다른 내용을 표시하는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf2c868b-8f85-4471-98bb-80b8ac2fcc77)

동일한 콘텐츠를 여러 다른 관점이나 기준으로 보여주고 싶을 때, Segmented Control로 각 기준을 손쉽게 전환하도록 만들 수 있습니다.

## [Segmented Control vs. Tabs](#segmented-control-vs-tabs)

Segmented Control과 [Tabs](/components/tabs)는 시각적으로 비슷해서 자주 혼동되지만, 목적과 사용법에 있어 명확한 차이가 있습니다.

**핵심적으로 [Tabs](/components/tabs)는 탐색(Navigation)을 위한 것이고, Segmented Control은 조작(Manipulation)을 위한 것입니다.**

Segmented Control

Tabs

**핵심 용도**

화면 내 콘텐츠를 필터링, 정렬, 또는 다른 방식으로 볼 수 있음

서로 다른 콘텐츠를 담고있는 별개의 섹션이나 페이지로 이동

**위치**

자신이 제어하는 콘텐츠 바로 위에 배치

화면이나 특정 레이아웃의 최상단에 고정적으로 배치

**영향 범위**

현재 화면의 특정 부분에만 영향을 줌

탭 하단의 콘텐츠 영역 전체를 교체함

**동작**

선택 시 현재 뷰의 데이터만 변경됨

선택 시 새로운 뷰가 로드됨

![Tabs를 동네생활, 모임, 단지 간 화면 전환을 위해 사용한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71c63c15-99d6-40ba-acfc-66eac9a938f4)

![Segmented Control을 동네생활, 모임, 단지 간 화면 전환을 위해 사용한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36cd05c1-d267-4621-8495-bdd54c981eb8)

Don’t

Segmented Control을 탐색 경험에 사용하지 마세요.

## [Specification](#specification)

### [Segmented Control](#segmented-control)

#### base

상태

슬롯

속성

값

enabled

root

padding

[$dimension.x1](/foundations/design-token/reference/%24dimension.x1)

cornerRadius

[$radius.full](/foundations/design-token/reference/%24radius.full)

color

[$color.bg.neutral-weak-alpha](/foundations/design-token/reference/%24color.bg.neutral-weak-alpha)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (weak-alpha) \`$color.layer.basement\` 위에서 컴포넌트의 가시성을 보장하기 위해 사용됩니다.

### [Segmented Control Item](#segmented-control-item)

#### base

상태

슬롯

속성

값

enabled

root

minWidth

86px

minHeight

34px

paddingX

[$dimension.x6](/foundations/design-token/reference/%24dimension.x6)

paddingY

[$dimension.x1\_5](/foundations/design-token/reference/%24dimension.x1_5)

cornerRadius

[$radius.full](/foundations/design-token/reference/%24radius.full)

gap

[$dimension.x1\_5](/foundations/design-token/reference/%24dimension.x1_5)

colorDuration

[$duration.color-transition](/foundations/design-token/reference/%24duration.color-transition)

colorTimingFunction

[$timing-function.easing](/foundations/design-token/reference/%24timing-function.easing)

label

fontSize

[$font-size.t5](/foundations/design-token/reference/%24font-size.t5)

lineHeight

[$line-height.t5](/foundations/design-token/reference/%24line-height.t5)

fontWeight

[$font-weight.bold](/foundations/design-token/reference/%24font-weight.bold)

color

[$color.fg.neutral-subtle](/foundations/design-token/reference/%24color.fg.neutral-subtle)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (subtle)

colorDuration

[$duration.color-transition](/foundations/design-token/reference/%24duration.color-transition)

colorTimingFunction

[$timing-function.easing](/foundations/design-token/reference/%24timing-function.easing)

pressed

root

color

[$color.bg.neutral-weak-pressed](/foundations/design-token/reference/%24color.bg.neutral-weak-pressed)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (weak-pressed)

strokeWidth

1px

strokeColor

[$color.stroke.neutral-muted](/foundations/design-token/reference/%24color.stroke.neutral-muted)

의미 단위가 바뀌는 경계를 나누는 선입니다. 섹션과 섹션 사이, 콘텐츠와 액션 영역 사이, 헤더와 본문 경계처럼 한 화면에 한두 번만 등장하는 구분에 사용됩니다. (muted)

scaleScope

content

selected

label

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

disabled

label

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

### [Segmented Control Indicator](#segmented-control-indicator)

#### base

상태

슬롯

속성

값

enabled

root

color

[$color.palette.gray-00](/foundations/design-token/reference/%24color.palette.gray-00)

strokeColor

[$color.stroke.neutral-muted](/foundations/design-token/reference/%24color.stroke.neutral-muted)

의미 단위가 바뀌는 경계를 나누는 선입니다. 섹션과 섹션 사이, 콘텐츠와 액션 영역 사이, 헤더와 본문 경계처럼 한 화면에 한두 번만 등장하는 구분에 사용됩니다. (muted)

strokeWidth

1px

cornerRadius

[$radius.full](/foundations/design-token/reference/%24radius.full)

transformDuration

[$duration.d4](/foundations/design-token/reference/%24duration.d4)

transformTimingFunction

[$timing-function.easing](/foundations/design-token/reference/%24timing-function.easing)

pressed

root

color

[$color.palette.gray-100](/foundations/design-token/reference/%24color.palette.gray-100)

disabled

root

color

[$color.bg.disabled](/foundations/design-token/reference/%24color.bg.disabled)

Last updated on

[이전 문서Scroll Fog](/components/scroll-fog)[다음 문서Select Box](/components/select-box)
