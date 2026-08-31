<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/text-input
fetched: 2026-08-31T04:59:01.320Z
-->

ComponentsLLMS.txt

# Text Input & Textarea

사용자로부터 텍스트를 입력받는 컴포넌트입니다.

Figma[React](/react/components/text-field-input)[Lynx](/lynx/components/text-field-input)iOSAndroid

![Text Input & Textarea cover image](/og/components/text-input.webp)

## [Text Input](#text-input)

한 줄 텍스트를 입력받는 컴포넌트입니다.

[

### Field

Text Input을 Field 내부에서 사용하여 Text Field로 활용할 수 있습니다.







](/components/field)

### [Anatomy](#anatomy)

![Text Input의 Anatomy 이미지. 입력 필드, Container, Clear Button, Prefix/Suffix Slot으로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2902deb-e4bd-40af-a1b8-f3d8c5ac2ec8)

Text Input은 입력 필드, 이를 감싸는 Container, Clear Button (Optional), 그리고 Prefix/Suffix Slot으로 구성됩니다.

### [Properties](#properties)

#### [State](#state)

![Text Input의 State - Enabled, Focused, Error, Error Focused, Disabled, Read Only, AI Loading](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2ea5720-07e5-4885-be4a-191951612896)

Text Input은 Enabled, Focused, Error, Error Focused, Disabled, Read Only, AI Loading (Figma Only) 상태를 가집니다.

#### [Has Value Property](#has-value-property)

![Text Input의 Has Value Property](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d08d3fcf-5684-46d6-a2aa-edb8ff6dae46)

Text Input에 값이 있는 경우 Has Value Property를 사용할 수 있습니다.

#### [Clear Button Property](#clear-button-property)

![Text Input의 Clear Button Property](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf4025e2-0c0b-434d-bca4-2482b4b4404f)

Text Input에 값이 존재하는 경우, 해당 값을 한 번에 삭제할 수 있는 Clear Button을 표시할 수 있습니다.

#### [Variant](#variant)

![Text Input의 Variant - Outline, Underline](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5352a4ac-fb39-40db-a726-784d38051dd6)

Text Input은 Outline과 Underline 두 가지 스타일을 제공합니다.

![화면의 유일한 Text Input에 Underline Variant가 사용된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3edb12d9-c240-48e3-9fd9-6743dbba3ed4)

![화면의 유일한 Text Input에 Outline Variant가 사용된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/914ec1c0-8656-4c0c-b1d0-926e171b18bc)

Don’t

화면에 하나의 Input만 있는 경우 Underline Variant를 사용하세요.

화면에 하나의 Input만 있는 경우 Underline 사용을 권장합니다.

### [Custom Input](#custom-input)

![Text Input의 Custom Input 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4fbc5d18-737f-4ec6-867b-e3277bba0cf3)

Text Input의 입력 영역은 Slot으로 구성되어 있습니다.

특수한 포맷이나 마스킹 등의 기능이 필요한 경우, 포맷과 동작을 직접 정의해서 사용할 수 있습니다.

### [Text Input을 2열로 구성하기](#text-input을-2열로-구성하기)

한 화면에서 입력할 내용이 많을 경우, Input을 2열 레이아웃으로 구성할 수 있습니다.

레이블과 입력값이 짧을 때만 사용하는 것을 권장하며, 레이아웃 사이 간격을 충분히 확보하여 사용자가 실수로 옆 Input을 선택하지 않도록 주의해주세요.

주민등록번호나 전화번호처럼 입력 형식이 정해진 경우, Input을 나누지 말고 값에 포맷을 자동으로 적용해서 추가 인터랙션 없이 한 번에 입력할 수 있도록 해주세요.

* * *

## [Textarea](#textarea)

여러 줄의 텍스트를 입력받을 수 있는 컴포넌트로, 자동 리사이즈를 지원합니다.

[

### Field

Textarea를 Field 내부에서 사용하여 Textarea Field로 활용할 수 있습니다.







](/components/field)

### [Anatomy](#anatomy-1)

![Textarea의 Anatomy 이미지. 입력 필드와 Container로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be73f2f0-cbb1-4cc8-9a89-d59fecb9d4ae)

Textarea는 입력 필드, 이를 감싸는 Container로 구성됩니다.

### [Properties](#properties-1)

#### [State](#state-1)

![Textarea의 State - Enabled, Focused, Error, Error Focused, Disabled, Read Only, AI Loading](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce962424-a1e7-41d8-9639-44a2e47f7cfd)

Textarea는 Enabled, Focused, Error, Error Focused, Disabled, Read Only, AI Loading (Figma Only) 상태를 가집니다.

#### [Has Value Property](#has-value-property-1)

![Textarea의 Has Value Property](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09cdbf63-5cc7-4441-9400-0738ff8fb862)

Textarea에 값이 있는 경우 Has Value Property를 사용할 수 있습니다.

#### [Auto Size](#auto-size)

![Textarea의 Auto Size 옵션 - 자동 높이 조절](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4813aef2-2964-4221-b2a9-dbf1fca6de06)

Auto Size 옵션을 사용하면 입력된 글자 수에 따라 Textarea의 높이가 자동으로 늘어납니다. 이 경우 Textarea의 최소 높이는 3줄(95px)을 유지해야 합니다. 최대 높이는 기본적으로 제한이 없으며, 필요에 따라 최대 높이를 별도로 지정할 수 있습니다.

![Textarea의 Auto Size 비활성화 시 스크롤 동작](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c80eafca-6dc1-4d1d-b1cc-7d6bee62a842)

Auto Size를 비활성화할 경우, 최소 높이는 2줄(70px)이어야 합니다. 이때는 반드시 최대 높이 값을 지정해야 하며, 내용이 최대 높이를 초과하면 Input 영역 내에서 스크롤이 생성됩니다.

## [Specification](#specification)

### base

상태

슬롯

속성

값

enabled

root

strokeColor

[$color.stroke.neutral-weak](/foundations/design-token/reference/%24color.stroke.neutral-weak)

요소의 외곽을 그려 형태를 만드는 선입니다. 카드, 인풋 필드, 아웃라인 버튼처럼 선 자체가 요소의 경계를 정의할 때 사용됩니다. (weak)

strokeDuration

enabled 상태의 stroke 위에 focused/invalid 상태의 stroke가 fade in/out 되는 데에 걸리는 시간입니다. stroke 두께나 색상 자체를 transition하지 않습니다.

0.1s

strokeTimingFunction

[$timing-function.easing](/foundations/design-token/reference/%24timing-function.easing)

value

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

fontWeight

[$font-weight.regular](/foundations/design-token/reference/%24font-weight.regular)

placeholder

color

[$color.fg.placeholder](/foundations/design-token/reference/%24color.fg.placeholder)

fontWeight

[$font-weight.regular](/foundations/design-token/reference/%24font-weight.regular)

prefixText

color

[$color.fg.neutral-subtle](/foundations/design-token/reference/%24color.fg.neutral-subtle)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (subtle)

fontWeight

[$font-weight.regular](/foundations/design-token/reference/%24font-weight.regular)

prefixIcon

color

[$color.fg.neutral-muted](/foundations/design-token/reference/%24color.fg.neutral-muted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (muted)

suffixText

color

[$color.fg.neutral-subtle](/foundations/design-token/reference/%24color.fg.neutral-subtle)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (subtle)

fontWeight

[$font-weight.regular](/foundations/design-token/reference/%24font-weight.regular)

suffixIcon

color

[$color.fg.neutral-muted](/foundations/design-token/reference/%24color.fg.neutral-muted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (muted)

focused

root

strokeColor

[$color.stroke.neutral-contrast](/foundations/design-token/reference/%24color.stroke.neutral-contrast)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (contrast)

invalid

root

strokeColor

[$color.stroke.critical-solid](/foundations/design-token/reference/%24color.stroke.critical-solid)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다. (solid)

invalid, focused

root

strokeColor

[$color.stroke.critical-solid](/foundations/design-token/reference/%24color.stroke.critical-solid)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다. (solid)

disabled

value

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

placeholder

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

prefixText

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

prefixIcon

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

suffixText

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

suffixIcon

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

### variant=outline

-   기본 스타일입니다.

상태

슬롯

속성

값

enabled

root

strokeWidth

1px

focused

root

strokeWidth

2px

invalid

root

strokeWidth

2px

readonly

root

color

[$color.bg.disabled](/foundations/design-token/reference/%24color.bg.disabled)

disabled

root

color

[$color.bg.disabled](/foundations/design-token/reference/%24color.bg.disabled)

### variant=outline, size=large

-   **variant=outline**: 기본 스타일입니다.
-   **size=large**: 뷰포트 너비와 관계없이 사용할 수 있습니다.

상태

슬롯

속성

값

enabled

root

gap

[$dimension.x2\_5](/foundations/design-token/reference/%24dimension.x2_5)

minHeight

[$dimension.x13](/foundations/design-token/reference/%24dimension.x13)

cornerRadius

[$radius.r3](/foundations/design-token/reference/%24radius.r3)

paddingX

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

value

fontSize

[$font-size.t5](/foundations/design-token/reference/%24font-size.t5)

lineHeight

[$line-height.t5](/foundations/design-token/reference/%24line-height.t5)

placeholder

fontSize

[$font-size.t5](/foundations/design-token/reference/%24font-size.t5)

lineHeight

[$line-height.t5](/foundations/design-token/reference/%24line-height.t5)

prefixText

fontSize

[$font-size.t5](/foundations/design-token/reference/%24font-size.t5)

lineHeight

[$line-height.t5](/foundations/design-token/reference/%24line-height.t5)

prefixIcon

size

[$dimension.x5](/foundations/design-token/reference/%24dimension.x5)

suffixText

fontSize

[$font-size.t5](/foundations/design-token/reference/%24font-size.t5)

lineHeight

[$line-height.t5](/foundations/design-token/reference/%24line-height.t5)

suffixIcon

size

[$dimension.x5](/foundations/design-token/reference/%24dimension.x5)

### variant=outline, size=medium

-   **variant=outline**: 기본 스타일입니다.
-   **size=medium**: Breakpoint \`lg\` 이상(데스크톱)에서만 사용하고, 모바일에서는 사용하지 않습니다. 정밀한 선택이 가능한 마우스 입력 환경에서 사이즈를 더 작게 만들고자 할 때 사용합니다.

상태

슬롯

속성

값

enabled

root

gap

[$dimension.x2](/foundations/design-token/reference/%24dimension.x2)

minHeight

[$dimension.x10](/foundations/design-token/reference/%24dimension.x10)

cornerRadius

[$radius.r2](/foundations/design-token/reference/%24radius.r2)

paddingX

[$dimension.x3\_5](/foundations/design-token/reference/%24dimension.x3_5)

value

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

[$line-height.t4](/foundations/design-token/reference/%24line-height.t4)

placeholder

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

[$line-height.t4](/foundations/design-token/reference/%24line-height.t4)

prefixText

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

[$line-height.t4](/foundations/design-token/reference/%24line-height.t4)

prefixIcon

size

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

suffixText

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

[$line-height.t4](/foundations/design-token/reference/%24line-height.t4)

suffixIcon

size

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

### variant=underline

-   화면에 하나의 Input만 있는 경우 사용을 권장합니다.

상태

슬롯

속성

값

enabled

root

strokeBottomWidth

1px

focused

root

strokeBottomWidth

2px

invalid

root

strokeBottomWidth

2px

readonly

value

color

[$color.fg.neutral-muted](/foundations/design-token/reference/%24color.fg.neutral-muted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (muted)

placeholder

color

[$color.fg.neutral-muted](/foundations/design-token/reference/%24color.fg.neutral-muted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (muted)

### variant=underline, size=large

-   **variant=underline**: 화면에 하나의 Input만 있는 경우 사용을 권장합니다.
-   **size=large**: 뷰포트 너비와 관계없이 사용할 수 있습니다.

상태

슬롯

속성

값

enabled

root

gap

[$dimension.x2\_5](/foundations/design-token/reference/%24dimension.x2_5)

minHeight

[$dimension.x10](/foundations/design-token/reference/%24dimension.x10)

paddingY

[$dimension.x2](/foundations/design-token/reference/%24dimension.x2)

value

fontSize

[$font-size.t6](/foundations/design-token/reference/%24font-size.t6)

lineHeight

[$line-height.t6](/foundations/design-token/reference/%24line-height.t6)

placeholder

fontSize

[$font-size.t6](/foundations/design-token/reference/%24font-size.t6)

lineHeight

[$line-height.t6](/foundations/design-token/reference/%24line-height.t6)

prefixText

fontSize

[$font-size.t6](/foundations/design-token/reference/%24font-size.t6)

lineHeight

[$line-height.t6](/foundations/design-token/reference/%24line-height.t6)

prefixIcon

size

[$dimension.x6](/foundations/design-token/reference/%24dimension.x6)

suffixText

fontSize

[$font-size.t6](/foundations/design-token/reference/%24font-size.t6)

lineHeight

[$line-height.t6](/foundations/design-token/reference/%24line-height.t6)

suffixIcon

size

[$dimension.x6](/foundations/design-token/reference/%24dimension.x6)

### variant=underline, size=medium

-   **variant=underline**: 화면에 하나의 Input만 있는 경우 사용을 권장합니다.
-   **size=medium**: Breakpoint \`lg\` 이상(데스크톱)에서만 사용하고, 모바일에서는 사용하지 않습니다. 정밀한 선택이 가능한 마우스 입력 환경에서 사이즈를 더 작게 만들고자 할 때 사용합니다.

상태

슬롯

속성

값

enabled

root

gap

[$dimension.x2](/foundations/design-token/reference/%24dimension.x2)

minHeight

34px

paddingY

[$dimension.x1\_5](/foundations/design-token/reference/%24dimension.x1_5)

value

fontSize

[$font-size.t5](/foundations/design-token/reference/%24font-size.t5)

lineHeight

[$line-height.t5](/foundations/design-token/reference/%24line-height.t5)

placeholder

fontSize

[$font-size.t5](/foundations/design-token/reference/%24font-size.t5)

lineHeight

[$line-height.t5](/foundations/design-token/reference/%24line-height.t5)

prefixText

fontSize

[$font-size.t5](/foundations/design-token/reference/%24font-size.t5)

lineHeight

[$line-height.t5](/foundations/design-token/reference/%24line-height.t5)

prefixIcon

size

[$dimension.x5](/foundations/design-token/reference/%24dimension.x5)

suffixText

fontSize

[$font-size.t5](/foundations/design-token/reference/%24font-size.t5)

lineHeight

[$line-height.t5](/foundations/design-token/reference/%24line-height.t5)

suffixIcon

size

[$dimension.x5](/foundations/design-token/reference/%24dimension.x5)

### type=singleline

상태

슬롯

속성

값

### type=multiline, size=large

-   뷰포트 너비와 관계없이 사용할 수 있습니다.

상태

슬롯

속성

값

enabled

root

minHeight

94px

paddingY

[$dimension.x3\_5](/foundations/design-token/reference/%24dimension.x3_5)

### type=multiline, size=medium

-   Breakpoint \`lg\` 이상(데스크톱)에서만 사용하고, 모바일에서는 사용하지 않습니다. 정밀한 선택이 가능한 마우스 입력 환경에서 사이즈를 더 작게 만들고자 할 때 사용합니다.

상태

슬롯

속성

값

enabled

root

minHeight

82px

paddingY

[$dimension.x3](/foundations/design-token/reference/%24dimension.x3)

Last updated on

[이전 문서Tag Group](/components/tag-group)[다음 문서Time Picker](/components/time-picker)
