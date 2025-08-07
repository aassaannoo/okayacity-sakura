const spots = [
  {
    name: "横河川沿い",
    img: "img/yokokawa.jpg",
    Comment: "横河川沿いに咲く桜並木<br>上流・中流・下流全ての場所で楽しめる",
    tag: "川沿い"
  },
  {
    name: "切目公園",
    img: "img/kirime.jpg",
    Comment: "四方を桜に囲まれた公園",
    tag: "公園"
  },
  {
    name: "秋葉神社",
    img: "img/yokokawazoi.JPG",
    Comment: "多くの桜が咲いており、桜の木の下で過ごせる",
    tag: "公園"
  },
  {
    name: "宗平寺公園",
    img: "img/souheiji.JPG",
    Comment: "桜が多く咲いている公園",
    tag: "公園"
  },
  {
    name: "出早公園",
    img: "img/izuhaya.JPG",
    Comment: "カタクリが有名だが、桜も多く咲いている",
    tag: "公園"
  }
];

const list = document.getElementById("spot-list");



console.log("動作確認");


//フィルター処理

const selectBox = document.querySelector('select[name="box"]');

function renderSpots(tag) {
  list.innerHTML = "";
  spots.forEach(spot => {
    if (tag === "すべて" || spot.tag === tag) {
      const html = `
        <div class="spot-card">
          <img src="${spot.img}" alt="${spot.name}">
          <div class="content">
            <h3>${spot.name}</h3>
            <p>${spot.Comment}</p>
          </div>
        </div>
      `;
      list.insertAdjacentHTML("beforeend", html);
    }
  });
}

renderSpots("すべて");

selectBox.addEventListener("change", (event) => {
  const selectedText = event.target.options[event.target.selectedIndex].text;
  renderSpots(selectedText);
});


//表示・非表示ボタンの追加
const hideButton = document.querySelector('.filter button');
const spotlist = document.getElementById('spot-list');


hideButton.addEventListener('click', function () {
  spotlist.classList.toggle('hidden');
  hideButton.textContent = spotlist.classList.contains('hidden') ? '表示' : '非表示';
});




//ダークモード切替用
document.getElementById("dark").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

//ロード画面用
window.addEventListener('load', () => {
  loading.classList.add('loaded')
});

