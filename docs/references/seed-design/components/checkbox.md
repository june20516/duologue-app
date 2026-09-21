<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/checkbox
fetched: 2026-09-21T04:26:57.289Z
-->

ComponentsLLMS.txt

# Checkbox

사용자가 하나 이상의 옵션을 선택할 수 있게 해주는 컴포넌트입니다. 목록에서 여러 항목을 선택하거나 약관 동의와 같은 선택적 작업에 사용됩니다.

Figma[React](/react/components/checkbox)[Lynx](/lynx/components/checkbox)iOSAndroid

![Checkbox cover image](/og/components/checkbox.webp)

[

### Field

Checkbox Group을 Field 내부에서 사용하여 Checkbox Group Field로 활용할 수 있습니다.







](/components/field)

## [Anatomy](#anatomy)

![Checkbox의 Anatomy 이미지. Checkmark와 Label로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0e9407c-eb7c-4f33-a9eb-f82640668724)

Checkbox는 Checkmark와 Label로 구성됩니다. Checkmark는 개별 컴포넌트로 제공되어서 자유롭게 조합해서 사용할 수 있습니다.

## [Properties](#properties)

### [Size, Weight](#size-weight)

![Checkbox의 Size와 Weight Property - Medium, Large 사이즈와 Regular, Bold 굵기](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/623f52de-d9c4-4646-8e35-530c77ca1a9f)

Checkbox는 Medium, Large 사이즈로 제공됩니다. 강조해야 하거나 그룹으로 사용해야 하는 경우에 따라서 Weight를 조정해서 활용할 수 있습니다.

### [Tone](#tone)

![Checkbox의 Tone Property - Neutral](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ada1a613-eb77-4d7e-8d00-768124097454)

Checkbox는 Neutral을 기본으로 사용할 수 있습니다.

### [Shape](#shape)

![Checkbox의 Shape Property - Square, Ghost](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5010525d-d5f9-4dee-86d9-ccf9461a6094)

Checkbox는 Square, Ghost 두 가지 Shape으로 제공됩니다. Checkmark도 동일하게 제공되니 참고하세요.

### [State](#state)

![Checkbox의 State - Selected, Unselected, Indeterminate 상태와 Enabled, Pressed, Disabled 조합](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/361d7cc3-bce8-4034-96ca-6836ba9543c8)

Checkbox는 선택(Selected), 미선택(Unselected), 불확실(Indeterminate) 상태를 가지며, 이 각각의 상태는 사용자의 상호작용에 따라 활성화(Enabled), 비활성화(Disabled), 눌림(Pressed)의 상태로 조합되어 표현됩니다.

## [Guidelines](#guidelines)

### [Checkbox touch target](#checkbox-touch-target)

![Checkbox의 Touch Target 영역 - Label 포함 영역](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b60ce72f-2726-4ad6-a8d9-e559b6262d9d)

![Checkbox의 Touch Target 영역 - Row 전체 영역](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad1416ec-862d-4e41-81b9-56568e11ecfd)

Checkbox는 Label을 포함한 영역이 Target으로 동작합니다. List처럼 Checkmark를 조합해서 사용하는 경우 전체 Row가 Target 영역이 되어야 합니다.

### [Checkbox group 사용하기](#checkbox-group-사용하기)

![Checkbox Group 사용 예시 - 부모 Checkbox와 자식 Checkbox 구성: 모든 항목 선택 안 됨](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9cd54cc0-06da-4b29-820d-ffbb4f8b6a16)

![Checkbox Group 사용 예시 - 부모 Checkbox와 자식 Checkbox 구성: 모든 항목 선택됨](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7078da3-328a-40c3-945b-41ce86b4cf23)

![Checkbox Group 사용 예시 - 부모 Checkbox와 자식 Checkbox 구성: 일부 항목 선택됨](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80bb71f4-6d35-452b-a267-6390b450421f)

![Checkbox Group 사용 예시 - 부모 Checkbox가 없는 구성](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07e8c055-9af5-4f65-bf9a-398417d91afb)

![Checkbox Group 사용 예시 - 응용](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/178986f4-04f6-4cf6-988b-775548657398)

Checkbox는 여러 항목을 그룹으로 묶어서 제공할 수 있습니다. 그룹으로 묶이는 경우 필요에 따라서 부모 Checkbox를 최상단에 배치하세요.

부모 Checkbox를 선택하면 모든 자식 Checkbox가 선택됩니다. 자식 Checkbox 일부만 선택하면 부모 Checkbox는 Indeterminate 상태로 표시됩니다.

### [Shape 결정하기](#shape-결정하기)

![Checkbox Shape 선택 가이드 - Ghost](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0b76451-1708-4440-8c7f-61bc2a8c2af5)

![Checkbox Shape 선택 가이드 - Square](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e973834d-b6df-4bf5-8295-b98fea368de1)

필수 선택 항목이 아니고, 3개 이하 항목으로 구성되는 경우 Ghost를 사용하는 것을 권장합니다. 필수 선택 항목이고 사용자가 해당 내용을 인지해야 하는 경우 명시적인 Square을 사용하세요.

### [Checkbox vs. Switch](#checkbox-vs-switch)

![Checkbox와 Switch 비교표](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9a88f2a-8576-466e-b435-55ffaff61efb)

Checkbox와 [Switch](/components/switch)는 사용자의 선택 여부를 표시하는 컴포넌트입니다.

속성

Checkbox

Switch

**선택값 적용**

저장하기 등의 액션을 수행해야 값이 저장됨 (권장)

별다른 액션이 없어도 즉시 적용됨 (권장)

**항목 구성 방식**

하나의 카테고리에 여러 항목으로 나열할 수 있음

개별 항목으로 구성하는 것을 권장

**하위 항목 구성**

부모가 모든 하위 항목을 선택/해제할 수 있음

부모와 하위 항목간 관계가 없음

## [Specification](#specification)

### [Checkbox Group](#checkbox-group)

#### base

상태

슬롯

속성

값

enabled

root

gapY

[$dimension.x1](/foundations/design-token/reference/%24dimension.x1)

### [Checkbox](#checkbox)

#### base

상태

슬롯

속성

값

enabled

label

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

root

root 전체가 누르는 영역이며, pressed 피드백은 Checkmark의 축소로 표현됩니다.

gap

[$dimension.x2](/foundations/design-token/reference/%24dimension.x2)

disabled

label

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

#### weight=regular

상태

슬롯

속성

값

enabled

label

fontWeight

[$font-weight.regular](/foundations/design-token/reference/%24font-weight.regular)

#### weight=bold

상태

슬롯

속성

값

enabled

label

fontWeight

[$font-weight.bold](/foundations/design-token/reference/%24font-weight.bold)

#### size=medium

상태

슬롯

속성

값

enabled

root

root 전체가 누르는 영역이며, pressed 피드백은 Checkmark의 축소로 표현됩니다.

minHeight

[$dimension.x8](/foundations/design-token/reference/%24dimension.x8)

label

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

[$line-height.t4](/foundations/design-token/reference/%24line-height.t4)

#### size=large

상태

슬롯

속성

값

enabled

root

root 전체가 누르는 영역이며, pressed 피드백은 Checkmark의 축소로 표현됩니다.

minHeight

[$dimension.x9](/foundations/design-token/reference/%24dimension.x9)

label

fontSize

[$font-size.t5](/foundations/design-token/reference/%24font-size.t5)

lineHeight

[$line-height.t5](/foundations/design-token/reference/%24line-height.t5)

### [Checkmark](#checkmark)

#### base

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

pressed

root

scaleScope

감싸는 컴포넌트가 자체 pressed 피드백을 주는 경우(List Item 등)에는 이 값이 적용되지 않습니다.

self

#### variant=square

-   필수 선택 항목이고 사용자가 해당 내용을 인지해야 하는 경우 사용합니다.

상태

슬롯

속성

값

enabled

root

strokeWidth

1px

strokeColor

[$color.stroke.neutral-weak](/foundations/design-token/reference/%24color.stroke.neutral-weak)

요소의 외곽을 그려 형태를 만드는 선입니다. 카드, 인풋 필드, 아웃라인 버튼처럼 선 자체가 요소의 경계를 정의할 때 사용됩니다. (weak)

pressed

root

color

[$color.bg.transparent-pressed](/foundations/design-token/reference/%24color.bg.transparent-pressed)

enabled, selected

root

strokeWidth

0px

strokeColor

#00000000

disabled

root

color

[$color.bg.disabled](/foundations/design-token/reference/%24color.bg.disabled)

strokeColor

[$color.stroke.neutral-muted](/foundations/design-token/reference/%24color.stroke.neutral-muted)

의미 단위가 바뀌는 경계를 나누는 선입니다. 섹션과 섹션 사이, 콘텐츠와 액션 영역 사이, 헤더와 본문 경계처럼 한 화면에 한두 번만 등장하는 구분에 사용됩니다. (muted)

icon

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

disabled, selected

icon

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

#### variant=square, tone=brand

-   필수 선택 항목이고 사용자가 해당 내용을 인지해야 하는 경우 사용합니다.

상태

슬롯

속성

값

enabled, selected

root

color

[$color.bg.brand-solid](/foundations/design-token/reference/%24color.bg.brand-solid)

브랜드와 관련된 요소들이 즉각적으로 인식될 수 있도록 돕습니다. 화면에서 가장 중요한 액션을 강조하는데 사용할 수 있습니다. (solid)

icon

color

[$color.palette.static-white](/foundations/design-token/reference/%24color.palette.static-white)

pressed, selected

root

color

[$color.bg.brand-solid-pressed](/foundations/design-token/reference/%24color.bg.brand-solid-pressed)

브랜드와 관련된 요소들이 즉각적으로 인식될 수 있도록 돕습니다. 화면에서 가장 중요한 액션을 강조하는데 사용할 수 있습니다. (solid-pressed)

#### variant=square, tone=neutral

-   필수 선택 항목이고 사용자가 해당 내용을 인지해야 하는 경우 사용합니다.

상태

슬롯

속성

값

enabled, selected

root

color

[$color.bg.neutral-inverted](/foundations/design-token/reference/%24color.bg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

icon

color

[$color.fg.neutral-inverted](/foundations/design-token/reference/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

pressed, selected

root

color

[$color.bg.neutral-inverted-pressed](/foundations/design-token/reference/%24color.bg.neutral-inverted-pressed)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted-pressed)

#### variant=ghost

-   필수 선택 항목이 아니고, 3개 이하 항목으로 구성되는 경우 사용하는 것을 권장합니다.

상태

슬롯

속성

값

enabled

icon

color

[$color.fg.placeholder](/foundations/design-token/reference/%24color.fg.placeholder)

colorDuration

[$duration.color-transition](/foundations/design-token/reference/%24duration.color-transition)

colorTimingFunction

[$timing-function.easing](/foundations/design-token/reference/%24timing-function.easing)

pressed

root

color

[$color.bg.transparent-pressed](/foundations/design-token/reference/%24color.bg.transparent-pressed)

disabled

icon

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

disabled, selected

icon

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

#### variant=ghost, tone=brand

-   필수 선택 항목이 아니고, 3개 이하 항목으로 구성되는 경우 사용하는 것을 권장합니다.

상태

슬롯

속성

값

enabled, selected

icon

color

[$color.fg.brand](/foundations/design-token/reference/%24color.fg.brand)

브랜드와 관련된 요소들이 즉각적으로 인식될 수 있도록 돕습니다.

pressed, selected

root

color

[$color.palette.carrot-200](/foundations/design-token/reference/%24color.palette.carrot-200)

#### variant=ghost, tone=neutral

-   필수 선택 항목이 아니고, 3개 이하 항목으로 구성되는 경우 사용하는 것을 권장합니다.

상태

슬롯

속성

값

enabled, selected

icon

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

pressed, selected

root

color

[$color.palette.gray-200](/foundations/design-token/reference/%24color.palette.gray-200)

#### size=medium

상태

슬롯

속성

값

enabled

root

size

[$dimension.x5](/foundations/design-token/reference/%24dimension.x5)

cornerRadius

[$radius.r1](/foundations/design-token/reference/%24radius.r1)

#### size=large

상태

슬롯

속성

값

enabled

root

size

[$dimension.x6](/foundations/design-token/reference/%24dimension.x6)

cornerRadius

[$radius.r1](/foundations/design-token/reference/%24radius.r1)

#### variant=square, size=medium

-   필수 선택 항목이고 사용자가 해당 내용을 인지해야 하는 경우 사용합니다.

상태

슬롯

속성

값

enabled

icon

size

12px

#### variant=square, size=large

-   필수 선택 항목이고 사용자가 해당 내용을 인지해야 하는 경우 사용합니다.

상태

슬롯

속성

값

enabled

icon

size

14px

#### variant=ghost, size=medium

-   필수 선택 항목이 아니고, 3개 이하 항목으로 구성되는 경우 사용하는 것을 권장합니다.

상태

슬롯

속성

값

enabled

icon

size

14px

#### variant=ghost, size=large

-   필수 선택 항목이 아니고, 3개 이하 항목으로 구성되는 경우 사용하는 것을 권장합니다.

상태

슬롯

속성

값

enabled

icon

size

18px

Last updated on

[이전 문서Callout](/components/callout)[다음 문서Chip](/components/chip)
