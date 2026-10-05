<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/switch
fetched: 2026-10-05T05:06:36.523Z
-->

ComponentsLLMS.txt

# Switch

특정 설정 및 상태를 즉시 켜거나 끌 수 있도록 하는 컴포넌트입니다.

Figma[React](/react/components/switch)[Lynx](/lynx/components/switch)iOSAndroid

![Switch cover image](/og/components/switch.webp)

## [Anatomy](#anatomy)

![Switch의 Anatomy 이미지. Switch Mark와 Label로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/90f048c9-ce79-4c86-947f-5a71f2c32394)

Switch는 Switch Mark와 Label로 구성됩니다. Switch Mark는 개별 컴포넌트로 제공되어서 자유롭게 조합해서 사용할 수 있습니다.

Switch Mark는 Thumb과 Track으로 이뤄져 있습니다.

## [Properties](#properties)

### [Size](#size)

![Switch의 Size Property - 16, 24, 32](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8ee5f8c-db22-488b-8192-0848722c79c9)

Switch는 높이값에 따라 16, 24, 32로 제공됩니다.

### [Tone](#tone)

![Switch의 Tone Property - Neutral](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94cdc515-6ded-4b16-8770-bcd84d03be7c)

Switch는 Neutral Tone으로 사용합니다.

### [State](#state)

![Switch의 State - Selected, Unselected, Enabled, Disabled](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af044046-a917-4e48-851c-7d4801371911)

![Switch의 State - Selected, Unselected, Enabled, Disabled (다크 모드)](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/393784d8-834a-4c14-9a59-fd5ee0bff3a6)

Switch는 선택(Selected), 미선택(Unselected) 상태를 가지며, 이 각각의 상태는 사용자의 상호작용에 따라 활성화(Enabled), 비활성화(Disabled)의 상태로 조합되어 표현됩니다.

### [Layout](#layout)

![Switch의 Layout - 크기별 권장 텍스트 레이블 스타일](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ddac154d-a978-44c2-b4d2-da57d21967bc)

각 Switch 크기에 시각적으로 가장 잘 어울리는 텍스트 레이블 스타일을 권장 조합으로 제공합니다. 이를 통해 일관성 있고 균형 잡힌 UI를 빠르게 완성할 수 있습니다.

## [Guidelines](#guidelines)

### [Switch Touch Target](#switch-touch-target)

![Switch의 Touch Target](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10865a6e-4a3a-4e83-8503-74ac6b6e7f01)

Switch는 Switch Mark, Label을 포함한 영역이 Target으로 동작합니다.

Switch의 16 사이즈는 touch target 최소 보장 영역이 되어야 하기에 24 높이값을 가지고 있습니다.

![List Item의 Touch Target](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0c6ad7b-54c4-444d-9621-c84176e00c11)

[List](/components/list)처럼 Switch를 조합해서 사용하는 경우 전체 Row가 Target 영역이 되어야 합니다.

![Switch Mark와 Switch의 Touch Target 비교](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b93be513-7f61-44b8-b769-7e47fc19dfd9)

**Switch Mark는 다른 요소와 조합하여 사용하도록 설계되었기 때문에 요소 크기 이상의 터치 영역을 별도로 가지고 있지 않습니다.**

### [상태를 즉시 활성화할 때 사용하기](#상태를-즉시-활성화할-때-사용하기)

!['위의 내용을 모두 확인했어요'라는 레이블로 Switch를 사용한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8109312d-3bd4-45dc-b5f3-46a058840a80)

Don’t

즉각적인 결과가 없는 상황에서는 Switch를 사용하지 마세요.

!['위의 내용을 모두 확인했어요'라는 레이블로 Checkbox를 사용한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6dcb171-d08a-4789-879a-ab64ec43c52d)

Do

즉각적인 결과가 나타나지 않는 경우 Checkbox를 사용합니다.

Switch는 토글 시 즉각적인 결과가 나타나기에 마지막 버튼을 탭할 때까지 결과가 나타나지 않는 경우 [Checkbox](/components/checkbox)를 사용합니다.

### [독립적인 기능에서만 사용하기](#독립적인-기능에서만-사용하기)

![전체 알림 켜기/끄기 Switch와 하위 알림 설정 Switch가 나열된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4093a271-91ff-4cd5-803b-530151061c92)

Don’t

Switch 대신 부모-자식 관계가 있는 컴포넌트를 활용해주세요.

Switch는 독립적으로 작동하는 요소입니다. '모두 선택/전체 선택'과 같은 액션이 필요한 경우 부모-자식 관계가 있는 컴포넌트를 사용하는 것이 좋습니다.

### [Disabled 상태는 명확하게 표기하기](#disabled-상태는-명확하게-표기하기)

![List Item 전체와 Switch Mark가 비활성화 상태를 나타내고 있는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1867fd9-899b-4bd8-a826-9a8139c6b9cc)

![List Item에서 Switch Mark만 비활성화 상태를 나타내고 있는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4cb7665a-5fce-4fcd-9344-c102350f4fb1)

Don’t

Disabled 상태일 시 텍스트 레이블 또한 disabled 상태를 표현하는 것을 권장해요.

Switch 비활성화 시, 사용자가 항목 전체의 상태를 오인하지 않도록 텍스트 레이블도 비활성화 색상으로 표기하는 것을 권장합니다.

## [Switch vs. Checkbox](#switch-vs-checkbox)

### [Checkbox, Switch 비교](#checkbox-switch-비교)

![Checkbox와 Switch의 사용 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a65c639-aa1c-45af-86e4-241f1097102d)

[Checkbox](/components/checkbox)와 Switch는 사용자의 선택 여부를 표시하는 컴포넌트입니다.

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

### [Switch](#switch)

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

fontWeight

[$font-weight.medium](/foundations/design-token/reference/%24font-weight.medium)

disabled

label

opacity

0.58

opacityDuration

[$duration.d1](/foundations/design-token/reference/%24duration.d1)

opacityTimingFunction

[$timing-function.easing](/foundations/design-token/reference/%24timing-function.easing)

#### size=32

상태

슬롯

속성

값

enabled

root

root 전체가 누르는 영역이며, pressed 피드백은 Switchmark의 축소로 표현됩니다.

height

[$dimension.x8](/foundations/design-token/reference/%24dimension.x8)

gap

[$dimension.x2\_5](/foundations/design-token/reference/%24dimension.x2_5)

label

fontSize

[$font-size.t5](/foundations/design-token/reference/%24font-size.t5)

lineHeight

[$line-height.t5](/foundations/design-token/reference/%24line-height.t5)

#### size=24

상태

슬롯

속성

값

enabled

root

root 전체가 누르는 영역이며, pressed 피드백은 Switchmark의 축소로 표현됩니다.

height

[$dimension.x6](/foundations/design-token/reference/%24dimension.x6)

gap

[$dimension.x2](/foundations/design-token/reference/%24dimension.x2)

label

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

[$line-height.t4](/foundations/design-token/reference/%24line-height.t4)

#### size=16

상태

슬롯

속성

값

enabled

root

root 전체가 누르는 영역이며, pressed 피드백은 Switchmark의 축소로 표현됩니다.

height

[$dimension.x6](/foundations/design-token/reference/%24dimension.x6)

gap

[$dimension.x1\_5](/foundations/design-token/reference/%24dimension.x1_5)

label

fontSize

[$font-size.t3](/foundations/design-token/reference/%24font-size.t3)

lineHeight

[$line-height.t3](/foundations/design-token/reference/%24line-height.t3)

### [Switchmark](#switchmark)

#### base

상태

슬롯

속성

값

enabled

root

cornerRadius

[$radius.full](/foundations/design-token/reference/%24radius.full)

color

[$color.palette.gray-600](/foundations/design-token/reference/%24color.palette.gray-600)

colorDuration

[$duration.d1](/foundations/design-token/reference/%24duration.d1)

colorTimingFunction

[$timing-function.easing](/foundations/design-token/reference/%24timing-function.easing)

colorDelay

20ms

thumb

cornerRadius

[$radius.full](/foundations/design-token/reference/%24radius.full)

scale

selected 여부에 따른 thumb 크기입니다. pressed 축소는 root에 적용되므로 이 값과 무관합니다.

0.8

scaleDuration

[$duration.d3](/foundations/design-token/reference/%24duration.d3)

scaleTimingFunction

[$timing-function.easing](/foundations/design-token/reference/%24timing-function.easing)

translateDuration

[$duration.d3](/foundations/design-token/reference/%24duration.d3)

translateTimingFunction

[$timing-function.easing](/foundations/design-token/reference/%24timing-function.easing)

colorDuration

[$duration.d1](/foundations/design-token/reference/%24duration.d1)

colorTimingFunction

[$timing-function.easing](/foundations/design-token/reference/%24timing-function.easing)

colorDelay

20ms

disabled

root

opacity

0.38

opacityDuration

[$duration.d1](/foundations/design-token/reference/%24duration.d1)

opacityTimingFunction

[$timing-function.easing](/foundations/design-token/reference/%24timing-function.easing)

selected

thumb

scale

selected 여부에 따른 thumb 크기입니다. pressed 축소는 root에 적용되므로 이 값과 무관합니다.

1

pressed

root

scaleScope

감싸는 컴포넌트가 자체 pressed 피드백을 주는 경우(List Item 등)에는 이 값이 적용되지 않습니다.

self

#### tone=brand

상태

슬롯

속성

값

enabled

thumb

color

[$color.palette.static-white](/foundations/design-token/reference/%24color.palette.static-white)

enabled, selected

root

color

[$color.bg.brand-solid](/foundations/design-token/reference/%24color.bg.brand-solid)

브랜드와 관련된 요소들이 즉각적으로 인식될 수 있도록 돕습니다. 화면에서 가장 중요한 액션을 강조하는데 사용할 수 있습니다. (solid)

thumb

color

[$color.fg.on-brand-solid](/foundations/design-token/reference/%24color.fg.on-brand-solid)

브랜드 Solid 배경 위의 전경 요소에 사용됩니다.

#### tone=neutral

상태

슬롯

속성

값

enabled

thumb

color

[$color.fg.on-neutral-solid](/foundations/design-token/reference/%24color.fg.on-neutral-solid)

Neutral Solid 배경 위의 전경 요소에 사용됩니다.

enabled, selected

root

color

[$color.bg.neutral-solid](/foundations/design-token/reference/%24color.bg.neutral-solid)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (solid)

disabled

thumb

color

[$color.palette.static-black-alpha-700](/foundations/design-token/reference/%24color.palette.static-black-alpha-700)

disabled, selected

root

color

[$color.palette.gray-600](/foundations/design-token/reference/%24color.palette.gray-600)

#### size=32

상태

슬롯

속성

값

enabled

root

height

32px

width

52px

paddingX

3px

paddingY

3px

thumb

height

26px

width

26px

#### size=24

상태

슬롯

속성

값

enabled

root

height

24px

width

38px

paddingX

2px

paddingY

2px

thumb

height

20px

width

20px

#### size=16

상태

슬롯

속성

값

enabled

root

height

16px

width

26px

paddingX

2px

paddingY

2px

thumb

height

12px

width

12px

Last updated on

[이전 문서Snackbar](/components/snackbar)[다음 문서Table Pagination](/components/table-pagination)
