<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/callout
fetched: 2026-05-08T06:33:25.844Z
-->

[Components](/docs/components)Feedback

# Callout

사용자에게 중요한 정보나 팁을 시각적으로 강조하여 전달하는 메시지 컴포넌트입니다.

LLMs.txt

다른 도구로 열기

Figma

Done

[

React

Done

](/react/components/callout)

iOS

Done

Android

Done

## [Anatomy](#anatomy)

![Callout의 Anatomy 이미지. Container, Prefix Icon, Title, Description, Link Text, Suffix Icon으로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8510aee-b85f-4335-ac88-90c4a9e7eb28)

Callout은 텍스트 내용을 감싸고 있는 Container로 구성되어 있으며, 필요에 따라 Prefix Icon, Title, Link Text, Suffix Icon을 표시할 수 있습니다.

## [Properties](#properties)

### [Interaction](#interaction)

![Callout의 Interaction Property - Display, Actionable, Dismissible](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c28c14c-7230-4d10-8b0c-dd6f75e6cdaa)

Callout은 정보를 표시하는 Display, 선택하여 동작을 실행할 수 있는 Actionable, 스스로를 제거할 수 있는 Dismissible 세 가지 동작을 가질 수 있습니다.

### [Tone](#tone)

![Callout의 Tone Property - Neutral, Informative, Warning, Critical, Positive, Magic](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ed2b553-ec6e-46a7-88f0-f5efa0a930a1)

Callout은 메시지의 목적에 따라 여섯 가지 톤을 선택하여 사용할 수 있습니다.

### [Prefix Icon Property](#prefix-icon-property)

![Callout의 Prefix Icon Property](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe9c737f-4386-4d06-8c42-6451093df6ab)

![Callout에 Line 타입 아이콘을 사용한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/281b7799-cb3f-4346-acfe-11fac35437ac)

Don’t

아이콘은 Fill 타입을 사용해주세요.

Prefix Icon을 표시할 수 있습니다. **아이콘은 Fill 타입 사용을 권장합니다.**

### [Title Property](#title-property)

![Callout의 Title Property](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e2fb840-e186-4c38-a74a-a51184f8ab3f)

Show Title Property로 Title을 표시할 수 있습니다.

### [Link Text Property](#link-text-property)

![Callout의 Link Text Property](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/87a0e42d-3719-4d80-ab24-b376efe597dc)

![Actionable Callout에서 Link Text를 사용하는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5556602f-0091-4f55-b684-086fbc334ebb)

Don’t

Actionable Callout에서는 Link Text를 사용하지 마세요.

Link Text를 표시할 수 있습니다. **Container가 모두 클릭 영역인 Actionable Callout에서는 Link Text 표시를 권장하지 않습니다.**

### [State](#state)

![Callout의 State - Enabled, Pressed](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da5ac498-7f26-4b98-90c1-d733eb797f2b)

Actionable Callout에는 Pressed 상태가 있습니다.

## [Guidelines](#guidelines)

### [Title, Description, Link Text 사이 간격 표시](#title-description-link-text-사이-간격-표시)

![Title, Description, Link Text 사이 간격 표시 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d406c4c-af69-4da8-96f9-cf2a28f0875b)

Callout의 Title과 Link Text는 Inline 요소로, 텍스트처럼 줄을 차지하지 않고 배치됩니다.

Title과 Description 사이, 본문과 Link Text 사이의 여백은 두 번의 띄어쓰기로 표시합니다.

### [제목과 내용 작성하기](#제목과-내용-작성하기)

![Callout 제목과 내용 작성 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d05a61c8-562e-4d89-8b71-389ca1768bc7)

![제목에 문장을 사용한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1aab060f-607e-4957-937e-b84daf6f5cef)

Don’t

제목이 길어지지 않게 주의해주세요.

Callout 제목은 알림, 안내, 새소식, 공지와 같이 그 성격을 나타내는 짧은 단어로 표시합니다. 본문은 핵심 내용만 간결하게 작성하고, 제목에서 언급한 내용을 반복하지 않도록 합니다.

### [상황에 맞는 Tone 사용하기](#상황에-맞는-tone-사용하기)

Callout은 Neutral, Informative, Critical, Positive, Warning, Magic 총 여섯 가지의 Tone을 제공합니다. 맥락에 알맞은 Tone을 선택하여 사용해주세요.

![Callout의 Tone 사용 예시 - Neutral, Informative](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63b15975-85f4-4023-98cb-28e67ad26f47)

![Callout의 Tone 사용 예시 - Critical, Positive](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/444372b4-3a48-47c3-bc91-b503ce003680)

![Callout의 Tone 사용 예시 - Warning, Magic](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c32692e9-021d-44a9-9d26-14dde91b6249)

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

![Link Text 없이 Actionable Callout 사용 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11161787-7220-46d7-ad64-fcec054090b4)

![Link Text를 Nudge 용도로 사용하는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c60a9d61-64bd-40c5-aa4f-64783d0dd540)

Don’t

Link Text는 Nudge 용도로 사용하지 않습니다.

링크는 보조적인 내용을 전달하는 용도로만 사용해주세요. 사용자의 행동을 유도하거나 상태를 강조해야 한다면 Actionable Callout을 사용하세요.

### [Dismissible 인터랙션 사용하기](#dismissible-인터랙션-사용하기)

![Dismissible Callout 사용 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7759f0bb-1ebd-4d15-abf8-be051a3d4df6)

![경고·오류 메시지에 Dismissible Callout을 사용하는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6deaac6-d798-44fe-861f-1b2d9ed79b72)

Don’t

경고·오류 메시지에 Dismissible Callout을 사용하지 않습니다.

Dismissible Callout은 사용자에게 한 번만 전달해도 충분한 정보에 한해 사용하며, 경고·오류 메시지에는 사용하지 않습니다.

닫은 후에 동일한 메시지가 반복해서 표시되지 않도록 주의해주세요.

## [Specification](#specification)

### base

상태

슬롯

속성

값

enabled

root

paddingX

[$dimension.x3\_5](/docs/foundation/design-token/%24dimension.x3_5)

paddingY

[$dimension.x3\_5](/docs/foundation/design-token/%24dimension.x3_5)

gap

[$dimension.x3](/docs/foundation/design-token/%24dimension.x3)

cornerRadius

[$radius.r2\_5](/docs/foundation/design-token/%24radius.r2_5)

minHeight

50px

prefixIcon

아이콘은 Fill 타입 사용을 권장합니다.

size

[$dimension.x4](/docs/foundation/design-token/%24dimension.x4)

title

fontSize

[$font-size.t4](/docs/foundation/design-token/%24font-size.t4)

lineHeight

[$line-height.t4](/docs/foundation/design-token/%24line-height.t4)

fontWeight

[$font-weight.bold](/docs/foundation/design-token/%24font-weight.bold)

description

fontSize

[$font-size.t4](/docs/foundation/design-token/%24font-size.t4)

lineHeight

[$line-height.t4](/docs/foundation/design-token/%24line-height.t4)

fontWeight

[$font-weight.regular](/docs/foundation/design-token/%24font-weight.regular)

link

root가 클릭 영역인 Actionable Callout에서는 표시를 권장하지 않습니다.

fontSize

[$font-size.t4](/docs/foundation/design-token/%24font-size.t4)

lineHeight

[$line-height.t4](/docs/foundation/design-token/%24line-height.t4)

fontWeight

[$font-weight.regular](/docs/foundation/design-token/%24font-weight.regular)

suffixIcon

size

[$dimension.x4](/docs/foundation/design-token/%24dimension.x4)

targetSize

[$dimension.x10](/docs/foundation/design-token/%24dimension.x10)

### tone=neutral

-   일반적인 정보를 전달합니다.

상태

슬롯

속성

값

enabled

root

color

[$color.bg.neutral-weak](/docs/foundation/design-token/%24color.bg.neutral-weak)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (weak)

prefixIcon

아이콘은 Fill 타입 사용을 권장합니다.

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

title

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

description

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

link

root가 클릭 영역인 Actionable Callout에서는 표시를 권장하지 않습니다.

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

suffixIcon

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

pressed

root

color

[$color.bg.neutral-weak-pressed](/docs/foundation/design-token/%24color.bg.neutral-weak-pressed)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (weak-pressed)

### tone=informative

-   유용한 정보를 제공합니다.

상태

슬롯

속성

값

enabled

root

color

[$color.bg.informative-weak](/docs/foundation/design-token/%24color.bg.informative-weak)

사용자에게 유용한 정보를 제공하거나 상태를 설명할 때 사용됩니다. (weak)

prefixIcon

아이콘은 Fill 타입 사용을 권장합니다.

color

[$color.fg.informative-contrast](/docs/foundation/design-token/%24color.fg.informative-contrast)

사용자에게 유용한 정보를 제공하거나 상태를 설명할 때 사용됩니다. (contrast)

title

color

[$color.fg.informative-contrast](/docs/foundation/design-token/%24color.fg.informative-contrast)

사용자에게 유용한 정보를 제공하거나 상태를 설명할 때 사용됩니다. (contrast)

description

color

[$color.fg.informative-contrast](/docs/foundation/design-token/%24color.fg.informative-contrast)

사용자에게 유용한 정보를 제공하거나 상태를 설명할 때 사용됩니다. (contrast)

link

root가 클릭 영역인 Actionable Callout에서는 표시를 권장하지 않습니다.

color

[$color.fg.informative-contrast](/docs/foundation/design-token/%24color.fg.informative-contrast)

사용자에게 유용한 정보를 제공하거나 상태를 설명할 때 사용됩니다. (contrast)

suffixIcon

color

[$color.fg.informative-contrast](/docs/foundation/design-token/%24color.fg.informative-contrast)

사용자에게 유용한 정보를 제공하거나 상태를 설명할 때 사용됩니다. (contrast)

pressed

root

color

[$color.bg.informative-weak-pressed](/docs/foundation/design-token/%24color.bg.informative-weak-pressed)

사용자에게 유용한 정보를 제공하거나 상태를 설명할 때 사용됩니다. (weak-pressed)

### tone=positive

-   긍정적인 상태를 나타냅니다.

상태

슬롯

속성

값

enabled

root

color

[$color.bg.positive-weak](/docs/foundation/design-token/%24color.bg.positive-weak)

성공적인 작업, 확인, 또는 긍정적인 상태를 나타내는 데 사용됩니다. (weak)

prefixIcon

아이콘은 Fill 타입 사용을 권장합니다.

color

[$color.fg.positive-contrast](/docs/foundation/design-token/%24color.fg.positive-contrast)

성공적인 작업, 확인, 또는 긍정적인 상태를 나타내는 데 사용됩니다. (contrast)

title

color

[$color.fg.positive-contrast](/docs/foundation/design-token/%24color.fg.positive-contrast)

성공적인 작업, 확인, 또는 긍정적인 상태를 나타내는 데 사용됩니다. (contrast)

description

color

[$color.fg.positive-contrast](/docs/foundation/design-token/%24color.fg.positive-contrast)

성공적인 작업, 확인, 또는 긍정적인 상태를 나타내는 데 사용됩니다. (contrast)

link

root가 클릭 영역인 Actionable Callout에서는 표시를 권장하지 않습니다.

color

[$color.fg.positive-contrast](/docs/foundation/design-token/%24color.fg.positive-contrast)

성공적인 작업, 확인, 또는 긍정적인 상태를 나타내는 데 사용됩니다. (contrast)

suffixIcon

color

[$color.fg.positive-contrast](/docs/foundation/design-token/%24color.fg.positive-contrast)

성공적인 작업, 확인, 또는 긍정적인 상태를 나타내는 데 사용됩니다. (contrast)

pressed

root

color

[$color.bg.positive-weak-pressed](/docs/foundation/design-token/%24color.bg.positive-weak-pressed)

성공적인 작업, 확인, 또는 긍정적인 상태를 나타내는 데 사용됩니다. (weak-pressed)

### tone=warning

-   주의가 필요한 상태를 나타냅니다.

상태

슬롯

속성

값

enabled

root

color

[$color.bg.warning-weak](/docs/foundation/design-token/%24color.bg.warning-weak)

사용자의 주의가 필요한 경고 메시지나 안내 사항을 전달하는 데 사용됩니다. (weak)

prefixIcon

아이콘은 Fill 타입 사용을 권장합니다.

color

[$color.fg.warning-contrast](/docs/foundation/design-token/%24color.fg.warning-contrast)

사용자의 주의가 필요한 경고 메시지나 안내 사항을 전달하는 데 사용됩니다. (contrast)

title

color

[$color.fg.warning-contrast](/docs/foundation/design-token/%24color.fg.warning-contrast)

사용자의 주의가 필요한 경고 메시지나 안내 사항을 전달하는 데 사용됩니다. (contrast)

description

color

[$color.fg.warning-contrast](/docs/foundation/design-token/%24color.fg.warning-contrast)

사용자의 주의가 필요한 경고 메시지나 안내 사항을 전달하는 데 사용됩니다. (contrast)

link

root가 클릭 영역인 Actionable Callout에서는 표시를 권장하지 않습니다.

color

[$color.fg.warning-contrast](/docs/foundation/design-token/%24color.fg.warning-contrast)

사용자의 주의가 필요한 경고 메시지나 안내 사항을 전달하는 데 사용됩니다. (contrast)

suffixIcon

color

[$color.fg.warning-contrast](/docs/foundation/design-token/%24color.fg.warning-contrast)

사용자의 주의가 필요한 경고 메시지나 안내 사항을 전달하는 데 사용됩니다. (contrast)

pressed

root

color

[$color.bg.warning-weak-pressed](/docs/foundation/design-token/%24color.bg.warning-weak-pressed)

사용자의 주의가 필요한 경고 메시지나 안내 사항을 전달하는 데 사용됩니다. (weak-pressed)

### tone=critical

-   중요한 문제를 나타냅니다.

상태

슬롯

속성

값

enabled

root

color

[$color.bg.critical-weak](/docs/foundation/design-token/%24color.bg.critical-weak)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다. (weak)

prefixIcon

아이콘은 Fill 타입 사용을 권장합니다.

color

[$color.fg.critical-contrast](/docs/foundation/design-token/%24color.fg.critical-contrast)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다. (contrast)

title

color

[$color.fg.critical-contrast](/docs/foundation/design-token/%24color.fg.critical-contrast)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다. (contrast)

description

color

[$color.fg.critical-contrast](/docs/foundation/design-token/%24color.fg.critical-contrast)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다. (contrast)

link

root가 클릭 영역인 Actionable Callout에서는 표시를 권장하지 않습니다.

color

[$color.fg.critical-contrast](/docs/foundation/design-token/%24color.fg.critical-contrast)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다. (contrast)

suffixIcon

color

[$color.fg.critical-contrast](/docs/foundation/design-token/%24color.fg.critical-contrast)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다. (contrast)

pressed

root

color

[$color.bg.critical-weak-pressed](/docs/foundation/design-token/%24color.bg.critical-weak-pressed)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다. (weak-pressed)

### tone=magic

-   AI 기능을 나타냅니다.

상태

슬롯

속성

값

enabled

root

gradient

[$gradient.glow-magic](/docs/foundation/design-token/%24gradient.glow-magic)

반짝이는 것처럼 느껴지는 배경에 쓰이는 ai 컬러입니다.

prefixIcon

아이콘은 Fill 타입 사용을 권장합니다.

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

title

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

description

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

link

root가 클릭 영역인 Actionable Callout에서는 표시를 권장하지 않습니다.

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

suffixIcon

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

pressed

root

gradient

[$gradient.glow-magic-pressed](/docs/foundation/design-token/%24gradient.glow-magic-pressed)

반짝이는 것처럼 느껴지는 배경에 쓰이는 ai 컬러의 pressed컬러입니다.

Last updated on

[

Tag Group

아이콘과 텍스트 태그를 수평으로 나열해 여러 속성·상태·메타데이터를 한눈에 보여주는 정보 요약 컴포넌트입니다.

](/docs/components/tag-group)[

Help Bubble

사용자에게 컴포넌트의 상태나 특정 기능에 대한 추가 정보를 제공하는 컴포넌트입니다.

](/docs/components/help-bubble)
