<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/divider
fetched: 2026-05-08T06:33:26.315Z
-->

[Components](/docs/components)Display

# Divider

시각적 구분자로써 역할을 하며, 콘텐츠 간의 구획을 명확히 나누는 데 사용하는 컴포넌트입니다.

LLMs.txt

다른 도구로 열기

Figma

Done

[

React

Done

](/react/components/divider)

iOS

Done

Android

Not Planned

## [Anatomy](#anatomy)

![Divider의 Anatomy 이미지. Divider와 Inset(Optional)으로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/37d4b627-be8e-4e0d-8f90-1e1c56e3d0e9)

[`$color.stroke.neutral-muted`](/docs/foundation/design-token/%24color.stroke.neutral-muted), [`$color.stroke.neutral-subtle`](/docs/foundation/design-token/%24color.stroke.neutral-subtle) 컬러 토큰으로 채워진 1px 레이어로 구성되며, 필요에 따라 inset 레이아웃을 표시할 수 있습니다.

## [Properties](#properties)

### [Tone](#tone)

![Divider의 Tone Property - Neutral Muted, Neutral Subtle](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81869e8f-cc98-49cb-9c02-3aef3dcb1af1)

일반적인 상황에서 사용하는 **Neutral Muted**, 약한 구분을 위해 사용하는 **Neutral Subtle** 톤이 있으며, 필요에 따라 다른 stroke 토큰을 넣어 사용할 수 있습니다.

### [Orientation Property](#orientation-property)

![Divider의 Orientation Property - Horizontal, Vertical](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a85428ec-eb29-4162-9b40-b1314c89387f)

세로로 쌓이는 레이아웃에서 Horizontal 방향을 사용하며, 가로로 나열되는 레이아웃에서 Vertical 방향을 사용합니다.

### [Inset Property](#inset-property)

![Divider의 Inset Property](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/37e3a525-0e33-4ee9-9472-a7f120537fab)

전체 너비(full-width)를 차지하지 않고, 양 옆 Gutter 만큼의 내부 여백을 두고 콘텐츠 영역 안쪽에 배치하는 Inset 속성을 제공합니다. 이 옵션은 디자인 편의를 위해 Figma에서만 제공합니다.

## [Guidelines](#guidelines)

### [적절한 시각적 구분자 선택하기](#적절한-시각적-구분자-선택하기)

![Inset Divider](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c9a6e0e-7306-4c19-8254-09258b8515fe)

![Full-width Divider](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9eaf7900-bdf7-43fa-b9cd-9d9e4003147f)

![8px Gap 비교 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8eca1ec-6ca4-40e8-8bb8-2a431931464c)

화면 내 콘텐츠를 구분하는 방식으로는 Inset Divider, Full-width Divider, 그리고 Basement 레이어 위에 Default 레이어를 올려 8px Gap을 주는 세 가지 방법이 있습니다.

각 방식은 사용 목적과 맥락이 다르므로, 상황에 맞게 적절한 방식을 선택해야 합니다.

구분 방식

강도

사용 상황

**Inset Divider**

약함

같은 그룹 내에서 내용을 구분할 때 사용합니다.

**Full-width Divider**

중간

그룹을 구분할 때 사용합니다. 액션 영역을 구분하는 용도로도 활용할 수 있습니다.

**8px Gap**

강함

기존 내용과 크게 구분되는 내용을 표시할 때 사용합니다.

**8px Divider는 존재하지 않습니다. Basement Layer 위에 Default Layer를 올리고 그 사이에 간격을 두는 방식으로 구현해주세요.**

### [불필요한 Divider 사용하지 않기](#불필요한-divider-사용하지-않기)

![Divider 없이 리스트 아이템들이 자연스럽게 구분되는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e4be1ba-d940-494a-ac31-f1dc303e7dd8)

![각 리스트 아이템 사이에 불필요한 Divider가 추가된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71e01c24-2696-4d42-b35f-57b7226ad84e)

Don’t

Divider는 꼭 필요한 경우에 사용해주세요.

반복되는 레이아웃(예: 리스트)에서는 요소 간 구분이 자연스럽게 이루어지므로 Divider가 필요하지 않을 수 있습니다. Divider를 사용하기 전에 반드시 필요한지 검토해주세요.

### [마지막 Divider는 표시하지 않기](#마지막-divider는-표시하지-않기)

![화면의 마지막 섹션에 Divider가 표시되지 않은 올바른 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54c89637-ef75-4310-8825-f14d46555d40)

Do

마지막 섹션에 Divider가 없는 화면

![화면의 마지막 섹션 하단에 불필요한 Divider가 표시된 잘못된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6a673e0-92c3-4199-b74e-d9208ebd0656)

Don’t

마지막 섹션의 Divider는 표시하지 않습니다.

Divider는 맥락을 구분하기 위해 콘텐츠 사이에 들어가는 요소로 화면의 마지막 섹션이나 요소 하단에는 Divider를 표시하지 않습니다.

### [Vertical Divider](#vertical-divider)

![Vertical Divider 사용 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec175c61-3f6c-476f-90cf-f4a24ad64b42)

Vertical 방향 Divider는 가로 방향 레이아웃에서 단을 구분할 때 사용할 수 있습니다.

## [Specification](#specification)

### base

상태

슬롯

속성

값

enabled

root

thickness

1px

Last updated on

[

Content Placeholder

이미지나 콘텐츠가 로드되지 않았을 때, 해당 영역의 성격을 전달하는 대체 시각 요소입니다.

](/docs/components/content-placeholder)[

Identity Placeholder

인물을 표현하는 이미지가 로드되지 않았을 때 보여지는 대체 시각 요소입니다.

](/docs/components/identity-placeholder)
