<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/action-sheet
fetched: 2026-05-08T06:33:25.362Z
-->

[Components](/docs/components)Deprecated

# Action Sheet (Deprecated)

LLMs.txt

다른 도구로 열기

Deprecated

더 이상 사용되지 않습니다. [Menu Sheet](/docs/components/menu-sheet)을 사용하세요.

## [옵션 테이블](#옵션-테이블)

속성

값

기본값

title

string

description

string

## [Specification](#specification)

### [Action Sheet](#action-sheet)

#### base

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

maxWidth

480px

topCornerRadius

[$radius.r5](/docs/foundation/design-token/%24radius.r5)

enterDuration

[$duration.d6](/docs/foundation/design-token/%24duration.d6)

enterTimingFunction

[$timing-function.enter-expressive](/docs/foundation/design-token/%24timing-function.enter-expressive)

exitDuration

[$duration.d4](/docs/foundation/design-token/%24duration.d4)

exitTimingFunction

[$timing-function.exit](/docs/foundation/design-token/%24timing-function.exit)

header

paddingX

[$dimension.spacing-x.global-gutter](/docs/foundation/design-token/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

paddingY

[$dimension.x3\_5](/docs/foundation/design-token/%24dimension.x3_5)

gap

[$dimension.x1](/docs/foundation/design-token/%24dimension.x1)

title

fontSize

[$font-size.t4](/docs/foundation/design-token/%24font-size.t4)

lineHeight

[$line-height.t4](/docs/foundation/design-token/%24line-height.t4)

fontWeight

[$font-weight.bold](/docs/foundation/design-token/%24font-weight.bold)

color

[$color.fg.neutral-muted](/docs/foundation/design-token/%24color.fg.neutral-muted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (muted)

description

fontSize

[$font-size.t3](/docs/foundation/design-token/%24font-size.t3)

lineHeight

[$line-height.t3](/docs/foundation/design-token/%24line-height.t3)

fontWeight

[$font-weight.regular](/docs/foundation/design-token/%24font-weight.regular)

color

[$color.fg.neutral-muted](/docs/foundation/design-token/%24color.fg.neutral-muted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (muted)

divider

strokeWidth

1px

strokeColor

[$color.stroke.neutral-muted](/docs/foundation/design-token/%24color.stroke.neutral-muted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (muted)

marginX

[$dimension.spacing-x.global-gutter](/docs/foundation/design-token/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

### [Action Sheet Item](#action-sheet-item)

#### base

상태

슬롯

속성

값

enabled

root

color

[$color.bg.layer-floating](/docs/foundation/design-token/%24color.bg.layer-floating)

화면의 모든 콘텐츠 위를 덮으며(floating) 나타나는 임시 레이어입니다. 사용자의 상호작용을 필요로 하는 모달(Modal)성 요소들이 여기에 속합니다.

minHeight

50px

paddingX

[$dimension.spacing-x.global-gutter](/docs/foundation/design-token/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

paddingY

[$dimension.x3\_5](/docs/foundation/design-token/%24dimension.x3_5)

label

fontSize

[$font-size.t5](/docs/foundation/design-token/%24font-size.t5)

lineHeight

[$line-height.t5](/docs/foundation/design-token/%24line-height.t5)

fontWeight

[$font-weight.regular](/docs/foundation/design-token/%24font-weight.regular)

pressed

root

color

[$color.bg.layer-floating-pressed](/docs/foundation/design-token/%24color.bg.layer-floating-pressed)

화면의 모든 콘텐츠 위를 덮으며(floating) 나타나는 임시 레이어입니다. 사용자의 상호작용을 필요로 하는 모달(Modal)성 요소들이 여기에 속합니다. (pressed)

#### tone=neutral

상태

슬롯

속성

값

enabled

label

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

#### tone=critical

상태

슬롯

속성

값

enabled

label

color

[$color.fg.critical](/docs/foundation/design-token/%24color.fg.critical)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다.

### [Action Sheet Close Button](#action-sheet-close-button)

#### base

상태

슬롯

속성

값

enabled

root

color

[$color.bg.layer-floating](/docs/foundation/design-token/%24color.bg.layer-floating)

화면의 모든 콘텐츠 위를 덮으며(floating) 나타나는 임시 레이어입니다. 사용자의 상호작용을 필요로 하는 모달(Modal)성 요소들이 여기에 속합니다.

minHeight

50px

paddingX

[$dimension.spacing-x.global-gutter](/docs/foundation/design-token/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

paddingY

[$dimension.x3\_5](/docs/foundation/design-token/%24dimension.x3_5)

label

fontSize

[$font-size.t5](/docs/foundation/design-token/%24font-size.t5)

lineHeight

[$line-height.t5](/docs/foundation/design-token/%24line-height.t5)

fontWeight

[$font-weight.bold](/docs/foundation/design-token/%24font-weight.bold)

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

pressed

root

color

[$color.bg.layer-floating-pressed](/docs/foundation/design-token/%24color.bg.layer-floating-pressed)

화면의 모든 콘텐츠 위를 덮으며(floating) 나타나는 임시 레이어입니다. 사용자의 상호작용을 필요로 하는 모달(Modal)성 요소들이 여기에 속합니다. (pressed)

Last updated on

[

Action ChipDeprecated

Previous Page

](/docs/components/action-chip)[

Control ChipDeprecated

Next Page

](/docs/components/control-chip)
