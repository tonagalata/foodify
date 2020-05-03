const BASE_URL = "/api/";

function index() {
  return fetch(BASE_URL + 'restaurants').then(res => res.json());
}

function create(restaurant){
  return fetch(BASE_URL + "create-restaurant", {
    method: "POST",
    headers: new Headers({ "Content-type": "Application/json" }),
    body: JSON.stringify(restaurant)
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Restaurant Already Exists");
      }
    })
}

function createReview(review, idx){
  return fetch(BASE_URL + `restaurants/${idx}/review`, {
    method: "POST",
    headers: new Headers({ "Content-type": "Application/json" }),
    body: JSON.stringify(review)
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Restaurant Already Exists");
      }
    })
}

function deleteReview(restaurant, idx){
  return fetch(BASE_URL + `restaurants/${idx}`, {
    method: "POST",
    headers: new Headers({ "Content-type": "Application/json" }),
    body: JSON.stringify(restaurant)
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Restaurant Already Exists");
      }
    })
}

export default {
  index,
  create,
  createReview,
  deleteReview
}