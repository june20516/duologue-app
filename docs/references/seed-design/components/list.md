<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/list
fetched: 2026-05-08T06:33:26.779Z
-->

[Components](/docs/components)Layout

# List

가로 행으로 구성된 콘텐츠를 표현하는 컴포넌트입니다.

LLMs.txt

다른 도구로 열기

## [Anatomy](#anatomy)

![List의 Anatomy 이미지. List Item은 Suffix, Prefix, Title, Detail로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/297df7db-1fb7-4dd0-8300-c1f1e003f366)

List Item은 Suffix, Prefix, Title, Detail로 구성됩니다.

**배경색은 가이드에서 시각적 구분을 위해 추가된 것이며, 컴포넌트 자체에는 배경색이 지정되어 있지 않습니다.**

## [Properties](#properties)

### [Align Property](#align-property)

![List Item의 Single Line과 Multi Line Variants](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3bd85d00-8679-4859-9f82-c07319c4851b)

Align의 기본값은 Center입니다. Prefix와 Suffix가 콘텐츠 영역의 수직 중앙에 정렬됩니다. Title과 Detail이 한 줄로 짧게 표시되는 경우에 적합합니다.

![List Item을 상단으로 정렬한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46349841-565c-49f0-b9a2-f096aacfc2dd)

Align을 Top으로 설정하면 Prefix와 Suffix가 콘텐츠 영역의 상단에 고정됩니다. Title이 길어져 두 줄 이상으로 넘어가거나, Detail 텍스트가 많아질 때 사용합니다.

### [Highlighted Property](#highlighted-property)

![List의 Highlighted Property](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1b0d4b6-1078-4771-814d-f5fdc424c000)

List 컴포넌트의 Highlighted prop은 새로운 알림이나 업데이트처럼 사용자의 주목이 필요한 항목을 시각적으로 강조할 때 사용합니다.

### [List State](#list-state)

![List의 State - Enabled, Pressed, Disabled](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd6d15be-7b67-46fc-a708-f7d80bb08103)

List 컴포넌트는 Enabled, Pressed, Disabled 상태를 제공합니다.

### [Prefix Property](#prefix-property)

![List의 Prefix Property](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66413bdc-daa5-4d27-80bf-5d7916c0c55a)

Prefix Slot은 List 좌측에 위치합니다. List Item 컴포넌트는 Prefix에 여러 가지 타입을 프리셋 형태로 제공합니다. 포함된 타입 이외에 다른 요소를 사용하고 싶은 경우 Custom Child Swap을 통해서 변경해주세요.

### [Suffix Property](#suffix-property)

![List의 Suffix Property](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fdc6de46-37c9-4ebb-81c9-8c6abddcbe33)

Suffix는 List 우측에 위치합니다. List Item 컴포넌트는 Suffix에 여러 가지 타입을 프리셋 형태로 제공합니다. 포함된 타입 이외에 다른 요소를 사용하고 싶은 경우 Custom Child Swap을 통해서 변경해주세요.

### [Detail Property](#detail-property)

![List의 Detail Property](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af71fce5-4e40-4394-ab8f-bd5ad4e70724)

Detail은 List 제목 하단에 위치합니다. Sub Text, Tag Group을 기본으로 제공하며 사용처 필요에 따라서 Custom해서 사용할 수 있습니다.

## [Guidelines](#guidelines)

### [List, List Item 사용하기](#list-list-item-사용하기)

![List와 List Item 사용 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3a6cb20-0b45-4d11-be5a-e0a08746f790)

![List의 List Item 중 하나가 Pressed 상태인 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/868eb4d6-a60b-49f9-9236-a8e5bedd60a0)

List Item은 정보를 가로 행으로 묶어서 표현되는 컴포넌트로 사용자가 빠르게 인지하고 단순한 액션을 필요로 할 때 사용해야 합니다. List는 여러개의 List Item을 묶어서 연속된 열로 표현해야할 때 사용합니다.

List의 부모 컨테이너는 사용처의 의도에 맞게 자유롭게 사용할 수 있습니다.

### [List Header로 묶어서 사용하기](#list-header로-묶어서-사용하기)

![List Header로 묶어서 사용하는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed94f1e9-7f46-450c-be00-b2509eab9a88)

List를 그룹 단위로 묶어서 표현할 수 있도록 List Header 컴포넌트를 제공합니다.

### [List Item 클리커블 사용하지 않기](#list-item-클리커블-사용하지-않기)

![List Item 클리커블을 사용하지 않는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/984c582c-8b21-4b03-89e2-ff56d9f720cf)

List Item은 클리커블 동작을 기본으로 포함하고 있습니다. 사용처에서는 의도와 플로우, 맥락에 따라서 클리커블을 직접 제거해서 사용할 수 있습니다.

### [List Item 내부 간격 조정](#list-item-내부-간격-조정)

![List Item 상하 padding 간격 조정 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b128cc7-2bec-4c17-ad6c-8b926ef11110)

![List Item 좌우 padding 간격 조정 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e755312-aee0-4423-aa60-a93ff041307a)

![List Item 내부 간격 조정 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7b1bbc0-f2df-4b29-9df0-0e43a64963d6)

![한 List 안에서 List Item 간 정렬이 다른 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb9fca1b-86a1-49e0-a26d-8ea5edfef2cf)

Don’t

내부 간격을 조정할 때 각 Item의 정렬은 일관되어야 합니다.

List Item는 높이, 넓이 패딩 간격을 갖고 있으며, 사용처 의도에 따라서 자유롭게 조정해서 사용할 수 있습니다.

-   간격은 SEED에서 제공하는 Token을 활용해주세요.
-   넓이 간격을 조정할 때는 `{global-gutter=16px}` 보다 좁아지지 않도록 주의해주세요.
-   내부 간격을 조정할 때 List 안에서 각 Item의 정렬이 달라지지 않도록 조심하세요.

### [List Item 클리커블](#list-item-클리커블)

![List Item 클릭 타겟 영역이 하나인 경우](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24d6573a-0f65-4786-9cb7-f602de770e34)

List Item은 기본으로 클릭 동작을 제공하며 여러개의 상호작용 가능한 요소와 조합되어 사용할 수 있습니다. List에서 제공하는 Button 컴포넌트 이외에 다른 요소를 Custom하게 사용할 경우 별도 Spec으로 동작 명세를 정의해주세요.

![List Item 클릭 타겟 영역이 두 개인 경우](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc476b16-c71b-4303-830c-4fa218b0eaba)

![List Item 클릭 타겟 영역이 세 개 이상인 경우](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7739d7fb-93f0-4fca-b82d-5d6ed290cb73)

![Help Bubble 등 Floating 요소를 하는 경우](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b49e463-3973-4b9a-9770-767d5ff9c445)

![List Item에 여러 상호작용 요소를 과도하게 배치한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62ad6822-99b0-4ce2-8b91-9511b1823efb)

Don’t

하나의 List Item에 4개 이상 상호작용 요소를 구성하는 것은 지양합니다.

**List Item은 표현 공간에 제약이 있기 때문에 복잡하게 상호작용 요소를 조합하지 마세요.**

### [Concentric Radius](#concentric-radius)

![Concentric Radius 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4ef4a4e-4626-4971-a83b-561dad1d721f)

List Item을 포함하는 컨테이너의 모서리 반경(radius)에 맞춰 항목의 pressed-inset radius를 유연하게 조정할 수 있습니다.

리스트가 R값을 가진 카드 컨테이너 안에 포함될 때, 컨테이너와 동일한 반경을 그대로 적용하면 시각적으로 반경이 맞지 않게 보일 수 있습니다.

이를 위해 내부 요소의 Radius는 상위 컨테이너의 반경에서 내부 패딩 값만큼 빼서 적용합니다. 예를 들면, 카드 컨테이너의 Radius가 16px, 카드의 Padding이 6px인 경우, 내부 리스트의 Radius는 = 16px - 6px = 10px입니다.

### [List Item을 Select로 Custom하기](#list-item을-select로-custom하기)

![Bottom Sheet와 조합하여 사용하는 경우 - Checkmark](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b125636-73da-4e84-86cc-180f9607ac16)

![Bottom Sheet와 조합하여 사용하는 경우 - Radio Mark](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b465dc9b-80e7-43fc-a778-70d5291c4a9d)

![List 내부에 Radio Mark를 사용한 경우](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2afe0ff8-f18c-47bb-8e98-1062a243e89f)

List Item에 [Checkbox](/docs/components/checkbox), Radio Mark를 조합한다면 Select로 사용할 수 있습니다. Checkbox는 Multi Select (복수 선택), Radio Mark는 Single Select (단일 선택)을 의미합니다.

Single Select을 사용할 경우 List Item이 반드시 2개 이상 포함되어 있어야 올바르게 Select를 구성할 수 있습니다.

![List Item에 Checkbox, Radio Mark를 혼합하여 사용한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3719cb09-0726-4911-a9ab-faf48f7374d4)

Don’t

Single Select(Radio)는 반드시 2개 이상 항목으로 구성되어야 합니다. Single, Multi Select를 하나의 그룹에서 혼합해서 사용하지 마세요.

## [Specification & Platform Status](#specification--platform-status)

### [List Item](#list-item)

Figma

Done

[

React

Done

](/react/components/list)

iOS

Done

Android

Done

#### base

상태

슬롯

속성

값

enabled

root

paddingY

[$dimension.x3](/docs/foundation/design-token/%24dimension.x3)

paddingX

[$dimension.spacing-x.global-gutter](/docs/foundation/design-token/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

color

[$color.bg.transparent](/docs/foundation/design-token/%24color.bg.transparent)

colorDuration

[$duration.color-transition](/docs/foundation/design-token/%24duration.color-transition)

colorTimingFunction

[$timing-function.easing](/docs/foundation/design-token/%24timing-function.easing)

marginDuration

[$duration.d3](/docs/foundation/design-token/%24duration.d3)

marginTimingFunction

[$timing-function.easing](/docs/foundation/design-token/%24timing-function.easing)

borderRadiusDuration

[$duration.d3](/docs/foundation/design-token/%24duration.d3)

borderRadiusTimingFunction

[$timing-function.easing](/docs/foundation/design-token/%24timing-function.easing)

content

gap

[$dimension.x0\_5](/docs/foundation/design-token/%24dimension.x0_5)

paddingRight

[$dimension.x2\_5](/docs/foundation/design-token/%24dimension.x2_5)

title

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

fontSize

[$font-size.t5](/docs/foundation/design-token/%24font-size.t5)

lineHeight

[$line-height.t5](/docs/foundation/design-token/%24line-height.t5)

fontWeight

[$font-weight.regular](/docs/foundation/design-token/%24font-weight.regular)

detail

color

[$color.fg.neutral-subtle](/docs/foundation/design-token/%24color.fg.neutral-subtle)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (subtle)

fontSize

[$font-size.t3](/docs/foundation/design-token/%24font-size.t3)

lineHeight

[$line-height.t3](/docs/foundation/design-token/%24line-height.t3)

fontWeight

[$font-weight.regular](/docs/foundation/design-token/%24font-weight.regular)

prefix

paddingRight

[$dimension.x3](/docs/foundation/design-token/%24dimension.x3)

prefixIcon

size

22px

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

suffix

gap

[$dimension.x1](/docs/foundation/design-token/%24dimension.x1)

suffixText

color

[$color.fg.neutral-subtle](/docs/foundation/design-token/%24color.fg.neutral-subtle)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (subtle)

fontSize

[$font-size.t5](/docs/foundation/design-token/%24font-size.t5)

lineHeight

[$line-height.t5](/docs/foundation/design-token/%24line-height.t5)

fontWeight

[$font-weight.regular](/docs/foundation/design-token/%24font-weight.regular)

suffixIcon

size

18px

color

[$color.fg.neutral-subtle](/docs/foundation/design-token/%24color.fg.neutral-subtle)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (subtle)

pressed

root

color

[$color.bg.transparent-pressed](/docs/foundation/design-token/%24color.bg.transparent-pressed)

marginX

[$dimension.x1\_5](/docs/foundation/design-token/%24dimension.x1_5)

cornerRadius

[$dimension.x2\_5](/docs/foundation/design-token/%24dimension.x2_5)

highlighted

root

color

[$color.bg.brand-weak](/docs/foundation/design-token/%24color.bg.brand-weak)

브랜드와 관련된 요소들이 즉각적으로 인식될 수 있도록 돕습니다. 화면에서 가장 중요한 액션을 강조하는데 사용할 수 있습니다. (weak)

highlighted, pressed

root

color

[$color.bg.brand-weak-pressed](/docs/foundation/design-token/%24color.bg.brand-weak-pressed)

브랜드와 관련된 요소들이 즉각적으로 인식될 수 있도록 돕습니다. 화면에서 가장 중요한 액션을 강조하는데 사용할 수 있습니다. (weak-pressed)

disabled

title

color

[$color.fg.disabled](/docs/foundation/design-token/%24color.fg.disabled)

detail

color

[$color.fg.disabled](/docs/foundation/design-token/%24color.fg.disabled)

prefixIcon

color

[$color.fg.disabled](/docs/foundation/design-token/%24color.fg.disabled)

suffixIcon

color

[$color.fg.disabled](/docs/foundation/design-token/%24color.fg.disabled)

### [List Header](#list-header)

Figma

Done

[

React

Done

](/react/components/list)

iOS

Done

Android

Done

#### base

상태

슬롯

속성

값

enabled

root

paddingX

[$dimension.spacing-x.global-gutter](/docs/foundation/design-token/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

paddingY

[$dimension.x2](/docs/foundation/design-token/%24dimension.x2)

gap

[$dimension.x2\_5](/docs/foundation/design-token/%24dimension.x2_5)

fontSize

[$font-size.t4](/docs/foundation/design-token/%24font-size.t4)

lineHeight

[$line-height.t4](/docs/foundation/design-token/%24line-height.t4)

#### variant=mediumWeak

상태

슬롯

속성

값

enabled

root

fontWeight

[$font-weight.medium](/docs/foundation/design-token/%24font-weight.medium)

color

[$color.fg.neutral-subtle](/docs/foundation/design-token/%24color.fg.neutral-subtle)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (subtle)

#### variant=boldSolid

상태

슬롯

속성

값

enabled

root

fontWeight

[$font-weight.bold](/docs/foundation/design-token/%24font-weight.bold)

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

Last updated on

[

Bottom Sheet

화면 하단에서 올라오는 모달 컴포넌트입니다. 추가 정보나 액션 목록을 제공하면서도 현재 컨텍스트를 유지할 때 사용됩니다.

](/docs/components/bottom-sheet)[

Menu Sheet

사용자의 작업과 관련된 선택지를 제공하는 시트 형태의 컴포넌트입니다.

](/docs/components/menu-sheet)
