<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/bottom-sheet
fetched: 2026-09-21T04:26:56.943Z
-->

ComponentsLLMS.txt

# Bottom Sheet

화면 하단에서 올라오는 모달 컴포넌트입니다. 추가 정보나 액션 목록을 제공하면서도 현재 컨텍스트를 유지할 때 사용됩니다.

Figma[React](/react/components/bottom-sheet)[Lynx](/lynx/components/bottom-sheet)iOSAndroid

![Bottom Sheet cover image](/og/components/bottom-sheet.webp)

## [Anatomy](#anatomy)

![Bottom Sheet의 Anatomy 이미지. Backdrop, Container, Header, Close button, Footer로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc3ef900-a582-4b9a-81f0-09389ba9113a)

Bottom Sheet는 Backdrop, Container, Header, Close button, Footer가 조합되어 제공됩니다.

## [Properties](#properties)

### [Header Layout Property](#header-layout-property)

![Bottom Sheet의 Header Layout Property](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce924b0e-f776-4fe8-9e0f-52b3418303a5)

Header는 Title과 Description으로 구성되며 콘텐츠에 따라 위치를 변경할 수 있습니다.

### [Show Handle Property](#show-handle-property)

![Bottom Sheet의 Show Handle Property - Handle 표시 여부](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9806d5e-d6cd-457a-89ea-2b3280a4b32c)

![Bottom Sheet의 Show Handle Property - Handle의 Enabled와 Pressed 상태](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f9dccb7-5f40-44fd-9680-75f2fbcbb04d)

Bottom Sheet를 드래그로 닫거나, 스냅 포인트를 설정해 확장 및 축소할 수 있는 Handle을 표시할 수 있습니다. Handle은 Enabled와 Pressed 상태를 가집니다.

### [Show Close Button Property](#show-close-button-property)

![Bottom Sheet의 Show Close Button Property - Close Button 표시 여부](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d735b598-5d5b-403e-bc53-f5cfe81465b7)

Close Button 사용 여부를 제공합니다. Close Button은 내부에 터치 영역을 보장하기 위한 프레임이 포함되어있습니다.

![Bottom Sheet의 Close Button의 Target Size](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0da5febc-297c-46af-8a4a-4824252a41d4)

**Close Button의 Target Size는 40\*40입니다.**

### [Show Description Property](#show-description-property)

![Bottom Sheet의 Show Description Property - Description 표시 여부](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a88ba20e-2b44-4bb3-bdff-c6d13094fe37)

Header를 사용할 경우 Title은 반드시 포함되어야 하고, Description은 부가 설명을 위해 추가할 수 있습니다.

### [Show Footer Property](#show-footer-property)

![Bottom Sheet의 Show Footer Property - Footer 표시 여부](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64e9e2c0-c4ce-40b5-b91c-db07fc1f2f65)

Footer 사용 여부를 제공합니다.

### [Bottom Sheet Content](#bottom-sheet-content)

Bottom Sheet Container 내부에는 디자인 편의를 위해서 Bottom Sheet에 자주 활용되는 케이스를 제공합니다. 이 옵션은 디자인 편의를 위해 Figma에서만 제공합니다.

![Bottom Sheet의 Content Area](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74a6daa0-234e-4ddd-b599-51e621a50832)

## [Guidelines](#guidelines)

### [Bottom Sheet의 Content Area](#bottom-sheet의-content-area)

![Bottom Sheet의 Content Area - 유연한 크기 조정](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43978f41-d72f-49ab-bd8d-4a839479aca1)

Bottom Sheet는 콘텐츠의 양과 사용 가능한 공간에 따라 유연하게 크기가 조정되고 모든 요소들을 담을 수 있습니다.

Content Area의 크기는 내부에 담긴 요소들이 차지하는 공간에 따라 결정됩니다.

**Figma tip: Content Area는 Slot을 활용해 표현할 수 있어요**

### [Bottom Sheet 최대 너비](#bottom-sheet-최대-너비)

![Bottom Sheet 최대 너비 480px](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0cd17774-31d4-4759-901a-138b6834d4b3)

Bottom Sheet는 화면 너비 최대 480px까지 보여집니다.

### [Bottom Sheet의 닫기 동작](#bottom-sheet의-닫기-동작)

![Bottom Sheet의 닫기 동작 - 드래그, 바깥 영역 터치](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac16caa1-1ffa-4718-b5d4-fd8108d31484)

![Bottom Sheet의 닫기 동작 - CTA, Close Button](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/305b6983-bc29-443e-9b75-0cd80e7489bc)

Bottom Sheet는 기본적으로 아래로 드래그하거나 바깥을 누르면 닫힙니다. 필요에 따라 상단이나 하단 CTA에 닫는 동작을 추가할 수 있습니다.

복잡한 양식을 작성하거나 결제할 때처럼 실수하면 안 되는 중요한 작업이나, Bottom Sheet 안에서 화면이 바뀔 때는 상단에 닫기 버튼을 넣는 것이 좋습니다. 이런 경우에는 핸들을 제거해서 실수로 닫히는 것을 방지하는 것을 권장합니다.

### [Snap Point 사용하기](#snap-point-사용하기)

![Bottom Sheet를 위로 드래그해서 확장](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec48fc1e-4462-4b3d-a746-e1f40ec2a619)

![Bottom Sheet를 아래로 드래그해서 축소](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f81995c0-449f-45b9-8e43-5ab2904e23f2)

Bottom Sheet에 Snap Point를 추가하여 시트의 높이를 확장하거나 축소할 수 있습니다.

스냅 포인트는 최소 2개(최대, 중간) 설정해야 하며, 필요한 경우 3개(최대, 중간, 최소)까지 설정할 수 있습니다.

스냅 포인트의 기본값은 최대(화면의 90%), 중간(50%), 최소(10%)로 설정되어 있습니다. 화면 비율(%)이나 픽셀(px) 단위로 지정할 수 있습니다.

**Snap Point를 추가하는 경우 Handle을 반드시 표시해야 합니다.**

### [Bottom Sheet 최대 높이](#bottom-sheet-최대-높이)

![Bottom Sheet이 최대 높이를 차지한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0014570-b31e-402f-8123-ff9dd0fe895a)

![Bottom Sheet 대신 개별 페이지로 표현한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3318a7a6-a4d3-4614-9c0c-79f9751e6fb5)

Bottom Sheet의 최대 높이는 화면 전체 높이의 90%를 넘지 않는 것을 권장합니다.

Bottom Sheet의 콘텐츠가 많아 화면 전체 높이의 90%를 넘는 경우 스크롤보다는 페이지로 표현하는 것을 권장합니다.

### [스크롤 시](#스크롤-시)

![Bottom Sheet의 스크롤 영역](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3b097b8-ef97-4833-b8c2-328e7a37e0f7)

Bottom Sheet의 콘텐츠가 많거나 해상도 등으로 인해 화면 전체 높이의 90%를 넘는 경우 스크롤이 발생합니다. 스크롤은 content area 내에서 발생합니다.

![Bottom Sheet의 Scroll Fog 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7d7aa72-dde3-4475-b5fe-7b929634ba27)

스크롤이 발생되는 경우, 하단에 콘텐츠가 더 있다는 것을 알려주는 시각적 장치로 [Scroll Fog](/components/scroll-fog)가 나타납니다.

### [Title, Description의 길이](#title-description의-길이)

![너무 긴 Title과 Description을 사용하는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8bf7183f-7878-4818-ab4e-74aaf083c3da)

Don’t

글이 너무 길어지지 않도록 주의해주세요.

글이 너무 길어지지 않도록 주의해주세요.

### [키보드가 나타날 경우](#키보드가-나타날-경우)

![Bottom Sheet에서 키보드 표시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25fc19c8-60be-41be-a9b7-687828d8a41c)

Bottom Sheet에서 텍스트 필드 등의 요소를 통해 키보드를 활성화해야 하는 경우, 키보드가 sheet 하단에 나타납니다.

Bottom Sheet 내에 [Input](/components/text-input) 등 키보드를 표시하는 요소가 있는 경우, 키보드 노출 여부에 따라 사용 가능한 화면 높이와 Bottom Sheet의 높이가 함께 달라질 수 있습니다.

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

[$color.bg.overlay](/foundations/design-token/reference/%24color.bg.overlay)

enterDuration

[$duration.d6](/foundations/design-token/reference/%24duration.d6)

enterTimingFunction

[$timing-function.enter](/foundations/design-token/reference/%24timing-function.enter)

enterOpacity

0

exitDuration

[$duration.d4](/foundations/design-token/reference/%24duration.d4)

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

[$radius.r6](/foundations/design-token/reference/%24radius.r6)

enterDuration

[$duration.d6](/foundations/design-token/reference/%24duration.d6)

enterTimingFunction

[$timing-function.enter-expressive](/foundations/design-token/reference/%24timing-function.enter-expressive)

exitDuration

[$duration.d4](/foundations/design-token/reference/%24duration.d4)

exitTimingFunction

[$timing-function.exit](/foundations/design-token/reference/%24timing-function.exit)

header

gap

[$dimension.x2](/foundations/design-token/reference/%24dimension.x2)

paddingTop

[$dimension.x6](/foundations/design-token/reference/%24dimension.x6)

paddingBottom

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

body

paddingX

[$dimension.spacing-x.global-gutter](/foundations/design-token/reference/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

footer

paddingX

[$dimension.spacing-x.global-gutter](/foundations/design-token/reference/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

paddingTop

[$dimension.x3](/foundations/design-token/reference/%24dimension.x3)

paddingBottom

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

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

paddingX

[$dimension.spacing-x.global-gutter](/foundations/design-token/reference/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

closeButton

fromTop

[$dimension.x6](/foundations/design-token/reference/%24dimension.x6)

fromRight

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

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

[$dimension.spacing-x.global-gutter](/foundations/design-token/reference/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

#### headerAlignment=left, closeButton=false

상태

슬롯

속성

값

enabled

title

paddingLeft

[$dimension.spacing-x.global-gutter](/foundations/design-token/reference/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

paddingRight

[$dimension.spacing-x.global-gutter](/foundations/design-token/reference/%24dimension.spacing-x.global-gutter)

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

[$dimension.spacing-x.global-gutter](/foundations/design-token/reference/%24dimension.spacing-x.global-gutter)

화면 전체에 적용되는 기본 수평 padding 값입니다.

paddingRight

[$dimension.spacing-x.global-gutter](/foundations/design-token/reference/%24dimension.spacing-x.global-gutter)

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

[$color.palette.gray-400](/foundations/design-token/reference/%24color.palette.gray-400)

borderRadius

9999px

colorDuration

[$duration.color-transition](/foundations/design-token/reference/%24duration.color-transition)

colorTimingFunction

[$timing-function.easing](/foundations/design-token/reference/%24timing-function.easing)

touchArea

width

44px

height

44px

pressed

root

color

[$color.palette.gray-500](/foundations/design-token/reference/%24color.palette.gray-500)

### [Bottom Sheet Close Button](#bottom-sheet-close-button)

#### base

상태

슬롯

속성

값

enabled

root

color

[$color.bg.neutral-weak](/foundations/design-token/reference/%24color.bg.neutral-weak)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (weak)

cornerRadius

[$radius.full](/foundations/design-token/reference/%24radius.full)

targetSize

44px

size

28px

icon

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

size

14px

pressed

root

color

[$color.bg.neutral-weak-pressed](/foundations/design-token/reference/%24color.bg.neutral-weak-pressed)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (weak-pressed)

scaleScope

self

Last updated on

[이전 문서Bottom Navigation](/components/bottom-navigation)[다음 문서Callout](/components/callout)
