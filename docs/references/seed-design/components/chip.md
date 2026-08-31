<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/chip
fetched: 2026-08-31T04:58:59.541Z
-->

ComponentsLLMS.txt

# Chip

사용자가 선택하거나 입력하는 값을 표시하는 컴포넌트입니다.

Figma[React](/react/components/chip)iOSAndroid

![Chip cover image](/og/components/chip.webp)

## [Anatomy](#anatomy)

![Chip의 Anatomy 이미지. Container, Label, Prefix Item, Suffix Item으로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49348701-1fc3-4874-acd2-0902eb5f4665)

Chip은 Container와 Label로 구성되며, Prefix Item과 Suffix Item을 가질 수 있습니다.

## [Properties](#properties)

### [Variant](#variant)

![Chip의 Variant Property - Solid, Outline Strong, Outline Weak](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eaecb675-bd61-4005-8921-28a5b446813d)

Chip은 Solid, Outline Strong, Outline Weak 세 가지 스타일의 Variant를 가집니다. 각각 선택된 상태를 표시할 수 있습니다.

### [Size](#size)

![Chip의 Size Property - Large, Medium, Small](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0cd4b73b-888b-4e8d-b2f9-69e0738863ce)

Chip은 Large, Medium, Small 세 가지 Size를 가집니다.

### [State](#state)

![Chip의 State - Enabled, Pressed, Disabled](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b169159-2ed6-497d-9f1e-c0e9a199043a)

Chip은 선택 여부에 따라 각각 Enabled, Pressed, Disabled 상태를 가집니다.

### [Prefix Property](#prefix-property)

![Chip의 Prefix Property - Icon, Avatar, Image](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9682f75d-144b-45ec-b60c-28512767f8ff)

Prefix Slot은 Label의 왼쪽에 위치합니다. Prefix에는 Icon, Avatar, Image 세 가지의 타입을 프리셋 형태로 제공합니다.

**Prefix Slot에 들어오는 요소에 따라 좌측 여백이 달라지므로 Custom Slot은 사용을 권장하지 않습니다.**

### [Suffix Property](#suffix-property)

![Chip의 Suffix Property - Icon, Custom](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c8d254f-a7b6-49e5-94b9-5e58f3066f32)

Suffix Slot은 Label의 오른쪽에 위치합니다. Suffix에는 Icon 타입을 프리셋 형태로 제공합니다.

포함된 타입 이외에 다른 요소를 사용하고 싶은 경우 Custom Child Swap을 통해서 변경해주세요.

## [Guidelines](#guidelines)

### [Chip의 활용](#chip의-활용)

![Chip, Chip Group](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c2955a8-5348-4e86-9d8a-b33b57bd1eb9)

![Filter Bar](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc11fcf9-bf99-467a-bfe5-f7e73ffe6a6c)

![Tabs - Chip Variant](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67a13a97-0038-4db4-9265-86d0d1e91886)

Chip은 사용자가 선택하거나 입력하는 값을 표시할 때 단독으로 사용할 수 있으며 여러 개의 Chip을 함께 사용하는 경우 Chip Group 템플릿을 사용합니다.

Chip Group은 제안하는 항목 (Suggestion), 단일 또는 다중 선택 (Selection)의 용도로 사용할 수 있습니다.

콘텐츠 목록에서 조건의 적용 및 해제를 제어하는 Filter 역할로 사용할 때는 Filter Bar 템플릿을 사용합니다.

Chip을 Tab 역할로 사용하는 경우 [Tabs](/components/tabs) 컴포넌트의 Chip Variant를 사용합니다.

### [Chip Group Layout](#chip-group-layout)

![Chip Group Layout - Scrollable과 Overflow 레이아웃](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27fa02e9-e0dc-4e34-8be3-4fdff84b98fc)

Chip Group은 한 줄에 표시하는 Scrollable Layout과 모든 Chip을 표시하는 Overflow Layout 두 가지 방법으로 표시할 수 있습니다.

### [Filter Bar](#filter-bar)

![Filter Bar 사용 예시 - 필터 비활성과 필터 활성화](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c47bbf7c-fe23-410b-90e6-00afd69a7055)

콘텐츠 목록에서 조건의 적용 및 해제를 제어하는 Filter 역할로 Chip을 사용할 때는 Filter Bar 템플릿을 사용합니다.

Filter Bar는 활성화된 필터가 있는 경우 필터 선택을 해제할 수 있는 Clear 버튼이 나타나는 동작을 포함합니다.

### [Chip을 Selection으로 사용하기](#chip을-selection으로-사용하기)

![Chip을 Selection으로 사용하는 예시 - 다중 선택과 단일 선택](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9eac5a1a-7a50-4d29-8c3f-afd619d9d110)

필터 항목, 입력폼 같이 단일 또는 다중 선택 동작에 Chip Group을 사용할 수 있습니다. 화면에 Selected 된 값이 여러 개 표시될 수 있으므로 주목도가 낮은 Outline Weak 스타일 사용을 권장합니다.

### [Chip을 Suggestion으로 사용하기](#chip을-suggestion으로-사용하기)

![Chip을 Suggestion으로 사용하는 예시 - 채팅 추천 메시지, 추천 검색어](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/369710ac-85e9-4262-93fc-71dc193a23f0)

사용자에게 제안하는 항목에 Chip을 사용할 수 있습니다. 화면 내 다른 요소와의 조합에 따라 스타일을 선택해 사용해주세요.

### [Chip을 Input으로 사용하기](#chip을-input으로-사용하기)

![Chip을 Input으로 사용하는 예시 - Suffix에 Remove 버튼 포함](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/065738df-c244-478d-90bc-4ce5db57c45d)

사용자가 입력한 내용을 Chip에 표시할 수 있습니다. 이 경우 Suffix Slot에 Chip을 제거할 수 있는 Remove 버튼을 사용해주세요.

## [Specification](#specification)

### base

상태

슬롯

속성

값

enabled

root

colorDuration

[$duration.color-transition](/foundations/design-token/reference/%24duration.color-transition)

colorTimingFunction

[$timing-function.easing](/foundations/design-token/reference/%24timing-function.easing)

cornerRadius

[$radius.full](/foundations/design-token/reference/%24radius.full)

prefixIcon

Icon, Avatar, Image를 넣을 수 있습니다. 들어오는 요소에 따라 좌측 여백이 달라집니다.

paddingLeft

[$dimension.x1\_5](/foundations/design-token/reference/%24dimension.x1_5)

prefixAvatar

size

[$dimension.x6](/foundations/design-token/reference/%24dimension.x6)

suffixIcon

paddingRight

[$dimension.x1\_5](/foundations/design-token/reference/%24dimension.x1_5)

label

fontWeight

[$font-weight.medium](/foundations/design-token/reference/%24font-weight.medium)

paddingX

[$dimension.x1\_5](/foundations/design-token/reference/%24dimension.x1_5)

icon

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

pressed

root

scaleScope

self

### variant=solid

-   기본 스타일입니다.

상태

슬롯

속성

값

enabled

root

color

[$color.bg.neutral-weak-alpha](/foundations/design-token/reference/%24color.bg.neutral-weak-alpha)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (weak-alpha) \`$color.layer.basement\` 위에서 컴포넌트의 가시성을 보장하기 위해 사용됩니다.

label

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

prefixIcon

Icon, Avatar, Image를 넣을 수 있습니다. 들어오는 요소에 따라 좌측 여백이 달라집니다.

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

suffixIcon

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

icon

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

pressed

root

color

[$color.bg.neutral-weak-alpha-pressed](/foundations/design-token/reference/%24color.bg.neutral-weak-alpha-pressed)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (weak-alpha-pressed) \`$color.layer.basement\` 위에서 컴포넌트의 가시성을 보장하기 위해 사용됩니다.

disabled

root

opacity

0.5

selected

root

color

[$color.bg.neutral-inverted](/foundations/design-token/reference/%24color.bg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

label

color

[$color.fg.neutral-inverted](/foundations/design-token/reference/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

prefixIcon

Icon, Avatar, Image를 넣을 수 있습니다. 들어오는 요소에 따라 좌측 여백이 달라집니다.

color

[$color.fg.neutral-inverted](/foundations/design-token/reference/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

suffixIcon

color

[$color.fg.neutral-inverted](/foundations/design-token/reference/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

icon

color

[$color.fg.neutral-inverted](/foundations/design-token/reference/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

selected, pressed

root

color

[$color.bg.neutral-inverted-pressed](/foundations/design-token/reference/%24color.bg.neutral-inverted-pressed)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted-pressed)

selected, disabled

root

opacity

0.5

### variant=outlineStrong

-   명확한 구분이 필요한 경우 사용합니다.

상태

슬롯

속성

값

enabled

root

color

[$color.bg.transparent](/foundations/design-token/reference/%24color.bg.transparent)

strokeColor

[$color.stroke.neutral-muted](/foundations/design-token/reference/%24color.stroke.neutral-muted)

의미 단위가 바뀌는 경계를 나누는 선입니다. 섹션과 섹션 사이, 콘텐츠와 액션 영역 사이, 헤더와 본문 경계처럼 한 화면에 한두 번만 등장하는 구분에 사용됩니다. (muted)

strokeWidth

1px

label

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

prefixIcon

Icon, Avatar, Image를 넣을 수 있습니다. 들어오는 요소에 따라 좌측 여백이 달라집니다.

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

suffixIcon

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

icon

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

pressed

root

color

[$color.bg.transparent-pressed](/foundations/design-token/reference/%24color.bg.transparent-pressed)

disabled

root

opacity

0.5

selected

root

color

[$color.bg.neutral-inverted](/foundations/design-token/reference/%24color.bg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

label

color

[$color.fg.neutral-inverted](/foundations/design-token/reference/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

prefixIcon

Icon, Avatar, Image를 넣을 수 있습니다. 들어오는 요소에 따라 좌측 여백이 달라집니다.

color

[$color.fg.neutral-inverted](/foundations/design-token/reference/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

suffixIcon

color

[$color.fg.neutral-inverted](/foundations/design-token/reference/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

icon

color

[$color.fg.neutral-inverted](/foundations/design-token/reference/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

selected, pressed

root

color

[$color.bg.neutral-inverted-pressed](/foundations/design-token/reference/%24color.bg.neutral-inverted-pressed)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted-pressed)

selected, disabled

root

opacity

0.5

### variant=outlineWeak

-   Selection 사용 시 주목도가 낮은 스타일로 권장됩니다.

상태

슬롯

속성

값

enabled

root

color

[$color.bg.transparent](/foundations/design-token/reference/%24color.bg.transparent)

strokeColor

[$color.stroke.neutral-muted](/foundations/design-token/reference/%24color.stroke.neutral-muted)

의미 단위가 바뀌는 경계를 나누는 선입니다. 섹션과 섹션 사이, 콘텐츠와 액션 영역 사이, 헤더와 본문 경계처럼 한 화면에 한두 번만 등장하는 구분에 사용됩니다. (muted)

strokeWidth

1px

label

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

prefixIcon

Icon, Avatar, Image를 넣을 수 있습니다. 들어오는 요소에 따라 좌측 여백이 달라집니다.

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

suffixIcon

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

icon

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

pressed

root

color

[$color.bg.transparent-pressed](/foundations/design-token/reference/%24color.bg.transparent-pressed)

disabled

root

opacity

0.5

selected

root

strokeColor

[$color.stroke.neutral-contrast](/foundations/design-token/reference/%24color.stroke.neutral-contrast)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (contrast)

color

[$color.bg.neutral-weak](/foundations/design-token/reference/%24color.bg.neutral-weak)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (weak)

selected, pressed

root

color

[$color.bg.neutral-weak-pressed](/foundations/design-token/reference/%24color.bg.neutral-weak-pressed)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (weak-pressed)

selected, disabled

root

opacity

0.5

### size=small

상태

슬롯

속성

값

enabled

root

height

32px

paddingX

[$dimension.x1\_5](/foundations/design-token/reference/%24dimension.x1_5)

label

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

[$line-height.t4](/foundations/design-token/reference/%24line-height.t4)

prefixIcon

Icon, Avatar, Image를 넣을 수 있습니다. 들어오는 요소에 따라 좌측 여백이 달라집니다.

size

[$dimension.x3\_5](/foundations/design-token/reference/%24dimension.x3_5)

suffixIcon

size

[$dimension.x3\_5](/foundations/design-token/reference/%24dimension.x3_5)

prefixAvatar

size

[$dimension.x5](/foundations/design-token/reference/%24dimension.x5)

icon

size

[$dimension.x3\_5](/foundations/design-token/reference/%24dimension.x3_5)

### size=medium

상태

슬롯

속성

값

enabled

root

height

36px

paddingX

[$dimension.x2](/foundations/design-token/reference/%24dimension.x2)

label

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

[$line-height.t4](/foundations/design-token/reference/%24line-height.t4)

prefixIcon

Icon, Avatar, Image를 넣을 수 있습니다. 들어오는 요소에 따라 좌측 여백이 달라집니다.

size

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

suffixIcon

size

[$dimension.x3\_5](/foundations/design-token/reference/%24dimension.x3_5)

prefixAvatar

size

[$dimension.x6](/foundations/design-token/reference/%24dimension.x6)

icon

size

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

### size=large

상태

슬롯

속성

값

enabled

root

height

40px

paddingX

[$dimension.x2\_5](/foundations/design-token/reference/%24dimension.x2_5)

label

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

[$line-height.t4](/foundations/design-token/reference/%24line-height.t4)

prefixIcon

Icon, Avatar, Image를 넣을 수 있습니다. 들어오는 요소에 따라 좌측 여백이 달라집니다.

size

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

paddingLeft

[$dimension.x1\_5](/foundations/design-token/reference/%24dimension.x1_5)

suffixIcon

size

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

prefixAvatar

size

[$dimension.x7](/foundations/design-token/reference/%24dimension.x7)

icon

size

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

### size=small, layout=withText

상태

슬롯

속성

값

enabled

root

minWidth

44px

### size=medium, layout=withText

상태

슬롯

속성

값

enabled

root

minWidth

[$dimension.x12](/foundations/design-token/reference/%24dimension.x12)

### size=large, layout=withText

상태

슬롯

속성

값

enabled

root

minWidth

[$dimension.x13](/foundations/design-token/reference/%24dimension.x13)

### size=small, layout=iconOnly

상태

슬롯

속성

값

enabled

root

minWidth

[$dimension.x8](/foundations/design-token/reference/%24dimension.x8)

### size=medium, layout=iconOnly

상태

슬롯

속성

값

enabled

root

minWidth

[$dimension.x9](/foundations/design-token/reference/%24dimension.x9)

### size=large, layout=iconOnly

상태

슬롯

속성

값

enabled

root

minWidth

[$dimension.x10](/foundations/design-token/reference/%24dimension.x10)

Last updated on

[이전 문서Checkbox](/components/checkbox)[다음 문서Content Placeholder](/components/content-placeholder)
