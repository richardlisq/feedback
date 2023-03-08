import { writable } from 'svelte/store';

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'Lorem ipsum dolor 1 sit amet consecu=tetur,alsdjflaksdflasdlfajsdlfasd'
  }, {
    id: 2,
    rating: 9,
    text: 'Lorem ipsum dolor 2 Wahter evenalsdjfkasdjf aierokdiraowlrmladufoahwernalkf'
  }, {
    id: 3,
    rating: 8,
    text: 'Lorem ipsum dolor 3 sit amet consecu=tetur,alsdjflaksdflasdlfajsdlfasd'
  }
]);