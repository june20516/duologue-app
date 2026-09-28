<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/tabs
fetched: 2026-09-28T04:52:52.757Z
-->

ComponentsLLMS.txt

# Tabs

한 화면 내에서 콘텐츠를 탭 단위로 구분하여 전환할 수 있는 컴포넌트입니다.

Figma[React](/react/components/tabs)[Lynx](/lynx/components/tabs)

![Tabs cover image](/og/components/tabs.webp)

## [Anatomy](#anatomy)

![Tabs의 Anatomy 이미지 (Line Type)](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d72521d-60b1-459f-bafb-bbe065fcd30c)

![Tabs의 Anatomy 이미지 (Chip Type)](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a9d6642-f1c2-4a30-8f98-867ba0f47bf1)

Tabs는 Label이 있는 Tab Item의 모음으로 구성되어 있습니다. Tab Item에는 필요에 따라 [Notification Badge](/components/notification-badge)를 표시할 수 있습니다.

## [Properties](#properties)

### [Variant](#variant)

![Tabs의 Variant Property - Line Type과 Chip Type](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ccfcaaa-94e4-4ee9-94cd-89d944daada7)

Tabs 컴포넌트는 두 가지 타입으로 구성되어 있습니다.

Type

스타일/레이아웃

**Line**

Fill 레이아웃 (Tab Item을 꽉 차게 표시), Hug 레이아웃 (레이블 길이에 맞게 표시)

**Chip**

Solid 스타일, Outline 스타일

### [Size](#size)

![Tabs Line Type의 Size - Medium, Small](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3fafbc10-2174-4ec1-b23f-cf8d1db5220e)

![Tabs Chip Type의 Size - Large, Medium](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4ed9dca-dd6a-4182-8b2b-c566112ce748)

Line 타입은 Medium, Small 두 가지 Size를 가집니다. Chip 타입은 Large, Medium 두 가지 Size를 가집니다.

### [State](#state)

![Tabs의 State - Enabled, Selected, Disabled](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5fa5e883-357f-478b-ba1e-05f9e0227a27)

Tab Item은 Enabled, Selected, Disabled 상태를 가집니다.

### [Notification Property](#notification-property)

![Tabs의 Notification Property - Notification Badge 표시 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92482e46-7a91-46ea-9c28-6be594a3ae9a)

Tab Item에 탭에 새로운 콘텐츠가 있음을 알리는 [Notification Badge](/components/notification-badge)를 표시할 수 있습니다.

## [Guidelines](#guidelines)

### [Tabs 사이즈와 스타일 선택](#tabs-사이즈와-스타일-선택)

![Line Style - Medium과 Small 사이즈](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca2067ab-6dd4-44a7-b78b-1c148f183a72)

![Chip Style - Large와 Medium 사이즈](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/105f7e2d-f416-4031-9c8c-8c79dc0a6481)

Tabs 컴포넌트는 Line과 Chip 두 가지 스타일로 구성되어 있습니다.

Line 타입은 Medium과 Small 두 가지 사이즈를 제공하며, Chip 타입은 Large와 Medium 두 가지 사이즈를 제공합니다. 화면 내 다른 요소와의 조합, 주목도에 따라 스타일과 사이즈를 선택하여 사용할 수 있습니다.

Large 사이즈는 화면 전체 콘텐츠를 전환하는 Navigation 역할에 적합하며, Medium 사이즈는 좁은 영역이나 스크롤 중간에서 서브 콘텐츠를 전환할 때 사용합니다.

Chip 타입을 사용하는 경우, 화면 전체의 콘텐츠를 전환하는 경우에 Solid 스타일을, 일부 콘텐츠를 전환하는 경우에는 Outline 타입을 사용하길 권장합니다.

![Line 스타일 Tabs와 Filter Chip을 조합하여 사용하는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83ad4fa5-0669-4de8-bc26-dd4e483dfecd)

![Chip 스타일 Tabs와 Filter Chip을 중복하여 사용하는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3f60ffa-69c8-4e6b-9a9f-1d2ac2e19322)

Don’t

Chip 스타일을 중복하여 사용하는 것은 권장하지 않습니다.

또한 화면 내 다른 [Chip](/components/chip) 요소와 조합하여 사용하는 경우 동작에 혼란이 없도록 서로 다른 스타일을 적용해야 합니다.

### [Line 스타일에서 Fill과 Hug 레이아웃 사용하기](#line-스타일에서-fill과-hug-레이아웃-사용하기)

![Fill 레이아웃 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c597f2cf-9826-4045-91e6-4d3d66c6c4ad)

![Hug 레이아웃 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40983b97-3a30-4130-9071-8d06ca2f8655)

Line 타입에서는 Tab Item을 꽉 차게 표시하는 Fill 레이아웃과 Tab Item을 레이블 길이에 맞게 표시하는 Hug 레이아웃을 사용할 수 있습니다.

Fill 레이아웃은 Tab Item이 많지 않을 경우에 적합하며, 최대 5개의 탭을 표시할 수 있습니다.

**Tab Item이 6개 이상이거나 레이블이 길어지는 경우에는 Hug 레이아웃 사용을 권장합니다.**

### [탭에 새로운 콘텐츠가 있음을 알리기](#탭에-새로운-콘텐츠가-있음을-알리기)

![Notification Badge를 이벤트 탭에만 표시한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/838e3599-e188-4ca1-8674-ed65abbf1761)

![여러 탭에 동시에 Notification Badge를 표시하는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/086589c5-3147-444c-a864-8dda9152e73c)

Don’t

Notification을 여러 탭에 동시에 표시하는 것은 지양해야 합니다.

Tab Item에는 새로운 콘텐츠가 있음을 알리는 Notification Badge를 표시할 수 있습니다.

**Notification Badge는 콘텐츠를 확인하면 사라지는 동작을 하며, 여러 탭에 동시에 표시하는 것은 지양해야 합니다.**

### [2 Depth로 Tabs 구조 사용하기](#2-depth로-tabs-구조-사용하기)

![2 Depth Tabs 구조 예시 - Line Fill + Solid Chip, Line Hug + Outline Chip](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40eee071-9199-4d3a-87a7-a2b7260c2340)

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

[$color.bg.layer-default](/foundations/design-token/reference/%24color.bg.layer-default)

basement 바로 위에 놓이는 기본 표면입니다. 대부분의 스크린 콘텐츠(List, TextField 등)가 이 레이어 위에서 표현됩니다.

strokeBottomWidth

1px

strokeColor

[$color.stroke.neutral-muted](/foundations/design-token/reference/%24color.stroke.neutral-muted)

의미 단위가 바뀌는 경계를 나누는 선입니다. 섹션과 섹션 사이, 콘텐츠와 액션 영역 사이, 헤더와 본문 경계처럼 한 화면에 한두 번만 등장하는 구분에 사용됩니다. (muted)

indicator

height

2px

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

transformDuration

[$duration.d4](/foundations/design-token/reference/%24duration.d4)

transformTimingFunction

[$timing-function.easing](/foundations/design-token/reference/%24timing-function.easing)

#### layout=hug

상태

슬롯

속성

값

enabled

root

paddingX

[$dimension.spacing-x.global-gutter](/foundations/design-token/reference/%24dimension.spacing-x.global-gutter)

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

[$dimension.spacing-x.global-gutter](/foundations/design-token/reference/%24dimension.spacing-x.global-gutter)

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

[$color.fg.neutral-subtle](/foundations/design-token/reference/%24color.fg.neutral-subtle)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (subtle)

selected

label

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

disabled

label

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

pressed

root

scaleScope

self

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

[$dimension.x2\_5](/foundations/design-token/reference/%24dimension.x2_5)

paddingY

[$dimension.x2\_5](/foundations/design-token/reference/%24dimension.x2_5)

label

fontSize

[$font-size.t5](/foundations/design-token/reference/%24font-size.t5)

lineHeight

[$line-height.t5](/foundations/design-token/reference/%24line-height.t5)

fontWeight

[$font-weight.bold](/foundations/design-token/reference/%24font-weight.bold)

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

[$dimension.x2\_5](/foundations/design-token/reference/%24dimension.x2_5)

paddingY

[$dimension.x2\_5](/foundations/design-token/reference/%24dimension.x2_5)

label

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

[$line-height.t4](/foundations/design-token/reference/%24line-height.t4)

fontWeight

[$font-weight.bold](/foundations/design-token/reference/%24font-weight.bold)

### [Chip Tablist](#chip-tablist)

#### base

상태

슬롯

속성

값

enabled

root

paddingX

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

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

Last updated on

[이전 문서Table Pagination](/components/table-pagination)[다음 문서Tag Group](/components/tag-group)
