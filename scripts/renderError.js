import { wrapper } from "./globalVariables.js";
import { createElement } from "./createElement.js";
import { renderChangeCity } from "./renderChangeCity.js";

export const renderError = () => {
  wrapper.innerHTML = "";
  const error = createElement("p", "main__error");
  error.textContent = "Ooops. Something went wrong.";
  const errorInfo = createElement("p", "main__error-info");
  errorInfo.textContent = "Error info";
  const button = createElement("button", "main__button");
  button.textContent = "Try again";
  button.addEventListener("click", renderChangeCity);
  wrapper.prepend(error, errorInfo, button);
};
