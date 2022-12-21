import { createCard } from "../components/card";
import {
  addCardModalWindow,
  cardContainer,
  linkPhotoInput,
  namePhotoInput,
} from "./constants";
import { closePopup } from "../components/modal";

export const getUser = fetch(
  "https://mesto.nomoreparties.co/v1/wbf-cohort-3/users/me",
  {
    headers: {
      authorization: "29ff42fd-d6b4-4ab9-a542-92401ef67e44",
    },
  }
).then((res) => res.json());

export const getCards = fetch(
  "https://mesto.nomoreparties.co/v1/wbf-cohort-3/cards",
  {
    headers: {
      authorization: "29ff42fd-d6b4-4ab9-a542-92401ef67e44",
    },
  }
).then((res) => res.json());

export const patchUser = fetch(
  "https://mesto.nomoreparties.co/v1/wbf-cohort-3/users/me",
  {
    method: "PATCH",
    headers: {
      authorization: "29ff42fd-d6b4-4ab9-a542-92401ef67e44",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "John Irving",
      about: "American-Canadian novelist",
    }),
  }
).then((res) => res.json());

export function postNewCard() {
    return fetch("https://mesto.nomoreparties.co/v1/wbf-cohort-3/cards", {
    method: "POST",
    headers: {
      authorization: "29ff42fd-d6b4-4ab9-a542-92401ef67e44",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: namePhotoInput.value,
      link: linkPhotoInput.value
    }),
  })
    .then((res) => res.json())
    // .then((evt) => {
    //   evt.preventDefault();
    //   const newCard = createCard(namePhotoInput.value, linkPhotoInput.value);
    //   cardContainer.prepend(newCard);
    //   closePopup(addCardModalWindow);
    //   evt.target.reset();
    // })
    .then((result) => {
      console.log(result)
    })
}
