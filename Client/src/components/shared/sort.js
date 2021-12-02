import React from "react";

export function byNameAsc(a, b) {
  if (a.name > b.name) {
    return 1;
  } else if (b.name > a.name) {
    return -1;
  } else {
    return 0;
  }
}
export function byNameDsc(a, b) {
  if (a.name > b.name) {
    return -1;
  } else if (b.name > a.name) {
    return +1;
  } else {
    return 0;
  }
}

export function byRatingAsc(a, b) {
  return parseInt(a.rating) - parseInt(b.rating);
}
export function byRatingDsc(a, b) {
  return parseInt(b.rating) - parseInt(a.rating);
}
