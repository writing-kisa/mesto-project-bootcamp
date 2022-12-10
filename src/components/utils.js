// утилитарные функции, которые используются в работе сразу нескольких других функций

export function openPopup(thisPopup) {
  thisPopup.classList.add("popup_opened");
}
export function closePopup(thisPopup) {
  thisPopup.classList.remove("popup_opened");
}
