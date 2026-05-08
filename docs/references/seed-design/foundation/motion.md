<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/foundation/motion
fetched: 2026-05-08T06:33:24.769Z
-->

Foundation

# Motion

모션은 유저 인터페이스의 표현력을 높이고 쉽게 사용할 수 있도록 도와줍니다.

LLMs.txt

다른 도구로 열기

## [매크로 / 마이크로 모션](#매크로--마이크로-모션)

매크로 모션은 전체적인 레이아웃이나 페이지 전환과 같은 큰 규모의 모션을 의미합니다. 예를 들어 페이지 전환, 모달 팝업, 슬라이드 메뉴 등이 있습니다.

마이크로 모션은 작은 규모의 모션을 의미합니다. 예를 들어 버튼 클릭, 입력창 포커스, 스크롤 등이 있습니다.

마이크로 모션은 0.2초 이하의 시간을 가지며, 매크로 모션은 0.2초를 초과합니다.

## [Timing function](#timing-function)

### [easing](#easing)

버튼 클릭, 입력창 포커스, 등의 기능적인 마이크로 모션에 사용합니다.

### [enter](#enter)

다이얼로그, 시트 등이 나타나는 매크로 모션에 사용합니다.

### [exit](#exit)

다이얼로그, 시트 등이 사라지는 매크로 모션에 사용합니다.

### [expressive](#expressive)

enter, exit 모션에서 특히 강조되어야 하는 움직임에 사용합니다.

### [Timing Function Tokens](#timing-function-tokens)

이름

값

[$timing-function.linear](/docs/foundation/design-token/%24timing-function.linear)

cubic-bezier(0, 0, 1, 1)

[$timing-function.easing](/docs/foundation/design-token/%24timing-function.easing)

cubic-bezier(0.35, 0, 0.35, 1)

[$timing-function.enter](/docs/foundation/design-token/%24timing-function.enter)

cubic-bezier(0, 0, 0.15, 1)

[$timing-function.exit](/docs/foundation/design-token/%24timing-function.exit)

cubic-bezier(0.35, 0, 1, 1)

[$timing-function.enter-expressive](/docs/foundation/design-token/%24timing-function.enter-expressive)

cubic-bezier(0.03, 0.4, 0.1, 1)

[$timing-function.exit-expressive](/docs/foundation/design-token/%24timing-function.exit-expressive)

cubic-bezier(0.35, 0, 0.95, 0.55)

## [Duration](#duration)

### [Duration Tokens](#duration-tokens)

이름

값

[$duration.d1](/docs/foundation/design-token/%24duration.d1)

50ms

[$duration.d2](/docs/foundation/design-token/%24duration.d2)

100ms

[$duration.d3](/docs/foundation/design-token/%24duration.d3)

150ms

[$duration.d4](/docs/foundation/design-token/%24duration.d4)

200ms

[$duration.d5](/docs/foundation/design-token/%24duration.d5)

250ms

[$duration.d6](/docs/foundation/design-token/%24duration.d6)

300ms

[$duration.color-transition](/docs/foundation/design-token/%24duration.color-transition)

[$duration.d3](/docs/foundation/design-token/%24duration.d3)

Last updated on

[

Logo

당근 로고는 당근의 브랜드 가치를 표현하는 디자인 요소입니다.

](/docs/foundation/logo)[

Radius

Radius는 컴포넌트 혹은 콘텐츠 모서리의 둥글기를 표현합니다.

](/docs/foundation/radius)
