<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/action-sheet
fetched: 2026-08-31T04:58:58.686Z
-->

ComponentsLLMS.txt

# Action Sheet (Deprecated)

더 이상 사용되지 않습니다. [Menu Sheet](/components/menu-sheet)을 사용하세요.

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

maxWidth

480px

topCornerRadius

[$radius.r5](/foundations/design-token/reference/%24radius.r5)

enterDuration

[$duration.d6](/foundations/design-token/reference/%24duration.d6)

enterTimingFunction

[$timing-function.enter-expressive](/foundations/design-token/reference/%24timing-function.enter-expressive)

exitDuration

[$duration.d4](/foundations/design-token/reference/%24duration.d4)

exitTimingFunction

[$timing-function.exit](/foundations/design-token/reference/%24timing-function.exit)

header

paddingX

[$dimension.spacing-x.global-gutter](/foundations/design-token/reference/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

paddingY

[$dimension.x3\_5](/foundations/design-token/reference/%24dimension.x3_5)

gap

[$dimension.x1](/foundations/design-token/reference/%24dimension.x1)

title

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

[$line-height.t4](/foundations/design-token/reference/%24line-height.t4)

fontWeight

[$font-weight.bold](/foundations/design-token/reference/%24font-weight.bold)

color

[$color.fg.neutral-muted](/foundations/design-token/reference/%24color.fg.neutral-muted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (muted)

description

fontSize

[$font-size.t3](/foundations/design-token/reference/%24font-size.t3)

lineHeight

[$line-height.t3](/foundations/design-token/reference/%24line-height.t3)

fontWeight

[$font-weight.regular](/foundations/design-token/reference/%24font-weight.regular)

color

[$color.fg.neutral-muted](/foundations/design-token/reference/%24color.fg.neutral-muted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (muted)

divider

strokeWidth

1px

strokeColor

[$color.stroke.neutral-muted](/foundations/design-token/reference/%24color.stroke.neutral-muted)

의미 단위가 바뀌는 경계를 나누는 선입니다. 섹션과 섹션 사이, 콘텐츠와 액션 영역 사이, 헤더와 본문 경계처럼 한 화면에 한두 번만 등장하는 구분에 사용됩니다. (muted)

marginX

[$dimension.spacing-x.global-gutter](/foundations/design-token/reference/%24dimension.spacing-x.global-gutter)

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

[$color.bg.layer-floating](/foundations/design-token/reference/%24color.bg.layer-floating)

화면의 모든 콘텐츠 위를 덮으며(floating) 나타나는 임시 레이어입니다. 사용자의 상호작용을 필요로 하는 모달(Modal)성 요소들이 여기에 속합니다.

minHeight

50px

paddingX

[$dimension.spacing-x.global-gutter](/foundations/design-token/reference/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

paddingY

[$dimension.x3\_5](/foundations/design-token/reference/%24dimension.x3_5)

label

fontSize

[$font-size.t5](/foundations/design-token/reference/%24font-size.t5)

lineHeight

[$line-height.t5](/foundations/design-token/reference/%24line-height.t5)

fontWeight

[$font-weight.regular](/foundations/design-token/reference/%24font-weight.regular)

pressed

root

color

[$color.bg.layer-floating-pressed](/foundations/design-token/reference/%24color.bg.layer-floating-pressed)

화면의 모든 콘텐츠 위를 덮으며(floating) 나타나는 임시 레이어입니다. 사용자의 상호작용을 필요로 하는 모달(Modal)성 요소들이 여기에 속합니다. (pressed)

#### tone=neutral

상태

슬롯

속성

값

enabled

label

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

#### tone=critical

상태

슬롯

속성

값

enabled

label

color

[$color.fg.critical](/foundations/design-token/reference/%24color.fg.critical)

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

[$color.bg.layer-floating](/foundations/design-token/reference/%24color.bg.layer-floating)

화면의 모든 콘텐츠 위를 덮으며(floating) 나타나는 임시 레이어입니다. 사용자의 상호작용을 필요로 하는 모달(Modal)성 요소들이 여기에 속합니다.

minHeight

50px

paddingX

[$dimension.spacing-x.global-gutter](/foundations/design-token/reference/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

paddingY

[$dimension.x3\_5](/foundations/design-token/reference/%24dimension.x3_5)

label

fontSize

[$font-size.t5](/foundations/design-token/reference/%24font-size.t5)

lineHeight

[$line-height.t5](/foundations/design-token/reference/%24line-height.t5)

fontWeight

[$font-weight.bold](/foundations/design-token/reference/%24font-weight.bold)

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

pressed

root

color

[$color.bg.layer-floating-pressed](/foundations/design-token/reference/%24color.bg.layer-floating-pressed)

화면의 모든 콘텐츠 위를 덮으며(floating) 나타나는 임시 레이어입니다. 사용자의 상호작용을 필요로 하는 모달(Modal)성 요소들이 여기에 속합니다. (pressed)

Last updated on

[이전 문서Action Chip](/components/action-chip)[다음 문서Control Chip](/components/control-chip)
