<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/field
fetched: 2026-08-31T04:58:59.850Z
-->

ComponentsLLMS.txt

# Field

사용자로부터 값을 입력받는 컨테이너 컴포넌트로, 일관된 레이블, 도움말, 오류 표기와 상태 피드백을 제공합니다.

FigmaReactLynxiOSAndroid

![Field cover image](/og/components/field.webp)

## [Anatomy](#anatomy)

![Field의 Anatomy 이미지. Header, Input, Footer 세 영역으로 구성됩니다.](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0daa1a7f-b6c7-4634-9b62-36352d2303d9)

Field는 Header, Input, Footer 세 영역으로 구성됩니다.

-   Header에는 Label, Requirement Mark, 필요 시 Suffix Slot에 Sub Action이 포함됩니다.
-   Input은 [Text Input](/components/text-input), [Textarea](/components/text-input#textarea), [Input Button](/components/input-button) 등 실제 입력 UI가 들어오는 영역입니다.
-   Footer는 Helper Text, Error Message, Character Count를 통해 보조 정보를 제공합니다.

## [Properties](#properties)

### [Header Property](#header-property)

![Field의 Header Property - Label Weight, Requirement Mark, Suffix Slot](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57e9f589-143b-40bb-b432-3cba72e45e02)

Label은 Medium과 Bold 두 가지 Weight를 제공합니다. Label 텍스트는 명사형으로 작성하고 마침표를 사용하지 않으며, 한 줄로 표현하는 것이 좋습니다. 필요한 경우에만 최대 두 줄까지 사용할 수 있습니다.

Label 우측에 필수 입력 여부를 표시할 수 있습니다. 필수 값은 Requirement Mark로, 선택 값은 Text로 표시합니다.

Suffix Slot은 Label 우측에 위치하며, Ghost Button이나 Icon을 통해 보조 액션 기능을 제공합니다.

### [Input Slot](#input-slot)

![Field의 Input Slot - 다양한 Input 컴포넌트를 배치할 수 있는 영역](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a6d9e86-46ef-4f2b-9911-02f35fadcd13)

Input Slot에는 실제 값을 입력받는 다양한 Input 컴포넌트를 배치할 수 있습니다.

SEED에서 제공하는 Input 컴포넌트는 아래와 같으며, 이들을 조합하여 Template 형태로 제공합니다.

[

### Text Field

Text Input을 포함한 Field







](/components/text-input)[

### Textarea Field

Textarea를 포함한 Field







](/components/text-input#textarea)[

### Checkbox Group Field

Checkbox Group을 포함한 Field







](/components/checkbox)[

### Radio Group Field

Radio Group을 포함한 Field







](/components/radio)[

### Select Box Group Field

Select Box Group을 포함한 Field







](/components/select-box)[

### Select Field

Select를 포함한 Field







](/components/select)[

### Slider Field

Slider를 포함한 Field







](/components/slider)[

### Field Button

Input Button을 포함한 Field







](/components/input-button)

특수한 포맷이나 마스킹 등의 기능이 필요한 경우, 포맷과 동작을 직접 정의해서 사용할 수 있습니다.

### [Footer Property](#footer-property)

![Field의 Footer Property - Helper Text, Error Message, Character Count](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8f868ec-4095-424a-84e5-f6109941347e)

Footer 좌측에는 Helper Text와 Error Message가 위치하며, 우측에는 Character Count를 표시할 수 있습니다.

Error Message와 Helper Text가 동시에 존재할 경우 Error Message만 표시합니다. 메시지는 행동 지시형으로 간결하게 작성해주세요. (예: "휴대폰 번호 10-11자리로 입력해 주세요")

Character Count는 값이 있을 때 Neutral 컬러로 표시됩니다. 입력 길이에 제한이 있는 경우에만 사용해주세요.

## [Guidelines](#guidelines)

### [Form의 구성](#form의-구성)

![Form의 구성 요소 - Input, Field, Fieldset, Form](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35b64cda-0e59-4c64-a75a-fd26dca4fd43)

Field 컴포넌트를 사용하려면 먼저 Form의 기본 구조를 이해해야 합니다. Form은 사용자로부터 입력값을 받기 위한 구조로, 크게 네 가지 요소로 구성되어 있습니다.

-   **Input**: UI에서 실제 입력을 담당하는 요소입니다.
-   **Field**: Header, Input, Footer를 하나로 묶어 제공하는 요소입니다.
-   **Fieldset**: 여러 Field를 하나의 섹션으로 묶는 컨테이너입니다.
-   **Form**: Input, Field, Fieldset 등 입력 요소의 값을 제출하고 유효성을 검증하는 컨테이너입니다.

### [제출(Submit)과 검증(Validation)](#제출submit과-검증validation)

Form은 Input에 입력된 값이 유효한지 검증(Validation)하고 값을 전달(Submit)하는 과정을 거칩니다.

검증(Validation)은 일반적으로 두 가지 방식이 있으며, 상황에 따라 혼합하여 사용할 수 있습니다. 필수 값이나 글자 수 확인 등의 단순한 검증은 인라인 방식을, 비즈니스 로직이나 서버 규칙은 제출 시 검증을 적용합니다. 보안이나 금융 정보와 같이 오입력 위험이 큰 필드는 즉시 피드백을 제공하는 인라인 검증을 권장합니다.

#### [제출 시 검증 (Validation on Submit)](#제출-시-검증-validation-on-submit)

![제출 시 검증의 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2389bdf1-a927-429c-9125-368734a9af76)

Submit 버튼을 클릭하면 검증을 진행합니다. Submit 버튼은 조건 충족 여부에 따라 활성화되거나 항상 활성화 상태로 유지될 수 있습니다. 기본적으로는 제출 시 전체 검증 방식을 사용합니다.

#### [인라인 검증 (Inline validation)](#인라인-검증-inline-validation)

![인라인 검증의 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8029e80-4b49-4108-bbab-5987933e8c79)

Field 단위로 검증을 진행합니다. Input 요소에서 Focus가 떠난 경우(blur) 또는 값이 변경될 때마다(change/update) 입력값을 검증합니다. 한 화면에 필드가 많아 오류 누적을 방지해야 하는 경우에 사용합니다.

### [이탈 시 안내](#이탈-시-안내)

![이탈 시 안내 다이얼로그가 표시되는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b7ef90f-40eb-46cb-bfe2-c762840f9963)

작성, 수정 화면에 진입한 후에 다시 이탈하려는 경우 입력된 값이 지워질 수 있다는 경고 안내를 [Alert Dialog](/components/alert-dialog) 등을 통해 표시해야 합니다.

![이탈 시 안내 다이얼로그가 불필요한 예시: 값에 변경이 없는 경우, 자동 저장을 사용하는 경우](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/776e29a5-50f0-48a0-b5dc-9f26e5b65815)

값의 변화가 없거나 자동 저장 기능이 있는 경우에는 안내를 생략할 수 있습니다.

### [필수 입력 여부 표시하기](#필수-입력-여부-표시하기)

![필수 입력 표시 - Requirement Mark 사용 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3a9bb54-eb6f-4643-925e-5ad04073eed5)

![Requirement Mark와 Text 혼용 사용](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1580751e-4e3c-4045-b6b6-911190d96c1b)

Don’t

같은 화면 안에서 Requirement Mark와 Text를 혼용하지 마세요.

한 화면에서 필드의 2/3 이상이 필수 항목이면 '선택'만 표시하고, 그렇지 않으면 '\*'만 사용합니다. 한 Form 내에서는 두 표기법을 혼용하지 않습니다.

### [단일 화면에서 Form 구성하기](#단일-화면에서-form-구성하기)

![단일 화면 Form 구성 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38dfd734-b0d7-433c-8ead-57bf5c3b572b)

어떤 엔티티를 생성, 수정할 때 활용할 수 있는 UX 패턴입니다. Form은 엔티티의 데이터를 입력하거나 수정할 수 있도록 구성되어 있어야 합니다. 생성(Create) Form과 수정(Update) Form은 가능하면 동일한 구성을 유지해야 합니다.

### [단계별 Form 구성하기](#단계별-form-구성하기)

![단계별 Form 구성 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a4316a8-78d7-4ed7-876a-9d12899de351)

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

[$dimension.x2](/foundations/design-token/reference/%24dimension.x2)

header

paddingX

[$dimension.x0\_5](/foundations/design-token/reference/%24dimension.x0_5)

gap

[$dimension.x2\_5](/foundations/design-token/reference/%24dimension.x2_5)

indicatorIcon

필수 입력 필드임을 나타내는 아이콘입니다. indicatorText 및 Field Label과의 조화를 위해 폰트 스케일링에 반응합니다.

color

[$color.fg.critical](/foundations/design-token/reference/%24color.fg.critical)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다.

size

0.375rem (6px)

paddingTop

0.25rem (4px)

paddingLeft

0.125rem (2px)

indicatorText

color

[$color.fg.neutral-subtle](/foundations/design-token/reference/%24color.fg.neutral-subtle)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (subtle)

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

Field Label과의 조화를 위해 Field Label의 lineHeight와 동일한 값을 갖습니다.

[$line-height.t5](/foundations/design-token/reference/%24line-height.t5)

fontWeight

[$font-weight.regular](/foundations/design-token/reference/%24font-weight.regular)

paddingLeft

0.25rem (4px)

footer

paddingX

[$dimension.x0\_5](/foundations/design-token/reference/%24dimension.x0_5)

gap

[$dimension.x2](/foundations/design-token/reference/%24dimension.x2)

description

color

[$color.fg.neutral-subtle](/foundations/design-token/reference/%24color.fg.neutral-subtle)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (subtle)

fontWeight

[$font-weight.regular](/foundations/design-token/reference/%24font-weight.regular)

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

[$line-height.t4](/foundations/design-token/reference/%24line-height.t4)

descriptionIcon

paddingRight

[$dimension.x1\_5](/foundations/design-token/reference/%24dimension.x1_5)

color

[$color.fg.neutral-subtle](/foundations/design-token/reference/%24color.fg.neutral-subtle)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (subtle)

size

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

errorMessage

color

[$color.fg.critical](/foundations/design-token/reference/%24color.fg.critical)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다.

fontWeight

[$font-weight.regular](/foundations/design-token/reference/%24font-weight.regular)

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

[$line-height.t4](/foundations/design-token/reference/%24line-height.t4)

errorIcon

paddingRight

[$dimension.x1\_5](/foundations/design-token/reference/%24dimension.x1_5)

color

[$color.fg.critical](/foundations/design-token/reference/%24color.fg.critical)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다.

size

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

characterCount

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

fontWeight

[$font-weight.regular](/foundations/design-token/reference/%24font-weight.regular)

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

[$line-height.t4](/foundations/design-token/reference/%24line-height.t4)

maxCharacterCount

color

[$color.fg.neutral-subtle](/foundations/design-token/reference/%24color.fg.neutral-subtle)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (subtle)

fontWeight

[$font-weight.regular](/foundations/design-token/reference/%24font-weight.regular)

fontSize

[$font-size.t4](/foundations/design-token/reference/%24font-size.t4)

lineHeight

[$line-height.t4](/foundations/design-token/reference/%24line-height.t4)

invalid

characterCount

color

[$color.fg.critical](/foundations/design-token/reference/%24color.fg.critical)

오류, 경고 또는 중요한 문제를 나타내는 데 사용됩니다.

maxCharacterCount

color

[$color.fg.critical](/foundations/design-token/reference/%24color.fg.critical)

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

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

fontSize

[$font-size.t5](/foundations/design-token/reference/%24font-size.t5)

lineHeight

[$line-height.t5](/foundations/design-token/reference/%24line-height.t5)

#### weight=medium

상태

슬롯

속성

값

enabled

root

fontWeight

[$font-weight.medium](/foundations/design-token/reference/%24font-weight.medium)

#### weight=bold

상태

슬롯

속성

값

enabled

root

fontWeight

[$font-weight.bold](/foundations/design-token/reference/%24font-weight.bold)

Last updated on

[이전 문서Divider](/components/divider)[다음 문서Floating Action Button](/components/floating-action-button)
