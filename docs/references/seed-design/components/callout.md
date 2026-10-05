<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/callout
fetched: 2026-10-05T05:06:35.060Z
-->

ComponentsLLMS.txt

# Callout

사용자에게 중요한 정보나 팁을 시각적으로 강조하여 전달하는 메시지 컴포넌트입니다.

Figma[React](/react/components/callout)[Lynx](/lynx/components/callout)iOSAndroid

![Callout cover image](/og/components/callout.webp)

## [Anatomy](#anatomy)

![Callout의 Anatomy 이미지. Container, Prefix Icon, Title, Description, Link Text, Suffix Icon으로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/502304f3-e240-4075-9c7a-f9facc505462)

Callout은 텍스트 내용을 감싸고 있는 Container로 구성되어 있으며, 필요에 따라 Prefix Icon, Title, Link Text, Suffix Icon을 표시할 수 있습니다.

## [Properties](#properties)

### [Interaction](#interaction)

![Callout의 Interaction Property - Display, Actionable, Dismissible](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5dfb0d9-ecd2-4825-b51c-98f29dcce1d1)

Callout은 정보를 표시하는 Display, 선택하여 동작을 실행할 수 있는 Actionable, 스스로를 제거할 수 있는 Dismissible 세 가지 동작을 가질 수 있습니다.

### [Tone](#tone)

![Callout의 Tone Property - Neutral, Informative, Warning, Critical, Positive, Magic](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62c25028-f6a9-4d9e-87b4-62c50bfcb4b2)

Callout은 메시지의 목적에 따라 여섯 가지 톤을 선택하여 사용할 수 있습니다.

### [Prefix Icon Property](#prefix-icon-property)

![Callout의 Prefix Icon Property](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ddb06df-859e-4ce0-acfe-314b690c1089)

![Callout에 Line 타입 아이콘을 사용한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60cf29dc-e263-4a15-a646-a6e0b32b91c1)

Don’t

아이콘은 Fill 타입을 사용해주세요.

Prefix Icon을 표시할 수 있습니다. 아이콘은 Fill 타입 사용을 권장합니다.

### [Title Property](#title-property)

![Callout의 Title Property](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b5c319bb-3159-4587-b26c-47c7ce4fb390)

Show Title Property로 Title을 표시할 수 있습니다.

### [Link Text Property](#link-text-property)

![Callout의 Link Text Property](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82cb77e8-2438-4148-821e-0391d8e27fa2)

![Actionable Callout에서 Link Text를 사용하는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4a00012-8970-4e5e-bc64-7282b8ffbada)

Don’t

Actionable Callout에서는 Link Text를 사용하지 마세요.

Link Text를 표시할 수 있습니다. Container가 모두 클릭 영역인 Actionable Callout에서는 Link Text 표시를 권장하지 않습니다.

### [State](#state)

![Callout의 State - Enabled, Pressed](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/478ff4ac-a430-4911-a51e-ad95d8e54d65)

Actionable Callout에는 Pressed 상태가 있습니다.

## [Guidelines](#guidelines)

### [Title, Description, Link Text 사이 간격 표시](#title-description-link-text-사이-간격-표시)

![Title, Description, Link Text 사이 간격 표시 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3781f6b4-4efc-4c35-9d8e-6210b5856ed2)

Callout의 Title과 Link Text는 Inline 요소로, 텍스트처럼 줄을 차지하지 않고 배치됩니다.

Title과 Description 사이, 본문과 Link Text 사이의 여백은 두 번의 띄어쓰기로 표시합니다.

### [제목과 내용 작성하기](#제목과-내용-작성하기)

![Callout 제목과 내용 작성 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/465b0809-bfdd-4e21-bc7a-4ad9b46b8810)

![제목에 문장을 사용한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56d85801-871c-471f-92a8-8f0c591dec06)

Don’t

제목이 길어지지 않게 주의해주세요.

Callout 제목은 알림, 안내, 새소식, 공지와 같이 그 성격을 나타내는 짧은 단어로 표시합니다. 본문은 핵심 내용만 간결하게 작성하고, 제목에서 언급한 내용을 반복하지 않도록 합니다.

### [상황에 맞는 Tone 사용하기](#상황에-맞는-tone-사용하기)

Callout은 Neutral, Informative, Critical, Positive, Warning, Magic 총 여섯 가지의 Tone을 제공합니다. 맥락에 알맞은 Tone을 선택하여 사용해주세요.

![Callout의 Tone 사용 예시 - Neutral, Informative](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b0f7b0b-4cf9-4c02-9f77-d0d4ec5d044c)

![Callout의 Tone 사용 예시 - Critical, Positive](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41d3c253-3fe4-47d6-ac69-c8f43901bea8)

![Callout의 Tone 사용 예시 - Warning, Magic](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13f4f886-7fe9-4f3a-8186-bc340bdb4939)

Tone

사용 상황

**Neutral**

중립적이고 일반적인 메시지를 전달할 때 사용합니다.

**Informative**

사용자의 이해를 돕기 위한 유용한 정보, 가이드, 팁 등을 제공할 때 사용합니다.

**Critical**

심각한 오류나 즉각적인 사용자 조치가 필요한 경우 사용합니다.

**Positive**

사용자에게 성취, 성공, 혜택 등 긍정적인 피드백이나 격려 메시지를 전달할 때 사용합니다.

**Warning**

사용자의 행동에 주의가 필요하거나, 잠재적 문제를 사전에 알릴 때 사용합니다.

**Magic**

AI를 활용하여 특별한 경험을 주는 기능을 나타낼 때 사용합니다.

### [Link Text를 Nudge 용도로 사용하지 않기](#link-text를-nudge-용도로-사용하지-않기)

![Link Text 없이 Actionable Callout 사용 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a144ad85-2ce1-4040-ab4d-29f4f81816b2)

![Link Text를 Nudge 용도로 사용하는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3833dd65-c65a-4af7-a979-9b70765ee941)

Don’t

Link Text는 Nudge 용도로 사용하지 않습니다.

링크는 보조적인 내용을 전달하는 용도로만 사용해주세요. 사용자의 행동을 유도하거나 상태를 강조해야 한다면 Actionable Callout을 사용하세요.

### [Dismissible 인터랙션 사용하기](#dismissible-인터랙션-사용하기)

![Dismissible Callout 사용 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84208a2e-955e-4a95-abbd-5abde450dc98)

Dismissible Callout은 사용자에게 한 번만 전달해도 충분한 정보에 한해 사용하며, 경고·오류 메시지에는 사용하지 않습니다.

닫은 후에 동일한 메시지가 반복해서 표시되지 않도록 주의해주세요.

## [Specification](#specification)

### [Callout](#callout)

#### base

상태

슬롯

속성

값

enabled

root

paddingX

[$dimension.x3\_5](/foundations/design-token/reference/%24dimension.x3_5)

paddingY

[$dimension.x3\_5](/foundations/design-token/reference/%24dimension.x3_5)

gap

[$dimension.x3](/foundations/design-token/reference/%24dimension.x3)

cornerRadius

[$radius.r2\_5](/foundations/design-token/reference/%24radius.r2_5)

minHeight

50px

prefixIcon

아이콘은 Fill 타입 사용을 권장합니다.

size

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

title

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

[$line-height.t4](/foundations/design-token/reference/%24line-height.t4)

fontWeight

[$font-weight.bold](/foundations/design-token/reference/%24font-weight.bold)

description

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

[$line-height.t4](/foundations/design-token/reference/%24line-height.t4)

fontWeight

[$font-weight.regular](/foundations/design-token/reference/%24font-weight.regular)

link

root가 클릭 영역인 Actionable Callout에서는 표시를 권장하지 않습니다.

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

[$line-height.t4](/foundations/design-token/reference/%24line-height.t4)

fontWeight

[$font-weight.regular](/foundations/design-token/reference/%24font-weight.regular)

suffixIcon

size

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

pressed

root

scaleScope

self

#### tone=neutral

-   일반적인 정보를 전달합니다.

상태

슬롯

속성

값

enabled

root

color

[$color.bg.neutral-weak](/foundations/design-token/reference/%24color.bg.neutral-weak)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (weak)

prefixIcon

아이콘은 Fill 타입 사용을 권장합니다.

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

title

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

description

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

link

root가 클릭 영역인 Actionable Callout에서는 표시를 권장하지 않습니다.

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

suffixIcon

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

pressed

root

color

[$color.bg.neutral-weak-pressed](/foundations/design-token/reference/%24color.bg.neutral-weak-pressed)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (weak-pressed)

#### tone=informative

-   유용한 정보를 제공합니다.

상태

슬롯

속성

값

enabled

root

color

[$color.bg.informative-weak](/foundations/design-token/reference/%24color.bg.informative-weak)

사용자에게 유용한 정보를 제공하거나 상태를 설명할 때 사용됩니다. (weak)

prefixIcon

아이콘은 Fill 타입 사용을 권장합니다.

color

[$color.fg.informative-contrast](/foundations/design-token/reference/%24color.fg.informative-contrast)

사용자에게 유용한 정보를 제공하거나 상태를 설명할 때 사용됩니다. (contrast)

title

color

[$color.fg.informative-contrast](/foundations/design-token/reference/%24color.fg.informative-contrast)

사용자에게 유용한 정보를 제공하거나 상태를 설명할 때 사용됩니다. (contrast)

description

color

[$color.fg.informative-contrast](/foundations/design-token/reference/%24color.fg.informative-contrast)

사용자에게 유용한 정보를 제공하거나 상태를 설명할 때 사용됩니다. (contrast)

link

root가 클릭 영역인 Actionable Callout에서는 표시를 권장하지 않습니다.

color

[$color.fg.informative-contrast](/foundations/design-token/reference/%24color.fg.informative-contrast)

사용자에게 유용한 정보를 제공하거나 상태를 설명할 때 사용됩니다. (contrast)

suffixIcon

color

[$color.fg.informative-contrast](/foundations/design-token/reference/%24color.fg.informative-contrast)

사용자에게 유용한 정보를 제공하거나 상태를 설명할 때 사용됩니다. (contrast)

pressed

root

color

[$color.bg.informative-weak-pressed](/foundations/design-token/reference/%24color.bg.informative-weak-pressed)

사용자에게 유용한 정보를 제공하거나 상태를 설명할 때 사용됩니다. (weak-pressed)

#### tone=positive

-   긍정적인 상태를 나타냅니다.

상태

슬롯

속성

값

enabled

root

color

[$color.bg.positive-weak](/foundations/design-token/reference/%24color.bg.positive-weak)

성공적인 작업, 확인, 또는 긍정적인 상태를 나타내는 데 사용됩니다. (weak)

prefixIcon

아이콘은 Fill 타입 사용을 권장합니다.

color

[$color.fg.positive-contrast](/foundations/design-token/reference/%24color.fg.positive-contrast)

성공적인 작업, 확인, 또는 긍정적인 상태를 나타내는 데 사용됩니다. (contrast)

title

color

[$color.fg.positive-contrast](/foundations/design-token/reference/%24color.fg.positive-contrast)

성공적인 작업, 확인, 또는 긍정적인 상태를 나타내는 데 사용됩니다. (contrast)

description

color

[$color.fg.positive-contrast](/foundations/design-token/reference/%24color.fg.positive-contrast)

성공적인 작업, 확인, 또는 긍정적인 상태를 나타내는 데 사용됩니다. (contrast)

link

root가 클릭 영역인 Actionable Callout에서는 표시를 권장하지 않습니다.

color

[$color.fg.positive-contrast](/foundations/design-token/reference/%24color.fg.positive-contrast)

성공적인 작업, 확인, 또는 긍정적인 상태를 나타내는 데 사용됩니다. (contrast)

suffixIcon

color

[$color.fg.positive-contrast](/foundations/design-token/reference/%24color.fg.positive-contrast)

성공적인 작업, 확인, 또는 긍정적인 상태를 나타내는 데 사용됩니다. (contrast)

pressed

root

color

[$color.bg.positive-weak-pressed](/foundations/design-token/reference/%24color.bg.positive-weak-pressed)

성공적인 작업, 확인, 또는 긍정적인 상태를 나타내는 데 사용됩니다. (weak-pressed)

#### tone=warning

-   주의가 필요한 상태를 나타냅니다.

상태

슬롯

속성

값

enabled

root

color

[$color.bg.warning-weak](/foundations/design-token/reference/%24color.bg.warning-weak)

사용자의 주의가 필요한 경고 메시지나 안내 사항을 전달하는 데 사용됩니다. (weak)

prefixIcon

아이콘은 Fill 타입 사용을 권장합니다.

color

[$color.fg.warning-contrast](/foundations/design-token/reference/%24color.fg.warning-contrast)

사용자의 주의가 필요한 경고 메시지나 안내 사항을 전달하는 데 사용됩니다. (contrast)

title

color

[$color.fg.warning-contrast](/foundations/design-token/reference/%24color.fg.warning-contrast)

사용자의 주의가 필요한 경고 메시지나 안내 사항을 전달하는 데 사용됩니다. (contrast)

description

color

[$color.fg.warning-contrast](/foundations/design-token/reference/%24color.fg.warning-contrast)

사용자의 주의가 필요한 경고 메시지나 안내 사항을 전달하는 데 사용됩니다. (contrast)

link

root가 클릭 영역인 Actionable Callout에서는 표시를 권장하지 않습니다.

color

[$color.fg.warning-contrast](/foundations/design-token/reference/%24color.fg.warning-contrast)

사용자의 주의가 필요한 경고 메시지나 안내 사항을 전달하는 데 사용됩니다. (contrast)

suffixIcon

color

[$color.fg.warning-contrast](/foundations/design-token/reference/%24color.fg.warning-contrast)

사용자의 주의가 필요한 경고 메시지나 안내 사항을 전달하는 데 사용됩니다. (contrast)

pressed

root

color

[$color.bg.warning-weak-pressed](/foundations/design-token/reference/%24color.bg.warning-weak-pressed)

사용자의 주의가 필요한 경고 메시지나 안내 사항을 전달하는 데 사용됩니다. (weak-pressed)

#### tone=critical

-   중요한 문제를 나타냅니다.

상태

슬롯

속성

값

enabled

root

color

[$color.bg.critical-weak](/foundations/design-token/reference/%24color.bg.critical-weak)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다. (weak)

prefixIcon

아이콘은 Fill 타입 사용을 권장합니다.

color

[$color.fg.critical-contrast](/foundations/design-token/reference/%24color.fg.critical-contrast)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다. (contrast)

title

color

[$color.fg.critical-contrast](/foundations/design-token/reference/%24color.fg.critical-contrast)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다. (contrast)

description

color

[$color.fg.critical-contrast](/foundations/design-token/reference/%24color.fg.critical-contrast)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다. (contrast)

link

root가 클릭 영역인 Actionable Callout에서는 표시를 권장하지 않습니다.

color

[$color.fg.critical-contrast](/foundations/design-token/reference/%24color.fg.critical-contrast)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다. (contrast)

suffixIcon

color

[$color.fg.critical-contrast](/foundations/design-token/reference/%24color.fg.critical-contrast)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다. (contrast)

pressed

root

color

[$color.bg.critical-weak-pressed](/foundations/design-token/reference/%24color.bg.critical-weak-pressed)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다. (weak-pressed)

#### tone=magic

-   AI 기능을 나타냅니다.

상태

슬롯

속성

값

enabled

root

gradient

[$gradient.glow-magic](/foundations/design-token/reference/%24gradient.glow-magic)

반짝이는 것처럼 느껴지는 배경에 쓰이는 ai 컬러입니다.

prefixIcon

아이콘은 Fill 타입 사용을 권장합니다.

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

title

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

description

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

link

root가 클릭 영역인 Actionable Callout에서는 표시를 권장하지 않습니다.

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

suffixIcon

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

pressed

root

gradient

[$gradient.glow-magic-pressed](/foundations/design-token/reference/%24gradient.glow-magic-pressed)

반짝이는 것처럼 느껴지는 배경에 쓰이는 ai 컬러의 pressed컬러입니다.

### [Callout Close Button](#callout-close-button)

#### base

상태

슬롯

속성

값

enabled

root

color

[$color.bg.transparent](/foundations/design-token/reference/%24color.bg.transparent)

cornerRadius

[$radius.r2](/foundations/design-token/reference/%24radius.r2)

size

[$dimension.x10](/foundations/design-token/reference/%24dimension.x10)

colorDuration

[$duration.color-transition](/foundations/design-token/reference/%24duration.color-transition)

colorTimingFunction

[$timing-function.easing](/foundations/design-token/reference/%24timing-function.easing)

icon

size

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

pressed

root

color

[$color.bg.transparent-pressed](/foundations/design-token/reference/%24color.bg.transparent-pressed)

scaleScope

self

#### tone=neutral

-   일반적인 정보를 전달합니다.

상태

슬롯

속성

값

enabled

icon

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

#### tone=informative

-   유용한 정보를 제공합니다.

상태

슬롯

속성

값

enabled

icon

color

[$color.fg.informative-contrast](/foundations/design-token/reference/%24color.fg.informative-contrast)

사용자에게 유용한 정보를 제공하거나 상태를 설명할 때 사용됩니다. (contrast)

#### tone=positive

-   긍정적인 상태를 나타냅니다.

상태

슬롯

속성

값

enabled

icon

color

[$color.fg.positive-contrast](/foundations/design-token/reference/%24color.fg.positive-contrast)

성공적인 작업, 확인, 또는 긍정적인 상태를 나타내는 데 사용됩니다. (contrast)

#### tone=warning

-   주의가 필요한 상태를 나타냅니다.

상태

슬롯

속성

값

enabled

icon

color

[$color.fg.warning-contrast](/foundations/design-token/reference/%24color.fg.warning-contrast)

사용자의 주의가 필요한 경고 메시지나 안내 사항을 전달하는 데 사용됩니다. (contrast)

#### tone=critical

-   중요한 문제를 나타냅니다.

상태

슬롯

속성

값

enabled

icon

color

[$color.fg.critical-contrast](/foundations/design-token/reference/%24color.fg.critical-contrast)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다. (contrast)

#### tone=magic

-   AI 기능을 나타냅니다.

상태

슬롯

속성

값

enabled

icon

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

Last updated on

[이전 문서Bottom Sheet](/components/bottom-sheet)[다음 문서Checkbox](/components/checkbox)
