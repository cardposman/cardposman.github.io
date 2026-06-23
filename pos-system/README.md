# 밴포스시스템 pos-system

GitHub Pages용 매장 결제장비 안내 사이트입니다.

## 대표 카테고리

- 홈: `/pos-system/`
- 장비별: `/pos-system/equipment/`
  - 카드단말기: `/pos-system/equipment/card-terminal/`
  - 포스기: `/pos-system/equipment/pos/`
  - 키오스크: `/pos-system/equipment/kiosk/`
  - 테이블오더: `/pos-system/equipment/table-order/`
- 업종별: `/pos-system/business/`
  - 음식점: `/pos-system/business/restaurant/`
  - 카페: `/pos-system/business/cafe/`
  - 주점·호프: `/pos-system/business/pub/`
  - 신규 창업 매장: `/pos-system/business/startup/`
- 지역별: `/pos-system/region/`
  - 서울: `/pos-system/region/seoul/`
  - 경기: `/pos-system/region/gyeonggi/`
  - 인천: `/pos-system/region/incheon/`
- 문의하기: `/pos-system/#contact`
- 장비 비교 가이드: `/pos-system/guide/`

## 이번 수정 내용

- 지역별 하위 카테고리에 서울, 경기, 인천을 추가했습니다.
- 모든 페이지의 상단 지역별 드롭다운에 지역 링크를 반영했습니다.
- 지역별 전체 페이지와 서울·경기·인천 상세 페이지의 title, description, canonical, og:url, FAQ, breadcrumb 구조화 데이터를 정리했습니다.
- sitemap.xml을 새 지역 URL 기준으로 갱신했습니다.

## 업로드 주의

기존 `pos-system` 내부 파일을 삭제한 뒤 이 폴더의 내용만 업로드하는 것을 권장합니다. 기존 URL이 남아 있으면 새 구조와 함께 중복으로 노출될 수 있습니다.

## 운영 전 교체 필요

`assets/js/main.js`의 전화번호와 네이버폼 주소를 실제 값으로 교체해야 합니다.


## 장비 실제 사진

장비별 상세 페이지 상단에는 `assets/images/equipment/` 폴더의 실제 장비 사진 2장씩을 사용합니다. 이미지 파일은 WebP로 최적화되어 있습니다.
