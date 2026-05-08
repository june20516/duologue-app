<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/foundation/spacing
fetched: 2026-05-08T05:43:06.793Z
-->

Foundation

# Spacing

Spacing은 컴포넌트 혹은 콘텐츠 간의 간격을 표현합니다.

LLMs.txt

다른 도구로 열기

디자인에서 간격은 시각적 균형과 사용자 경험을 향상시키는 중요한 요소입니다. 본 가이드는 일관성 있고 효과적인 간격 시스템을 구축하기 위한 지침을 제공합니다.

## [Purpose](#purpose)

-   **일관성 유지**: 모든 레이아웃과 컴포넌트에서 동일한 스케일을 사용하여 디자인의 통일감을 제공합니다.
-   **모듈성**: 미리 정의된 스케일 값(예: dimension-x1, dimension-x2 등)을 통해 간격을 체계적으로 관리합니다.
-   **가독성 및 사용자 경험 향상**: 적절한 여백을 통해 콘텐츠 간의 구분과 시각적 흐름을 개선합니다.

## [Horizontal Spacing (수평 간격)](#horizontal-spacing-수평-간격)

수평 간격은 요소들이 가로로 나란히 배치될 때 적용되는 공간을 의미합니다. 이 방식을 통해 디자이너와 개발자는 일관된 수평 간격을 쉽게 적용할 수 있으며, 전체적인 레이아웃 및 요소간의 균형을 효과적으로 유지할 수 있습니다.

### [Nav to title](#nav-to-title)

`nav-to-title`은 네비게이션 바 아래에 위치한 타이틀과 네비게이션 간의 간격을 정의합니다.

![nav-to-title](/docs/foundation/spacing/nav-to-title.webp)

nav-to-title

### [Component default](#component-default)

`component-default`는 디자인 시스템에서 컴포넌트의 기본 간격을 정의하는 토큰입니다. 이는 버튼간의 간격, 카드, 폼 등 다양한 컴포넌트의 내부 요소 간 간격이나 컴포넌트 간의 기본 간격으로 사용되어 디자인의 일관성을 유지하는 데 도움을 줍니다.

![component-default](/docs/foundation/spacing/component-default.webp)

component-default

## [Vertical Spacing (수직 간격)](#vertical-spacing-수직-간격)

수직 간격은 요소들이 세로로 배치될 때 적용되는 공간을 의미합니다. 이는 레이아웃의 수직적 구조와 리듬을 결정하는 중요한 요소입니다.

### [Global Gutter](#global-gutter)

`global-gutter`는 모든 서비스에서 화면 가장자리와 콘텐츠 사이의 간격을 일정하게 유지함으로써 디자인의 일관성을 확보하고, 사용자 경험을 향상시키는 핵심 간격입니다. 이를 통해 반응형 디자인 및 다양한 UI 컴포넌트 간의 균형 잡힌 간격 조정이 가능합니다.

![global-gutter](/docs/foundation/spacing/global-gutter.webp)

global-gutter

## [Spacing Tokens](#spacing-tokens)

이름

값

[$dimension.x0\_5](/docs/foundation/design-token/%24dimension.x0_5)

2px

[$dimension.x1](/docs/foundation/design-token/%24dimension.x1)

4px

[$dimension.x1\_5](/docs/foundation/design-token/%24dimension.x1_5)

6px

[$dimension.x2](/docs/foundation/design-token/%24dimension.x2)

8px

[$dimension.x2\_5](/docs/foundation/design-token/%24dimension.x2_5)

10px

[$dimension.x3](/docs/foundation/design-token/%24dimension.x3)

12px

[$dimension.x3\_5](/docs/foundation/design-token/%24dimension.x3_5)

14px

[$dimension.x4](/docs/foundation/design-token/%24dimension.x4)

16px

[$dimension.x4\_5](/docs/foundation/design-token/%24dimension.x4_5)

18px

[$dimension.x5](/docs/foundation/design-token/%24dimension.x5)

20px

[$dimension.x6](/docs/foundation/design-token/%24dimension.x6)

24px

[$dimension.x7](/docs/foundation/design-token/%24dimension.x7)

28px

[$dimension.x8](/docs/foundation/design-token/%24dimension.x8)

32px

[$dimension.x9](/docs/foundation/design-token/%24dimension.x9)

36px

[$dimension.x10](/docs/foundation/design-token/%24dimension.x10)

40px

[$dimension.x12](/docs/foundation/design-token/%24dimension.x12)

48px

[$dimension.x13](/docs/foundation/design-token/%24dimension.x13)

52px

[$dimension.x14](/docs/foundation/design-token/%24dimension.x14)

56px

[$dimension.x16](/docs/foundation/design-token/%24dimension.x16)

64px

[$dimension.spacing-x.between-chips](/docs/foundation/design-token/%24dimension.spacing-x.between-chips)

Chip 사이의 수평 간격에 사용합니다.

[$dimension.x2](/docs/foundation/design-token/%24dimension.x2)

[$dimension.spacing-x.global-gutter](/docs/foundation/design-token/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

[$dimension.x4](/docs/foundation/design-token/%24dimension.x4)

[$dimension.spacing-y.component-default](/docs/foundation/design-token/%24dimension.spacing-y.component-default)

컴포넌트 간 수직 간격 토큰이 정의되지 않은 컴포넌트 사이의 수직 간격에 사용합니다.

[$dimension.x3](/docs/foundation/design-token/%24dimension.x3)

[$dimension.spacing-y.nav-to-title](/docs/foundation/design-token/%24dimension.spacing-y.nav-to-title)

Top Navigation과 Page Title 사이의 간격입니다.

[$dimension.x5](/docs/foundation/design-token/%24dimension.x5)

[$dimension.spacing-y.screen-bottom](/docs/foundation/design-token/%24dimension.spacing-y.screen-bottom)

화면 하단의 여백입니다.

[$dimension.x14](/docs/foundation/design-token/%24dimension.x14)

[$dimension.spacing-y.between-text](/docs/foundation/design-token/%24dimension.spacing-y.between-text)

텍스트 요소 간의 수직 간격입니다.

[$dimension.x1\_5](/docs/foundation/design-token/%24dimension.x1_5)

Last updated on

[

Radius

Radius는 컴포넌트 혹은 콘텐츠 모서리의 둥글기를 표현합니다.

](/docs/foundation/radius)[

State

상태 표현은 컴포넌트 또는 상호작용 가능한 요소의 상태 또는 가능성을 사용자에게 전달합니다.

](/docs/foundation/state)
