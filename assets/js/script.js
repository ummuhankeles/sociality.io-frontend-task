const clickMenuItem = document.querySelectorAll(".homepage__navbar--content--menu--item");
const postDate = document.querySelector(".homepage__content--postdate");
const postDate2 = document.querySelector(".homepage__content--postdate2");
const cardItem = document.querySelector(".homepage__content--items");
const cardItem2 = document.querySelector(".homepage__content--items2");
const leftPart = document.querySelector(".homepage__content--cards--item--leftPart");
let icon;
let statusDiv;

for(let i=0; i<clickMenuItem.length; i++) {
  clickMenuItem[i].addEventListener('click', function() {
    this.classList.toggle('active');
    let dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  })
}



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

    getLastData(data);
    getFirstData(data);

    console.log(data.posts_by_date)
});

function getLastData(data) {
  let item = "";
  data.posts_by_date["2021-07-01"].forEach((e) => {
    if(e.account.channel === 'facebook') {
      icon = `<i class="fa-brands fa-facebook-f"></i>`
    } else {
      icon = `<i class="fa-brands fa-twitter"></i>`
    }
    switch (e.status) {
      case 0:
        statusDiv = `<div class="homepage__content--cards--item--leftPart" style="background-color: #F7BF38">
                      ${icon}
                    </div>`
        break;
      case 1:
        statusDiv = `<div class="homepage__content--cards--item--leftPart" style="background-color: #3ac183">
                      ${icon}
                    </div>`
        break;
      case 2:
        statusDiv = `<div class="homepage__content--cards--item--leftPart" style="background-color: #67B1F2">
                      ${icon}
                    </div>`
        break;
      case 3:
        statusDiv = `<div class="homepage__content--cards--item--leftPart" style="background-color: #acacac">
                      ${icon}
                    </div>`
        break;
      default:
        statusDiv = `<div class="homepage__content--cards--item--leftPart" style="background-color: #FB6450">
                      ${icon}
                    </div>`
        break;
    }
    item += `
    <div class="col-md-4 homepage__content--cards--item">
      ${statusDiv}
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
    if(e.account.channel === 'facebook') {
      icon = `<i class="fa-brands fa-facebook-f"></i>`
    } else if (e.account.channel === 'twitter') {
      icon = `<i class="fa-brands fa-twitter"></i>`
    } else {
      icon = `<i class="fa-brands fa-instagram"></i>`
    }
    switch (e.status) {
      case 0:
        statusDiv = `<div class="homepage__content--cards--item--leftPart" style="background-color: #F7BF38">
                      ${icon}
                    </div>`
        break;
      case 1:
        statusDiv = `<div class="homepage__content--cards--item--leftPart" style="background-color: #3ac183">
                      ${icon}
                    </div>`
        break;
      case 2:
        statusDiv = `<div class="homepage__content--cards--item--leftPart" style="background-color: #67B1F2">
                      ${icon}
                    </div>`
        break;
      case 3:
        statusDiv = `<div class="homepage__content--cards--item--leftPart" style="background-color: #acacac">
                      ${icon}
                    </div>`
        break;
      default:
        statusDiv = `<div class="homepage__content--cards--item--leftPart" style="background-color: #FB6450">
                      ${icon}
                    </div>`
        break;
    }
    item += `
    <div class="col-md-4 homepage__content--cards--item">
      ${statusDiv}
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

/* click the menu item */

