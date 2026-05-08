<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/snackbar
fetched: 2026-05-08T06:33:27.439Z
-->

[Components](/docs/components)Feedback

# Snackbar

화면 하단에 일시적으로 나타나 상태나 결과를 안내하는 컴포넌트입니다.

LLMs.txt

다른 도구로 열기

Figma

Done

[

React

Done

](/react/components/snackbar)

iOS

Done

Android

Done

## [Anatomy](#anatomy)

![Snackbar의 Anatomy 이미지. Container, Text, Prefix Icon, Action으로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6856e0a-4a99-47ef-9862-cc5e10795a3b)

Snackbar 컴포넌트는 텍스트와 컨테이너로 구성되며 필요에 따라 Prefix Icon과 Action을 표시할 수 있습니다.

## [Properties](#properties)

### [Variant](#variant)

![Snackbar의 Variant Property - Default, Positive, Critical](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d3dd0e1-9b89-41ee-a681-d2f357d4f682)

Snackbar 컴포넌트는 기본적인 메시지 전달을 위한 Default, 완료나 성공 메시지를 표현하는 Positive, 오류나 실패 메시지를 표현하는 Critical 총 세 가지 타입을 제공합니다.

### [Action Property](#action-property)

![Snackbar의 Action Property - Text 버튼](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4272551a-c9ce-4a19-ad19-8f769fcc4f84)

Text로 구성된 보조 Action을 표시할 수 있습니다.

## [Guidelines](#guidelines)

### [Snackbar 사용하기](#snackbar-사용하기)

![Snackbar 사용 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10338645-eafd-4152-9065-836e7782622b)

Snackbar는 텍스트를 통해 간결한 피드백을 제공하는 컴포넌트입니다.

저장/업로드/동기화 등 백그라운드 작업 완료 알림이나 사용자가 방금 수행한 액션에 대한 안내 용도로 사용할 수 있습니다. 또한 '되돌리기' 등 짧은 시간 동안만 유효한 보조 액션을 제공합니다.

Snackbar는 낮은 심각도의 상태를 공유하는 용도로만 사용해야 하며, 다음 상황에서는 사용을 피해야 합니다.

사용을 피해야 할 상황

대안

사용자의 결정이 필요한 중요한 선택

[Bottom Sheet](/docs/components/bottom-sheet), [Alert Dialog](/docs/components/alert-dialog)

지속적으로 표시되어야 하는 경고

[Page Banner](/docs/components/page-banner), [Callout](/docs/components/callout)

여러 단계 안내나 긴 텍스트

[Help Bubble](/docs/components/help-bubble), [Callout](/docs/components/callout)

### [Snackbar의 위치와 레이아웃](#snackbar의-위치와-레이아웃)

![Snackbar 위치와 레이아웃 - Safe Area](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2d64fb0-889b-47fc-bab3-ac8b56316af2)

Snackbar는 기본적으로 화면 하단 중앙에 배치되며, 컴포넌트 자체에 여백을 포함합니다. 배치 시 OS의 세이프 에어리어를 고려해야 합니다.

![Snackbar 위치와 레이아웃 - Floating Action Button 위에 표시된 경우](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ed776c5-e814-4b75-8e05-b0fe0d3df54c)

화면에 [Floating Action Button](/docs/components/floating-action-button)이 있을 때 Snackbar가 나타나면, Snackbar는 항상 [Floating Action Button](/docs/components/floating-action-button) 위에 표시됩니다.

텍스트가 길어 줄바꿈이 발생할 경우, 아이콘과 보조 버튼은 중앙 정렬됩니다.

![Snackbar 최대 너비 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05def133-d149-4b02-b44d-848e4a8eb5cc)

Snackbar에는 최대 너비가 지정되어 있으며, 화면 너비가 이를 초과할 경우 화면 중앙에 배치됩니다.

### [내용 작성하기](#내용-작성하기)

#### [간결하게 작성하기](#간결하게-작성하기)

![Snackbar 내용으로 '게시글을 저장했어요'가 표시된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa34b292-e9ea-4702-9ff5-a0fc26f6188f)

Do

좋은 예

![Snackbar 내용으로 '업로드 처리가 완료되었습니다'가 표시된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23b9a228-3fd3-45e6-9294-35aab2a26b13)

Don’t

나쁜 예

메시지 내용은 3단어 이하로 간단하고 짧게 작성하는 것을 권장합니다. 명사+동사 형식으로 일관성 있게 표현하고, 사용자 액션에 대한 결과를 우선적으로 표시하세요. 시각적 간결함을 위해 마침표는 생략해주세요.

#### [행동 유도 문구 활용하기](#행동-유도-문구-활용하기)

![Snackbar 내용으로 '방해금지 시간을 변경했어요'가, Action 레이블로 '되돌리기'가 표시된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd088ce5-496f-4958-be8b-b550ec7c0450)

Do

좋은 예

![Snackbar 내용으로 '네트워크 문제로 인해 연결이 끊어져 연결이 해제되었습니다'가 표시된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ef7ce1c-5fda-42b3-9836-32c763b52153)

Don’t

나쁜 예

사용자가 취할 수 있는 액션은 동사 원형으로 표현해 즉각적인 이해를 돕습니다. "되돌리기", "보기", "확인하기" 등의 명확한 버튼을 제공합니다.

#### [긍정문 사용하기](#긍정문-사용하기)

명확하고 긍정적인 표현으로 혼란을 방지합니다. "실패하지 않았어요" 등의 이중 부정보다 "업로드 완료"처럼 직접적인 표현을 사용합니다.

### [Snackbar의 동작](#snackbar의-동작)

![Snackbar 동작 - 4초 후 자동 닫힘, Snackbar 내용이 긴 경우 4초보다 길게 설정](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05a2a9c4-d532-45db-8300-468c23b87e82)

Snackbar는 기본적으로 4초 동안 표시됩니다. 메시지 내용이 길 경우, 사용자가 충분히 인지할 수 있도록 표시 시간을 적절히 조정해주세요.

![Snackbar 동작 - 사용자가 터치를 유지하는 경우 타이머 일시정지](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64c82ee0-9b9c-4e20-8c7b-0618a5de99e3)

![한 화면에 3개의 Snackbar가 동시에 표시된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77d87a6d-2a86-4c55-87fc-26c9ecb3687d)

Don’t

한 번에 여러 개의 Snackbar를 표시하지 않습니다.

사용자가 Snackbar에 터치를 유지하는 경우 타이머가 일시정지됩니다. 이를 통해 메시지를 더 오래 확인하고 싶을 때 Snackbar를 화면에 계속 표시할 수 있습니다.

화면에는 한 번에 1개의 Snackbar만 표시합니다. 새로운 Snackbar가 발생하면 자동으로 큐에 추가되어, 현재 표시 중인 항목이 사라진 후 순차적으로 표시됩니다.

### [액션 사용하기](#액션-사용하기)

![Snackbar Action 레이블로 '되돌리기'가 표시된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9aa82a43-df03-4b19-a1cd-82e7e8d93dd0)

![Snackbar Action 레이블로 '확인'이 표시된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5237de89-fd64-42de-89fb-31ff8ef11e6d)

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

[$dimension.x2](/docs/foundation/design-token/%24dimension.x2)

paddingY

[$dimension.x2](/docs/foundation/design-token/%24dimension.x2)

offsetDuration

[$duration.d4](/docs/foundation/design-token/%24duration.d4)

offsetTimingFunction

[$timing-function.easing](/docs/foundation/design-token/%24timing-function.easing)

root

color

[$color.bg.neutral-inverted](/docs/foundation/design-token/%24color.bg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

cornerRadius

[$radius.r2](/docs/foundation/design-token/%24radius.r2)

minHeight

44px

maxWidth

560px

paddingX

[$dimension.x2\_5](/docs/foundation/design-token/%24dimension.x2_5)

paddingY

[$dimension.x2\_5](/docs/foundation/design-token/%24dimension.x2_5)

enterOpacity

0

enterScale

0.8

enterDuration

[$duration.d3](/docs/foundation/design-token/%24duration.d3)

enterTimingFunction

[$timing-function.enter](/docs/foundation/design-token/%24timing-function.enter)

exitOpacity

0

exitScale

0.8

exitDuration

[$duration.d2](/docs/foundation/design-token/%24duration.d2)

exitTimingFunction

[$timing-function.exit](/docs/foundation/design-token/%24timing-function.exit)

content

paddingX

[$dimension.x1\_5](/docs/foundation/design-token/%24dimension.x1_5)

gap

[$dimension.x2\_5](/docs/foundation/design-token/%24dimension.x2_5)

message

color

[$color.fg.neutral-inverted](/docs/foundation/design-token/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

fontSize

[$font-size.t4](/docs/foundation/design-token/%24font-size.t4)

lineHeight

[$line-height.t4](/docs/foundation/design-token/%24line-height.t4)

fontWeight

[$font-weight.regular](/docs/foundation/design-token/%24font-weight.regular)

prefixIcon

size

24px

paddingRight

[$dimension.x0\_5](/docs/foundation/design-token/%24dimension.x0_5)

actionButton

targetPaddingX

[$dimension.x2](/docs/foundation/design-token/%24dimension.x2)

targetMinHeight

44px

color

[$color.fg.brand](/docs/foundation/design-token/%24color.fg.brand)

브랜드와 관련된 요소들이 즉각적으로 인식될 수 있도록 돕습니다.

fontSize

[$font-size.t4](/docs/foundation/design-token/%24font-size.t4)

lineHeight

[$line-height.t4](/docs/foundation/design-token/%24line-height.t4)

fontWeight

[$font-weight.bold](/docs/foundation/design-token/%24font-weight.bold)

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

[$color.fg.positive](/docs/foundation/design-token/%24color.fg.positive)

성공적인 작업, 확인, 또는 긍정적인 상태를 나타내는 데 사용됩니다.

### variant=critical

상태

슬롯

속성

값

enabled

prefixIcon

color

[$color.fg.critical](/docs/foundation/design-token/%24color.fg.critical)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다.

Last updated on

[

Skeleton

콘텐츠가 로딩되는 동안 이후 나타날 요소의 윤곽을 미리 보여주어 로딩 시간을 짧게 느끼게 하는 UI 요소입니다.

](/docs/components/skeleton)[

Alert Dialog

사용자의 확인이 반드시 필요한 경우 강력한 표현 및 경고 수단으로 활용하는 컴포넌트입니다.

](/docs/components/alert-dialog)
