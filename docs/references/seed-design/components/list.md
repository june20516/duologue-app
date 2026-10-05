<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/list
fetched: 2026-10-05T05:06:35.763Z
-->

ComponentsLLMS.txt

# List

가로 행으로 구성된 콘텐츠를 표현하는 컴포넌트입니다.

List Item

Figma[React](/react/components/list)[Lynx](/lynx/components/list)iOSAndroid

List Header

Figma[React](/react/components/list)[Lynx](/lynx/components/list)iOSAndroid

![List cover image](/og/components/list.webp)

## [Anatomy](#anatomy)

![List의 Anatomy 이미지. List Item은 Suffix, Prefix, Title, Detail로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7987edc1-d591-4d18-ab5a-0eaf4a52527d)

List Item은 Suffix, Prefix, Title, Detail로 구성됩니다.

**배경색은 가이드에서 시각적 구분을 위해 추가된 것이며, 컴포넌트 자체에는 배경색이 지정되어 있지 않습니다.**

## [Properties](#properties)

### [Align Property](#align-property)

![List Item의 Single Line과 Multi Line Variants](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f279a222-e07f-4123-a3ee-3a03ead015d1)

Align의 기본값은 Center입니다. Prefix와 Suffix가 콘텐츠 영역의 수직 중앙에 정렬됩니다. Title과 Detail이 한 줄로 짧게 표시되는 경우에 적합합니다.

![List Item을 상단으로 정렬한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8852980d-e98d-4a4c-ad6a-694563715533)

Align을 Top으로 설정하면 Prefix와 Suffix가 콘텐츠 영역의 상단에 고정됩니다. Title이 길어져 두 줄 이상으로 넘어가거나, Detail 텍스트가 많아질 때 사용합니다.

### [Highlighted Property](#highlighted-property)

![List의 Highlighted Property](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b770d5d8-800c-4e1f-b8c2-b3cd1c03e05b)

List 컴포넌트의 Highlighted prop은 새로운 알림이나 업데이트처럼 사용자의 주목이 필요한 항목을 시각적으로 강조할 때 사용합니다.

### [List State](#list-state)

![List의 State - Enabled, Pressed, Disabled](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1aafe60-b388-4f51-b11f-938c6533e2cd)

List 컴포넌트는 Enabled, Pressed, Disabled 상태를 제공합니다.

### [Prefix Property](#prefix-property)

![List의 Prefix Property](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/625d33b3-9245-4d5b-a5d3-83aaa6d97788)

Prefix Slot은 List 좌측에 위치합니다. List Item 컴포넌트는 Prefix에 여러 가지 타입을 프리셋 형태로 제공합니다. 포함된 타입 이외에 다른 요소를 사용하고 싶은 경우 Custom Child Swap을 통해서 변경해주세요.

### [Suffix Property](#suffix-property)

![List의 Suffix Property](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43e1985d-171a-4bb1-abfd-da382cbf7bb0)

Suffix는 List 우측에 위치합니다. List Item 컴포넌트는 Suffix에 여러 가지 타입을 프리셋 형태로 제공합니다. 포함된 타입 이외에 다른 요소를 사용하고 싶은 경우 Custom Child Swap을 통해서 변경해주세요.

### [Detail Property](#detail-property)

![List의 Detail Property](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0f21229-d20e-4282-841e-0f1321187f57)

Detail은 List 제목 하단에 위치합니다. Sub Text, Tag Group을 기본으로 제공하며 사용처 필요에 따라서 Custom해서 사용할 수 있습니다.

## [Guidelines](#guidelines)

### [List, List Item 사용하기](#list-list-item-사용하기)

![List와 List Item 사용 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c64d5304-cec5-4072-8f3b-ffc08329d841)

![List의 List Item 중 하나가 Pressed 상태인 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ce16efb-d85f-42d7-94b4-9a5501653b63)

List Item은 정보를 가로 행으로 묶어서 표현되는 컴포넌트로 사용자가 빠르게 인지하고 단순한 액션을 필요로 할 때 사용해야 합니다. List는 여러개의 List Item을 묶어서 연속된 열로 표현해야할 때 사용합니다.

List의 부모 컨테이너는 사용처의 의도에 맞게 자유롭게 사용할 수 있습니다.

### [List Header로 묶어서 사용하기](#list-header로-묶어서-사용하기)

![List Header로 묶어서 사용하는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/695e4a51-3095-4e05-84f5-d8d9f18627da)

List를 그룹 단위로 묶어서 표현할 수 있도록 List Header 컴포넌트를 제공합니다.

### [List Item 클리커블 사용하지 않기](#list-item-클리커블-사용하지-않기)

![List Item 클리커블을 사용하지 않는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a659fd29-4313-44db-b1dc-82d54be93d57)

List Item은 클리커블 동작을 기본으로 포함하고 있습니다. 사용처에서는 의도와 플로우, 맥락에 따라서 클리커블을 직접 제거해서 사용할 수 있습니다.

### [List Item 내부 간격 조정](#list-item-내부-간격-조정)

![List Item 상하 padding 간격 조정 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/300ce4e0-7fcb-4f25-8e80-642c656154f4)

![List Item 좌우 padding 간격 조정 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/952f4bee-6d18-4e3e-a41d-ad705c50e33c)

![List Item 내부 간격 조정 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20743bc2-de27-4405-a019-04b57fec59dc)

![한 List 안에서 List Item 간 정렬이 다른 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1683906d-420b-4038-9a83-40ad1839242b)

Don’t

내부 간격을 조정할 때 각 Item의 정렬은 일관되어야 합니다.

List Item는 높이, 넓이 패딩 간격을 갖고 있으며, 사용처 의도에 따라서 자유롭게 조정해서 사용할 수 있습니다.

-   간격은 SEED에서 제공하는 Token을 활용해주세요.
-   넓이 간격을 조정할 때는 `{global-gutter=16px}` 보다 좁아지지 않도록 주의해주세요.
-   내부 간격을 조정할 때 List 안에서 각 Item의 정렬이 달라지지 않도록 조심하세요.

### [List Item 클리커블](#list-item-클리커블)

![List Item 클릭 타겟 영역이 하나인 경우](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc4428b5-5092-4c41-8283-569e2b53db1c)

List Item은 기본으로 클릭 동작을 제공하며 여러개의 상호작용 가능한 요소와 조합되어 사용할 수 있습니다. List에서 제공하는 Button 컴포넌트 이외에 다른 요소를 Custom하게 사용할 경우 별도 Spec으로 동작 명세를 정의해주세요.

![List Item 클릭 타겟 영역이 두 개인 경우](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ffe33bf-2c31-4713-8aa0-d13af6dd0d00)

![List Item 클릭 타겟 영역이 세 개 이상인 경우](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0f96710-4f2c-4bb4-9c2e-309566d1ebb3)

![Help Bubble 등 Floating 요소를 하는 경우](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af17bc1a-0e73-45a5-ae41-c0c8ec5fd188)

![List Item에 여러 상호작용 요소를 과도하게 배치한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83c5f1f2-c079-4738-8753-dab2e032e73a)

Don’t

하나의 List Item에 4개 이상 상호작용 요소를 구성하는 것은 지양합니다.

**List Item은 표현 공간에 제약이 있기 때문에 복잡하게 상호작용 요소를 조합하지 마세요.**

### [Switch/Checkmark/Radiomark 사용 시](#switchcheckmarkradiomark-사용-시)

List Item의 prefix나 suffix에 [Switchmark](/components/switch#switchmark), [Checkmark](/components/checkbox#checkmark), [Radiomark](/components/radio#radio-mark)를 넣을 때는 List Item 전체를 하나의 클릭 영역으로 사용하여 행 어디를 눌러도 동작이 일어나도록 합니다. 이 경우 prefix/suffix에 [Action Button](/components/action-button)과 같이 자체 클릭 영역이 필요한 요소를 함께 넣지 않습니다.

![List Item suffix에 Switchmark를 배치하고 행 전체를 클릭 영역으로 사용한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b477f434-89a2-48f3-b694-b5d61b481832)

약관과 같이 별도 화면에서 확인해야 하는 정보가 있는 경우, 레이블 텍스트 안에 하이퍼링크를 사용하되, 행 동작으로 탭이 전파되지 않도록 처리합니다.

![약관 동의 Bottom Sheet에서 각 약관 항목의 '보기' 하이퍼링크로 약관을 별도 화면에서 확인하도록 하고, 체크박스 행 동작과 분리한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b03d7da-befd-4065-90b6-cf11e587dcc2)

### [Concentric Radius](#concentric-radius)

![Concentric Radius 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ce14e2a-403d-4df0-ab40-5a05f698eaf0)

List Item을 포함하는 컨테이너의 모서리 반경(radius)에 맞춰 항목의 pressed-inset radius를 유연하게 조정할 수 있습니다.

리스트가 R값을 가진 카드 컨테이너 안에 포함될 때, 컨테이너와 동일한 반경을 그대로 적용하면 시각적으로 반경이 맞지 않게 보일 수 있습니다.

이를 위해 내부 요소의 Radius는 상위 컨테이너의 반경에서 내부 패딩 값만큼 빼서 적용합니다. 예를 들면, 카드 컨테이너의 Radius가 16px, 카드의 Padding이 6px인 경우, 내부 리스트의 Radius는 = 16px - 6px = 10px입니다.

### [List Item을 Select로 Custom하기](#list-item을-select로-custom하기)

![Bottom Sheet와 조합하여 사용하는 경우 - Checkmark](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33e99a6e-f232-493b-b0a8-26f4b086c742)

![Bottom Sheet와 조합하여 사용하는 경우 - Radio Mark](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a070a57e-6fbd-440b-8244-396a0bfbb9a9)

![List 내부에 Radio Mark를 사용한 경우](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/faf49c33-8d0b-460c-9572-aff325e670a4)

List Item에 [Checkbox](/components/checkbox), Radio Mark를 조합한다면 Select로 사용할 수 있습니다. Checkbox는 Multi Select (복수 선택), Radio Mark는 Single Select (단일 선택)을 의미합니다.

Single Select을 사용할 경우 List Item이 반드시 2개 이상 포함되어 있어야 올바르게 Select를 구성할 수 있습니다.

![List Item에 Checkbox, Radio Mark를 혼합하여 사용한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/214a6617-7b43-482a-afb3-f79916cec2d3)

Don’t

Single Select(Radio)는 반드시 2개 이상 항목으로 구성되어야 합니다. Single, Multi Select를 하나의 그룹에서 혼합해서 사용하지 마세요.

## [Specification](#specification)

### [List Item](#list-item)

#### base

상태

슬롯

속성

값

enabled

root

paddingY

[$dimension.x3](/foundations/design-token/reference/%24dimension.x3)

paddingX

[$dimension.spacing-x.global-gutter](/foundations/design-token/reference/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

color

[$color.bg.transparent](/foundations/design-token/reference/%24color.bg.transparent)

colorDuration

[$duration.color-transition](/foundations/design-token/reference/%24duration.color-transition)

colorTimingFunction

[$timing-function.easing](/foundations/design-token/reference/%24timing-function.easing)

marginDuration

[$duration.d3](/foundations/design-token/reference/%24duration.d3)

marginTimingFunction

[$timing-function.easing](/foundations/design-token/reference/%24timing-function.easing)

borderRadiusDuration

[$duration.d3](/foundations/design-token/reference/%24duration.d3)

borderRadiusTimingFunction

[$timing-function.easing](/foundations/design-token/reference/%24timing-function.easing)

body

gap

[$dimension.x0\_5](/foundations/design-token/reference/%24dimension.x0_5)

paddingRight

[$dimension.x2\_5](/foundations/design-token/reference/%24dimension.x2_5)

title

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

fontSize

[$font-size.t5](/foundations/design-token/reference/%24font-size.t5)

lineHeight

[$line-height.t5](/foundations/design-token/reference/%24line-height.t5)

fontWeight

[$font-weight.regular](/foundations/design-token/reference/%24font-weight.regular)

detail

color

[$color.fg.neutral-subtle](/foundations/design-token/reference/%24color.fg.neutral-subtle)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (subtle)

fontSize

[$font-size.t3](/foundations/design-token/reference/%24font-size.t3)

lineHeight

[$line-height.t3](/foundations/design-token/reference/%24line-height.t3)

fontWeight

[$font-weight.regular](/foundations/design-token/reference/%24font-weight.regular)

prefix

paddingRight

[$dimension.x3](/foundations/design-token/reference/%24dimension.x3)

prefixIcon

size

22px

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

suffix

gap

[$dimension.x1](/foundations/design-token/reference/%24dimension.x1)

suffixText

color

[$color.fg.neutral-subtle](/foundations/design-token/reference/%24color.fg.neutral-subtle)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (subtle)

fontSize

[$font-size.t5](/foundations/design-token/reference/%24font-size.t5)

lineHeight

[$line-height.t5](/foundations/design-token/reference/%24line-height.t5)

fontWeight

[$font-weight.regular](/foundations/design-token/reference/%24font-weight.regular)

suffixIcon

size

18px

color

[$color.fg.neutral-subtle](/foundations/design-token/reference/%24color.fg.neutral-subtle)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (subtle)

pressed

root

color

[$color.bg.transparent-pressed](/foundations/design-token/reference/%24color.bg.transparent-pressed)

marginX

pressed 시 배경 레이어는 좌우 폭이 marginX만큼 줄어들고, 배경 레이어 위 요소들이 위치하는 레이아웃 레이어는 scale로 인해 전체적으로 줄어드는 형태로 두 레이어가 별개로 작동합니다. 이 값은 OS 동작 줄이기 설정의 영향을 받지 않습니다.

[$dimension.x1\_5](/foundations/design-token/reference/%24dimension.x1_5)

cornerRadius

[$dimension.x2\_5](/foundations/design-token/reference/%24dimension.x2_5)

scaleScope

content

highlighted

root

color

[$color.bg.brand-weak](/foundations/design-token/reference/%24color.bg.brand-weak)

브랜드와 관련된 요소들이 즉각적으로 인식될 수 있도록 돕습니다. 화면에서 가장 중요한 액션을 강조하는데 사용할 수 있습니다. (weak)

highlighted, pressed

root

color

[$color.bg.brand-weak-pressed](/foundations/design-token/reference/%24color.bg.brand-weak-pressed)

브랜드와 관련된 요소들이 즉각적으로 인식될 수 있도록 돕습니다. 화면에서 가장 중요한 액션을 강조하는데 사용할 수 있습니다. (weak-pressed)

disabled

title

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

detail

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

prefixIcon

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

suffixIcon

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

### [List Header](#list-header)

#### base

상태

슬롯

속성

값

enabled

root

paddingX

[$dimension.spacing-x.global-gutter](/foundations/design-token/reference/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

paddingY

[$dimension.x2](/foundations/design-token/reference/%24dimension.x2)

gap

[$dimension.x2\_5](/foundations/design-token/reference/%24dimension.x2_5)

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

[$line-height.t4](/foundations/design-token/reference/%24line-height.t4)

#### variant=mediumWeak

상태

슬롯

속성

값

enabled

root

fontWeight

[$font-weight.medium](/foundations/design-token/reference/%24font-weight.medium)

color

[$color.fg.neutral-subtle](/foundations/design-token/reference/%24color.fg.neutral-subtle)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (subtle)

#### variant=boldSolid

상태

슬롯

속성

값

enabled

root

fontWeight

[$font-weight.bold](/foundations/design-token/reference/%24font-weight.bold)

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

Last updated on

[이전 문서Input Button](/components/input-button)[다음 문서Manner Temp & Manner Temp Badge](/components/manner-temp)
