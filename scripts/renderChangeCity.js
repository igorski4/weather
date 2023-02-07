import { wrapper } from "./globalVariables.js";
import { createElement } from "./createElement.js";
import { handlerInputCity } from "./handlerInputCity.js";

export const renderChangeCity = () => {
  wrapper.innerHTML = "";
  const input = createElement("input", "main__input");
  input.type = "text";
  input.placeholder = "Type your city here";
  const button = createElement("button", "main__button");
  button.textContent = "Find";
  button.addEventListener("click", handlerInputCity);
  wrapper.prepend(input, button);
};
