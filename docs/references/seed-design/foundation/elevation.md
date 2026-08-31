<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/foundation/elevation
fetched: 2026-08-31T04:58:57.809Z
-->

FoundationsLLMS.txt

# Elevation

UI 요소 간의 상대적인 깊이와 계층 구조를 시각적으로 표현하는 디자인 원칙입니다.

![Elevation cover image](/og/foundations/elevation.webp)

## [Principle](#principle)

![Elevation 원칙을 보여주는 이미지 - 요소간의 계층 구조(surface depth)](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc193f1f-499d-4e16-ae4e-8adcb62cc054)

Elevation(고도)은 UI 요소 간의 상대적인 깊이와 계층 구조를 시각적으로 표현하는 디자인 원칙입니다. 물리적인 세계의 '높낮이' 개념을 차용하여, 사용자가 인터페이스를 더 직관적으로 이해하고 상호작용할 수 있도록 돕습니다.

## [Stacking Context: Global, Local](#stacking-context-global-local)

![Global과 Local Stacking Context로 구분된 화면](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c27a7ae-9bb2-4095-9f36-8cf26ac9cd25)

Elevation 시스템을 효과적으로 관리하기 위해, 레벨을 'Global'과 'Local'로 나누어 정의하는 것이 핵심입니다.

-   **Global**: 애플리케이션의 구조적 층위로 제품 화면 전체(Viewport) 혹은 컨테이너 역할의 컴포넌트 및 레이어입니다.
-   **Local**: 특정 컨텍스트 내에서의 시각적 깊이로 화면 내 콘텐츠를 표현하는 컴포넌트입니다. 항상 Global level 레벨 위에 위치합니다.

## [Global Level: Container Component](#global-level-container-component)

### [Level 0: layer-basement](#level-0-layer-basement)

![Level 0 $color.bg.layer-basement 예시 이미지](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36b738c0-60c3-429a-8296-056cf118410f)

화면 최하단에 위치하는 배경 레이어입니다. 스크롤 되는 모든 콘텐츠 뒤에 깔려 있으며, 시각적으로 가장 깊은 깊이감을 형성합니다.

### [Level 1: layer-default](#level-1-layer-default)

![Level 1 $color.bg.layer-default 예시 이미지](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a38b2e64-d588-48d1-a1ab-100a444be106)

페이지의 기본 레이아웃을 구성하는 레이어입니다.

해당 페이지에서 Card, [List](/components/list), [TextField](/components/text-input)처럼 페이지를 구성하는 개별 콘텐츠 블록이나 [Top Navigation](/components/top-navigation) 같은 주요 레이아웃 요소가 표현됩니다.

### [Level 2: Bottom Sheet, Menu Sheet](#level-2-bottom-sheet-menu-sheet)

![Level 2 Bottom Sheet 예시 이미지](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14b656e2-82b8-4fbe-94e5-6de65c115012)

[Bottom Sheet](/components/bottom-sheet), [Menu Sheet](/components/menu-sheet)처럼 화면을 덮으며 독립적인 '쌓임 맥락(Stacking Context)'을 생성하는 컴포넌트입니다.

이때 [Bottom Sheet](/components/bottom-sheet)는 그 자체로 새로운 Global Context가 됩니다. 따라서 그 위에 배치되는 [List](/components/list)는 이 기준 바닥 위에 쌓이는 Local 컴포넌트로 인식되어, Bottom Sheet 표면 위에 명확하게 표시됩니다.

### [Level 3: Alert Dialog](#level-3-alert-dialog)

![Level 3 Alert Dialog 예시 이미지](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32923238-edfb-4747-80bd-f4c8ef889db4)

[Alert Dialog](/components/alert-dialog)는 시스템 내에서 가장 긴급한 정보를 처리하는 '최상위 모달(Critical Modal)' 입니다.

이 레벨은 사용자의 즉각적이고 완전한 집중을 강제합니다. 따라서 [Bottom Sheet](/components/bottom-sheet)(Level 2)와 같이 이미 활성화된 다른 모달을 포함하여, 모든 UI 요소 중 가장 최상단에 표시되어야 합니다.

## [페이지 위 페이지 표현하기](#페이지-위-페이지-표현하기)

![Page-over-Page 구조를 보여주는 예시 이미지](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18156a1d-517a-4f88-b646-5f1f7f4697f1)

Global과 Local의 맥락은 페이지 위에 페이지(Page-over-Page)'가 쌓이는 유연한 구조를 만듭니다.

새로 덮인 페이지는 즉시 새로운 기준(Context)이 되므로, 그 안의 툴팁이나 메뉴들도 이 기준에 맞춰 올바르게 동작합니다.

## [Local Level: Content Component](#local-level-content-component)

![Local Level 내부 Component 간 Level 비교 다이어그램](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52fed040-5d7b-4422-bf72-144988b0f664)

[Action Button](/components/action-button), [List](/components/list), [Tabs](/components/tabs) 등 콘텐츠를 표현하는 컴포넌트는 자신이 속한 부모 표면(Global)의 Level을 그대로 승계하는 Local의 성격을 띄지만, 그 안에서 시각적 위계와 중요도를 구분하기 위해 Level 1~3으로 나누고 있습니다.

### [Level 1: Main Contents](#level-1-main-contents)

![Level 1 Main Contents 예시 이미지](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c99f9b33-5391-4697-a624-787be2aca835)

[List](/components/list), [Callout](/components/callout), [Tabs](/components/tabs), [Top Navigation](/components/top-navigation) 등을 포함하는 Level 1 컴포넌트는 페이지의 기본 레이아웃(골격)을 형성하는 요소들입니다.

### [Level 2: Floating Actions](#level-2-floating-actions)

![Level 2 Floating Actions 예시 이미지](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e7f3b27-6916-4ee8-bbf7-537582f1b5bf)

Level 2는 기본 레이아웃(Level 1)보다 상위 레이어에 위치하여 페이지 위에 떠있는 표면의 컴포넌트들이 이에 속합니다.

### [Level 3: Transient Feedback](#level-3-transient-feedback)

![Level 3 Transient Feedback 예시 이미지](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1cc726ac-6ab0-47ef-9838-3ec040bc35d0)

Level 3는 사용자 흐름을 방해하지 않으면서도 즉각적인 확인이 필요한 일시적 피드백(Transient Feedback) 및 시스템 알림을 전달하는 컴포넌트들이 이에 속합니다.

## [동일 레벨 내 시각적 구분하기](#동일-레벨-내-시각적-구분하기)

![Top Navigation이 스크롤 시에도 유지되는 모습](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8605a7a6-62a5-4a7d-9d2e-6391d09c8768)

같은 Elevation Level을 가지더라도, 그 안에서 위계를 세분화하여 명확한 쌓임 순서를 정의할 수 있습니다.

[Top Navigation](/components/top-navigation)과 [List](/components/list)는 동일한 Level 1이지만, 스크롤 시 List가 자연스럽게 Top Navigation 아래로 들어가도록 배치되어야 합니다. 이런 경우, 콘텐츠가 겹칠 때 [Top Navigation](/components/top-navigation)의 elevation level을 높이지 않습니다. 대신 그림자나 라인(스타일)을 추가하여 '구분감'을 줍니다.

이러한 구분감은 Elevation을 표현하는 3가지 방법 중 하나를 사용해 표현합니다.

## [Elevation을 표현하는 3가지 방법](#elevation을-표현하는-3가지-방법)

![Elevation을 표현하는 3가지 방법: 색상, 그림자, 테두리](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b154395-d505-413f-822e-52d0e09c087c)

Elevation을 표현하는 시각적 요소는 다양하게 존재합니다. SEED에서는 세가지 방식으로 고도를 시각화합니다.

### [Surface color](#surface-color)

![Snackbar 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6dbdce75-29cb-4e08-aea6-9c18da482727)

![Floating Action Button 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb4812b1-1301-4ff2-9f95-e0fc011499b0)

배경색의 색상을 변경하여 표현하는 방식입니다. [Snackbar](/components/snackbar), [Floating Action Button](/components/floating-action-button)이 대표적인 예시입니다. 기본 배경 색상의 밝기나 채도를 조절합니다. 혹은 특정 컨텍스트를 가질 때, 톤 차이가 아닌 전혀 다른 색상을 배경색으로 사용해 elevation을 나타낼 수도 있습니다.

### [Shadow](#shadow)

![Contextual Floating Button 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c1b8e5c-ad66-4fd0-a81a-1d4f38949a0c)

Elevation을 표현하는 가장 전통적이고 직관적인 방법입니다. [Contextual Floating Button](/components/contextual-floating-button)이 대표적인 예시입니다. 빛이 있다는 가정 하에 얼마나 높이 떠 있는지를 그림자의 크기, 퍼짐(blur), 투명도로 표현합니다.

이름

값

[$shadow.s1](/foundations/design-token/reference/%24shadow.s1)

0px 1px 4px 0px #00000014

[$shadow.s2](/foundations/design-token/reference/%24shadow.s2)

0px 2px 10px 0px #0000001a

[$shadow.s3](/foundations/design-token/reference/%24shadow.s3)

화면의 다른 요소들보다 가장 높은 계층에 위치할 때 사용됩니다.

0px 4px 16px 0px #0000001f

**Shadow의 경우 다크 모드에서 잘 보이지 않는다는 한계가 있습니다. shadow를 써야하는 영역(화면 전체에서 주목도가 높은 몇 안 되는 요소)에서만 사용합니다.**

### [Stroke](#stroke)

![Bottom Navigation의 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70495947-0a99-4066-9ece-3c958c4dc30c)

Surface의 가장자리에 테두리를 추가하여 영역을 구분하고 높낮이를 암시하는 방식입니다. [Bottom Navigation](/components/bottom-navigation)이 대표적인 예시입니다.

## [Color: Layer Token](#color-layer-token)

![Layer Token의 색상 (라이트 모드)](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85facd4d-4a4f-4f78-800a-5411718da26a)

![Layer Token의 색상 (다크 모드)](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79e9dfea-6498-49d3-acac-3022985e946e)

Layer Token은 '콘텐츠를 담는 컨테이너'의 표면 색상을 정의합니다.

이 토큰은 텍스트나 아이콘 같은 개별 요소가 아닌, UI의 기본 '캔버스'와 계층을 만드는 데에만 집중합니다. 각 토큰은 고유한 'Color Layer' 값을 가지며, 다크 모드에서는 고도가 높을수록 더 밝아지는 규칙을 따릅니다.

이름

값

[$color.bg.layer-basement](/foundations/design-token/reference/%24color.bg.layer-basement)

가장 낮은 0단계의 '대지'입니다. 화면 가장 깊은 곳에 위치하는 전체 배경색입니다.

[$color.palette.gray-200](/foundations/design-token/reference/%24color.palette.gray-200)

[$color.bg.layer-default](/foundations/design-token/reference/%24color.bg.layer-default)

basement 바로 위에 놓이는 기본 표면입니다. 대부분의 스크린 콘텐츠(List, TextField 등)가 이 레이어 위에서 표현됩니다.

[$color.palette.gray-00](/foundations/design-token/reference/%24color.palette.gray-00)

[$color.bg.layer-default-pressed](/foundations/design-token/reference/%24color.bg.layer-default-pressed)

basement 바로 위에 놓이는 기본 표면입니다. 대부분의 스크린 콘텐츠(List, TextField 등)가 이 레이어 위에서 표현됩니다. (pressed)

[$color.palette.gray-100](/foundations/design-token/reference/%24color.palette.gray-100)

[$color.bg.layer-fill](/foundations/design-token/reference/%24color.bg.layer-fill)

@deprecated @seed-design/[\[email protected\]](/cdn-cgi/l/email-protection)에서 새 이름 토큰으로 대체·제거될 예정입니다.

[$color.palette.gray-100](/foundations/design-token/reference/%24color.palette.gray-100)

[$color.bg.layer-floating](/foundations/design-token/reference/%24color.bg.layer-floating)

화면의 모든 콘텐츠 위를 덮으며(floating) 나타나는 임시 레이어입니다. 사용자의 상호작용을 필요로 하는 모달(Modal)성 요소들이 여기에 속합니다.

[$color.palette.gray-00](/foundations/design-token/reference/%24color.palette.gray-00)

[$color.bg.layer-floating-pressed](/foundations/design-token/reference/%24color.bg.layer-floating-pressed)

화면의 모든 콘텐츠 위를 덮으며(floating) 나타나는 임시 레이어입니다. 사용자의 상호작용을 필요로 하는 모달(Modal)성 요소들이 여기에 속합니다. (pressed)

[$color.palette.gray-100](/foundations/design-token/reference/%24color.palette.gray-100)

## [`$color.bg.layer-basement` vs. `$color.bg.neutral-weak`](#colorbglayer-basement-vs-colorbgneutral-weak)

![$color.bg.layer-basement 라이트 모드](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0a3c9c9-48b9-4b0e-9203-37ce35d7111a)

![$color.bg.layer-basement 다크 모드](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3159cc87-133f-445f-9e12-4ae50b827fa5)

![$color.bg.neutral-weak 라이트 모드](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35b41b3d-c9d7-4dc3-a848-8a3cb4bdfc54)

![$color.bg.neutral-weak 다크 모드](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5caf2b5b-e6da-41e2-acd7-a6f201a33d9b)

[`$color.bg.layer-basement`](/foundations/design-token/reference/%24color.bg.layer-basement)와 [`$color.bg.neutral-weak`](/foundations/design-token/reference/%24color.bg.neutral-weak) 토큰은 라이트 모드에서는 비슷하게 보일 수 있지만 어두운 모드에서는 다르게 동작합니다.

[`$color.bg.layer-basement`](/foundations/design-token/reference/%24color.bg.layer-basement)은 다크 모드에서 가장 낮은 0단계의 대지를 표현할 수 있는 컬러값을 지닙니다. 이 토큰은 기본 화면에서의 배경으로 사용할 수 있습니다.

반면, [`$color.bg.neutral-weak`](/foundations/design-token/reference/%24color.bg.neutral-weak)은 라이트 모드에서 보여지는 밝기 톤에 맞춰 다크 모드에서도 대응되는 톤으로 보여집니다. 배경이 다양한 고도에 맞춰 조정되어야 하는 경우 이 토큰을 사용합니다.

Last updated on

[이전 문서Library](/foundations/iconography/library)[다음 문서Gradient](/foundations/gradient)
