const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", onFormSubmit)
function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Все поля дожны быть заполены!");
  } else {
    const view = {
      email: email.value,
      password: password.value
    }
    console.log(view);
    event.currentTarget.reset();
  }
}