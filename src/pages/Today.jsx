import React from "react";
import { Link } from "react-router-dom";

const DB = [
  {
    id: 8,
    title: "고속도로 가족",
    lng: "Highway Family",
    genre: "가족/아동",
    director: "이상문",
    note: "기우(정일우)는 만삭의 아내와 어린 아들, 딸과 함께 고속도로 휴게소를 전전하며 노숙한다. 한편 영선(라미란)은 기우네 가족을 불쌍히 여기게 된다. <고속도로 가족>은 경제적으로 무너졌지만 화목해 보이는 기우네 가족과 지울 수 없는 상처를 지닌 영선네 가족 사이에 인연의 다리를 놓는다. <고속도로 가족>에는 온기 있게 인물들을 바라보는 사려 깊은 시선이 돋보인다. 이상문 감독은 노숙자 가족이라는 흥미로운 설정을 단순히 극적인 소재로 활용하지 않기 위해 여러 장치를 마련한다. 카메라는 각 가족을 대표하는 기우와 영선은 물론 가족 구성원 한 명 한 명의 사연을 충분한 시간을 들여 가만히 듣는다. 라미란, 정일우, 김슬기, 백현진 등 배우들의 설득력 있는 연기와 차분한 전개가 극의 안정감을 높인다. (송경원)",
    tit: "한국영화의 오늘",
    nation: "Korea",
    year: "2022",
    time: "129min",
    format: "DCP",
  },
  {
    id: 9,
    title: "소년들",
    lng: "The Boys",
    genre: "스페셜 프리미어",
    director: "정지영",
    note: "1999년 시골 소읍의 한 슈퍼마켓에 강도 치사 사건이 벌어진다. 경찰은 세 명의 소년들을 진범으로 지목, 빠르게 수사를 종결한다. 얼마 뒤 새로 부임한 황준철(설경구) 반장은 경찰 고위직 최우성(유준상)과 무리들이 성과를 앞세워 이 사건을 조작했다는 확신을 갖게 된다. 그는 특유의 끈질기고 강직한 수사력으로 재수사와 재심을 시도한다. 실화를 기반으로 한 <소년들>은 실화와 허구 사이에서 흥미로운 영화를 만들어 내기로 유명한 정지영 감독의 신작이다. 영화는 과거와 현재를 오가며 장르적 재미를 높이는 동시에 약자들의 마음을 따뜻하게 어루만지는 소영웅 서사를 펼쳐낸다. 설경구, 유준상, 진경, 허성태, 염혜란 등 호화 캐스팅도 돋보인다. (정한석)",
    tit: "한국영화의 오늘",
    nation: "Korea",
    year: "2022",
    time: "124min",
    format: "DCP",
  },
  {
    id: 10,
    title: "20세기 소녀",
    lng: "20th Century Girl",
    genre: "사랑/연애/로맨스 · 성장영화/청춘",
    director: "방우리",
    note: "보라(김유정)의 둘도 없는 친구 연두(노윤서)는 심장 수술을 위해 미국에 가면서 자신이 좋아하는 남자 백현진(박정우)에 대한 모든 정보를 수집해 달라고 보라에게 부탁한다. 보라는 백현진의 가장 친한 친구 풍운호(변우석)와 먼저 친해지기로 한다. 하지만 보라의 서투른 계획은 예상치 못한 방향으로 전개된다. 새로운 세기가 오기 1년 전인 1999년, 17세가 된 보라는 첫사랑의 열병에 빠진다. 방우리 감독의 <20세기 소녀>는 1999년 어느 소녀 소년들의 싱그러운 사랑과 그 이후에 관한 영화다. 김유정을 비롯하여, 신인 변우석, 박정우, 노윤서가 연기하는 인물들은 모두가 하나 같이 사랑스럽고 귀엽다. <20세기 소녀>에는 시종일관 밝고 유쾌한 온기가 담겨 있다. 20세기의 청춘에게는 향수를, 21세기의 청춘에게는 설렘을 안긴다. (정한석)",
    tit: "한국영화의 오늘",
    nation: "Korea",
    year: "2022",
    time: "119min",
    format: "DCP",
  },
  {
    id: 14,
    title: "경관의 피",
    lng: "The Policeman′s Lineage",
    genre: "범죄/폭력 · 심리/미스터리/서스펜스/스릴러",
    director: "이규만",
    note: "<경관의 피>는 범인 검거에 수단을 가리지 않는 부도덕한 경찰과 이를 감시하는 신입 경찰의 고뇌를 따라간다. 3대째 경찰이 된 민재(최우식)는 원리원칙을 중시한다. 상부에서는 민재에게 광역수사대 반장 강윤(조진웅)의 내사를 지시한다. 서슴없이 위법수사를 저지르는 강윤을 보며 민재는 환멸과 의심, 존경과 질투를 동시에 느낀다. <경관의 피>는 양파껍질처럼 여러 겹의 메시지를 둘러싼 영화다. 표면적으로는 혼란스러운 신입과 정체를 알 수 없는 베테랑의 버디무비처럼 보이지만 중심에는 민재의 성장담이 자리한다. 3대에 걸친 ‘경찰의 피’는 신입 민재의 긍지이자 족쇄다. 미숙해서 사랑스런 존재가 도덕적 딜레마 한가운데에서 어떤 답을 내놓을지 따라가는 과정을 진지하게 그려 나간다. (송경원)",
    tit: "한국영화의 오늘",
    nation: "Korea",
    year: "2022",
    time: "120min",
    format: "DCP",
  },
];
const Today = () => {
  return (
    <div className="today grid">
      <div className="container">
        {DB.map((it, idx) => (
          <Link to={"/detail/" + it.id}>
            <div
              className="card"
              onClick={() => {
                console.log(it.id);
              }}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  "../images/program__0" +
                  it.id +
                  ".jpg"
                }
                alt=""
              />
              <div className="textbox">
                <span className="tit">{it.tit}</span>
                <span className="title">{it.title}</span>
                <span className="director">{it.director}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Today;
