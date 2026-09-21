<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/divider
fetched: 2026-09-21T04:26:57.656Z
-->

ComponentsLLMS.txt

# Divider

시각적 구분자로써 역할을 하며, 콘텐츠 간의 구획을 명확히 나누는 데 사용하는 컴포넌트입니다.

Figma[React](/react/components/divider)[Lynx](/lynx/components/divider)iOSAndroid

![Divider cover image](/og/components/divider.webp)

## [Anatomy](#anatomy)

![Divider의 Anatomy 이미지. Divider와 Inset(Optional)으로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2b68194-b2ee-4137-a67c-bccf17965b09)

[`$color.stroke.neutral-muted`](/foundations/design-token/reference/%24color.stroke.neutral-muted), [`$color.stroke.neutral-subtle`](/foundations/design-token/reference/%24color.stroke.neutral-subtle) 컬러 토큰으로 채워진 1px 레이어로 구성되며, 필요에 따라 inset 레이아웃을 표시할 수 있습니다.

## [Properties](#properties)

### [Tone](#tone)

![Divider의 Tone Property - Neutral Muted, Neutral Subtle](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/352eac53-38c2-4b6c-9dbb-a56c1650ff70)

-   **Neutral Muted**: 의미 단위가 바뀌는 경계를 나눕니다. 섹션과 섹션 사이, 헤더와 본문 경계처럼 한 화면에 한두 번만 등장하는 구분에 사용합니다.
-   **Neutral Subtle**: 반복되는 동일 성격 항목 사이를 나눕니다. 리스트 아이템, 테이블 row, 설정 메뉴 항목처럼 한 화면에 여러 번 등장하는 구분에 사용합니다.

필요에 따라 다른 stroke 토큰을 넣어 사용할 수 있습니다.

### [Orientation Property](#orientation-property)

![Divider의 Orientation Property - Horizontal, Vertical](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22344713-b424-49d3-8f78-4ba3d67f019b)

세로로 쌓이는 레이아웃에서 Horizontal 방향을 사용하며, 가로로 나열되는 레이아웃에서 Vertical 방향을 사용합니다.

### [Inset Property](#inset-property)

![Divider의 Inset Property](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/492cf4b7-4198-44d5-92c4-11e7be123be4)

전체 너비(full-width)를 차지하지 않고, 양 옆 Gutter 만큼의 내부 여백을 두고 콘텐츠 영역 안쪽에 배치하는 Inset 속성을 제공합니다. 이 옵션은 디자인 편의를 위해 Figma에서만 제공합니다.

## [Guidelines](#guidelines)

### [적절한 시각적 구분자 선택하기](#적절한-시각적-구분자-선택하기)

![Inset Divider](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca44b422-9558-49d6-abe4-68ea76418095)

![Full-width Divider](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21347a17-f387-4da7-aace-be575e25bd89)

![8px Gap 비교 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15c01326-5899-484b-afad-f78b58d0e415)

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

![Divider 없이 리스트 아이템들이 자연스럽게 구분되는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9264384-8107-449b-ae37-4a98bc39c784)

![각 리스트 아이템 사이에 불필요한 Divider가 추가된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25fd235e-ecd8-4210-ad43-95d92537012d)

Don’t

Divider는 꼭 필요한 경우에 사용해주세요.

반복되는 레이아웃(예: 리스트)에서는 요소 간 구분이 자연스럽게 이루어지므로 Divider가 필요하지 않을 수 있습니다. Divider를 사용하기 전에 반드시 필요한지 검토해주세요.

### [마지막 Divider는 표시하지 않기](#마지막-divider는-표시하지-않기)

![화면의 마지막 섹션에 Divider가 표시되지 않은 올바른 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53a80512-0b0e-483d-a66d-46f97ed5182c)

Do

마지막 섹션에 Divider가 없는 화면

![화면의 마지막 섹션 하단에 불필요한 Divider가 표시된 잘못된 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/825d8695-1d97-4ccb-b262-d86e035266da)

Don’t

마지막 섹션의 Divider는 표시하지 않습니다.

Divider는 맥락을 구분하기 위해 콘텐츠 사이에 들어가는 요소로 화면의 마지막 섹션이나 요소 하단에는 Divider를 표시하지 않습니다.

### [Vertical Divider](#vertical-divider)

![Vertical Divider 사용 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eaeebf93-8fde-45e7-a3f9-a1d9b8aa79d4)

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

[이전 문서Dialog](/components/dialog)[다음 문서Field](/components/field)
