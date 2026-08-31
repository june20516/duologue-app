<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/action-button
fetched: 2026-08-31T04:58:58.523Z
-->

ComponentsLLMS.txt

# Action Button

명확한 액션을 쉽게 수행할 수 있도록 돕는 기본 인터랙션 컴포넌트입니다.

Figma[React](/react/components/action-button)[Lynx](/lynx/components/action-button)iOSAndroid

![Action Button cover image](/og/components/action-button.webp)

## [Anatomy](#anatomy)

![Action Button의 Anatomy 이미지. Container, Label, Prefix Icon, Suffix Icon으로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2cbad6d7-a613-449a-bad9-e303c27434bb)

Action Button은 Label을 감싸고 있는 Container로 구성되며, Prefix Icon과 Suffix Icon을 가질 수 있습니다.

## [Properties](#properties)

### [Size](#size)

![Action Button의 Size Property - XSmall, Small, Medium, Large](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35a66b08-b780-4990-ae81-c62b11780a76)

Action Button은 XSmall, Small, Medium, Large 네 가지 사이즈로 제공됩니다.

Small과 Medium은 화면 중앙에서 범용적으로 사용되며, Large는 주로 CTA 역할로 사용됩니다. XSmall은 작은 공간에서 효율적으로 사용할 수 있는 Pill 형태로 제공됩니다.

### [Layout](#layout)

![Action Button의 Layout - Text Only, Icon + Text, Text + Icon, Icon Only](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7984c439-975b-4f7d-b51d-f73a19b1abf5)

Action Button은 라벨과 아이콘의 조합으로 구성되며, 아이콘은 버튼의 목적을 시각적으로 강조하거나 동작을 보조합니다.

라벨 앞, 뒤 또는 아이콘만으로 구성할 수 있어 상황에 맞게 유연하게 활용할 수 있습니다. 다만, 라벨 가독성을 해치지 않도록 아이콘은 제한적으로 사용하는 것을 권장합니다.

Icon Only 레이아웃은 아이콘만으로 의미를 전달하기 때문에 접근성이 떨어집니다. 꼭 필요한 경우에만 사용하는 것을 권장합니다.

### [Variant](#variant)

![Action Button의 Variant - Neutral Solid, Brand Solid, Neutral Weak, Brand Outline, Neutral Outline, Critical Solid](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e14828a-1ff9-46b3-97cf-0a5261c1e41e)

Action Button은 Neutral Solid, Brand Solid, Neutral Weak, Brand Outline, Neutral Outline, Critical Solid, Ghost 총 7가지 Variant로 구성됩니다.

Figma에서 Ghost Variant는 별도 컴포넌트로 제공됩니다.

### [State](#state)

![Action Button의 State - Enabled, Pressed, Loading, Disabled](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04681e0e-de52-44ef-b56e-b7900cc0d91c)

Action Button은 Enabled, Pressed, Loading, Disabled 상태를 가집니다.

### [Width](#width)

![Action Button의 Width Property - Fill, Hug](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36987bc3-d945-477e-9a84-834cb28ffc2c)

Action Button은 컨테이너의 전체 너비를 채우거나 콘텐츠에 맞게 조정할 수 있습니다. 각 Size마다 기본 최소 너비가 설정되어 있으며, 필요에 따라 최소 너비와 최대 너비를 지정할 수 있습니다.

## [Guidelines](#guidelines)

### [Hierarchy](#hierarchy)

![Action Button Hierarchy - High emphasis, Medium emphasis, Low emphasis](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d34eabd-4555-4b41-bd24-223ae72c987e)

Action Button의 시각적 주목도는 배경색 대비에 따라 달라집니다. 화면에서 강조하려는 정도에 따라 적절한 Variant를 선택해서 사용해주세요.

Emphasis Level

Variant

화면 내 개수

Usage

**High emphasis**  
(대비가 강한 배경색)

Brand Solid  
Neutral Solid  
Critical Solid

1개

가장 중요한 역할의 CTA에 사용

**Medium emphasis**  
(대비가 약한 배경색)

Neutral Weak

여러 개

대부분의 액션에 사용  
High emphasis 버튼과 조합하여 사용

**Low emphasis**  
(투명한 배경색)

Brand Outline  
Neutral Outline  
Ghost

여러 개

중요도가 낮은 보조 액션을 표현할 때 사용  
Brand Outline, Neutral Outline을 조합하여 사용

### [상황에 따라 적절한 Variant 사용하기](#상황에-따라-적절한-variant-사용하기)

화면 내 중요도에 따라 적절한 Variant를 선택해서 사용합니다.

![Action Button Brand Solid variant와 Neutral Solid Variant](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d468e8c9-03dc-40a9-9324-d03f858abc6a)

![Action Button Critical Solid variant와 Neutral Weak Variant](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bfde6090-ab69-41ae-b92b-b8a9395ad7e2)

![Action Button Neutral Outline variant와 Brand Outline Variant](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f72b7b8-5042-4ad5-9151-a08e7429e416)

Variant

설명

**Brand Solid**

브랜드의 핵심 가치를 전달하며, 사용자 간 연결이 일어나는 서비스의 주요 기능에 사용합니다. 위계가 높고 브랜드 임팩트가 강한 액션이므로 한 화면에 하나만 사용하는 것을 권장합니다.

**Neutral Solid**

Brand Solid 다음으로 높은 위계를 가지며, 대부분의 화면에서 CTA로 사용합니다. 고대비로 접근성과 가독성이 높아 사용자가 화면 정보에 집중할 수 있도록 돕습니다. 한 화면에 하나만 사용하는 것을 권장합니다.

**Critical Solid**

삭제나 초기화처럼 되돌릴 수 없는 중요한 작업에 사용합니다. 사용자에게 위험을 분명하게 알려주는 역할을 하며, 주로 [Alert Dialog](/components/alert-dialog)에서 사용됩니다.

**Neutral Weak**

CTA를 제외한 대부분의 액션에 사용됩니다. Solid 타입이지만 시각적 부담이 적은 것이 특징입니다. CTA와 함께 사용할 경우 보조 액션 역할을 합니다.

**Brand Outline**

Solid 타입보다 중요도가 낮은 액션에 사용되며, Neutral Outline보다 높은 위계를 가집니다. Solid 타입과 함께 사용할 수 없으며, Neutral Outline과 조합하여 사용하는 것을 권장합니다.

**Neutral Outline**

가장 낮은 위계를 가지며, 주로 보조 액션을 표현할 때 사용합니다. 시각적 주목도가 낮은 것이 특징입니다. Solid 타입과 함께 사용할 수 없으며, Brand Outline과 조합하여 사용하는 것을 권장합니다.

### [Brand 컬러는 꼭 필요한 곳에만 사용하기](#brand-컬러는-꼭-필요한-곳에만-사용하기)

![Action Button Brand 컬러 사용 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae9fe09a-99f8-4cc8-9231-957279624d7e)

Brand 컬러는 브랜드의 정체성과 가치를 전달하는 중요 자산으로, 로고, 대표 버튼, 핵심 메시지 등 브랜드 상징 요소에 집중 사용해야 합니다.

![Action Button Brand 컬러 과다 사용 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/439891d6-3fe9-4a5a-9f30-b6f174062256)

Don’t

무분별하게 Brand 컬러를 사용하지 않습니다.

Brand 컬러를 과다 사용하면 의미와 강조도가 분산됩니다. '이웃 간의 연결' 의미를 전달하는 곳에 사용하세요.

Action Button에서는 '채팅하기', '단골맺기'와 같이 사용자 간 연결이 일어나는 액션과 '글쓰기', '광고 올리기'와 같이 서비스 핵심 액션에 Brand 컬러를 적용할 수 있습니다.

### [Button의 조합](#button의-조합)

#### [Solid 조합](#solid-조합)

![Action Button Solid 조합 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/962260f8-6614-4424-ab56-4b2446568479)

Neutral Weak와 Neutral Solid 또는 Brand Solid 버튼을 조합하면 액션의 위계를 명확하게 표현할 수 있습니다. 이 조합은 시각적 부담을 줄이면서도 직관적인 경험을 제공하며, 사용자가 의사결정을 빠르고 쉽게 내릴 수 있도록 돕습니다.

#### [Outline 조합](#outline-조합)

![Action Button Outline 조합 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/770c40ab-05a7-4953-b647-21a203189744)

Neutral Outline과 Brand Outline은 강조도가 낮은 서브 액션을 표현하는 데 적합합니다. 두 버튼을 나란히 조합하면 위계를 명확히 전달할 수 있습니다. 한 화면에 버튼이 여러 번 나타날 때 사용을 권장합니다.

### [Button의 배치](#button의-배치)

2개 이상의 버튼을 조합하여 사용하는 경우 상황에 따라 적절한 레이아웃을 구성해야 합니다.

![Action Button 배치 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81005d86-10c3-473c-b81d-90c2f95367c5)

Solid 조합에서 Neutral Weak가 초기화, 닫기와 같이 Dismiss의 의미를 가질 경우 3:7 비율을 활용해 액션 위계를 명확히 표현하는 것을 권장합니다.

![Neutral Weak Action Button을 나란히 배치한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ddbfff55-881b-4ff8-ae41-bfb7504c6526)

Do

Neutral Weak 버튼을 나란히 사용할 수 있습니다.

![](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59a06126-1e86-4d2e-8de6-c34d6bc4e6b9)

Don’t

버튼을 4개 이상 나란히 사용하지 않습니다.

Neutral Weak처럼 강조 위계가 낮은 Variant는 비슷한 위계의 액션 두 개를 나란히 사용할 수 있습니다. 액션이 두 개를 초과할 경우, Icon Only 버튼을 활용해 사용자가 추가 액션을 확인할 수 있도록 합니다.

**Action Button을 세 개 이상 나란히 사용하는 것은 권장하지 않습니다.**

여러 개를 나란히 배치하면 각 버튼의 중요도가 비슷해 보여 사용자가 선택하기 어렵고, 클릭 유도 효과가 감소합니다. 또한 폰트 스케일링으로 큰 텍스트를 사용하는 경우 라벨이 잘릴 수 있습니다.

### [Label 작성하기](#label-작성하기)

![Action Button의 Label로 '시작하기'를 사용한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e804b0ba-d41d-45bb-b552-94acf75a65d0)

Do

사용자 행동을 중심으로 Label을 작성합니다.

![Action Button의 Label로 '다음'을 사용한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0e2c505-0792-438d-8836-4b32c76a22a1)

Don’t

‘무엇을 한다’는 동작을 명확하게 표현해야 합니다.

버튼 문구는 사용자가 수행할 행동을 명확하고 예측 가능하게 표현해야 합니다. 항상 사용자 시점에서 작성하고, 동일한 액션에는 일관된 단어와 톤을 유지합니다.

불필요한 단어나 모호한 표현은 피하고, 동사형의 간결한 문장을 사용합니다.

### [긴 Label을 사용하는 경우](#긴-label을-사용하는-경우)

![두 개의 Action Button을 좌우와 상하로 배치한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5187ccc5-b128-437c-a320-02c11516adac)

긴 Label이 필요하거나 번역했을 때 의도하지 않게 길어지는 경우, 폰트 스케일링으로 큰 텍스트를 사용하는 경우 Action Button 레이아웃이 Overflow될 수 있습니다.

**이 경우 구현체에서 Responsive Pair 유틸리티를 사용하여 설정된 로직에 따라서 자동으로 레이아웃을 전환할 수 있습니다.**

### [Icon의 사용](#icon의-사용)

![Action Button의 Icon 사용 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6eb6b0a1-5cb2-470b-9736-8a8d82210d46)

아이콘은 버튼의 동작을 시각적으로 표현하고 강조하는 데 도움을 줍니다.

아이콘은 라벨의 앞이나 뒤에 배치할 수 있으며, Prefix는 주로 액션의 의미를 보조하고, Suffix는 Chevron처럼 동작을 보조하는 역할을 합니다.

![Action Button에 불필요한 아이콘을 사용한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6885c1c1-e630-4038-840c-9b704e561909)

Don’t

아이콘을 무분별하게 사용하지 않습니다.

![Action Button에 라벨 앞과 뒤에 동시에 아이콘을 사용한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0cdc7808-97ab-4081-8611-26778a775fde)

Don’t

라벨의 앞과 뒤에 아이콘을 동시에 표시할 수 없습니다.

라벨의 가독성을 해치지 않도록 아이콘은 꼭 필요한 경우에만 제한적으로 사용하는 것을 권장합니다.

## [Action Button vs. Chip](#action-button-vs-chip)

![Action Button과 Chip 비교 이미지](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c751b64-efab-4e7a-8400-27f8dff59cd0)

Action Button과 [Chip](/components/chip)은 유사한 형태를 가진 컴포넌트이지만, 사용 목적과 제공하는 기능에 차이가 있습니다.

Action Button

Chip

**목적**

액션 실행

정보 표현 + 선택 표현

**예시**

'완료', '제출', '다음', '삭제'

필터 ('서초4동 외 34'), 옵션 선택 ('0~6개월')

**라벨 표현**

라벨만 봐도 액션이 예상됨

선택하거나 활성화된 내용을 표시

**라벨 목적**

어떠한 행동을 하는지 인지하는 것이 중요

현재 어떤 조건/정보가 활성 상태인지 확인하는 게 중요

**사용 패턴**

단일로도 사용 가능

2개 이상 그룹으로 사용 권장

## [더 알아보기](#더-알아보기)

[

### What's New in Action Button

SEED Action Button은 기존 Box Button의 주요 문제를 해결하며, 사용자 경험과 접근성을 한층 더 강화했어요.





](/updates/whats-new-in-action-button)

## [Specification](#specification)

### base

상태

슬롯

속성

값

enabled

root

colorDuration

[$duration.color-transition](/foundations/design-token/reference/%24duration.color-transition)

colorTimingFunction

[$timing-function.easing](/foundations/design-token/reference/%24timing-function.easing)

label

fontWeight

[$font-weight.bold](/foundations/design-token/reference/%24font-weight.bold)

pressed

root

scaleScope

self

### variant=brandSolid

-   브랜드의 핵심 가치를 전달하며, 사용자 간 연결이 일어나는 서비스의 주요 기능에 사용합니다. 한 화면에 하나만 사용하는 것을 권장합니다.

상태

슬롯

속성

값

enabled

root

color

[$color.bg.brand-solid](/foundations/design-token/reference/%24color.bg.brand-solid)

브랜드와 관련된 요소들이 즉각적으로 인식될 수 있도록 돕습니다. 화면에서 가장 중요한 액션을 강조하는데 사용할 수 있습니다. (solid)

label

color

[$color.palette.static-white](/foundations/design-token/reference/%24color.palette.static-white)

icon

layout=iconOnly에서 사용되는 아이콘 슬롯입니다.

color

[$color.palette.static-white](/foundations/design-token/reference/%24color.palette.static-white)

prefixIcon

주로 액션의 의미를 보조합니다. suffixIcon과 함께 사용할 수 없습니다.

color

[$color.palette.static-white](/foundations/design-token/reference/%24color.palette.static-white)

suffixIcon

Chevron처럼 동작을 보조하는 역할입니다. prefixIcon과 함께 사용할 수 없습니다.

color

[$color.palette.static-white](/foundations/design-token/reference/%24color.palette.static-white)

progressCircle

trackColor

[$color.palette.static-white-alpha-300](/foundations/design-token/reference/%24color.palette.static-white-alpha-300)

rangeColor

[$color.palette.static-white](/foundations/design-token/reference/%24color.palette.static-white)

pressed

root

color

[$color.bg.brand-solid-pressed](/foundations/design-token/reference/%24color.bg.brand-solid-pressed)

브랜드와 관련된 요소들이 즉각적으로 인식될 수 있도록 돕습니다. 화면에서 가장 중요한 액션을 강조하는데 사용할 수 있습니다. (solid-pressed)

disabled

root

color

[$color.bg.disabled](/foundations/design-token/reference/%24color.bg.disabled)

label

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

icon

layout=iconOnly에서 사용되는 아이콘 슬롯입니다.

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

prefixIcon

주로 액션의 의미를 보조합니다. suffixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

suffixIcon

Chevron처럼 동작을 보조하는 역할입니다. prefixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

loading

root

color

[$color.bg.brand-solid-pressed](/foundations/design-token/reference/%24color.bg.brand-solid-pressed)

브랜드와 관련된 요소들이 즉각적으로 인식될 수 있도록 돕습니다. 화면에서 가장 중요한 액션을 강조하는데 사용할 수 있습니다. (solid-pressed)

### variant=neutralSolid

-   대부분의 화면에서 CTA로 사용합니다. 한 화면에 하나만 사용하는 것을 권장합니다.

상태

슬롯

속성

값

enabled

root

color

[$color.bg.neutral-inverted](/foundations/design-token/reference/%24color.bg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

label

color

[$color.fg.neutral-inverted](/foundations/design-token/reference/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

icon

layout=iconOnly에서 사용되는 아이콘 슬롯입니다.

color

[$color.fg.neutral-inverted](/foundations/design-token/reference/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

prefixIcon

주로 액션의 의미를 보조합니다. suffixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.neutral-inverted](/foundations/design-token/reference/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

suffixIcon

Chevron처럼 동작을 보조하는 역할입니다. prefixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.neutral-inverted](/foundations/design-token/reference/%24color.fg.neutral-inverted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted)

progressCircle

trackColor

[$color.palette.static-white-alpha-300](/foundations/design-token/reference/%24color.palette.static-white-alpha-300)

rangeColor

[$color.palette.static-white](/foundations/design-token/reference/%24color.palette.static-white)

pressed

root

color

[$color.bg.neutral-inverted-pressed](/foundations/design-token/reference/%24color.bg.neutral-inverted-pressed)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted-pressed)

disabled

root

color

[$color.bg.disabled](/foundations/design-token/reference/%24color.bg.disabled)

label

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

icon

layout=iconOnly에서 사용되는 아이콘 슬롯입니다.

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

prefixIcon

주로 액션의 의미를 보조합니다. suffixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

suffixIcon

Chevron처럼 동작을 보조하는 역할입니다. prefixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

loading

root

color

[$color.bg.neutral-inverted-pressed](/foundations/design-token/reference/%24color.bg.neutral-inverted-pressed)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (inverted-pressed)

### variant=neutralWeak

-   CTA를 제외한 대부분의 액션에 사용됩니다.

상태

슬롯

속성

값

enabled

root

color

[$color.bg.neutral-weak](/foundations/design-token/reference/%24color.bg.neutral-weak)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (weak)

label

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

icon

layout=iconOnly에서 사용되는 아이콘 슬롯입니다.

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

prefixIcon

주로 액션의 의미를 보조합니다. suffixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

suffixIcon

Chevron처럼 동작을 보조하는 역할입니다. prefixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

progressCircle

trackColor

[$color.palette.gray-500](/foundations/design-token/reference/%24color.palette.gray-500)

rangeColor

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

pressed

root

color

[$color.bg.neutral-weak-pressed](/foundations/design-token/reference/%24color.bg.neutral-weak-pressed)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (weak-pressed)

disabled

root

color

[$color.bg.disabled](/foundations/design-token/reference/%24color.bg.disabled)

label

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

icon

layout=iconOnly에서 사용되는 아이콘 슬롯입니다.

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

prefixIcon

주로 액션의 의미를 보조합니다. suffixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

suffixIcon

Chevron처럼 동작을 보조하는 역할입니다. prefixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

loading

root

color

[$color.bg.neutral-weak-pressed](/foundations/design-token/reference/%24color.bg.neutral-weak-pressed)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (weak-pressed)

### variant=criticalSolid

-   삭제나 초기화처럼 되돌릴 수 없는 중요한 작업에 사용합니다.

상태

슬롯

속성

값

enabled

root

color

[$color.bg.critical-solid](/foundations/design-token/reference/%24color.bg.critical-solid)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다. (solid)

label

color

[$color.palette.static-white](/foundations/design-token/reference/%24color.palette.static-white)

icon

layout=iconOnly에서 사용되는 아이콘 슬롯입니다.

color

[$color.palette.static-white](/foundations/design-token/reference/%24color.palette.static-white)

prefixIcon

주로 액션의 의미를 보조합니다. suffixIcon과 함께 사용할 수 없습니다.

color

[$color.palette.static-white](/foundations/design-token/reference/%24color.palette.static-white)

suffixIcon

Chevron처럼 동작을 보조하는 역할입니다. prefixIcon과 함께 사용할 수 없습니다.

color

[$color.palette.static-white](/foundations/design-token/reference/%24color.palette.static-white)

progressCircle

trackColor

[$color.palette.static-white-alpha-300](/foundations/design-token/reference/%24color.palette.static-white-alpha-300)

rangeColor

[$color.palette.static-white](/foundations/design-token/reference/%24color.palette.static-white)

pressed

root

color

[$color.bg.critical-solid-pressed](/foundations/design-token/reference/%24color.bg.critical-solid-pressed)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다. (solid-pressed)

disabled

root

color

[$color.bg.disabled](/foundations/design-token/reference/%24color.bg.disabled)

label

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

icon

layout=iconOnly에서 사용되는 아이콘 슬롯입니다.

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

prefixIcon

주로 액션의 의미를 보조합니다. suffixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

suffixIcon

Chevron처럼 동작을 보조하는 역할입니다. prefixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

loading

root

color

[$color.bg.critical-solid-pressed](/foundations/design-token/reference/%24color.bg.critical-solid-pressed)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다. (solid-pressed)

### variant=neutralOutline

-   variant=brandSolid, neutralSolid, criticalSolid와 함께 사용할 수 없으며, variant=brandOutline과 조합하여 사용하는 것을 권장합니다.

상태

슬롯

속성

값

enabled

root

color

[$color.bg.transparent](/foundations/design-token/reference/%24color.bg.transparent)

strokeColor

[$color.stroke.neutral-muted](/foundations/design-token/reference/%24color.stroke.neutral-muted)

의미 단위가 바뀌는 경계를 나누는 선입니다. 섹션과 섹션 사이, 콘텐츠와 액션 영역 사이, 헤더와 본문 경계처럼 한 화면에 한두 번만 등장하는 구분에 사용됩니다. (muted)

strokeWidth

1px

label

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

icon

layout=iconOnly에서 사용되는 아이콘 슬롯입니다.

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

prefixIcon

주로 액션의 의미를 보조합니다. suffixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

suffixIcon

Chevron처럼 동작을 보조하는 역할입니다. prefixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

progressCircle

trackColor

[$color.palette.gray-500](/foundations/design-token/reference/%24color.palette.gray-500)

rangeColor

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

pressed

root

color

[$color.bg.transparent-pressed](/foundations/design-token/reference/%24color.bg.transparent-pressed)

disabled

root

color

[$color.bg.transparent](/foundations/design-token/reference/%24color.bg.transparent)

strokeColor

[$color.stroke.neutral-muted](/foundations/design-token/reference/%24color.stroke.neutral-muted)

의미 단위가 바뀌는 경계를 나누는 선입니다. 섹션과 섹션 사이, 콘텐츠와 액션 영역 사이, 헤더와 본문 경계처럼 한 화면에 한두 번만 등장하는 구분에 사용됩니다. (muted)

label

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

icon

layout=iconOnly에서 사용되는 아이콘 슬롯입니다.

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

prefixIcon

주로 액션의 의미를 보조합니다. suffixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

suffixIcon

Chevron처럼 동작을 보조하는 역할입니다. prefixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

loading

root

color

[$color.bg.transparent](/foundations/design-token/reference/%24color.bg.transparent)

### variant=brandOutline

-   variant=brandSolid, neutralSolid, criticalSolid와 함께 사용할 수 없으며, variant=neutralOutline과 조합하여 사용하는 것을 권장합니다.

상태

슬롯

속성

값

enabled

root

color

[$color.bg.transparent](/foundations/design-token/reference/%24color.bg.transparent)

strokeColor

[$color.stroke.neutral-muted](/foundations/design-token/reference/%24color.stroke.neutral-muted)

의미 단위가 바뀌는 경계를 나누는 선입니다. 섹션과 섹션 사이, 콘텐츠와 액션 영역 사이, 헤더와 본문 경계처럼 한 화면에 한두 번만 등장하는 구분에 사용됩니다. (muted)

strokeWidth

1px

label

color

[$color.fg.brand](/foundations/design-token/reference/%24color.fg.brand)

브랜드와 관련된 요소들이 즉각적으로 인식될 수 있도록 돕습니다.

icon

layout=iconOnly에서 사용되는 아이콘 슬롯입니다.

color

[$color.fg.brand](/foundations/design-token/reference/%24color.fg.brand)

브랜드와 관련된 요소들이 즉각적으로 인식될 수 있도록 돕습니다.

prefixIcon

주로 액션의 의미를 보조합니다. suffixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.brand](/foundations/design-token/reference/%24color.fg.brand)

브랜드와 관련된 요소들이 즉각적으로 인식될 수 있도록 돕습니다.

suffixIcon

Chevron처럼 동작을 보조하는 역할입니다. prefixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.brand](/foundations/design-token/reference/%24color.fg.brand)

브랜드와 관련된 요소들이 즉각적으로 인식될 수 있도록 돕습니다.

progressCircle

trackColor

[$color.palette.carrot-200](/foundations/design-token/reference/%24color.palette.carrot-200)

rangeColor

[$color.bg.brand-solid](/foundations/design-token/reference/%24color.bg.brand-solid)

브랜드와 관련된 요소들이 즉각적으로 인식될 수 있도록 돕습니다. 화면에서 가장 중요한 액션을 강조하는데 사용할 수 있습니다. (solid)

pressed

root

color

[$color.bg.transparent-pressed](/foundations/design-token/reference/%24color.bg.transparent-pressed)

disabled

root

color

[$color.bg.transparent](/foundations/design-token/reference/%24color.bg.transparent)

strokeColor

[$color.stroke.neutral-muted](/foundations/design-token/reference/%24color.stroke.neutral-muted)

의미 단위가 바뀌는 경계를 나누는 선입니다. 섹션과 섹션 사이, 콘텐츠와 액션 영역 사이, 헤더와 본문 경계처럼 한 화면에 한두 번만 등장하는 구분에 사용됩니다. (muted)

label

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

icon

layout=iconOnly에서 사용되는 아이콘 슬롯입니다.

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

prefixIcon

주로 액션의 의미를 보조합니다. suffixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

suffixIcon

Chevron처럼 동작을 보조하는 역할입니다. prefixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

loading

root

color

[$color.bg.transparent](/foundations/design-token/reference/%24color.bg.transparent)

### variant=ghost

-   배경 없이 텍스트와 아이콘만 표시됩니다. 모두 동일한 색상을 사용하는 조건에서 icon, prefix icon, suffix icon, label에 정의된 color를 변경할 수 있으며, label의 fontWeight를 \`$font-weight.regular\` 또는 \`$font-weight.medium\`으로 변경하여 주목도를 조절할 수 있습니다.

상태

슬롯

속성

값

enabled

root

color

#ffffff00

label

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

icon

layout=iconOnly에서 사용되는 아이콘 슬롯입니다.

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

prefixIcon

주로 액션의 의미를 보조합니다. suffixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

suffixIcon

Chevron처럼 동작을 보조하는 역할입니다. prefixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

progressCircle

trackColor

[$color.palette.gray-500](/foundations/design-token/reference/%24color.palette.gray-500)

rangeColor

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

pressed

root

color

[$color.bg.transparent-pressed](/foundations/design-token/reference/%24color.bg.transparent-pressed)

disabled

root

color

#ffffff00

label

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

icon

layout=iconOnly에서 사용되는 아이콘 슬롯입니다.

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

prefixIcon

주로 액션의 의미를 보조합니다. suffixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

suffixIcon

Chevron처럼 동작을 보조하는 역할입니다. prefixIcon과 함께 사용할 수 없습니다.

color

[$color.fg.disabled](/foundations/design-token/reference/%24color.fg.disabled)

loading

root

color

[$color.bg.transparent-pressed](/foundations/design-token/reference/%24color.bg.transparent-pressed)

### size=xsmall

-   작은 공간에서 효율적으로 사용할 수 있는 Pill 형태로 제공됩니다.

상태

슬롯

속성

값

enabled

root

minHeight

[$dimension.x8](/foundations/design-token/reference/%24dimension.x8)

cornerRadius

[$radius.full](/foundations/design-token/reference/%24radius.full)

progressCircle

size

14px

thickness

2px

### size=xsmall, layout=withText

-   **size=xsmall**: 작은 공간에서 효율적으로 사용할 수 있는 Pill 형태로 제공됩니다.
-   **layout=withText**: 텍스트와 함께 아이콘을 표시할 수 있습니다.

상태

슬롯

속성

값

enabled

root

gap

[$dimension.x1](/foundations/design-token/reference/%24dimension.x1)

paddingX

[$dimension.x3\_5](/foundations/design-token/reference/%24dimension.x3_5)

paddingY

[$dimension.x1\_5](/foundations/design-token/reference/%24dimension.x1_5)

prefixIcon

주로 액션의 의미를 보조합니다. suffixIcon과 함께 사용할 수 없습니다.

size

[$dimension.x3\_5](/foundations/design-token/reference/%24dimension.x3_5)

suffixIcon

Chevron처럼 동작을 보조하는 역할입니다. prefixIcon과 함께 사용할 수 없습니다.

size

[$dimension.x3\_5](/foundations/design-token/reference/%24dimension.x3_5)

label

fontSize

[$font-size.t3](/foundations/design-token/reference/%24font-size.t3)

lineHeight

[$line-height.t3](/foundations/design-token/reference/%24line-height.t3)

### size=xsmall, layout=iconOnly

-   **size=xsmall**: 작은 공간에서 효율적으로 사용할 수 있는 Pill 형태로 제공됩니다.
-   **layout=iconOnly**: 아이콘만으로 의미를 전달하기 때문에 접근성이 떨어집니다. 꼭 필요한 경우에만 접근성 레이블과 함께 사용하는 것을 권장합니다.

상태

슬롯

속성

값

enabled

root

minWidth

[$dimension.x8](/foundations/design-token/reference/%24dimension.x8)

paddingX

[$dimension.x1\_5](/foundations/design-token/reference/%24dimension.x1_5)

paddingY

[$dimension.x1\_5](/foundations/design-token/reference/%24dimension.x1_5)

icon

layout=iconOnly에서 사용되는 아이콘 슬롯입니다.

size

[$dimension.x3\_5](/foundations/design-token/reference/%24dimension.x3_5)

### size=small

-   화면 중앙에서 범용적으로 사용됩니다.

상태

슬롯

속성

값

enabled

root

minHeight

[$dimension.x9](/foundations/design-token/reference/%24dimension.x9)

cornerRadius

[$radius.r2](/foundations/design-token/reference/%24radius.r2)

progressCircle

size

14px

thickness

2px

### size=small, layout=withText

-   **size=small**: 화면 중앙에서 범용적으로 사용됩니다.
-   **layout=withText**: 텍스트와 함께 아이콘을 표시할 수 있습니다.

상태

슬롯

속성

값

enabled

root

gap

[$dimension.x1](/foundations/design-token/reference/%24dimension.x1)

paddingX

[$dimension.x3\_5](/foundations/design-token/reference/%24dimension.x3_5)

paddingY

[$dimension.x2](/foundations/design-token/reference/%24dimension.x2)

prefixIcon

주로 액션의 의미를 보조합니다. suffixIcon과 함께 사용할 수 없습니다.

size

[$dimension.x3\_5](/foundations/design-token/reference/%24dimension.x3_5)

suffixIcon

Chevron처럼 동작을 보조하는 역할입니다. prefixIcon과 함께 사용할 수 없습니다.

size

[$dimension.x3\_5](/foundations/design-token/reference/%24dimension.x3_5)

label

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

[$line-height.t4](/foundations/design-token/reference/%24line-height.t4)

### size=small, layout=iconOnly

-   **size=small**: 화면 중앙에서 범용적으로 사용됩니다.
-   **layout=iconOnly**: 아이콘만으로 의미를 전달하기 때문에 접근성이 떨어집니다. 꼭 필요한 경우에만 접근성 레이블과 함께 사용하는 것을 권장합니다.

상태

슬롯

속성

값

enabled

root

minWidth

[$dimension.x9](/foundations/design-token/reference/%24dimension.x9)

paddingX

[$dimension.x2](/foundations/design-token/reference/%24dimension.x2)

paddingY

[$dimension.x2](/foundations/design-token/reference/%24dimension.x2)

icon

layout=iconOnly에서 사용되는 아이콘 슬롯입니다.

size

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

### size=medium

-   화면 중앙에서 범용적으로 사용됩니다.

상태

슬롯

속성

값

enabled

root

minHeight

[$dimension.x10](/foundations/design-token/reference/%24dimension.x10)

cornerRadius

[$radius.r2](/foundations/design-token/reference/%24radius.r2)

progressCircle

size

16px

thickness

2px

### size=medium, layout=withText

-   **size=medium**: 화면 중앙에서 범용적으로 사용됩니다.
-   **layout=withText**: 텍스트와 함께 아이콘을 표시할 수 있습니다.

상태

슬롯

속성

값

enabled

root

gap

[$dimension.x1\_5](/foundations/design-token/reference/%24dimension.x1_5)

paddingX

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

paddingY

[$dimension.x2\_5](/foundations/design-token/reference/%24dimension.x2_5)

prefixIcon

주로 액션의 의미를 보조합니다. suffixIcon과 함께 사용할 수 없습니다.

size

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

suffixIcon

Chevron처럼 동작을 보조하는 역할입니다. prefixIcon과 함께 사용할 수 없습니다.

size

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

label

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

[$line-height.t4](/foundations/design-token/reference/%24line-height.t4)

### size=medium, layout=iconOnly

-   **size=medium**: 화면 중앙에서 범용적으로 사용됩니다.
-   **layout=iconOnly**: 아이콘만으로 의미를 전달하기 때문에 접근성이 떨어집니다. 꼭 필요한 경우에만 접근성 레이블과 함께 사용하는 것을 권장합니다.

상태

슬롯

속성

값

enabled

root

minWidth

[$dimension.x10](/foundations/design-token/reference/%24dimension.x10)

paddingX

[$dimension.x2\_5](/foundations/design-token/reference/%24dimension.x2_5)

paddingY

[$dimension.x2\_5](/foundations/design-token/reference/%24dimension.x2_5)

icon

layout=iconOnly에서 사용되는 아이콘 슬롯입니다.

size

18px

### size=large

-   주로 CTA 역할로 사용됩니다.

상태

슬롯

속성

값

enabled

root

minHeight

[$dimension.x13](/foundations/design-token/reference/%24dimension.x13)

cornerRadius

[$radius.r3](/foundations/design-token/reference/%24radius.r3)

progressCircle

size

18px

thickness

2px

### size=large, layout=withText

-   **size=large**: 주로 CTA 역할로 사용됩니다.
-   **layout=withText**: 텍스트와 함께 아이콘을 표시할 수 있습니다.

상태

슬롯

속성

값

enabled

root

gap

[$dimension.x2](/foundations/design-token/reference/%24dimension.x2)

paddingX

[$dimension.x5](/foundations/design-token/reference/%24dimension.x5)

paddingY

[$dimension.x3\_5](/foundations/design-token/reference/%24dimension.x3_5)

prefixIcon

주로 액션의 의미를 보조합니다. suffixIcon과 함께 사용할 수 없습니다.

size

22px

suffixIcon

Chevron처럼 동작을 보조하는 역할입니다. prefixIcon과 함께 사용할 수 없습니다.

size

22px

label

fontSize

[$font-size.t6](/foundations/design-token/reference/%24font-size.t6)

lineHeight

[$line-height.t6](/foundations/design-token/reference/%24line-height.t6)

### size=large, layout=iconOnly

-   **size=large**: 주로 CTA 역할로 사용됩니다.
-   **layout=iconOnly**: 아이콘만으로 의미를 전달하기 때문에 접근성이 떨어집니다. 꼭 필요한 경우에만 접근성 레이블과 함께 사용하는 것을 권장합니다.

상태

슬롯

속성

값

enabled

root

minWidth

[$dimension.x13](/foundations/design-token/reference/%24dimension.x13)

paddingX

[$dimension.x3\_5](/foundations/design-token/reference/%24dimension.x3_5)

paddingY

[$dimension.x3\_5](/foundations/design-token/reference/%24dimension.x3_5)

icon

layout=iconOnly에서 사용되는 아이콘 슬롯입니다.

size

22px

Last updated on

[이전 문서Accordion](/components/accordion)[다음 문서Alert Dialog](/components/alert-dialog)
