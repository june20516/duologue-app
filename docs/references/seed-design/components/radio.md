<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/radio
fetched: 2026-08-31T04:59:00.339Z
-->

ComponentsLLMS.txt

# Radio

여러 옵션 중 하나를 선택할 수 있도록 할 때 사용하는 컴포넌트입니다.

Figma[React](/react/components/radio-group)[Lynx](/lynx/components/radio-group)iOSAndroid

![Radio cover image](/og/components/radio.webp)

[

### Field

Radio Group을 Field 내부에서 사용하여 Radio Group Field로 활용할 수 있습니다.







](/components/field)

## [Anatomy](#anatomy)

![Radio의 Anatomy 이미지. Radiomark와 Label로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fde7a72a-9cf6-4f6f-8c09-5314f940ee6e)

Radio는 Radiomark와 Label로 구성됩니다. Radiomark는 개별 컴포넌트로 제공되어서 자유롭게 조합해서 사용할 수 있습니다.

## [Properties](#properties)

### [Size, Weight Property](#size-weight-property)

![Radio의 Size와 Weight Property - Medium, Large 사이즈와 Regular, Bold Weight](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2131a34f-cbfa-487c-82ac-c51dd2733e48)

Radio는 Medium, Large 사이즈로 제공됩니다. 강조해야 하거나 경우에 따라서 Weight를 조정해서 활용할 수 있습니다.

### [Tone](#tone)

![Radio의 Tone Property - Neutral](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dcdb7835-a2d7-427b-85b1-2d764b9b2fe5)

Radio는 Neutral을 기본으로 제공합니다.

### [State](#state)

![Radio의 State - Enabled, Pressed, Disabled, Selected-Enabled, Selected-Pressed, Selected-Disabled](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5953852c-9ecf-4927-a4ec-697f8bbec7e2)

Radio는 선택(Selected), 미선택(Unselected)상태를 가지며, 이 각각의 상태는 사용자의 상호작용에 따라 활성화(Enabled), 비활성화(Disabled), 눌림(Pressed)의 상태로 조합되어 표현됩니다.

## [Guidelines](#guidelines)

### [Radio touch target](#radio-touch-target)

![Radio touch target 영역 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df81787f-7a4e-4413-bf02-61b2f826ba18)

Radio는 Label을 포함한 영역이 Target으로 동작합니다.

![List touch target 영역 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1bf71aa-f397-4d87-baef-ad6125687071)

[List](/components/list)처럼 Radiomark를 조합해서 사용하는 경우 전체 Row가 Target 영역이 되어야 합니다.

### [하나만 선택 가능할 때 사용하기](#하나만-선택-가능할-때-사용하기)

목록에서 하나의 옵션만 선택할 수 있는 경우 Radio를 사용합니다.

![Radio를 단일 선택으로 사용하는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e7e334c-a537-49f6-96ef-e250f3a9c9a5)

![여러 옵션 선택이 가능한 상황에서 Radio를 사용하는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf7a2921-d195-4aca-bab2-02af8375674c)

Don’t

목록에서 여러 옵션을 선택할 수 있는 경우 Checkbox를 사용하세요.

### [기본 선택 제공하기](#기본-선택-제공하기)

![Radio 기본 선택 제공 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7438bd1-ecab-4012-b906-49cce033be4e)

![Radio 기본 선택이 제공되지 않은 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee5e9451-d363-4c8b-b2a7-9d43e82ff2e0)

Don’t

권장되거나 빈번하게 사용되는 옵션을 기본으로 제공하세요.

Radio를 제공할 때는 사용자의 고민을 덜어주고 빠른 선택을 돕기 위해 가장 일반적인 선택지를 기본으로 제공하는 것을 권장합니다.

권장되거나 빈번하게 사용되는 옵션을 기본으로 제공하세요.

### [가로로 나열하지 않기](#가로로-나열하지-않기)

![Radio를 세로로 나열한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e37e5477-a05d-42fe-8fe9-6386cd85fd12)

![Radio를 가로로 나열한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc1d3e2e-133c-4dd8-99e1-ff268df14d2e)

Don’t

수평으로 배열해야 할 경우, 각 요소가 명확히 구분되도록 충분한 간격(Gap)을 확보해주세요.

여러 Radio를 사용할 시 수직으로 쌓아 올리는 것이 기본적인 정렬 방식입니다. 가로로 나열 시 레이블의 길이가 길어지거나 화면 너비가 좁아질 때 어떤 버튼에 해당하는지 혼동을 일으킬 수 있으므로 지양합니다.

수평으로 배열해야 할 경우, 각 요소가 명확히 구분되도록 충분한 간격(Gap)을 확보해주세요.

### [옵션 개수에 따라 적절한 컴포넌트 사용하기](#옵션-개수에-따라-적절한-컴포넌트-사용하기)

![Radio를 사용한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86b94e3c-5df9-4a8d-a1f4-d790df209968)

![Select Box (Radio)를 사용한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c404f201-4f73-4a5b-9e32-f7df822dec3d)

![Input Button을 통해 Radio로 구성된 List가 포함된 Bottom Sheet를 연 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0dd1fa99-5616-4833-8133-95bf1b2e1a64)

사용자에게 명확하고 효율적인 선택 경험을 제공하기 위해, 선택해야 할 옵션의 개수는 컴포넌트를 결정하는 중요한 기준이 됩니다.

#### [Radio Group](#radio-group)

선택지가 2개에서 6개 사이일 때 사용합니다.

-   사용자가 각 옵션의 차이를 명확히 비교하고 신중하게 선택해야 할 때 (예: 배송 방법 - 일반 배송 vs. 특급 배송)
-   설정, 주문서, 설문조사 등 '서류' 형태의 폼일 때

#### [Input Button](#input-button)

선택지가 6개 이상으로 많거나, 앞으로 더 늘어날 가능성이 있을 때 사용합니다.

-   평소에는 선택된 값만 보여주어 화면의 공간 효율성을 극대화하고 UI를 간결하게 유지합니다. 버튼을 클릭하면 [Bottom Sheet](/components/bottom-sheet)가 올라와 전체 옵션 목록을 보여주므로, 많은 수의 옵션도 효과적으로 처리할 수 있습니다.
-   사용자가 이미 어떤 것을 선택할지 예측하고 있을 때
-   화면이 복잡하거나 다른 중요한 정보가 많을 때
-   출생연도, 국가 등 많은 옵션이 나타나고, 옵션이 추가될 수 있을 때

## [Radio vs. Checkbox vs. Chip Group](#radio-vs-checkbox-vs-chip-group)

![Radio, Checkbox, Chip Group 비교표](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b24769b-143a-4ca4-ab1a-1755da7c3c37)

Radio와 [Checkbox](/components/checkbox), [Chip Group](/components/chip)의 선택 기준은 다음과 같습니다.

Radio

Checkbox

Chip Group

**핵심 규칙**

단일 선택 (N개 중 1개) / 문장 등 긴 내용 표시 가능

다중 선택 (N개 중 N개) / 문장 등 긴 내용 표시 가능

둘 다 가능 (단일 또는 다중 선택) / 단어 같이 짧은 내용 표시가능

**주요 목적**

폼(Form)데이터의 선택 및 제출

여러 항목의 포함/제외 및 동의

콘텐츠의 필터링 또는 속성 부여

**레이아웃**

수직으로 쌓이며 조금 더 명료하게 행동을 유도가 가능

수직으로 쌓이며 조금 더 명료하게 행동을 유도가 가능

수평으로 쌓이며 컴팩트하게 화면을 구성할 수 있음

**사용자의 인식**

하나의 정답/답변을 고른다

해당되는 것에 모두 체크를 한다

특징을 고르거나 분류하고 있다

**최적 옵션 개수**

2~6개 이하

제한없음 (권장: 2~10개 이내)

제한없음 (권장: 2~10개 이내)

**대표 사용 예시**

성별 선택, 배송 방법 선택, 만족도 조사 등

이용 약관 동의, 수신 항목 선택 등

사이즈/색상 선택, 관심사 태그, 검색 필터 등

## [Specification](#specification)

### [Radio Group](#radio-group-1)

#### base

상태

슬롯

속성

값

enabled

root

gapY

[$dimension.x1](/foundations/design-token/reference/%24dimension.x1)

### [Radio](#radio)

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

root 전체가 누르는 영역이며, pressed 피드백은 Radiomark의 축소로 표현됩니다.

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

root 전체가 누르는 영역이며, pressed 피드백은 Radiomark의 축소로 표현됩니다.

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

root 전체가 누르는 영역이며, pressed 피드백은 Radiomark의 축소로 표현됩니다.

minHeight

[$dimension.x9](/foundations/design-token/reference/%24dimension.x9)

label

fontSize

[$font-size.t5](/foundations/design-token/reference/%24font-size.t5)

lineHeight

[$line-height.t5](/foundations/design-token/reference/%24line-height.t5)

### [Radio Mark](#radio-mark)

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

strokeWidth

1px

strokeColor

[$color.stroke.neutral-weak](/foundations/design-token/reference/%24color.stroke.neutral-weak)

요소의 외곽을 그려 형태를 만드는 선입니다. 카드, 인풋 필드, 아웃라인 버튼처럼 선 자체가 요소의 경계를 정의할 때 사용됩니다. (weak)

cornerRadius

[$radius.full](/foundations/design-token/reference/%24radius.full)

icon

cornerRadius

[$radius.full](/foundations/design-token/reference/%24radius.full)

enabled, pressed

root

color

[$color.bg.transparent-pressed](/foundations/design-token/reference/%24color.bg.transparent-pressed)

enabled, selected

root

strokeWidth

0px

strokeColor

#00000000

pressed

root

scaleScope

감싸는 컴포넌트가 자체 pressed 피드백을 주는 경우(List Item, Select Box 등)에는 이 값이 적용되지 않습니다.

self

#### tone=brand

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

enabled, selected, pressed

root

color

[$color.bg.brand-solid-pressed](/foundations/design-token/reference/%24color.bg.brand-solid-pressed)

브랜드와 관련된 요소들이 즉각적으로 인식될 수 있도록 돕습니다. 화면에서 가장 중요한 액션을 강조하는데 사용할 수 있습니다. (solid-pressed)

disabled

root

color

[$color.palette.gray-300](/foundations/design-token/reference/%24color.palette.gray-300)

disabled, selected

root

color

[$color.bg.transparent](/foundations/design-token/reference/%24color.bg.transparent)

strokeWidth

1px

strokeColor

[$color.palette.gray-300](/foundations/design-token/reference/%24color.palette.gray-300)

icon

color

[$color.palette.gray-300](/foundations/design-token/reference/%24color.palette.gray-300)

#### tone=neutral

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

enabled, selected, pressed

root

color

[$color.bg.neutral-inverted-pressed](/foundations/design-token/reference/%24color.bg.neutral-inverted-pressed)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted-pressed)

disabled

root

color

[$color.palette.gray-300](/foundations/design-token/reference/%24color.palette.gray-300)

disabled, selected

root

color

[$color.bg.transparent](/foundations/design-token/reference/%24color.bg.transparent)

strokeWidth

1px

strokeColor

[$color.palette.gray-300](/foundations/design-token/reference/%24color.palette.gray-300)

icon

color

[$color.palette.gray-300](/foundations/design-token/reference/%24color.palette.gray-300)

#### size=medium

상태

슬롯

속성

값

enabled

root

size

[$dimension.x5](/foundations/design-token/reference/%24dimension.x5)

icon

size

[$dimension.x2](/foundations/design-token/reference/%24dimension.x2)

disabled

icon

size

[$dimension.x2\_5](/foundations/design-token/reference/%24dimension.x2_5)

#### size=large

상태

슬롯

속성

값

enabled

root

size

[$dimension.x6](/foundations/design-token/reference/%24dimension.x6)

icon

size

[$dimension.x2\_5](/foundations/design-token/reference/%24dimension.x2_5)

disabled

icon

size

[$dimension.x3](/foundations/design-token/reference/%24dimension.x3)

Last updated on

[이전 문서Quantity Picker](/components/quantity-picker)[다음 문서Reaction Button](/components/reaction-button)
