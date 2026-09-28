<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/alert-dialog
fetched: 2026-09-28T04:52:50.530Z
-->

ComponentsLLMS.txt

# Alert Dialog

사용자의 확인이 반드시 필요한 경우 강력한 표현 및 경고 수단으로 활용하는 컴포넌트입니다.

Figma[React](/react/components/alert-dialog)iOSAndroid

![Alert Dialog cover image](/og/components/alert-dialog.webp)

## [Anatomy](#anatomy)

![Alert Dialog의 Anatomy 이미지. Backdrop(Overlay)와 Dialog Content로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52180983-0473-4b03-988d-7625a3838a97)

Alert Dialog는 Backdrop(Overlay)와 Dialog Content가 결합된 형태로 하나의 컴포넌트로 제공됩니다.

## [Properties](#properties)

### [Layout Property](#layout-property)

![Alert Dialog의 Layout Property](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16671e4b-9752-485f-8978-f05b17c7d512)

[Action Button](/components/action-button) 가로 배열을 기본으로 제공합니다. [Action Button](/components/action-button) Label 길이가 긴 경우 세로 배열을 사용할 수 있습니다.

### [Show Title](#show-title)

![Alert Dialog의 Show Title Property - 제목 표시 여부](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6df9f783-7600-4530-9444-f213b4231900)

상황에 따라서 제목을 표시하지 않을 수 있습니다.

## [Guidelines](#guidelines)

### [알림 또는 확인이 필요한 상황에서 사용](#알림-또는-확인이-필요한-상황에서-사용)

![Alert Dialog를 알림 또는 확인이 필요한 상황에서 사용하는 예시 - Neutral](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/193e897d-d9f2-45ff-82d4-3ff98c3e65df)

![Alert Dialog를 알림 또는 확인이 필요한 상황에서 사용하는 예시 - Neutral](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f04ccec9-9fd2-4ee3-8491-65d6e9defda8)

Alert Dialog는 사용자가 반드시 알아야할 정보나 옵션 선택이 필요한 경우 사용할 수 있습니다. 기본적으로 Neutral 사용을 권장하지만, 제품의 핵심 가치와 맞닿아 있는 정보를 안내하는 경우 Brand를 사용할 수 있습니다.

### [경고가 필요한 상황에서 사용](#경고가-필요한-상황에서-사용)

![Alert Dialog를 경고가 필요한 상황에서 사용하는 예시 - Critical](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0561e59-fd6f-40b0-84cb-b80233eceff8)

데이터 삭제, 사용자가 작성한 내용이 지워질 수 있는 경우, 설정 초기화 등 사용자가 행동한 무언가가 유실될 수 있는 상황에서는 Critical로 표현하세요. 경고가 필요한 액션을 의미하는 버튼이 Critical로 표시되어야 합니다.

![Alert Dialog에서 '취소' 버튼에 Critical을 사용한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9523de5d-6112-4d86-bbe1-d56f35c077cd)

Don’t

Critical Action Button은 경고가 필요한 액션에 지정되어야 합니다.

### [긴 버튼 Label을 사용하는 경우](#긴-버튼-label을-사용하는-경우)

![긴 버튼 Label을 사용하는 경우 - Responsive-wrapping 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/119baa33-52eb-42e5-84f5-38fad06c6921)

긴 Action Button Label이 필요하거나 번역했을 때 의도하지 않게 길어지는 경우 Action Button 레이아웃이 Overflow될 수 있습니다.

**Alert Dialog는 Responsive-wrapping 컨테이너를 제공하기 때문에 설정된 로직에 따라서 자동으로 레이아웃을 전환됩니다.**

### [Nonpreferred 레이아웃 사용하기 (사용 시 주의)](#nonpreferred-레이아웃-사용하기-사용-시-주의)

![None preferred 레이아웃 사용 예시 - Secondary Ghost Button](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6ecd6b4-c5c9-4c3a-9882-76e6ec1726e3)

Primary Action Button과 Secondary Action Button 사이에 중요도 차이가 큰 경우 해당 레이아웃 옵션을 사용할 수 있습니다.

중요도는 현재 맥락에서 강조가 필요한 정도를 기준으로 판단되어야 합니다. 다만 개별 도메인마다 맥락이 다르기 때문에 자체적으로 판단이 필요합니다. 무분별하게 사용하기보다는 경고보다 약한 강조의 의미로 사용하세요.

### [임의로 다양한 콘텐츠를 조합하는 경우](#임의로-다양한-콘텐츠를-조합하는-경우)

Alert Dialog는 경고, 알림을 목적으로 표시되는 컴포넌트라서 사용처에서 임의로 수정하거나 변형시켜서 활용하는 것을 금지합니다. 사용처는 Alert Dialog를 사용할 때 주어진 Prop을 그대로 사용해야 합니다.

![Alert Dialog를 임의로 커스텀하거나 콘텐츠 정렬을 변경한 잘못된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52b6c148-a7ec-4bbe-9b92-debcfadc48b6)

Don’t

임의로 커스텀하거나 콘텐츠 정렬을 변경하지 마세요.

![Alert Dialog를 제공되는 형태 그대로 사용한 올바른 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a838127f-e877-441f-a9e8-16440db8a36d)

Do

제공되는 형태 그대로 사용하고 정렬이 항상 유지되어야 합니다.

### [Alert Dialog UX Writing](#alert-dialog-ux-writing)

적절한 Alert Dialog 안내 문구 작성 방법은 별도 Notion 문서에서 설명합니다.

## [Alert Dialog vs. Menu Sheet](#alert-dialog-vs-menu-sheet)

### [Alert Dialog, Menu Sheet 비교](#alert-dialog-menu-sheet-비교)

![Alert Dialog와 Menu Sheet 사용 예시 비교](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ca9d2dd-865f-4dc3-aead-3ab9c34c40b2)

Alert Dialog와 [Menu Sheet](/components/menu-sheet)는 유사한 UI이지만, 사용 목적과 제공하는 기능에 차이가 있습니다.

[Menu Sheet](/components/menu-sheet)는 Alert Dialog와 달리 바깥을 탭하면 닫을 수 있습니다.

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

[$color.bg.overlay](/foundations/design-token/reference/%24color.bg.overlay)

enterDuration

[$duration.d2](/foundations/design-token/reference/%24duration.d2)

enterTimingFunction

[$timing-function.enter](/foundations/design-token/reference/%24timing-function.enter)

enterOpacity

0

exitDuration

[$duration.d2](/foundations/design-token/reference/%24duration.d2)

exitTimingFunction

[$timing-function.exit](/foundations/design-token/reference/%24timing-function.exit)

exitOpacity

0

content

color

[$color.bg.layer-floating](/foundations/design-token/reference/%24color.bg.layer-floating)

화면의 모든 콘텐츠 위를 덮으며(floating) 나타나는 임시 레이어입니다. 사용자의 상호작용을 필요로 하는 모달(Modal)성 요소들이 여기에 속합니다.

cornerRadius

[$radius.r5](/foundations/design-token/reference/%24radius.r5)

widthFraction

viewport width 또는 parent width에 대한 비율입니다. viewport \`md\` 미만에서 적용합니다.

0.9

maxHeightFraction

viewport height 또는 parent height에 대한 최대 비율입니다.

0.8

marginX

[$dimension.x5](/foundations/design-token/reference/%24dimension.x5)

enterDuration

[$duration.d4](/foundations/design-token/reference/%24duration.d4)

enterTimingFunction

[$timing-function.enter-expressive](/foundations/design-token/reference/%24timing-function.enter-expressive)

enterOpacity

0

enterScale

1.3

exitDuration

[$duration.d2](/foundations/design-token/reference/%24duration.d2)

exitTimingFunction

[$timing-function.exit](/foundations/design-token/reference/%24timing-function.exit)

exitOpacity

0

header

gap

[$dimension.x1\_5](/foundations/design-token/reference/%24dimension.x1_5)

paddingX

[$dimension.x6](/foundations/design-token/reference/%24dimension.x6)

paddingTop

[$dimension.x6](/foundations/design-token/reference/%24dimension.x6)

paddingBottom

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

closeButtonGap

closeButton이 표시되는 경우 paddingRight에 추가되는 여백입니다.

[$dimension.x1\_5](/foundations/design-token/reference/%24dimension.x1_5)

body

paddingX

[$dimension.x6](/foundations/design-token/reference/%24dimension.x6)

paddingBottom

body의 하단 padding이며, 동시에 하단 scroll fog 그라데이션의 높이로도 사용됩니다. 본문이 오버플로되어 스크롤 가능한 경우에만 적용됩니다.

[$dimension.x12](/foundations/design-token/reference/%24dimension.x12)

strokeDuration

[$duration.color-transition](/foundations/design-token/reference/%24duration.color-transition)

strokeTimingFunction

[$timing-function.easing](/foundations/design-token/reference/%24timing-function.easing)

footer

paddingX

[$dimension.x6](/foundations/design-token/reference/%24dimension.x6)

paddingTop

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

paddingBottom

[$dimension.x6](/foundations/design-token/reference/%24dimension.x6)

title

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

fontSize

[$font-size.t8](/foundations/design-token/reference/%24font-size.t8)

lineHeight

[$line-height.t8](/foundations/design-token/reference/%24line-height.t8)

fontWeight

[$font-weight.bold](/foundations/design-token/reference/%24font-weight.bold)

description

color

[$color.fg.neutral-muted](/foundations/design-token/reference/%24color.fg.neutral-muted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (muted)

fontSize

[$font-size.t5](/foundations/design-token/reference/%24font-size.t5)

lineHeight

[$line-height.t5](/foundations/design-token/reference/%24line-height.t5)

fontWeight

[$font-weight.regular](/foundations/design-token/reference/%24font-weight.regular)

closeButton

fromTop

[$dimension.x7](/foundations/design-token/reference/%24dimension.x7)

fromRight

[$dimension.x6](/foundations/design-token/reference/%24dimension.x6)

scrolled

body

strokeColor

본문이 스크롤된(scrolled) 상태에서 body 상단에 나타나는 divider의 색상입니다.

[$color.stroke.neutral-muted](/foundations/design-token/reference/%24color.stroke.neutral-muted)

의미 단위가 바뀌는 경계를 나누는 선입니다. 섹션과 섹션 사이, 콘텐츠와 액션 영역 사이, 헤더와 본문 경계처럼 한 화면에 한두 번만 등장하는 구분에 사용됩니다. (muted)

strokeWidth

본문이 스크롤된(scrolled) 상태에서 body 상단에 나타나는 divider의 두께입니다.

1px

### size=medium

상태

슬롯

속성

값

enabled

content

maxWidth

480px

### size=large

상태

슬롯

속성

값

enabled

content

maxWidth

800px

Last updated on

[이전 문서Action Button](/components/action-button)[다음 문서Attachment Input](/components/attachment-input)
