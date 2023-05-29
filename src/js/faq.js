const Methods = {
  init() {
    Methods.Faq();
  },

  Faq() {
    const toggles = document.getElementsByClassName("toggle");
    const contentDivs = document.getElementsByClassName("contentFaq");
    const icons = document.getElementsByClassName("icon-faq");
    const wrapper = document.getElementsByClassName("wrapper");
    const lineFaq = document.getElementsByClassName("line-faq");

    for (let i = 0; i < toggles.length; i++) {
      toggles[i].addEventListener("click", () => {
        if (
          parseInt(contentDivs[i].style.height) !== contentDivs[i].scrollHeight
        ) {
          contentDivs[i].style.height = contentDivs[i].scrollHeight + "px";

          toggles[i].classList.add("active-toggle");
          icons[i].classList.add("active-icon");
          lineFaq[i].style.width = "57px";
          wrapper[i].style.paddingBottom = "20px";

          if (i !== toggles.length - 1) {
            wrapper[i].style.marginBottom = "27px";
          }
        } else {
          contentDivs[i].style.height = "0px";

          toggles[i].classList.remove("active-toggle");
          icons[i].classList.remove("active-icon");
          lineFaq[i].style.width = "0px";
          wrapper[i].style.paddingBottom = "0px";
          if (i !== toggles.length - 1) {
            wrapper[i].style.marginBottom = "0px";
          }
        }

        for (let j = 0; j < contentDivs.length; j++) {
          if (j !== i) {
            contentDivs[j].style.height = "0px";

            toggles[j].classList.remove("active-toggle");
            icons[j].classList.remove("active-icon");
            lineFaq[j].style.width = "0px";
            wrapper[j].style.paddingBottom = "0px";

            if (j !== toggles.length - 1) {
              wrapper[j].style.marginBottom = "0px";
            }
          }
        }
      });
    }
  },
};

export default {
  init: Methods.init,
};
