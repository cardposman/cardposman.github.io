# 밴포스시스템 GitHub Pages 랜딩페이지

이 패키지는 `cardposman.github.io` 공용 도메인의 하위 경로인 `/pos-system/`에 업로드하도록 정리한 버전입니다.
네이버 검색 노출을 고려해 페이지별 제목, 설명문, canonical, 구조화 데이터, 내부 링크, 이미지 alt, sitemap을 수정했습니다.

## 포함 페이지

총 10개 페이지가 포함되어 있습니다.

- 홈: `/pos-system/`
- 카드단말기: `/pos-system/card-terminal/`
- 포스기: `/pos-system/pos/`
- 키오스크: `/pos-system/kiosk/`
- 테이블오더: `/pos-system/table-order/`
- 음식점: `/pos-system/restaurant/`
- 카페: `/pos-system/cafe/`
- 주점/호프: `/pos-system/pub/`
- 신규 창업 매장: `/pos-system/startup/`
- 결제장비 비교 가이드: `/pos-system/guide/`

## 업로드 방법

1. ZIP 파일을 압축 해제합니다.
2. 압축 해제된 전체 파일을 GitHub Pages 저장소의 `pos-system` 폴더 안에 업로드합니다.
3. 업로드 후 아래 주소로 접속해 화면과 내부 링크를 확인합니다.

`https://cardposman.github.io/pos-system/`

## 전화번호와 네이버폼 URL 교체

아래 파일을 열어 임시값을 실제 값으로 교체하세요.

`pos-system/assets/js/main.js`

```js
const PHONE_NUMBER = '88888888';
const NAVER_FORM_URL = 'nnnnnnnn';
```

전화 연결과 네이버폼 이동은 `button onclick` 방식으로 유지했습니다. 내부 페이지 이동 링크는 검색엔진 수집을 위해 `<a href>` 방식으로 유지했습니다.

## robots.txt 안내

패키지 안의 `robots.txt`는 참고용으로 포함되어 있습니다. 검색엔진은 보통 도메인 루트의 robots.txt를 확인하므로, 실제 반영은 아래 주소에 있어야 합니다.

`https://cardposman.github.io/robots.txt`

기존 루트 robots.txt가 있다면 덮어쓰지 말고 아래 줄을 추가하세요.

`Sitemap: https://cardposman.github.io/pos-system/sitemap.xml`

## 네이버 서치어드바이저 등록 순서

1. `https://cardposman.github.io/pos-system/` 접속 확인
2. 네이버 서치어드바이저에서 `https://cardposman.github.io` 호스트 등록 또는 기존 사이트 관리 접속
3. 사이트맵 제출: `https://cardposman.github.io/pos-system/sitemap.xml`
4. 메인, 카드단말기, 포스기, 키오스크, 테이블오더, 음식점, 카페, 주점/호프, 창업, 비교 가이드 페이지 URL 검사
5. 색인 가능 여부와 title/description 추출 여부 확인
6. 주요 페이지 수집 요청

## 이번 수정 반영 내용

- 페이지별 `<title>`과 `<meta name="description">`을 검색 의도별로 재작성했습니다.
- `canonical`, `og:title`, `og:description`, `og:url`, `og:image:alt`를 정리했습니다.
- 구조화 데이터에 WebSite, WebPage, FAQPage, BreadcrumbList 정보를 보강했습니다.
- 각 페이지에 상담 전 체크 항목 섹션을 추가해 문서별 고유성을 높였습니다.
- 이미지 alt 문구를 구체적인 장면 설명으로 수정했습니다.
- 검색결과 설명에 잡힐 수 있는 보이는 임시 문구를 제거했습니다.
- `sitemap.xml`에 `lastmod`를 추가했습니다.

## 주의사항

- 상위노출은 보장할 수 없습니다. 이 수정은 네이버가 페이지 내용을 더 명확하게 이해하도록 돕는 방향입니다.
- 실제 전화번호와 네이버폼 URL을 넣지 않으면 상담 버튼은 정상 운영용으로 사용할 수 없습니다.
- `/pos-system/` 하위 폴더 운영은 가능하지만, 장기적으로는 카드단말기·포스기 전용 도메인 또는 루트 주제 정리가 더 유리합니다.
