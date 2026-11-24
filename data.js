// 맛집 데이터 파일
// 맛집을 추가하려면 아래 형식 그대로 한 덩어리를 복사해서 붙여 넣으면 됩니다.
// address(도로명주소)만 정확히 적으면 지도 위치는 자동으로 찾아집니다.
// 위치가 어긋나면 lat, lng(위도, 경도)를 직접 적어 고정할 수 있습니다.
//   예) lat: 37.2990, lng: 126.8380,

const RESTAURANTS = [
  {
    name: "백소정 안산한양대점",
    category: "일식",
    menu: "돈카츠, 마제소바",
    address: "경기 안산시 상록구 한양대학로 60",
    comment: "정문 맞은편이라 찾기 쉬운 돈카츠·마제소바 전문점",
    addedBy: "조원1",
  },
  {
    name: "밀플랜비 한양대에리카점",
    category: "멕시칸",
    menu: "부리또",
    address: "경기 안산시 상록구 학사2길 11-1",
    comment: "속이 꽉 찬 큼직한 부리또로 든든한 한 끼",
    addedBy: "조원1",
  },
  {
    name: "프로스콘스 에리카점",
    category: "카페",
    menu: "치아바타, 커피",
    address: "경기 안산시 상록구 학사2길 12",
    comment: "치아바타로 유명한 베이커리 카페",
    addedBy: "조원2",
  },
  {
    name: "상황삼계탕",
    category: "한식",
    menu: "삼계탕, 반계탕, 닭칼국수",
    address: "경기 안산시 상록구 성안길 82-3",
    comment: "진한 국물의 삼계탕 전문점 (스타벅스 건물 3층)",
    addedBy: "조원3",
  },
  {
    name: "에비수",
    category: "일식",
    menu: "회덮밥, 장어덮밥, 솥밥",
    address: "경기 안산시 상록구 성안길 93",
    comment: "덮밥과 솥밥으로 든든하게 먹기 좋은 일식집",
    addedBy: "조원3",
  },
  {
    name: "알촌 한양대에리카점",
    category: "한식",
    menu: "알밥, 오뎅",
    address: "경기 안산시 상록구 학사길 2",
    comment: "저렴하고 빠르게 먹는 알밥 맛집",
    addedBy: "조원3",
  },
  {
    name: "행컵 안산한양대점",
    category: "한식",
    menu: "떠먹는삼겹쌈밥, 치킨마요",
    address: "경기 안산시 상록구 성안길 83",
    comment: "간편하게 먹는 컵밥 전문점",
    addedBy: "조원3",
  },
  {
    name: "송탄진대광부대찌개 한양대에리카점",
    category: "한식",
    menu: "부대찌개",
    address: "경기 안산시 상록구 학사2길 8",
    comment: "맵고 푸짐한 부대찌개",
    addedBy: "조원3",
  },
  {
  name: "인더비엣 한양대에리카점",
    category: "아시안",
    menu: "쌀국수, 팟타이, 반쎄오",
    address: "경기 안산시 상록구 성안길 78-3",
    comment: "베트남 음식을 여러 가지 맛볼 수 있는 곳",
    addedBy: "조원3",
  },
  {
    name: "자이카 안산본점",
    category: "아시안",
    menu: "커리, 난, 탄두리치킨",
    address: "경기 안산시 상록구 한양대학로 45-1",
    comment: "학교 앞에서 즐기는 인도 요리",
    addedBy: "조원3",
  },
 
];
