<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/chip
fetched: 2026-05-18T04:15:40.710Z
-->

[Components](/docs/components)Controls

# Chip

사용자가 선택하거나 입력하는 값을 표시하는 컴포넌트입니다.

LLMs.txt

다른 도구로 열기

Figma

Done

[

React

Done

](/react/components/chip)

iOS

Done

Android

Done

## [Anatomy](#anatomy)

![Chip의 Anatomy 이미지. Container, Label, Prefix Item, Suffix Item으로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f764f9b-4c24-41ac-9cb3-0f220dc7f522)

Chip은 Container와 Label로 구성되며, Prefix Item과 Suffix Item을 가질 수 있습니다.

## [Properties](#properties)

### [Variant](#variant)

![Chip의 Variant Property - Solid, Outline Strong, Outline Weak](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1504ed5b-7ee6-4c27-8129-b32bf7005f92)

Chip은 Solid, Outline Strong, Outline Weak 세 가지 스타일의 Variant를 가집니다. 각각 선택된 상태를 표시할 수 있습니다.

### [Size](#size)

![Chip의 Size Property - Large, Medium, Small](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a282f05d-7ea4-4fc1-b04a-014c02303fda)

Chip은 Large, Medium, Small 세 가지 Size를 가집니다.

### [State](#state)

![Chip의 State - Enabled, Pressed, Disabled](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/afea58a7-86b2-4f5b-bfc3-4dfe2d829b19)

Chip은 선택 여부에 따라 각각 Enabled, Pressed, Disabled 상태를 가집니다.

### [Prefix Property](#prefix-property)

![Chip의 Prefix Property - Icon, Avatar, Image](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b5909b52-f3b5-4490-9853-371656421a94)

Prefix Slot은 Label의 왼쪽에 위치합니다. Prefix에는 Icon, Avatar, Image 세 가지의 타입을 프리셋 형태로 제공합니다.

**Prefix Slot에 들어오는 요소에 따라 좌측 여백이 달라지므로 Custom Slot은 사용을 권장하지 않습니다.**

### [Suffix Property](#suffix-property)

![Chip의 Suffix Property - Icon, Custom](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf2c0700-9bcc-4e68-99d5-d98a9cbd7ae4)

Suffix Slot은 Label의 오른쪽에 위치합니다. Suffix에는 Icon 타입을 프리셋 형태로 제공합니다.

포함된 타입 이외에 다른 요소를 사용하고 싶은 경우 Custom Child Swap을 통해서 변경해주세요.

## [Guidelines](#guidelines)

### [Chip의 활용](#chip의-활용)

![Chip, Chip Group](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02590640-c058-4dea-810b-1e28ed24f0e8)

![Filter Bar](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c5f7350-e779-4254-ad61-75f7d27fa150)

![Tabs - Chip Variant](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0ab734d-ea26-4f6a-9011-dc7af390b5ae)

Chip은 사용자가 선택하거나 입력하는 값을 표시할 때 단독으로 사용할 수 있으며 여러 개의 Chip을 함께 사용하는 경우 Chip Group 템플릿을 사용합니다.

Chip Group은 제안하는 항목 (Suggestion), 단일 또는 다중 선택 (Selection)의 용도로 사용할 수 있습니다.

콘텐츠 목록에서 조건의 적용 및 해제를 제어하는 Filter 역할로 사용할 때는 Filter Bar 템플릿을 사용합니다.

Chip을 Tab 역할로 사용하는 경우 [Tabs](/docs/components/tabs) 컴포넌트의 Chip Variant를 사용합니다.

### [Chip Group Layout](#chip-group-layout)

![Chip Group Layout - Scrollable과 Overflow 레이아웃](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41f921a2-949d-41a2-9dc2-973011d3a932)

Chip Group은 한 줄에 표시하는 Scrollable Layout과 모든 Chip을 표시하는 Overflow Layout 두 가지 방법으로 표시할 수 있습니다.

### [Filter Bar](#filter-bar)

![Filter Bar 사용 예시 - 필터 비활성과 필터 활성화](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/533138ad-da25-451c-ac1a-9e5c3900de15)

콘텐츠 목록에서 조건의 적용 및 해제를 제어하는 Filter 역할로 Chip을 사용할 때는 Filter Bar 템플릿을 사용합니다.

Filter Bar는 활성화된 필터가 있는 경우 필터 선택을 해제할 수 있는 Clear 버튼이 나타나는 동작을 포함합니다.

### [Chip을 Selection으로 사용하기](#chip을-selection으로-사용하기)

![Chip을 Selection으로 사용하는 예시 - 다중 선택과 단일 선택](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3147f68f-7964-4509-8bd5-44d14176cbeb)

필터 항목, 입력폼 같이 단일 또는 다중 선택 동작에 Chip Group을 사용할 수 있습니다. 화면에 Selected 된 값이 여러 개 표시될 수 있으므로 주목도가 낮은 Outline Weak 스타일 사용을 권장합니다.

### [Chip을 Suggestion으로 사용하기](#chip을-suggestion으로-사용하기)

![Chip을 Suggestion으로 사용하는 예시 - 채팅 추천 메시지, 추천 검색어](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9df3b10-b89a-4007-9b92-0238ce4ef9ae)

사용자에게 제안하는 항목에 Chip을 사용할 수 있습니다. 화면 내 다른 요소와의 조합에 따라 스타일을 선택해 사용해주세요.

### [Chip을 Input으로 사용하기](#chip을-input으로-사용하기)

![Chip을 Input으로 사용하는 예시 - Suffix에 Remove 버튼 포함](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b6519b4-0008-44db-8b04-b5104bf0c047)

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

[$duration.color-transition](/docs/foundation/design-token/%24duration.color-transition)

colorTimingFunction

[$timing-function.easing](/docs/foundation/design-token/%24timing-function.easing)

cornerRadius

[$radius.full](/docs/foundation/design-token/%24radius.full)

prefixIcon

Icon, Avatar, Image를 넣을 수 있습니다. 들어오는 요소에 따라 좌측 여백이 달라집니다.

paddingLeft

[$dimension.x1\_5](/docs/foundation/design-token/%24dimension.x1_5)

prefixAvatar

size

[$dimension.x6](/docs/foundation/design-token/%24dimension.x6)

suffixIcon

paddingRight

[$dimension.x1\_5](/docs/foundation/design-token/%24dimension.x1_5)

label

fontWeight

[$font-weight.medium](/docs/foundation/design-token/%24font-weight.medium)

paddingX

[$dimension.x1\_5](/docs/foundation/design-token/%24dimension.x1_5)

icon

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

### variant=solid

-   기본 스타일입니다.

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

prefixIcon

Icon, Avatar, Image를 넣을 수 있습니다. 들어오는 요소에 따라 좌측 여백이 달라집니다.

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

suffixIcon

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

icon

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

pressed

root

color

[$color.bg.neutral-weak-alpha-pressed](/docs/foundation/design-token/%24color.bg.neutral-weak-alpha-pressed)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (weak-alpha-pressed) \`$color.layer.basement\` 위에서 컴포넌트의 가시성을 보장하기 위해 사용됩니다.

disabled

root

opacity

0.5

selected

root

color

[$color.bg.neutral-inverted](/docs/foundation/design-token/%24color.bg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

label

color

[$color.fg.neutral-inverted](/docs/foundation/design-token/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

prefixIcon

Icon, Avatar, Image를 넣을 수 있습니다. 들어오는 요소에 따라 좌측 여백이 달라집니다.

color

[$color.fg.neutral-inverted](/docs/foundation/design-token/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

suffixIcon

color

[$color.fg.neutral-inverted](/docs/foundation/design-token/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

icon

color

[$color.fg.neutral-inverted](/docs/foundation/design-token/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

selected, pressed

root

color

[$color.bg.neutral-inverted-pressed](/docs/foundation/design-token/%24color.bg.neutral-inverted-pressed)

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

prefixIcon

Icon, Avatar, Image를 넣을 수 있습니다. 들어오는 요소에 따라 좌측 여백이 달라집니다.

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

suffixIcon

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

icon

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

pressed

root

color

[$color.bg.transparent-pressed](/docs/foundation/design-token/%24color.bg.transparent-pressed)

disabled

root

opacity

0.5

selected

root

color

[$color.bg.neutral-inverted](/docs/foundation/design-token/%24color.bg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

label

color

[$color.fg.neutral-inverted](/docs/foundation/design-token/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

prefixIcon

Icon, Avatar, Image를 넣을 수 있습니다. 들어오는 요소에 따라 좌측 여백이 달라집니다.

color

[$color.fg.neutral-inverted](/docs/foundation/design-token/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

suffixIcon

color

[$color.fg.neutral-inverted](/docs/foundation/design-token/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

icon

color

[$color.fg.neutral-inverted](/docs/foundation/design-token/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

selected, pressed

root

color

[$color.bg.neutral-inverted-pressed](/docs/foundation/design-token/%24color.bg.neutral-inverted-pressed)

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

prefixIcon

Icon, Avatar, Image를 넣을 수 있습니다. 들어오는 요소에 따라 좌측 여백이 달라집니다.

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

suffixIcon

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

icon

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

pressed

root

color

[$color.bg.transparent-pressed](/docs/foundation/design-token/%24color.bg.transparent-pressed)

disabled

root

opacity

0.5

selected

root

strokeColor

[$color.stroke.neutral-contrast](/docs/foundation/design-token/%24color.stroke.neutral-contrast)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (contrast)

color

[$color.bg.neutral-weak](/docs/foundation/design-token/%24color.bg.neutral-weak)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (weak)

selected, pressed

root

color

[$color.bg.neutral-weak-pressed](/docs/foundation/design-token/%24color.bg.neutral-weak-pressed)

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

[$dimension.x1\_5](/docs/foundation/design-token/%24dimension.x1_5)

label

fontSize

[$font-size.t4](/docs/foundation/design-token/%24font-size.t4)

lineHeight

[$line-height.t4](/docs/foundation/design-token/%24line-height.t4)

prefixIcon

Icon, Avatar, Image를 넣을 수 있습니다. 들어오는 요소에 따라 좌측 여백이 달라집니다.

size

[$dimension.x3\_5](/docs/foundation/design-token/%24dimension.x3_5)

suffixIcon

size

[$dimension.x3\_5](/docs/foundation/design-token/%24dimension.x3_5)

prefixAvatar

size

[$dimension.x5](/docs/foundation/design-token/%24dimension.x5)

icon

size

[$dimension.x3\_5](/docs/foundation/design-token/%24dimension.x3_5)

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

[$dimension.x2](/docs/foundation/design-token/%24dimension.x2)

label

fontSize

[$font-size.t4](/docs/foundation/design-token/%24font-size.t4)

lineHeight

[$line-height.t4](/docs/foundation/design-token/%24line-height.t4)

prefixIcon

Icon, Avatar, Image를 넣을 수 있습니다. 들어오는 요소에 따라 좌측 여백이 달라집니다.

size

[$dimension.x4](/docs/foundation/design-token/%24dimension.x4)

suffixIcon

size

[$dimension.x3\_5](/docs/foundation/design-token/%24dimension.x3_5)

prefixAvatar

size

[$dimension.x6](/docs/foundation/design-token/%24dimension.x6)

icon

size

[$dimension.x4](/docs/foundation/design-token/%24dimension.x4)

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

[$dimension.x2\_5](/docs/foundation/design-token/%24dimension.x2_5)

label

fontSize

[$font-size.t4](/docs/foundation/design-token/%24font-size.t4)

lineHeight

[$line-height.t4](/docs/foundation/design-token/%24line-height.t4)

prefixIcon

Icon, Avatar, Image를 넣을 수 있습니다. 들어오는 요소에 따라 좌측 여백이 달라집니다.

size

[$dimension.x4](/docs/foundation/design-token/%24dimension.x4)

paddingLeft

[$dimension.x1\_5](/docs/foundation/design-token/%24dimension.x1_5)

suffixIcon

size

[$dimension.x4](/docs/foundation/design-token/%24dimension.x4)

prefixAvatar

size

[$dimension.x7](/docs/foundation/design-token/%24dimension.x7)

icon

size

[$dimension.x4](/docs/foundation/design-token/%24dimension.x4)

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

[$dimension.x12](/docs/foundation/design-token/%24dimension.x12)

### size=large, layout=withText

상태

슬롯

속성

값

enabled

root

minWidth

[$dimension.x13](/docs/foundation/design-token/%24dimension.x13)

### size=small, layout=iconOnly

상태

슬롯

속성

값

enabled

root

minWidth

[$dimension.x8](/docs/foundation/design-token/%24dimension.x8)

### size=medium, layout=iconOnly

상태

슬롯

속성

값

enabled

root

minWidth

[$dimension.x9](/docs/foundation/design-token/%24dimension.x9)

### size=large, layout=iconOnly

상태

슬롯

속성

값

enabled

root

minWidth

[$dimension.x10](/docs/foundation/design-token/%24dimension.x10)

Last updated on

[

Checkbox

사용자가 하나 이상의 옵션을 선택할 수 있게 해주는 컴포넌트입니다. 목록에서 여러 항목을 선택하거나 약관 동의와 같은 선택적 작업에 사용됩니다.

](/docs/components/checkbox)[

Field

사용자로부터 값을 입력받는 컨테이너 컴포넌트로, 일관된 레이블, 도움말, 오류 표기와 상태 피드백을 제공합니다.

](/docs/components/field)
