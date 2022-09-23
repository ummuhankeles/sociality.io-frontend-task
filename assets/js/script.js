let postDate = document.querySelector(".homepage__content--postdate");
let postDate2 = document.querySelector(".homepage__content--postdate2");
let cardItem = document.querySelector(".homepage__content--items");
let cardItem2 = document.querySelector(".homepage__content--items2");
let icon = document.querySelector(".homepage__content--cards--item--leftPart");

fetch("services/data.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    let firstDate = Object.keys(data.posts_by_date)["0"];
    let lastDate = Object.keys(data.posts_by_date)["1"];
    firstDateFormatted = new Date(firstDate).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    lastDateFormatted = new Date(lastDate).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    postDate.innerHTML = `<h5>${lastDateFormatted}</h5>`;
    postDate2.innerHTML = `<h5>${firstDateFormatted}</h5>`;

    if(data.posts_by_date["2021-07-01"].account === 'facebook') {
      icon.innerHTML = `<i class="fa-brands fa-facebook-f"></i>`
    }

    getLastData(data);
    getFirstData(data);

    console.log(data.posts_by_date);
    // console.log(data.posts_by_date["2021-07-01"]);
  });

function getLastData(data) {
  let item = "";
  data.posts_by_date["2021-07-01"].forEach((e) => {
    item += `
    <div class="col-md-4 homepage__content--cards--item">
      <div class="homepage__content--cards--item--leftPart">
        <i class="fa-brands fa-facebook-f"></i>
      </div>
      <div class="homepage__content--cards--item--rightPart p-3">
        <div class="homepage__content--cards--item--rightPart--top mb-3">
          <div class="homepage__content--cards--item--rightPart--top--date">${e.published_at}</div>
            <div class="homepage__content--cards--item--rightPart--top--actions">
              <div class="homepage__content--cards--item--rightPart--top--actions--item">
                <i class="fa-solid fa-ban"></i>
              </div>
              <div class="homepage__content--cards--item--rightPart--top--actions--item">
                <i class="fa-solid fa-trash-can"></i>
              </div>
              <div class="homepage__content--cards--item--rightPart--top--actions--item">
                <i class="fa-solid fa-bars"></i>
              </div>
          </div>
        </div>
        <div class="homepage__content--cards--item--rightPart--center mb-3">
          <div class="homepage__content--cards--item--rightPart--center--text">${e.entry.message}</div>
          <div class="homepage__content--cards--item--rightPart--center--img"></div>
        </div>
        <div class="homepage__content--cards--item--rightPart--bottom">
          <div class="homepage__content--cards--item--rightPart--bottom--item">
            <i class="fa-solid fa-thumbs-up"></i>&nbsp;<span>0</span>
          </div>
          <div class="homepage__content--cards--item--rightPart--bottom--item">
            <i class="fa-solid fa-share-nodes"></i>&nbsp;<span>0</span>
          </div>
          <div class="homepage__content--cards--item--rightPart--bottom--item">
            <i class="fa-solid fa-comment"></i>&nbsp;<span>0</span>
          </div>
          <div class="homepage__content--cards--item--rightPart--bottom--item">
            <i class="fa-solid fa-eye"></i>&nbsp;<span>0</span>
          </div>
        </div>
      </div>
    </div>
    `
    cardItem.innerHTML = item;
  });
}

function getFirstData(data) {
  let item = "";
  data.posts_by_date["2021-06-17"].forEach((e) => {
    item += `
    <div class="col-md-4 homepage__content--cards--item">
      <div class="homepage__content--cards--item--leftPart">
        <i class="fa-brands fa-facebook-f"></i>
      </div>
      <div class="homepage__content--cards--item--rightPart p-3">
        <div class="homepage__content--cards--item--rightPart--top mb-3">
          <div class="homepage__content--cards--item--rightPart--top--date">${e.published_at}</div>
            <div class="homepage__content--cards--item--rightPart--top--actions">
              <div class="homepage__content--cards--item--rightPart--top--actions--item">
                <i class="fa-solid fa-ban"></i>
              </div>
              <div class="homepage__content--cards--item--rightPart--top--actions--item">
                <i class="fa-solid fa-trash-can"></i>
              </div>
              <div class="homepage__content--cards--item--rightPart--top--actions--item">
                <i class="fa-solid fa-bars"></i>
              </div>
          </div>
        </div>
        <div class="homepage__content--cards--item--rightPart--center mb-3">
          <div class="homepage__content--cards--item--rightPart--center--text">${e.entry.message}</div>
          <div class="homepage__content--cards--item--rightPart--center--img"></div>
        </div>
        <div class="homepage__content--cards--item--rightPart--bottom">
          <div class="homepage__content--cards--item--rightPart--bottom--item">
            <i class="fa-solid fa-thumbs-up"></i>&nbsp;<span>0</span>
          </div>
          <div class="homepage__content--cards--item--rightPart--bottom--item">
            <i class="fa-solid fa-share-nodes"></i>&nbsp;<span>0</span>
          </div>
          <div class="homepage__content--cards--item--rightPart--bottom--item">
            <i class="fa-solid fa-comment"></i>&nbsp;<span>0</span>
          </div>
          <div class="homepage__content--cards--item--rightPart--bottom--item">
            <i class="fa-solid fa-eye"></i>&nbsp;<span>0</span>
          </div>
        </div>
      </div>
    </div>
    `
    cardItem2.innerHTML = item;
  });
}
