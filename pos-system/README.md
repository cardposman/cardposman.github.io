# 밴포스시스템 pos-system 랜딩페이지

GitHub Pages의 기존 루트 사이트를 덮어쓰지 않도록 `pos-system/` 하위폴더 구조로 제작한 패키지입니다.

## 포함 구조

- 홈: `/pos-system/`
- 장비구성: `/pos-system/equipment/`
  - 카드단말기
  - 포스기
  - 키오스크
  - 테이블오더
- 업종별 추천: `/pos-system/business/`
  - 음식점
  - 카페
  - 주점/호프
  - 미용/에스테틱
  - 소매업
  - 사무실
  - 신규 창업 매장
- 결제장비 비교 가이드: `/pos-system/guide/payment-equipment/`

지역별 안내 페이지는 이번 패키지에 포함하지 않았습니다.

## 업로드 방법

1. ZIP 압축을 풉니다.
2. `pos-system` 폴더를 GitHub Pages 저장소 루트에 업로드합니다.
3. 접속 주소는 `https://cardposman.github.io/pos-system/` 입니다.

## 전화번호와 네이버폼 URL 교체

아래 파일에서 임시값을 실제 값으로 교체하세요.

`pos-system/assets/js/main.js`

```js
const PHONE_NUMBER = '88888888';
const NAVER_FORM_URL = 'nnnnnnnn';
```

외부 이동은 전화 연결과 네이버폼 모두 `button onclick` 방식으로 처리되어 있습니다.

## robots.txt 안내

패키지 안에 `pos-system/robots.txt`를 포함했습니다. 다만 검색엔진이 일반적으로 보는 robots.txt는 도메인 루트의 `https://cardposman.github.io/robots.txt` 입니다.

기존 루트 robots.txt가 있다면 덮어쓰지 말고 아래 줄을 추가하는 방식이 안전합니다.

```txt
Sitemap: https://cardposman.github.io/pos-system/sitemap.xml
```

## 네이버 서치어드바이저 등록 순서

1. `https://cardposman.github.io/pos-system/` 접속 확인
2. 네이버 서치어드바이저에서 사이트 등록 또는 소유 확인
3. 사이트맵 제출: `https://cardposman.github.io/pos-system/sitemap.xml`
4. 주요 페이지 수집 요청
