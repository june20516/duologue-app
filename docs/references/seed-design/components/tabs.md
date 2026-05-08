<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/tabs
fetched: 2026-05-08T06:33:27.831Z
-->

[Components](/docs/components)Navigation

# Tabs

한 화면 내에서 콘텐츠를 탭 단위로 구분하여 전환할 수 있는 컴포넌트입니다.

LLMs.txt

다른 도구로 열기

Figma

Done

[

React

Done

피그마 Tabs 컴포넌트의 Variant=Line

](/react/components/tabs)

iOS

Not Ready

Android

Not Ready

## [Anatomy](#anatomy)

![Tabs의 Anatomy 이미지 (Line Type)](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe1a05a9-427b-4db4-bc08-439a5bcc1e71)

![Tabs의 Anatomy 이미지 (Chip Type)](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3489268-0d1c-4fc8-980e-e6b546d017ac)

Tabs는 Label이 있는 Tab Item의 모음으로 구성되어 있습니다. Tab Item에는 필요에 따라 [Notification Badge](/docs/components/notification-badge)를 표시할 수 있습니다.

## [Properties](#properties)

### [Variant](#variant)

![Tabs의 Variant Property - Line Type과 Chip Type](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18a26750-b0d4-4a0f-85b8-bdde017b9356)

Tabs 컴포넌트는 두 가지 타입으로 구성되어 있습니다.

Type

스타일/레이아웃

**Line**

Fill 레이아웃 (Tab Item을 꽉 차게 표시), Hug 레이아웃 (레이블 길이에 맞게 표시)

**Chip**

Solid 스타일, Outline 스타일

### [Size](#size)

![Tabs Line Type의 Size - Medium, Small](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27260dde-0863-4af4-9838-098a159369db)

![Tabs Chip Type의 Size - Large, Medium](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9aa41b7e-451c-4903-af98-f2319efe4fb6)

Line 타입은 Medium, Small 두 가지 Size를 가집니다. Chip 타입은 Large, Medium 두 가지 Size를 가집니다.

### [State](#state)

![Tabs의 State - Enabled, Selected, Disabled](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e26ee83c-0401-4381-8dc0-9c8a17094880)

Tab Item은 Enabled, Selected, Disabled 상태를 가집니다.

### [Notification Property](#notification-property)

![Tabs의 Notification Property - Notification Badge 표시 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9111d950-f98c-4bf9-a51e-7c14bd9be884)

Tab Item에 탭에 새로운 콘텐츠가 있음을 알리는 [Notification Badge](/docs/components/notification-badge)를 표시할 수 있습니다.

## [Guidelines](#guidelines)

### [Tabs 사이즈와 스타일 선택](#tabs-사이즈와-스타일-선택)

![Line Style - Medium과 Small 사이즈](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/259855b0-4a75-47a9-b384-62df230634d4)

![Chip Style - Large와 Medium 사이즈](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63170090-378f-4ebd-8b9e-1dc13e1c2ae2)

Tabs 컴포넌트는 Line과 Chip 두 가지 스타일로 구성되어 있습니다.

Line 타입은 Medium과 Small 두 가지 사이즈를 제공하며, Chip 타입은 Large와 Medium 두 가지 사이즈를 제공합니다. 화면 내 다른 요소와의 조합, 주목도에 따라 스타일과 사이즈를 선택하여 사용할 수 있습니다.

Large 사이즈는 화면 전체 콘텐츠를 전환하는 Navigation 역할에 적합하며, Medium 사이즈는 좁은 영역이나 스크롤 중간에서 서브 콘텐츠를 전환할 때 사용합니다.

Chip 타입을 사용하는 경우, 화면 전체의 콘텐츠를 전환하는 경우에 Solid 스타일을, 일부 콘텐츠를 전환하는 경우에는 Outline 타입을 사용하길 권장합니다.

![Line 스타일 Tabs와 Filter Chip을 조합하여 사용하는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd3a4cdf-e638-4e1e-affb-c1f760c94640)

![Chip 스타일 Tabs와 Filter Chip을 중복하여 사용하는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94848c3c-cc96-4617-b53c-b14c96643b77)

Don’t

Chip 스타일을 중복하여 사용하는 것은 권장하지 않습니다.

또한 화면 내 다른 [Chip](/docs/components/chip) 요소와 조합하여 사용하는 경우 동작에 혼란이 없도록 서로 다른 스타일을 적용해야 합니다.

### [Line 스타일에서 Fill과 Hug 레이아웃 사용하기](#line-스타일에서-fill과-hug-레이아웃-사용하기)

![Fill 레이아웃 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89aa2193-fdd7-4228-a57b-670e0011b6c1)

![Hug 레이아웃 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d63f256-4d82-4bbc-88f9-32f5d46b7e94)

Line 타입에서는 Tab Item을 꽉 차게 표시하는 Fill 레이아웃과 Tab Item을 레이블 길이에 맞게 표시하는 Hug 레이아웃을 사용할 수 있습니다.

Fill 레이아웃은 Tab Item이 많지 않을 경우에 적합하며, 최대 5개의 탭을 표시할 수 있습니다.

**Tab Item이 6개 이상이거나 레이블이 길어지는 경우에는 Hug 레이아웃 사용을 권장합니다.**

### [탭에 새로운 콘텐츠가 있음을 알리기](#탭에-새로운-콘텐츠가-있음을-알리기)

![Notification Badge를 이벤트 탭에만 표시한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea8e00a4-9701-4111-b77c-8a6b102a30dd)

![여러 탭에 동시에 Notification Badge를 표시하는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cdd45098-b754-43de-a76f-df2744dffaab)

Don’t

Notification을 여러 탭에 동시에 표시하는 것은 지양해야 합니다.

Tab Item에는 새로운 콘텐츠가 있음을 알리는 Notification Badge를 표시할 수 있습니다.

**Notification Badge는 콘텐츠를 확인하면 사라지는 동작을 하며, 여러 탭에 동시에 표시하는 것은 지양해야 합니다.**

### [2 Depth로 Tabs 구조 사용하기](#2-depth로-tabs-구조-사용하기)

![2 Depth Tabs 구조 예시 - Line Fill + Solid Chip, Line Hug + Outline Chip](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca69b2b2-1f4e-4bba-924e-c23f5f6df7d6)

2차 카테고리와 같이 Tab의 구조를 이중으로 표시하는 경우 서로 다른 탭의 스타일을 조합하여 사용합니다.

**1차 분류에는 Line 타입, 2차 분류에는 Chip 타입의 Tabs를 조합하여 사용하는 것을 권장합니다.**

## [Specification](#specification)

### [Tablist](#tablist)

#### base

상태

슬롯

속성

값

enabled

root

color

[$color.bg.layer-default](/docs/foundation/design-token/%24color.bg.layer-default)

basement 바로 위에 놓이는 기본 표면입니다. 대부분의 스크린 콘텐츠(List, TextField 등)가 이 레이어 위에서 표현됩니다.

strokeBottomWidth

1px

strokeColor

[$color.stroke.neutral-muted](/docs/foundation/design-token/%24color.stroke.neutral-muted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (muted)

indicator

height

2px

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

transformDuration

[$duration.d4](/docs/foundation/design-token/%24duration.d4)

transformTimingFunction

[$timing-function.easing](/docs/foundation/design-token/%24timing-function.easing)

#### layout=hug

상태

슬롯

속성

값

enabled

root

paddingX

[$dimension.spacing-x.global-gutter](/docs/foundation/design-token/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

indicator

insetX

0px

#### layout=fill

상태

슬롯

속성

값

enabled

root

paddingX

0px

indicator

insetX

[$dimension.spacing-x.global-gutter](/docs/foundation/design-token/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

#### size=small

상태

슬롯

속성

값

enabled

root

height

40px

#### size=medium

상태

슬롯

속성

값

enabled

root

height

44px

### [Tab](#tab)

#### base

상태

슬롯

속성

값

enabled

label

color

[$color.fg.neutral-subtle](/docs/foundation/design-token/%24color.fg.neutral-subtle)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (subtle)

selected

label

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

disabled

label

color

[$color.fg.disabled](/docs/foundation/design-token/%24color.fg.disabled)

#### size=medium

상태

슬롯

속성

값

enabled

root

minHeight

44px

paddingX

[$dimension.x2\_5](/docs/foundation/design-token/%24dimension.x2_5)

paddingY

[$dimension.x2\_5](/docs/foundation/design-token/%24dimension.x2_5)

label

fontSize

[$font-size.t5](/docs/foundation/design-token/%24font-size.t5)

lineHeight

[$line-height.t5](/docs/foundation/design-token/%24line-height.t5)

fontWeight

[$font-weight.bold](/docs/foundation/design-token/%24font-weight.bold)

#### size=small

상태

슬롯

속성

값

enabled

root

minHeight

40px

paddingX

[$dimension.x2\_5](/docs/foundation/design-token/%24dimension.x2_5)

paddingY

[$dimension.x2\_5](/docs/foundation/design-token/%24dimension.x2_5)

label

fontSize

[$font-size.t4](/docs/foundation/design-token/%24font-size.t4)

lineHeight

[$line-height.t4](/docs/foundation/design-token/%24line-height.t4)

fontWeight

[$font-weight.bold](/docs/foundation/design-token/%24font-weight.bold)

### [Chip Tablist](#chip-tablist)

#### base

상태

슬롯

속성

값

enabled

root

paddingX

[$dimension.x4](/docs/foundation/design-token/%24dimension.x4)

gap

8px

#### variant=neutralSolid

상태

슬롯

속성

값

enabled

root

gap

8px

#### variant=neutralOutline

상태

슬롯

속성

값

enabled

root

gap

8px

#### variant=brandSolid

상태

슬롯

속성

값

enabled

root

gap

8px

### [Chip Tab](#chip-tab)

#### base

상태

슬롯

속성

값

enabled

root

colorDuration

[$duration.color-transition](/docs/foundation/design-token/%24duration.color-transition)

colorTimingFunction

[$timing-function.easing](/docs/foundation/design-token/%24timing-function.easing)

paddingY

[$dimension.x2](/docs/foundation/design-token/%24dimension.x2)

cornerRadius

[$radius.full](/docs/foundation/design-token/%24radius.full)

label

fontWeight

[$font-weight.medium](/docs/foundation/design-token/%24font-weight.medium)

#### size=medium

상태

슬롯

속성

값

enabled

root

paddingX

[$dimension.x3\_5](/docs/foundation/design-token/%24dimension.x3_5)

minHeight

36px

label

fontSize

[$font-size.t4](/docs/foundation/design-token/%24font-size.t4)

#### size=large

상태

슬롯

속성

값

enabled

root

paddingX

[$dimension.x4](/docs/foundation/design-token/%24dimension.x4)

minHeight

40px

label

fontSize

[$font-size.t4](/docs/foundation/design-token/%24font-size.t4)

#### variant=neutralSolid

상태

슬롯

속성

값

enabled

root

color

[$color.bg.neutral-weak-alpha](/docs/foundation/design-token/%24color.bg.neutral-weak-alpha)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (weak-alpha) \`$color.layer.basement\` 위에서 컴포넌트의 가시성을 보장하기 위해 사용됩니다.

label

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

enabled, pressed

root

color

[$color.bg.neutral-weak-alpha-pressed](/docs/foundation/design-token/%24color.bg.neutral-weak-alpha-pressed)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (weak-alpha-pressed) \`$color.layer.basement\` 위에서 컴포넌트의 가시성을 보장하기 위해 사용됩니다.

selected

root

color

[$color.bg.neutral-inverted](/docs/foundation/design-token/%24color.bg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

label

color

[$color.fg.neutral-inverted](/docs/foundation/design-token/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

selected, pressed

root

color

[$color.bg.neutral-inverted-pressed](/docs/foundation/design-token/%24color.bg.neutral-inverted-pressed)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted-pressed)

disabled

label

color

[$color.fg.disabled](/docs/foundation/design-token/%24color.fg.disabled)

selected, disabled

root

color

[$color.bg.disabled](/docs/foundation/design-token/%24color.bg.disabled)

label

color

[$color.fg.disabled](/docs/foundation/design-token/%24color.fg.disabled)

#### variant=neutralOutline

상태

슬롯

속성

값

enabled

root

color

[$color.bg.transparent](/docs/foundation/design-token/%24color.bg.transparent)

strokeColor

[$color.stroke.neutral-muted](/docs/foundation/design-token/%24color.stroke.neutral-muted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (muted)

strokeWidth

1px

label

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

enabled, pressed

root

color

[$color.bg.transparent-pressed](/docs/foundation/design-token/%24color.bg.transparent-pressed)

selected

root

color

[$color.bg.neutral-inverted](/docs/foundation/design-token/%24color.bg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

label

color

[$color.fg.neutral-inverted](/docs/foundation/design-token/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

selected, pressed

root

color

[$color.bg.neutral-inverted-pressed](/docs/foundation/design-token/%24color.bg.neutral-inverted-pressed)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted-pressed)

disabled

label

color

[$color.fg.disabled](/docs/foundation/design-token/%24color.fg.disabled)

selected, disabled

root

color

[$color.bg.disabled](/docs/foundation/design-token/%24color.bg.disabled)

label

color

[$color.fg.disabled](/docs/foundation/design-token/%24color.fg.disabled)

#### variant=brandSolid

상태

슬롯

속성

값

enabled

root

color

[$color.bg.neutral-weak](/docs/foundation/design-token/%24color.bg.neutral-weak)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (weak)

label

color

[$color.fg.neutral-muted](/docs/foundation/design-token/%24color.fg.neutral-muted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (muted)

enabled, pressed

root

color

[$color.bg.neutral-weak-pressed](/docs/foundation/design-token/%24color.bg.neutral-weak-pressed)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (weak-pressed)

selected

root

color

[$color.bg.brand-solid](/docs/foundation/design-token/%24color.bg.brand-solid)

브랜드와 관련된 요소들이 즉각적으로 인식될 수 있도록 돕습니다. 화면에서 가장 중요한 액션을 강조하는데 사용할 수 있습니다. (solid)

label

color

[$color.palette.static-white](/docs/foundation/design-token/%24color.palette.static-white)

selected, pressed

root

color

[$color.bg.brand-solid-pressed](/docs/foundation/design-token/%24color.bg.brand-solid-pressed)

브랜드와 관련된 요소들이 즉각적으로 인식될 수 있도록 돕습니다. 화면에서 가장 중요한 액션을 강조하는데 사용할 수 있습니다. (solid-pressed)

disabled

root

color

[$color.bg.disabled](/docs/foundation/design-token/%24color.bg.disabled)

label

color

[$color.fg.disabled](/docs/foundation/design-token/%24color.fg.disabled)

selected, disabled

root

color

[$color.bg.disabled](/docs/foundation/design-token/%24color.bg.disabled)

Last updated on

[

Bottom Navigation

앱의 루트 페이지 하단에 고정되어 있는 네비게이션 바로, 다섯 개의 상위 탭 간 이동을 제공합니다.

](/docs/components/bottom-navigation)[

Top Navigation

화면 상단에 위치하여 탐색 인터페이스를 제공하는 네비게이션 컴포넌트입니다.

](/docs/components/top-navigation)
