(function () {
  //Select the input element
  const form = document.querySelector("#message-form");
  //Set up Submit Button
  form.addEventListener("submit", function (e) {
    // prevent the form's default submission action
    e.preventDefault();
    //Get user's input from from
    const message = document.querySelector("#message");
    const feedback = document.querySelector(".feedback");
    const messageContent = document.querySelector(".message-content");

    if (message.value === "") {
      feedback.classList.add("show");
      setTimeout(() => {
        feedback.classList.remove("show");
      }, 1000);
    } else {
     messageContent.textContent =  message.value;
     message.value =  "";
     
    }
  });
})();
