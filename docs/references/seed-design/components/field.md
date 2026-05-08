<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/field
fetched: 2026-05-08T06:33:26.478Z
-->

[Components](/docs/components)Controls

# Field

사용자로부터 값을 입력받는 컨테이너 컴포넌트로, 일관된 레이블, 도움말, 오류 표기와 상태 피드백을 제공합니다.

LLMs.txt

다른 도구로 열기

Figma

Done

React

Done

Text Field 및 Slider 내부에서 사용

iOS

Done

Android

Done

## [Anatomy](#anatomy)

![Field의 Anatomy 이미지. Header, Input, Footer 세 영역으로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd3e7c5d-4a33-4ff5-bd6b-94d3db3a2f80)

Field는 Header, Input, Footer 세 영역으로 구성됩니다.

-   Header에는 Label, Requirement Mark, 필요 시 Suffix Slot에 Sub Action이 포함됩니다.
-   Input은 [Text Input](/docs/components/text-input), [Textarea](/docs/components/text-input#textarea), [Input Button](/docs/components/input-button) 등 실제 입력 UI가 들어오는 영역입니다.
-   Footer는 Helper Text, Error Message, Character Count를 통해 보조 정보를 제공합니다.

## [Properties](#properties)

### [Header Property](#header-property)

![Field의 Header Property - Label Weight, Requirement Mark, Suffix Slot](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d4cf60f-58ab-4f74-9207-3ed9820fc44c)

Label은 Medium과 Bold 두 가지 Weight를 제공합니다. Label 텍스트는 명사형으로 작성하고 마침표를 사용하지 않으며, 한 줄로 표현하는 것이 좋습니다. 필요한 경우에만 최대 두 줄까지 사용할 수 있습니다.

Label 우측에 필수 입력 여부를 표시할 수 있습니다. 필수 값은 Requirement Mark로, 선택 값은 Text로 표시합니다.

Suffix Slot은 Label 우측에 위치하며, Ghost Button이나 Icon을 통해 보조 액션 기능을 제공합니다.

### [Input Slot](#input-slot)

![Field의 Input Slot - 다양한 Input 컴포넌트를 배치할 수 있는 영역](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c92fca89-da16-4d9b-b0ed-0e029f8d7bb7)

Input Slot에는 실제 값을 입력받는 다양한 Input 컴포넌트를 배치할 수 있습니다.

SEED에서 제공하는 Input 컴포넌트는 아래와 같으며, 이들을 조합하여 Template 형태로 제공합니다.

[

### Text Field

Text Input을 포함한 Field



](/docs/components/text-input)[

### Textarea Field

Textarea를 포함한 Field



](/docs/components/text-input#textarea)[

### Checkbox Group Field

Checkbox Group을 포함한 Field



](/docs/components/checkbox)[

### Radio Group Field

Radio Group을 포함한 Field



](/docs/components/radio)[

### Select Box Group Field

Select Box Group을 포함한 Field



](/docs/components/select-box)[

### Slider Field

Slider를 포함한 Field



](/docs/components/slider)[

### Select Field (Field Button)

Input Button을 포함한 Field



](/docs/components/input-button)

특수한 포맷이나 마스킹 등의 기능이 필요한 경우, 포맷과 동작을 직접 정의해서 사용할 수 있습니다.

### [Footer Property](#footer-property)

![Field의 Footer Property - Helper Text, Error Message, Character Count](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a95294f2-a038-4b87-acb8-539aeb10baa8)

Footer 좌측에는 Helper Text와 Error Message가 위치하며, 우측에는 Character Count를 표시할 수 있습니다.

Error Message와 Helper Text가 동시에 존재할 경우 Error Message만 표시합니다. 메시지는 행동 지시형으로 간결하게 작성해주세요. (예: "휴대폰 번호 10-11자리로 입력해 주세요")

Character Count는 값이 있을 때 Neutral 컬러로 표시됩니다. 입력 길이에 제한이 있는 경우에만 사용해주세요.

## [Guidelines](#guidelines)

### [Form의 구성](#form의-구성)

![Form의 구성 요소 - Input, Field, Fieldset, Form](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/774db969-1076-494f-b725-29c383579b8e)

Field 컴포넌트를 사용하려면 먼저 Form의 기본 구조를 이해해야 합니다. Form은 사용자로부터 입력값을 받기 위한 구조로, 크게 네 가지 요소로 구성되어 있습니다.

-   **Input**: UI에서 실제 입력을 담당하는 요소입니다.
-   **Field**: Header, Input, Footer를 하나로 묶어 제공하는 요소입니다.
-   **Fieldset**: 여러 Field를 하나의 섹션으로 묶는 컨테이너입니다.
-   **Form**: Input, Field, Fieldset 등 입력 요소의 값을 제출하고 유효성을 검증하는 컨테이너입니다.

### [제출(Submit)과 검증(Validation)](#제출submit과-검증validation)

Form은 Input에 입력된 값이 유효한지 검증(Validation)하고 값을 전달(Submit)하는 과정을 거칩니다.

검증(Validation)은 일반적으로 두 가지 방식이 있으며, 상황에 따라 혼합하여 사용할 수 있습니다. 필수 값이나 글자 수 확인 등의 단순한 검증은 인라인 방식을, 비즈니스 로직이나 서버 규칙은 제출 시 검증을 적용합니다. 보안이나 금융 정보와 같이 오입력 위험이 큰 필드는 즉시 피드백을 제공하는 인라인 검증을 권장합니다.

#### [제출 시 검증 (Validation on Submit)](#제출-시-검증-validation-on-submit)

![제출 시 검증의 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ba41bbd-2f62-48e1-a3e1-e8572f928431)

Submit 버튼을 클릭하면 검증을 진행합니다. Submit 버튼은 조건 충족 여부에 따라 활성화되거나 항상 활성화 상태로 유지될 수 있습니다. 기본적으로는 제출 시 전체 검증 방식을 사용합니다.

#### [인라인 검증 (Inline validation)](#인라인-검증-inline-validation)

![인라인 검증의 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06250a20-9cc2-490c-8c98-b4f77b382c8e)

Field 단위로 검증을 진행합니다. Input 요소에서 Focus가 떠난 경우(blur) 또는 값이 변경될 때마다(change/update) 입력값을 검증합니다. 한 화면에 필드가 많아 오류 누적을 방지해야 하는 경우에 사용합니다.

### [이탈 시 안내](#이탈-시-안내)

![이탈 시 안내 다이얼로그가 표시되는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fcd54420-f4fe-4188-a2de-4ed4d0347083)

작성, 수정 화면에 진입한 후에 다시 이탈하려는 경우 입력된 값이 지워질 수 있다는 경고 안내를 [Alert Dialog](/docs/components/alert-dialog) 등을 통해 표시해야 합니다.

![이탈 시 안내 다이얼로그가 불필요한 예시: 값에 변경이 없는 경우, 자동 저장을 사용하는 경우](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d65eee5-55b6-484c-947e-bda1ac44a7d4)

값의 변화가 없거나 자동 저장 기능이 있는 경우에는 안내를 생략할 수 있습니다.

### [필수 입력 여부 표시하기](#필수-입력-여부-표시하기)

![필수 입력 표시 - Requirement Mark 사용 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39db444d-8102-4584-8893-a0a7004cd0b8)

![Requirement Mark와 Text 혼용 사용](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2c355bb-d75d-4789-a35c-ff4f1de6a851)

Don’t

같은 화면 안에서 Requirement Mark와 Text를 혼용하지 마세요.

한 화면에서 필드의 2/3 이상이 필수 항목이면 '선택'만 표시하고, 그렇지 않으면 '\*'만 사용합니다. 한 Form 내에서는 두 표기법을 혼용하지 않습니다.

### [단일 화면에서 Form 구성하기](#단일-화면에서-form-구성하기)

![단일 화면 Form 구성 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a44627b8-a29b-44a4-b897-7744e80da8ad)

어떤 엔티티를 생성, 수정할 때 활용할 수 있는 UX 패턴입니다. Form은 엔티티의 데이터를 입력하거나 수정할 수 있도록 구성되어 있어야 합니다. 생성(Create) Form과 수정(Update) Form은 가능하면 동일한 구성을 유지해야 합니다.

### [단계별 Form 구성하기](#단계별-form-구성하기)

![단계별 Form 구성 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1429d5bc-c60a-4f14-a831-3944de43bca8)

이전 단계에서 선택한 옵션에 추가적인 데이터 입력이나 수정이 필요한 경우 활용할 수 있는 UX 패턴입니다. 모바일 화면이 여러 개의 Form, Input으로 복잡해지는 경우에도 활용할 수 있습니다.

상황이나 구성하고자 하는 플로우에 따라서 단일 화면 Form과 혼합해서 구성할 수 있습니다.

## [Specification](#specification)

### [Field](#field)

#### base

상태

슬롯

속성

값

enabled

root

gap

[$dimension.x2](/docs/foundation/design-token/%24dimension.x2)

header

paddingX

[$dimension.x0\_5](/docs/foundation/design-token/%24dimension.x0_5)

gap

[$dimension.x2\_5](/docs/foundation/design-token/%24dimension.x2_5)

indicatorIcon

필수 입력 필드임을 나타내는 아이콘입니다. indicatorText 및 Field Label과의 조화를 위해 폰트 스케일링에 반응합니다.

color

[$color.fg.critical](/docs/foundation/design-token/%24color.fg.critical)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다.

size

0.375rem (6px)

paddingTop

0.25rem (4px)

paddingLeft

0.125rem (2px)

indicatorText

color

[$color.fg.neutral-subtle](/docs/foundation/design-token/%24color.fg.neutral-subtle)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (subtle)

fontSize

[$font-size.t4](/docs/foundation/design-token/%24font-size.t4)

lineHeight

Field Label과의 조화를 위해 Field Label의 lineHeight와 동일한 값을 갖습니다.

[$line-height.t5](/docs/foundation/design-token/%24line-height.t5)

fontWeight

[$font-weight.regular](/docs/foundation/design-token/%24font-weight.regular)

paddingLeft

0.25rem (4px)

footer

paddingX

[$dimension.x0\_5](/docs/foundation/design-token/%24dimension.x0_5)

gap

[$dimension.x2](/docs/foundation/design-token/%24dimension.x2)

description

color

[$color.fg.neutral-subtle](/docs/foundation/design-token/%24color.fg.neutral-subtle)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (subtle)

fontWeight

[$font-weight.regular](/docs/foundation/design-token/%24font-weight.regular)

fontSize

[$font-size.t4](/docs/foundation/design-token/%24font-size.t4)

lineHeight

[$line-height.t4](/docs/foundation/design-token/%24line-height.t4)

descriptionIcon

paddingRight

[$dimension.x1\_5](/docs/foundation/design-token/%24dimension.x1_5)

color

[$color.fg.neutral-subtle](/docs/foundation/design-token/%24color.fg.neutral-subtle)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (subtle)

size

[$dimension.x4](/docs/foundation/design-token/%24dimension.x4)

errorMessage

color

[$color.fg.critical](/docs/foundation/design-token/%24color.fg.critical)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다.

fontWeight

[$font-weight.regular](/docs/foundation/design-token/%24font-weight.regular)

fontSize

[$font-size.t4](/docs/foundation/design-token/%24font-size.t4)

lineHeight

[$line-height.t4](/docs/foundation/design-token/%24line-height.t4)

errorIcon

paddingRight

[$dimension.x1\_5](/docs/foundation/design-token/%24dimension.x1_5)

color

[$color.fg.critical](/docs/foundation/design-token/%24color.fg.critical)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다.

size

[$dimension.x4](/docs/foundation/design-token/%24dimension.x4)

characterCount

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

fontWeight

[$font-weight.regular](/docs/foundation/design-token/%24font-weight.regular)

fontSize

[$font-size.t4](/docs/foundation/design-token/%24font-size.t4)

lineHeight

[$line-height.t4](/docs/foundation/design-token/%24line-height.t4)

maxCharacterCount

color

[$color.fg.neutral-subtle](/docs/foundation/design-token/%24color.fg.neutral-subtle)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (subtle)

fontWeight

[$font-weight.regular](/docs/foundation/design-token/%24font-weight.regular)

fontSize

[$font-size.t4](/docs/foundation/design-token/%24font-size.t4)

lineHeight

[$line-height.t4](/docs/foundation/design-token/%24line-height.t4)

invalid

characterCount

color

[$color.fg.critical](/docs/foundation/design-token/%24color.fg.critical)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다.

maxCharacterCount

color

[$color.fg.critical](/docs/foundation/design-token/%24color.fg.critical)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다.

### [Field Label](#field-label)

#### base

상태

슬롯

속성

값

enabled

root

color

[$color.fg.neutral](/docs/foundation/design-token/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

fontSize

[$font-size.t5](/docs/foundation/design-token/%24font-size.t5)

lineHeight

[$line-height.t5](/docs/foundation/design-token/%24line-height.t5)

#### weight=medium

상태

슬롯

속성

값

enabled

root

fontWeight

[$font-weight.medium](/docs/foundation/design-token/%24font-weight.medium)

#### weight=bold

상태

슬롯

속성

값

enabled

root

fontWeight

[$font-weight.bold](/docs/foundation/design-token/%24font-weight.bold)

Last updated on

[

Chip

사용자가 선택하거나 입력하는 값을 표시하는 컴포넌트입니다.

](/docs/components/chip)[

Input Button

입력 필드 형태의 버튼으로, 선택창이나 피커를 열 때 사용합니다. 선택이 완료되면 버튼 라벨에 선택된 값이 표시됩니다.

](/docs/components/input-button)
