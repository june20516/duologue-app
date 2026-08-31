<!--
자동 생성됨. 직접 편집하지 마세요.
source: https://seed-design.io/docs/components/top-navigation
fetched: 2026-08-31T04:59:01.461Z
-->

ComponentsLLMS.txt

# Top Navigation

화면 상단에 위치하여 탐색 인터페이스를 제공하는 네비게이션 컴포넌트입니다.

Figma[React](/react/stackflow/app-screen)[Lynx](/lynx/components/app-bar)iOSAndroid

![Top Navigation cover image](/og/components/top-navigation.webp)

## [Anatomy](#anatomy)

![Top Navigation Anatomy - Root 타입](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d790ca7d-6a00-4f84-90b7-c40e896812aa)

![Top Navigation Anatomy - Standard 타입](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ced0e9ab-5447-40ac-8d3e-4523e3120583)

Top Navigation은 Root 타입과 Standard 타입, 두 가지로 나뉩니다. 각 타입은 별도의 구현체와 Figma 컴포넌트로 제공됩니다.

## [Properties](#properties)

### [Title Type](#title-type)

![Top Navigation Title Type - Root 타입의 Title 영역](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa14f41a-ae16-484d-9bc9-558ac0090c35)

![Top Navigation Title Type - Standard 타입의 Title 영역](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de1ded08-9a16-4261-8492-69d7e4c3420f)

Root Top Navigation의 Title 영역에는 Label만 표시하는 Text 타입과, 선택 시 동작이 있는 Button 타입을 선택하여 사용할 수 있습니다.

Standard Top Navigation의 경우 Title 영역을 Slot으로 구성하여 조금 더 다양한 조합으로 사용할 수 있습니다.

### [Left Slot](#left-slot)

![Top Navigation Left Slot - 뒤로가기와 닫기 버튼](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8948746-3c32-48f5-9ffb-b8b3a49f524c)

Standard 타입 Top Navigation은 2-depth 이상의 화면에서 사용하며, 왼쪽에 네비게이션 액션을 배치할 수 있습니다. 뒤로가기와 닫기 버튼을 배치할 수 있으며, 두 버튼은 서로 다른 동작을 제공합니다. 각 버튼의 차이를 이해하고 정확한 용도에 맞게 사용해야 합니다.

왼쪽에 추가 액션이 필요한 경우 숨겨진 Icon Button을 사용할 수 있습니다. 꼭 필요한 상황에서만 제한적으로 사용하는 것을 권장합니다. 이 옵션은 Figma에서만 제공합니다.

### [Right Slot](#right-slot)

![Top Navigation Right Slot - Root 타입](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc41d51a-f558-4d1b-9d9b-e4c372ca4331)

![Top Navigation Right Slot - Standard 타입](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a50c18a-f3c0-4195-9d81-8f1e0091720b)

![타이틀 영역과 우측 Action 영역이 겹치는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5cd262e-e9e2-49fd-8ab8-3442c31ae95d)

Don’t

타이틀 영역과 우측 Action 영역이 겹치지 않도록 주의해주세요.

Top Navigation 우측은 Slot으로 구성되어 Icon Button 또는 Text Button을 배치할 수 있습니다. Icon Button은 최대 3개까지 추가 가능하며, 타이틀 영역과 겹치지 않도록 개수를 조정하여 사용하는 것을 권장합니다.

### [Notification Badge](#notification-badge)

![Top Navigation Notification Badge - Icon Button에 Notification Badge 표시 예시 (Root 타입)](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94762f6c-e810-44a0-86f2-de182af136ca)

![Top Navigation Notification Badge - Icon Button에 Notification Badge 표시 예시 (Standard 타입)](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb592a14-69fa-4f25-9c61-a4f94cf326eb)

Icon Button에 [Notification Badge](/components/notification-badge)를 표시할 수 있습니다. Small과 Large 사이즈 모두 사용 가능하며, Large 사이즈는 숫자 정보가 필요한 경우에 사용합니다.

## [Guidelines](#guidelines)

### [Root Top Navigation과 Standard Top Navigation의 차이](#root-top-navigation과-standard-top-navigation의-차이)

![Root Top Navigation과 Standard Top Navigation 비교](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2d05be0-2d8b-432b-a38a-439224128103)

Top Navigation은 Root 타입과 Standard 타입, 두 가지로 나뉩니다. 각 타입은 별도의 구현체와 Figma 컴포넌트로 제공됩니다.

#### [Root Top Navigation](#root-top-navigation)

앱의 최상위 루트 탭에서 사용되며, 핵심 액션 진입을 제공합니다.

#### [Standard Top Navigation](#standard-top-navigation)

2-depth 이상의 화면에서 사용됩니다. 뒤로가기 또는 닫기, 타이틀, 보조 액션을 통해 현재 위치와 주요 인터랙션을 안내합니다.

### [뒤로가기(Back)와 닫기(Close) 동작](#뒤로가기back와-닫기close-동작)

뒤로가기(Back)와 닫기(Close)는 비슷해 보이지만 서로 다른 동작을 제공합니다. 사용자의 흐름에 큰 영향을 주므로 각 동작을 정확히 이해하고 사용하는 것이 중요합니다.

구분

뒤로가기 (Back)

닫기 (Close)

**이동 방식**

이전 화면으로 이동

현재 레이어/플로우 종료

**적용 위치**

일반 페이지, 계층 구조 화면

모달, 독립 플로우

**UX 의미**

한 단계 뒤로 가기

이 플로우를 끝내고 나가기

**아이콘**

< (Chevron Left)

X (Close)

**예상 행동**

이전 단계 유지

현재 상태/입력 값이 폐기될 수 있음

#### [뒤로가기 (Back)](#뒤로가기-back)

![뒤로가기 동작 예시: 2 Depth 게시글 상세 화면에서 Back Button 클릭 → 이전 피드 또는 추천 영역으로 이동](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49528c78-64f0-4798-829b-33e0c7fad582)

네비게이션 스택을 기반으로 현재 화면을 이전 화면으로 되돌립니다. 히스토리 기반(History Back)과 계층 기반(Hierarchy Back)으로 구분되며, 화면의 목적과 진입 경로에 따라 선택해서 사용합니다.

-   계층적인 화면 구조에서 단계별 이동이 필요한 경우
-   사용자의 입력 내용을 유지해야 하는 경우

#### [닫기 (Close)](#닫기-close)

![닫기 동작 예시: 글쓰기 화면에서 Close Button 클릭 → 최초 진입점으로 이동](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c557354-ffe9-4173-bb98-284db5d4e5b5)

현재 화면을 종료하고 상위 레이어로 복귀합니다. 페이지 히스토리를 거슬러 올라가는 것이 아니라, 열려있는 모달, [Bottom Sheet](/components/bottom-sheet), 전체 화면 등을 닫는 동작입니다.

-   모달/풀스크린 모달/[Bottom Sheet](/components/bottom-sheet)처럼 레이어를 닫는 경우
-   상태를 초기화하거나, 플로우를 종료하거나, 작업을 중단하는 경우

### [뒤로가기(Back)의 두 가지 동작: History Back vs. Hierarchy Back](#뒤로가기back의-두-가지-동작-history-back-vs-hierarchy-back)

뒤로가기 버튼은 일반적으로 '이전 화면으로 돌아가는 행동'으로 생각할 수 있지만, 실제로는 History Back(히스토리 기반)과 Hierarchy Back(계층 기반)으로 구분됩니다. 사용자가 예상치 못한 이동을 경험하지 않도록 일관된 정책을 적용하는 것이 중요합니다.

구분

History Back

Hierarchy Back

**기준**

사용자의 실제 이동 경로

앱의 정보 구조 (IA)

**이동 결과**

직전 화면으로 이동

상위 레벨 화면으로 이동

**외부 진입**

외부로 다시 나갈수도 있음

앱 내부 상위 화면으로 고정

**대표 케이스**

검색, 추천, 피드 기반 탐색

설정, 프로필, 고정 구조 메뉴

#### [History Back (히스토리 기반 뒤로가기)](#history-back-히스토리-기반-뒤로가기)

![히스토리 기반 뒤로가기 예시: 게시글 상세 화면에서 Back Button 클릭 → 이전 게시글 상세 추천 목록으로 이동](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68522e87-7169-478f-bc02-cfcc2045dcd8)

사용자가 실제로 거쳐온 페이지 순서대로 돌아가는 뒤로가기 방식입니다. 방문 기록을 기반으로 동작합니다.

-   검색, 추천 지면 등 연속적인 탐색 흐름이 있는 경우
-   외부에서 딥링크로 상세 화면에 바로 진입한 경우, Back하면 외부 브라우저로 돌아갈 수 있음

#### [Hierarchy Back (계층 기반 뒤로가기)](#hierarchy-back-계층-기반-뒤로가기)

![계층 기반 뒤로가기 예시: 알림 수신 설정 화면에서 Back Button 클릭 → 상위 설정 화면으로 이동](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06f88118-fc0a-49fd-9496-da390df1b841)

앱의 정보구조(IA)에 따라 상위 레벨 화면으로 이동하는 뒤로가기 방식입니다. 앱 구조를 기반으로 동작합니다.

-   설정 화면처럼 고정된 구조를 따라 이동해야 하는 경우
-   외부에서 딥링크로 상세 화면에 바로 진입한 경우, 상위 화면으로 이동하도록 정의할 수 있음

### [타이틀 작성하기](#타이틀-작성하기)

![Top Navigation Root 타입에서 Icon Button을 2개와 3개 사용한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63db5dd6-c0ae-4fb0-b133-9d1952e2bb89)

![Top Navigation Root 타입 - KR & Global](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6ab5278-ae03-4e5c-aff5-0201ad044694)

![Top Navigation Standard 타입에서 Icon Button을 2개와 3개 사용한 예시 (iOS)](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a8c7ca3-f0df-4aa7-8bfb-eea9263e2bb6)

![Top Navigation Standard 타입에서 Icon Button을 2개와 3개 사용한 예시 (Android)](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/496c30c7-b057-4065-b40e-f21af63531da)

![Top Navigation Standard 타입에서 Title 말줄임이 발생하는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15fa7ae8-76d9-4e71-8466-68476ec7102d)

타이틀은 한 줄로 표시되도록 간결하게 작성합니다. 액션 개수에 따라 타이틀 길이가 자동 조정되며, 길어지면 말줄임으로 표시됩니다. 글로벌 앱에서는 말줄임 대신 그라디언트로 표시됩니다.

**Figma에서는 타이틀 말줄임 처리가 되어 있지 않습니다. 구현체에서 확인해주세요.**

### [우측 액션 영역 사용하기](#우측-액션-영역-사용하기)

![우측 액션 영역에 Icon Button과 Text Button을 사용하는 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc2a3d4c-6aa2-449e-9bde-5ac43a29c516)

Top Navigation 우측에는 화면에서 접근 가능한 보조 액션을 표시할 수 있습니다. 아이콘 버튼은 최대 2개까지 표시하는 것을 권장합니다. 필요시 3개까지 표시할 수 있으나, 타이틀 텍스트가 충분히 표시되지 않을 수 있으니 주의하세요. 텍스트 버튼은 1개만 표시할 수 있습니다.

![우측 액션 영역에 Menu Sheet를 호출하는 더보기 버튼을 추가한 예시](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58f956a6-3646-4847-bf41-38eb1a41c4d9)

Do

보조 액션이 많은 경우 중요한 액션만 노출하고 나머지는 숨기는 것이 좋습니다.

액션이 3개를 초과하는 경우, 더보기 버튼과 [Menu Sheet](/components/menu-sheet)를 조합하여 중요한 액션만 노출하고 나머지는 숨기는 것을 권장합니다.

### [스크롤 시 동작](#스크롤-시-동작)

![스크롤 시 Top Navigation 고정 예시 (기본 스크롤 동작)](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c4c828b-e475-4cd1-900b-61d18ae71814)

Top Navigation은 스크롤 시 항상 상단에 고정되는 동작을 기본으로 가집니다. 고정된 영역과 스크롤되는 영역을 구분하기 위해 별도의 시각적인 장치를 표시하지 않습니다.

![스크롤 시 Top Navigation 배경 색상이 채워지는 예시 (배경이 투명한 Top Navigation의 스크롤 동작)](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ee01519-4f13-4763-8dbe-2044625f530e)

배경이 투명한 Top Navigation을 사용하는 경우 스크롤할 때 배경색이 채워지는 동작을 가집니다.

## [Specification](#specification)

### theme=ios

상태

슬롯

속성

값

enabled

root

height

44px

paddingX

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

### theme=android

상태

슬롯

속성

값

enabled

root

height

56px

paddingX

[$dimension.x4](/foundations/design-token/reference/%24dimension.x4)

main

title과 subtitle을 포함하는 영역입니다.

paddingLeft

16px

### tone=layer

-   color를 $color.bg.layer-basement 등으로 변경하여 사용할 수 있습니다.

상태

슬롯

속성

값

enabled

root

color

[$color.bg.layer-default](/foundations/design-token/reference/%24color.bg.layer-default)

basement 바로 위에 놓이는 기본 표면입니다. 대부분의 스크린 콘텐츠(List, TextField 등)가 이 레이어 위에서 표현됩니다.

title

color

[$color.fg.neutral](/foundations/design-token/reference/%24color.fg.neutral)

일반적인 콘텐츠에 사용되는 기본 색상입니다.

subtitle

color

[$color.fg.neutral-muted](/foundations/design-token/reference/%24color.fg.neutral-muted)

일반적인 콘텐츠에 사용되는 기본 색상입니다. (muted)

### tone=transparent

상태

슬롯

속성

값

enabled

title

color

[$color.palette.static-white](/foundations/design-token/reference/%24color.palette.static-white)

subtitle

color

[$color.palette.static-white](/foundations/design-token/reference/%24color.palette.static-white)

### tone=transparent, gradient=false

-   false로 사용하는 것을 권장하지 않습니다. gradient 없이 사용하면 Top Navigation의 콘텐츠 가독성을 직접 확보해야 합니다. 스크린 배경 색상이 Top Navigation에 보이기를 원하는 경우 tone=layer를 사용하세요.

상태

슬롯

속성

값

enabled

root

color

#00000000

### tone=transparent, gradient=true

상태

슬롯

속성

값

enabled

root

gradient

#00000059 0%, #00000000 100%

bleedBottom

gradient가 표시될 때 하단 아래로 gradient가 확장되는 길이입니다.

[$dimension.x5](/foundations/design-token/reference/%24dimension.x5)

### titleLayout=titleOnly

상태

슬롯

속성

값

enabled

title

fontSize

[$font-size.t6](/foundations/design-token/reference/%24font-size.t6)

fontWeight

[$font-weight.bold](/foundations/design-token/reference/%24font-weight.bold)

lineHeight

[$line-height.t6](/foundations/design-token/reference/%24line-height.t6)

maxFontSizeScale

1.2

minFontSizeScale

1

maxLineHeightScale

1.2

minLineHeightScale

1

### titleLayout=withSubtitle

상태

슬롯

속성

값

enabled

title

fontSize

[$font-size.t5](/foundations/design-token/reference/%24font-size.t5)

fontWeight

[$font-weight.bold](/foundations/design-token/reference/%24font-weight.bold)

lineHeight

[$line-height.t5](/foundations/design-token/reference/%24line-height.t5)

maxFontSizeScale

1.2

minFontSizeScale

1

maxLineHeightScale

1.2

minLineHeightScale

1

subtitle

fontSize

[$font-size.t2](/foundations/design-token/reference/%24font-size.t2)

fontWeight

[$font-weight.regular](/foundations/design-token/reference/%24font-weight.regular)

lineHeight

[$line-height.t2](/foundations/design-token/reference/%24line-height.t2)

maxFontSizeScale

1.2

minFontSizeScale

1

maxLineHeightScale

1.2

minLineHeightScale

1

Last updated on

[이전 문서Time Picker](/components/time-picker)[다음 문서Wheel Picker](/components/wheel-picker)
