import { portfolioJson } from "./portfolio.js";

const examples = document.querySelector("#examples");

// dynamically insert html based on the number of animationArrayofJson elements
examples.innerHTML = portfolioJson
  .map(
    (cardInfo, idx) => `
    <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        aria-label="Placeholder: Thumbnail">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
          ${cardInfo.title}
        </text>
      </svg>
      <div class="card-body">
        <p class="card-text">
          ${cardInfo.purpose.substring(0, 120)}...
        </p>
        <div
          class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button 
              type="button"
              class="btn btn-sm btn-outline-secondary"
              data-toggle="modal" 
              data-target="#exampleModal"
              data-viewindex="${idx}">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    `
  )
  .join("");

// staggger boxes display
// INSERT YOUR 1 LINE OF CODE HERE
TweenMax.staggerTo(".card", 1, {rotation:360, y:100}, 0.5);

const viewBtns = [...document.querySelectorAll("[data-viewindex]")];

// Listen for any View buttons clicked then change iframe src accordingly
// based on the button's attribute called data-viewindex which is the index to portfolioJson array
viewBtns.map(btn => {
  btn.addEventListener("click", function() {
    const iframe_modal = document.querySelector("#iframe_modal");
    iframe_modal.src = portfolioJson[this.dataset.viewindex].url;

    const iframeH5 = document.querySelector("#exampleModalLabel");
    iframeH5.textContent = portfolioJson[this.dataset.viewindex].title;

    const tech = document.querySelector("#tech");
    tech.textContent = `Technology used: ${
      portfolioJson[this.dataset.viewindex].tech
    }`;

    const desc = document.querySelector("#desc");
    desc.textContent = portfolioJson[this.dataset.viewindex].desc;
  });
});

// clears the iframe src everytime you close the modal, otherwise you'll may briefly see previous iframe
// see https://getbootstrap.com/docs/4.1/components/modal/#events for "hidden.bs.modal"
$("#exampleModal").on("hidden.bs.modal", () => (iframe_modal.src = ""));
