<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/alert-dialog
fetched: 2026-05-08T06:33:25.504Z
-->

[Components](/docs/components)Layout

# Alert Dialog

사용자의 확인이 반드시 필요한 경우 강력한 표현 및 경고 수단으로 활용하는 컴포넌트입니다.

LLMs.txt

다른 도구로 열기

Figma

Done

[

React

Done

](/react/components/alert-dialog)

iOS

Done

Android

Done

## [Anatomy](#anatomy)

![Alert Dialog의 Anatomy 이미지. Backdrop(Overlay)와 Dialog Content로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e00c5b22-cc25-446f-b35e-c0a6d9782ea9)

Alert Dialog는 Backdrop(Overlay)와 Dialog Content가 결합된 형태로 하나의 컴포넌트로 제공됩니다.

## [Properties](#properties)

### [Layout Property](#layout-property)

![Alert Dialog의 Layout Property](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a1dfca5-9195-427d-8b30-09f9e0082ee1)

[Action Button](/docs/components/action-button) 가로 배열을 기본으로 제공합니다. [Action Button](/docs/components/action-button) Label 길이가 긴 경우 세로 배열을 사용할 수 있습니다.

### [Show Title](#show-title)

![Alert Dialog의 Show Title Property - 제목 표시 여부](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c93db604-4a11-4547-bce3-7ffaf164a81b)

상황에 따라서 제목을 표시하지 않을 수 있습니다.

## [Guidelines](#guidelines)

### [알림 또는 확인이 필요한 상황에서 사용](#알림-또는-확인이-필요한-상황에서-사용)

![Alert Dialog를 알림 또는 확인이 필요한 상황에서 사용하는 예시 - Neutral](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca0ae4ca-9afb-43e9-aa5d-371da98df8e7)

![Alert Dialog를 알림 또는 확인이 필요한 상황에서 사용하는 예시 - Neutral](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c39e5eb-3d5c-47ea-8e82-341c1596f562)

Alert Dialog는 사용자가 반드시 알아야할 정보나 옵션 선택이 필요한 경우 사용할 수 있습니다. 기본적으로 Neutral 사용을 권장하지만, 제품의 핵심 가치와 맞닿아 있는 정보를 안내하는 경우 Brand를 사용할 수 있습니다.

### [경고가 필요한 상황에서 사용](#경고가-필요한-상황에서-사용)

![Alert Dialog를 경고가 필요한 상황에서 사용하는 예시 - Critical](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea6ac154-3e2b-42f8-8f7f-55e7b72d6849)

데이터 삭제, 사용자가 작성한 내용이 지워질 수 있는 경우, 설정 초기화 등 사용자가 행동한 무언가가 유실될 수 있는 상황에서는 Critical로 표현하세요. 경고가 필요한 액션을 의미하는 버튼이 Critical로 표시되어야 합니다.

![Alert Dialog에서 '취소' 버튼에 Critical을 사용한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40f2b1fb-97ec-4af2-a58e-ac937e2cf5a3)

Don’t

Critical Action Button은 경고가 필요한 액션에 지정되어야 합니다.

### [긴 버튼 Label을 사용하는 경우](#긴-버튼-label을-사용하는-경우)

![긴 버튼 Label을 사용하는 경우 - Responsive-wrapping 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d9c81ab-7600-4358-9965-ad2059ee5237)

긴 Action Button Label이 필요하거나 번역했을 때 의도하지 않게 길어지는 경우 Action Button 레이아웃이 Overflow될 수 있습니다.

**Alert Dialog는 Responsive-wrapping 컨테이너를 제공하기 때문에 설정된 로직에 따라서 자동으로 레이아웃을 전환됩니다.**

### [Nonpreferred 레이아웃 사용하기 (사용 시 주의)](#nonpreferred-레이아웃-사용하기-사용-시-주의)

![None preferred 레이아웃 사용 예시 - Secondary Ghost Button](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7af12647-5eef-4fab-a152-5dc0c1e5b39f)

Primary Action Button과 Secondary Action Button 사이에 중요도 차이가 큰 경우 해당 레이아웃 옵션을 사용할 수 있습니다.

중요도는 현재 맥락에서 강조가 필요한 정도를 기준으로 판단되어야 합니다. 다만 개별 도메인마다 맥락이 다르기 때문에 자체적으로 판단이 필요합니다. 무분별하게 사용하기보다는 경고보다 약한 강조의 의미로 사용하세요.

### [임의로 다양한 콘텐츠를 조합하는 경우](#임의로-다양한-콘텐츠를-조합하는-경우)

Alert Dialog는 경고, 알림을 목적으로 표시되는 컴포넌트라서 사용처에서 임의로 수정하거나 변형시켜서 활용하는 것을 금지합니다. 사용처는 Alert Dialog를 사용할 때 주어진 Prop을 그대로 사용해야 합니다.

![Alert Dialog를 임의로 커스텀하거나 콘텐츠 정렬을 변경한 잘못된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec8e965c-9e4b-404b-bc8f-9fb76e673d30)

Don’t

임의로 커스텀하거나 콘텐츠 정렬을 변경하지 마세요.

![Alert Dialog를 제공되는 형태 그대로 사용한 올바른 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/491b139f-7b32-484f-a37d-0a79d03684a7)

Do

제공되는 형태 그대로 사용하고 정렬이 항상 유지되어야 합니다.

### [Alert Dialog UX Writing](#alert-dialog-ux-writing)

적절한 Alert Dialog 안내 문구 작성 방법은 별도 Notion 문서에서 설명합니다.

## [Alert Dialog vs. Menu Sheet](#alert-dialog-vs-menu-sheet)

### [Alert Dialog, Menu Sheet 비교](#alert-dialog-menu-sheet-비교)

![Alert Dialog와 Menu Sheet 사용 예시 비교](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/892b521f-a2a1-4cf0-a47e-bc21bf3df6f8)

Alert Dialog와 [Menu Sheet](/docs/components/menu-sheet)는 유사한 UI이지만, 사용 목적과 제공하는 기능에 차이가 있습니다.

[Menu Sheet](/docs/components/menu-sheet)는 Alert Dialog와 달리 바깥을 탭하면 닫을 수 있습니다.

구분

Alert Dialog

Menu Sheet

**목적**

반드시 선택이 필요, 되돌릴 수 없는 액션에 대한 안내

사용할 수 있는 여러개의 메뉴와 액션을 제공

**제공 액션 개수**

2개 이하 (닫기 포함)

2개 이상 (닫기 포함)

**액션 구성**

양자택일 (삭제 여부 / 이탈 여부 등)

여러개로 구성

**내용 표시 여부**

액션에 대한 부연설명이 반드시 필요

설명이 필요 없을 수 있음

**표시 위치**

화면 정중앙

화면 하단

**닫기 액션**

명시적인 닫기, 취소 등 버튼을 탭해야 닫힘

닫기 등의 버튼이나 바깥 영역을 탭해도 닫힘

## [Specification](#specification)

### base

상태

슬롯

속성

값

enabled

backdrop

color

[$color.bg.overlay](/docs/foundation/design-token/%24color.bg.overlay)

enterDuration

[$duration.d2](/docs/foundation/design-token/%24duration.d2)

enterTimingFunction

[$timing-function.enter](/docs/foundation/design-token/%24timing-function.enter)

enterOpacity

0

exitDuration

[$duration.d2](/docs/foundation/design-token/%24duration.d2)

exitTimingFunction

[$timing-function.exit](/docs/foundation/design-token/%24timing-function.exit)

exitOpacity

0

content

color

[$color.bg.layer-floating](/docs/foundation/design-token/%24color.bg.layer-floating)

화면의 모든 콘텐츠 위를 덮으며(floating) 나타나는 임시 레이어입니다. 사용자의 상호작용을 필요로 하는 모달(Modal)성 요소들이 여기에 속합니다.

cornerRadius

[$radius.r5](/docs/foundation/design-token/%24radius.r5)

marginX

[$dimension.x8](/docs/foundation/design-token/%24dimension.x8)

marginY

[$dimension.x16](/docs/foundation/design-token/%24dimension.x16)

maxWidth

272px

enterDuration

[$duration.d4](/docs/foundation/design-token/%24duration.d4)

enterTimingFunction

[$timing-function.enter-expressive](/docs/foundation/design-token/%24timing-function.enter-expressive)

enterOpacity

0

enterScale

1.3

exitDuration

[$duration.d2](/docs/foundation/design-token/%24duration.d2)

exitTimingFunction

[$timing-function.exit](/docs/foundation/design-token/%24timing-function.exit)

exitOpacity

0

header

gap

[$dimension.x1\_5](/docs/foundation/design-token/%24dimension.x1_5)

paddingX

[$dimension.x5](/docs/foundation/design-token/%24dimension.x5)

paddingTop

[$dimension.x5](/docs/foundation/design-token/%24dimension.x5)

footer

gap

[$dimension.x2](/docs/foundation/design-token/%24dimension.x2)

paddingX

[$dimension.x5](/docs/foundation/design-token/%24dimension.x5)

paddingTop

[$dimension.x4](/docs/foundation/design-token/%24dimension.x4)

paddingBottom

[$dimension.x5](/docs/foundation/design-token/%24dimension.x5)

title

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

fontSize

[$font-size.t7](/docs/foundation/design-token/%24font-size.t7)

lineHeight

[$line-height.t7](/docs/foundation/design-token/%24line-height.t7)

fontWeight

[$font-weight.bold](/docs/foundation/design-token/%24font-weight.bold)

description

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

fontSize

[$font-size.t5](/docs/foundation/design-token/%24font-size.t5)

lineHeight

[$line-height.t5](/docs/foundation/design-token/%24line-height.t5)

fontWeight

[$font-weight.regular](/docs/foundation/design-token/%24font-weight.regular)

Last updated on

[

Snackbar

화면 하단에 일시적으로 나타나 상태나 결과를 안내하는 컴포넌트입니다.

](/docs/components/snackbar)[

Bottom Sheet

화면 하단에서 올라오는 모달 컴포넌트입니다. 추가 정보나 액션 목록을 제공하면서도 현재 컨텍스트를 유지할 때 사용됩니다.

](/docs/components/bottom-sheet)
