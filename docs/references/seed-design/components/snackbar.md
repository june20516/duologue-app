<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/snackbar
fetched: 2026-09-21T04:26:58.680Z
-->

ComponentsLLMS.txt

# Snackbar

화면 하단에 일시적으로 나타나 상태나 결과를 안내하는 컴포넌트입니다.

Figma[React](/react/components/snackbar)iOSAndroid

![Snackbar cover image](/og/components/snackbar.webp)

## [Anatomy](#anatomy)

![Snackbar의 Anatomy 이미지. Container, Text, Prefix Icon, Action으로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/174b3b4e-b392-4ccf-99b8-8c3e214466e4)

Snackbar 컴포넌트는 텍스트와 컨테이너로 구성되며 필요에 따라 Prefix Icon과 Action을 표시할 수 있습니다.

## [Properties](#properties)

### [Variant](#variant)

![Snackbar의 Variant Property - Default, Positive, Critical](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd3cdc93-4e16-486e-b57c-2427c67a0152)

Snackbar 컴포넌트는 기본적인 메시지 전달을 위한 Default, 완료나 성공 메시지를 표현하는 Positive, 오류나 실패 메시지를 표현하는 Critical 총 세 가지 타입을 제공합니다.

### [Action Property](#action-property)

![Snackbar의 Action Property - Text 버튼](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca69227d-5ec7-42a2-9a55-001c37b1d0b1)

Text로 구성된 보조 Action을 표시할 수 있습니다.

## [Guidelines](#guidelines)

### [Snackbar 사용하기](#snackbar-사용하기)

![Snackbar 사용 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f89acd13-9c1e-466d-8d5a-de5482380a29)

Snackbar는 텍스트를 통해 간결한 피드백을 제공하는 컴포넌트입니다.

저장/업로드/동기화 등 백그라운드 작업 완료 알림이나 사용자가 방금 수행한 액션에 대한 안내 용도로 사용할 수 있습니다. 또한 '되돌리기' 등 짧은 시간 동안만 유효한 보조 액션을 제공합니다.

Snackbar는 낮은 심각도의 상태를 공유하는 용도로만 사용해야 하며, 다음 상황에서는 사용을 피해야 합니다.

사용을 피해야 할 상황

대안

사용자의 결정이 필요한 중요한 선택

[Bottom Sheet](/components/bottom-sheet), [Alert Dialog](/components/alert-dialog)

지속적으로 표시되어야 하는 경고

[Page Banner](/components/page-banner), [Callout](/components/callout)

여러 단계 안내나 긴 텍스트

[Help Bubble](/components/help-bubble), [Callout](/components/callout)

### [Snackbar의 위치와 레이아웃](#snackbar의-위치와-레이아웃)

![Snackbar 위치와 레이아웃 - Safe Area](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8915b52-f94e-4023-a49e-5f05622960e5)

Snackbar는 기본적으로 화면 하단 중앙에 배치되며, 컴포넌트 자체에 여백을 포함합니다. 배치 시 OS의 세이프 에어리어를 고려해야 합니다.

![Snackbar 위치와 레이아웃 - Floating Action Button 위에 표시된 경우](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c1e5b5c-c1f8-460d-a489-b5991c82ff44)

화면에 [Floating Action Button](/components/floating-action-button)이 있을 때 Snackbar가 나타나면, Snackbar는 항상 [Floating Action Button](/components/floating-action-button) 위에 표시됩니다.

텍스트가 길어 줄바꿈이 발생할 경우, 아이콘과 보조 버튼은 중앙 정렬됩니다.

![Snackbar 최대 너비 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea2b0e21-047c-4db0-97af-14c7ef236566)

Snackbar에는 최대 너비가 지정되어 있으며, 화면 너비가 이를 초과할 경우 화면 중앙에 배치됩니다.

### [내용 작성하기](#내용-작성하기)

#### [간결하게 작성하기](#간결하게-작성하기)

![Snackbar 내용으로 '게시글을 저장했어요'가 표시된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65a04278-b95e-406d-b007-caa6b679c92e)

Do

결과를 짧고 분명하게 전달합니다.

![Snackbar 내용으로 '게시글 저장 처리가 완료되었습니다'가 표시된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7bde5456-7d31-4968-a37e-7a8c92c71253)

Don’t

길고 시스템 관점의 표현이라 한눈에 들어오지 않습니다.

메시지는 핵심만 짧게 작성합니다. 명사+동사 형식으로 사용자 액션의 결과를 먼저 보여주면 한눈에 이해할 수 있습니다.

#### [마침표는 문장 수에 따라](#마침표는-문장-수에-따라)

![Snackbar 내용으로 '주문을 취소했어요. 환불은 3일 안에 처리돼요.'가 표시된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1412c106-5a1c-44f5-8e4d-f3a7e9caef82)

Do

두 문장 이상이면 모든 문장에 마침표를 붙입니다.

![Snackbar 내용으로 '주문을 취소했어요 환불은 3일 안에 처리돼요'가 표시된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d23ee5a8-70bb-43ee-b330-7b1120121532)

Don’t

문장이 둘인데 마침표가 없어 읽기 어렵습니다.

한 문장이면 마침표를 생략하고, 두 문장 이상이면 모든 문장 끝에 마침표를 붙입니다.

#### [긍정문으로 표현하기](#긍정문으로-표현하기)

![Snackbar 내용으로 '업로드를 완료했어요'가 표시된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e583c37-8085-4584-9cc3-132d81c113c7)

Do

무엇이 됐는지 바로 알 수 있습니다.

![Snackbar 내용으로 '업로드에 실패하지 않았어요'가 표시된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/809d2eb0-a55c-4d7e-8818-beaf6b7a93d3)

Don’t

이중 부정이라 결과를 한 번 더 해석해야 합니다.

명확하고 긍정적인 표현으로 혼란을 방지합니다. "실패하지 않았어요"와 같은 이중 부정보다 "업로드를 완료했어요"처럼 직접적으로 표현합니다.

### [Snackbar의 동작](#snackbar의-동작)

![Snackbar 동작 - 4초 후 자동 닫힘, Snackbar 내용이 긴 경우 4초보다 길게 설정](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07e22a8a-a1fd-491d-b0ee-2c4672e02ec2)

Snackbar는 기본적으로 4초 동안 표시됩니다. 메시지 내용이 길 경우, 사용자가 충분히 인지할 수 있도록 표시 시간을 적절히 조정해주세요.

![Snackbar 동작 - 사용자가 터치를 유지하는 경우 타이머 일시정지](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b393d12b-f6f0-444e-8eab-6b50f3d50bac)

![한 화면에 3개의 Snackbar가 동시에 표시된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6cd2aecb-e470-47ed-a840-e0bae318d92f)

Don’t

한 번에 여러 개의 Snackbar를 표시하지 않습니다.

사용자가 Snackbar에 터치를 유지하는 경우 타이머가 일시정지됩니다. 이를 통해 메시지를 더 오래 확인하고 싶을 때 Snackbar를 화면에 계속 표시할 수 있습니다.

화면에는 한 번에 1개의 Snackbar만 표시합니다. 새로운 Snackbar가 발생하면 자동으로 큐에 추가되어, 현재 표시 중인 항목이 사라진 후 순차적으로 표시됩니다.

### [액션 사용하기](#액션-사용하기)

![Snackbar Action 레이블로 '되돌리기'가 표시된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f2de5e3-82a6-4c3a-bfb3-fa8ac04ad3f5)

![Snackbar Action 레이블로 '확인'이 표시된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da32199a-098b-4287-8791-3b945c03e6a4)

Don’t

구체적인 액션을 명확하게 담은 단어를 사용해주세요.

최대 1개의 보조 액션 버튼을 Snackbar에 표시할 수 있습니다. 사용자가 빠르게 인지할 수 있도록 1-2단어로 간결하게 작성하는 것을 권장합니다.

액션 라벨에는 '취소', '확인' 등의 일반적이고 모호한 단어보다는 '되돌리기', '목록보기'와 같이 더 구체적인 액션을 명확하게 담은 단어를 사용해주세요.

내용의 추가 또는 삭제와 같은 중요한 변경 사항이 발생했을 때는 사용자가 쉽게 되돌릴 수 있도록 '되돌리기' 옵션을 함께 표시하는 것이 좋습니다.

## [Specification](#specification)

### base

상태

슬롯

속성

값

enabled

region

paddingX

[$dimension.x2](/foundations/design-token/reference/%24dimension.x2)

paddingY

[$dimension.x2](/foundations/design-token/reference/%24dimension.x2)

offsetDuration

[$duration.d4](/foundations/design-token/reference/%24duration.d4)

offsetTimingFunction

[$timing-function.easing](/foundations/design-token/reference/%24timing-function.easing)

root

color

[$color.bg.neutral-inverted](/foundations/design-token/reference/%24color.bg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

cornerRadius

[$radius.r2](/foundations/design-token/reference/%24radius.r2)

minHeight

44px

maxWidth

464px

paddingX

[$dimension.x2\_5](/foundations/design-token/reference/%24dimension.x2_5)

paddingY

[$dimension.x2\_5](/foundations/design-token/reference/%24dimension.x2_5)

enterOpacity

0

enterScale

0.8

enterDuration

[$duration.d3](/foundations/design-token/reference/%24duration.d3)

enterTimingFunction

[$timing-function.enter](/foundations/design-token/reference/%24timing-function.enter)

exitOpacity

0

exitScale

0.8

exitDuration

[$duration.d2](/foundations/design-token/reference/%24duration.d2)

exitTimingFunction

[$timing-function.exit](/foundations/design-token/reference/%24timing-function.exit)

content

paddingX

[$dimension.x1\_5](/foundations/design-token/reference/%24dimension.x1_5)

gap

[$dimension.x2\_5](/foundations/design-token/reference/%24dimension.x2_5)

message

color

[$color.fg.neutral-inverted](/foundations/design-token/reference/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

[$line-height.t4](/foundations/design-token/reference/%24line-height.t4)

fontWeight

[$font-weight.regular](/foundations/design-token/reference/%24font-weight.regular)

prefixIcon

size

24px

paddingRight

[$dimension.x0\_5](/foundations/design-token/reference/%24dimension.x0_5)

actionButton

targetPaddingX

[$dimension.x2](/foundations/design-token/reference/%24dimension.x2)

targetMinHeight

44px

color

[$color.fg.brand](/foundations/design-token/reference/%24color.fg.brand)

브랜드와 관련된 요소들이 즉각적으로 인식될 수 있도록 돕습니다.

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

[$line-height.t4](/foundations/design-token/reference/%24line-height.t4)

fontWeight

[$font-weight.bold](/foundations/design-token/reference/%24font-weight.bold)

pressed

actionButton

scaleScope

self

### variant=default

상태

슬롯

속성

값

### variant=positive

상태

슬롯

속성

값

enabled

prefixIcon

color

[$color.fg.positive](/foundations/design-token/reference/%24color.fg.positive)

성공적인 작업, 확인, 또는 긍정적인 상태를 나타내는 데 사용됩니다.

### variant=critical

상태

슬롯

속성

값

enabled

prefixIcon

color

[$color.fg.critical](/foundations/design-token/reference/%24color.fg.critical)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다.

Last updated on

[이전 문서Slider](/components/slider)[다음 문서Switch](/components/switch)
