var form = document.getElementById("my-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("my-form"))
  })
    .then((response) => response.json())
    .then((html) => {
      // you can put any JS code here

      document.getElementById("my-form").reset();
      
    });
});

