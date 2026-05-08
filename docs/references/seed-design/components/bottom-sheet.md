<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/bottom-sheet
fetched: 2026-05-08T06:33:25.682Z
-->

[Components](/docs/components)Layout

# Bottom Sheet

화면 하단에서 올라오는 모달 컴포넌트입니다. 추가 정보나 액션 목록을 제공하면서도 현재 컨텍스트를 유지할 때 사용됩니다.

LLMs.txt

다른 도구로 열기

Figma

Done

[

React

Done

](/react/components/bottom-sheet)

iOS

Done

Android

Done

## [Anatomy](#anatomy)

![Bottom Sheet의 Anatomy 이미지. Backdrop, Container, Header, Close button, Footer로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/566d7146-3d38-4f5a-a656-bc51909e0050)

Bottom Sheet는 Backdrop, Container, Header, Close button, Footer가 조합되어 제공됩니다.

## [Properties](#properties)

### [Header Layout Property](#header-layout-property)

![Bottom Sheet의 Header Layout Property](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/261cff78-28a2-484d-8d3c-4be4dd377c7f)

Header는 Title과 Description으로 구성되며 콘텐츠에 따라 위치를 변경할 수 있습니다.

### [Show Handle Property](#show-handle-property)

![Bottom Sheet의 Show Handle Property - Handle 표시 여부](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9acce02e-2e86-4cac-9b5a-075f7a55cb26)

![Bottom Sheet의 Show Handle Property - Handle의 Enabled와 Pressed 상태](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e422a6be-dcdb-4b33-8ca7-a128e5bbb3b1)

Bottom Sheet를 드래그로 닫거나, 스냅 포인트를 설정해 확장 및 축소할 수 있는 Handle을 표시할 수 있습니다. Handle은 Enabled와 Pressed 상태를 가집니다.

### [Show Close Button Property](#show-close-button-property)

![Bottom Sheet의 Show Close Button Property - Close Button 표시 여부](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df427f4d-530b-48c0-bc7f-2248efbde92f)

Close Button 사용 여부를 제공합니다. Close Button은 내부에 터치 영역을 보장하기 위한 프레임이 포함되어있습니다.

![Bottom Sheet의 Close Button의 Target Size](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3bc532a-f4f7-44c7-888f-1d916c873853)

**Close Button의 Target Size는 40\*40입니다.**

### [Show Description Property](#show-description-property)

![Bottom Sheet의 Show Description Property - Description 표시 여부](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e74c468-af5e-4800-8414-7257349b3766)

Header를 사용할 경우 Title은 반드시 포함되어야 하고, Description은 부가 설명을 위해 추가할 수 있습니다.

### [Show Footer Property](#show-footer-property)

![Bottom Sheet의 Show Footer Property - Footer 표시 여부](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3aa2e095-cca4-4882-a00f-f8230aee8cbf)

Footer 사용 여부를 제공합니다.

### [Bottom Sheet Content](#bottom-sheet-content)

Bottom Sheet Container 내부에는 디자인 편의를 위해서 Bottom Sheet에 자주 활용되는 케이스를 제공합니다. 이 옵션은 디자인 편의를 위해 Figma에서만 제공합니다.

![Bottom Sheet의 Content Area](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/087c3e42-6fb6-4bcf-b396-54cee316ecc7)

## [Guidelines](#guidelines)

### [Bottom Sheet의 Content Area](#bottom-sheet의-content-area)

![Bottom Sheet의 Content Area - 유연한 크기 조정](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83e5b71d-1b9c-491a-84a8-f14dab7f3270)

Bottom Sheet는 콘텐츠의 양과 사용 가능한 공간에 따라 유연하게 크기가 조정되고 모든 요소들을 담을 수 있습니다.

Content Area의 크기는 내부에 담긴 요소들이 차지하는 공간에 따라 결정됩니다.

**Figma tip: Content Area는 Slot을 활용해 표현할 수 있어요**

### [Bottom Sheet 최대 너비](#bottom-sheet-최대-너비)

![Bottom Sheet 최대 너비 480px](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a8d907e-c1da-4882-b373-6d7d1f2983dd)

Bottom Sheet는 화면 너비 최대 480px까지 보여집니다.

### [Bottom Sheet의 닫기 동작](#bottom-sheet의-닫기-동작)

![Bottom Sheet의 닫기 동작 - 드래그, 바깥 영역 터치](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4bb6aca-2f2d-4c11-abd8-6ac2c499d238)

![Bottom Sheet의 닫기 동작 - CTA, Close Button](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad323a91-c05a-4cd5-9c25-4ae94fcf1a7e)

Bottom Sheet는 기본적으로 아래로 드래그하거나 바깥을 누르면 닫힙니다. 필요에 따라 상단이나 하단 CTA에 닫는 동작을 추가할 수 있습니다.

복잡한 양식을 작성하거나 결제할 때처럼 실수하면 안 되는 중요한 작업이나, Bottom Sheet 안에서 화면이 바뀔 때는 상단에 닫기 버튼을 넣는 것이 좋습니다. 이런 경우에는 핸들을 제거해서 실수로 닫히는 것을 방지하는 것을 권장합니다.

### [Snap Point 사용하기](#snap-point-사용하기)

![Bottom Sheet를 위로 드래그해서 확장](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf289686-9e76-4449-b909-714416d19055)

![Bottom Sheet를 아래로 드래그해서 축소](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3346e683-0b06-4e98-902f-ccafd7c67a0c)

Bottom Sheet에 Snap Point를 추가하여 시트의 높이를 확장하거나 축소할 수 있습니다.

스냅 포인트는 최소 2개(최대, 중간) 설정해야 하며, 필요한 경우 3개(최대, 중간, 최소)까지 설정할 수 있습니다.

스냅 포인트의 기본값은 최대(화면의 90%), 중간(50%), 최소(10%)로 설정되어 있습니다. 화면 비율(%)이나 픽셀(px) 단위로 지정할 수 있습니다.

**Snap Point를 추가하는 경우 Handle을 반드시 표시해야 합니다.**

### [Bottom Sheet 최대 높이](#bottom-sheet-최대-높이)

![Bottom Sheet이 최대 높이를 차지한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f650c08f-836d-4685-a305-50d69217a96a)

![Bottom Sheet 대신 개별 페이지로 표현한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df125054-7ec4-4818-a75d-7642278f581c)

Bottom Sheet의 최대 높이는 화면 전체 높이의 90%를 넘지 않는 것을 권장합니다.

Bottom Sheet의 콘텐츠가 많아 화면 전체 높이의 90%를 넘는 경우 스크롤보다는 페이지로 표현하는 것을 권장합니다.

### [스크롤 시](#스크롤-시)

![Bottom Sheet의 스크롤 영역](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/037ad59b-677e-472c-81bd-9af5a32d5ad0)

Bottom Sheet의 콘텐츠가 많거나 해상도 등으로 인해 화면 전체 높이의 90%를 넘는 경우 스크롤이 발생합니다. 스크롤은 content area 내에서 발생합니다.

![Bottom Sheet의 Scroll Fog 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e612cbfb-ddb6-49a1-9a79-2b3dac9236fb)

스크롤이 발생되는 경우, 하단에 콘텐츠가 더 있다는 것을 알려주는 시각적 장치로 [Scroll Fog](/docs/components/scroll-fog)가 나타납니다.

### [Title, Description의 길이](#title-description의-길이)

![너무 긴 Title과 Description을 사용하는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25ebac95-852a-4f5f-9354-b3ef6e76620d)

Don’t

글이 너무 길어지지 않도록 주의해주세요.

글이 너무 길어지지 않도록 주의해주세요.

### [키보드가 나타날 경우](#키보드가-나타날-경우)

![Bottom Sheet에서 키보드 표시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1490b32-6185-4ae6-8dc1-4ab65c677f76)

Bottom Sheet에서 텍스트 필드 등의 요소를 통해 키보드를 활성화해야 하는 경우, 키보드가 sheet 하단에 나타납니다.

## [Specification](#specification)

### [Bottom Sheet](#bottom-sheet)

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

[$duration.d6](/docs/foundation/design-token/%24duration.d6)

enterTimingFunction

[$timing-function.enter](/docs/foundation/design-token/%24timing-function.enter)

enterOpacity

0

exitDuration

[$duration.d4](/docs/foundation/design-token/%24duration.d4)

exitTimingFunction

[$timing-function.exit](/docs/foundation/design-token/%24timing-function.exit)

exitOpacity

0

content

color

[$color.bg.layer-floating](/docs/foundation/design-token/%24color.bg.layer-floating)

화면의 모든 콘텐츠 위를 덮으며(floating) 나타나는 임시 레이어입니다. 사용자의 상호작용을 필요로 하는 모달(Modal)성 요소들이 여기에 속합니다.

maxWidth

640px

topCornerRadius

[$radius.r6](/docs/foundation/design-token/%24radius.r6)

enterDuration

[$duration.d6](/docs/foundation/design-token/%24duration.d6)

enterTimingFunction

[$timing-function.enter-expressive](/docs/foundation/design-token/%24timing-function.enter-expressive)

exitDuration

[$duration.d4](/docs/foundation/design-token/%24duration.d4)

exitTimingFunction

[$timing-function.exit](/docs/foundation/design-token/%24timing-function.exit)

header

gap

[$dimension.x2](/docs/foundation/design-token/%24dimension.x2)

paddingTop

[$dimension.x6](/docs/foundation/design-token/%24dimension.x6)

paddingBottom

[$dimension.x4](/docs/foundation/design-token/%24dimension.x4)

body

paddingX

[$dimension.spacing-x.global-gutter](/docs/foundation/design-token/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

footer

paddingX

[$dimension.spacing-x.global-gutter](/docs/foundation/design-token/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

paddingTop

[$dimension.x3](/docs/foundation/design-token/%24dimension.x3)

paddingBottom

[$dimension.x4](/docs/foundation/design-token/%24dimension.x4)

title

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

fontSize

[$font-size.t8](/docs/foundation/design-token/%24font-size.t8)

lineHeight

[$line-height.t8](/docs/foundation/design-token/%24line-height.t8)

fontWeight

[$font-weight.bold](/docs/foundation/design-token/%24font-weight.bold)

description

color

[$color.fg.neutral-muted](/docs/foundation/design-token/%24color.fg.neutral-muted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (muted)

fontSize

[$font-size.t5](/docs/foundation/design-token/%24font-size.t5)

lineHeight

[$line-height.t5](/docs/foundation/design-token/%24line-height.t5)

fontWeight

[$font-weight.regular](/docs/foundation/design-token/%24font-weight.regular)

paddingX

[$dimension.spacing-x.global-gutter](/docs/foundation/design-token/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

closeButton

fromTop

[$dimension.x6](/docs/foundation/design-token/%24dimension.x6)

fromRight

[$dimension.x4](/docs/foundation/design-token/%24dimension.x4)

#### headerAlignment=left, closeButton=true

상태

슬롯

속성

값

enabled

title

paddingRight

56px

paddingLeft

[$dimension.spacing-x.global-gutter](/docs/foundation/design-token/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

#### headerAlignment=left, closeButton=false

상태

슬롯

속성

값

enabled

title

paddingLeft

[$dimension.spacing-x.global-gutter](/docs/foundation/design-token/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

paddingRight

[$dimension.spacing-x.global-gutter](/docs/foundation/design-token/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

#### headerAlignment=center, closeButton=true

상태

슬롯

속성

값

enabled

title

paddingLeft

56px

paddingRight

56px

#### headerAlignment=center, closeButton=false

상태

슬롯

속성

값

enabled

title

paddingLeft

[$dimension.spacing-x.global-gutter](/docs/foundation/design-token/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

paddingRight

[$dimension.spacing-x.global-gutter](/docs/foundation/design-token/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

### [Bottom Sheet Handle](#bottom-sheet-handle)

#### base

상태

슬롯

속성

값

enabled

root

fromTop

6px

width

36px

height

4px

color

[$color.palette.gray-400](/docs/foundation/design-token/%24color.palette.gray-400)

borderRadius

9999px

colorDuration

[$duration.color-transition](/docs/foundation/design-token/%24duration.color-transition)

colorTimingFunction

[$timing-function.easing](/docs/foundation/design-token/%24timing-function.easing)

touchArea

width

44px

height

44px

pressed

root

color

[$color.palette.gray-500](/docs/foundation/design-token/%24color.palette.gray-500)

### [Bottom Sheet Close Button](#bottom-sheet-close-button)

#### base

상태

슬롯

속성

값

enabled

root

color

[$color.bg.neutral-weak](/docs/foundation/design-token/%24color.bg.neutral-weak)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (weak)

cornerRadius

[$radius.full](/docs/foundation/design-token/%24radius.full)

targetSize

44px

size

28px

icon

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

size

14px

pressed

root

color

[$color.bg.neutral-weak-pressed](/docs/foundation/design-token/%24color.bg.neutral-weak-pressed)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (weak-pressed)

Last updated on

[

Alert Dialog

사용자의 확인이 반드시 필요한 경우 강력한 표현 및 경고 수단으로 활용하는 컴포넌트입니다.

](/docs/components/alert-dialog)[

List

가로 행으로 구성된 콘텐츠를 표현하는 컴포넌트입니다.

](/docs/components/list)
