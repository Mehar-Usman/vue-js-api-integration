// card.js
import { defineStore } from 'pinia';

export const useCardStore = defineStore({
  id: 'card',
  state: () => ({
    cards: [
      {
        id: 1,
        imageUrl: 'https://source.unsplash.com/featured/?nature',
        title: 'Card 1',
        subtitle: 'Subtitle 1',
        description: 'Description for card 1.',
      },
      {
        id: 2,
        imageUrl: 'https://source.unsplash.com/featured/?mountains',
        title: 'Card 2',
        subtitle: 'Subtitle 2',
        description: 'Description for card 2.',
      },
      {
        id: 3,
        imageUrl: 'https://source.unsplash.com/featured/?water',
        title: 'Card 3',
        subtitle: 'Subtitle 3',
        description: 'Description for card 3.',
      },
      {
        id: 4,
        imageUrl: 'https://source.unsplash.com/featured/?sky',
        title: 'Card 4',
        subtitle: 'Subtitle 4',
        description: 'Description for card 4.',
      },
      {
        id: 5,
        imageUrl: 'https://source.unsplash.com/featured/?forest',
        title: 'Card 5',
        subtitle: 'Subtitle 5',
        description: 'Description for card 5.',
      },
      {
        id: 6,
        imageUrl: 'https://source.unsplash.com/featured/?beach',
        title: 'Card 6',
        subtitle: 'Subtitle 6',
        description: 'Description for card 6.',
      },
      {
        id: 7,
        imageUrl: 'https://source.unsplash.com/featured/?city',
        title: 'Card 7',
        subtitle: 'Subtitle 7',
        description: 'Description for card 7.',
      },
      {
        id: 8,
        imageUrl: 'https://source.unsplash.com/featured/?architecture',
        title: 'Card 8',
        subtitle: 'Subtitle 8',
        description: 'Description for card 8.',
      },
      {
        id: 9,
        imageUrl: 'https://source.unsplash.com/featured/?food',
        title: 'Card 9',
        subtitle: 'Subtitle 9',
        description: 'Description for card 9.',
      },
      {
        id: 10,
        imageUrl: 'https://source.unsplash.com/featured/?travel',
        title: 'Card 10',
        subtitle: 'Subtitle 10',
        description: 'Description for card 10.',
      },
      {
        id: 11,
        imageUrl: 'https://source.unsplash.com/featured/?cars',
        title: 'Card 11',
        subtitle: 'Subtitle 11',
        description: 'Description for card 11.',
      },
      {
        id: 12,
        imageUrl: 'https://source.unsplash.com/featured/?animals',
        title: 'Card 12',
        subtitle: 'Subtitle 12',
        description: 'Description for card 12.',
      },
      {
        id: 13,
        imageUrl: 'https://source.unsplash.com/featured/?technology',
        title: 'Card 13',
        subtitle: 'Subtitle 13',
        description: 'Description for card 13.',
      },
      {
        id: 14,
        imageUrl: 'https://source.unsplash.com/featured/?music',
        title: 'Card 14',
        subtitle: 'Subtitle 14',
        description: 'Description for card 14.',
      },
      {
        id: 15,
        imageUrl: 'https://source.unsplash.com/featured/?sports',
        title: 'Card 15',
        subtitle: 'Subtitle 15',
        description: 'Description for card 15.',
      },
      {
        id: 16,
        imageUrl: 'https://source.unsplash.com/featured/?fashion',
        title: 'Card 16',
        subtitle: 'Subtitle 16',
        description: 'Description for card 16.',
      },
      {
        id: 17,
        imageUrl: 'https://source.unsplash.com/featured/?architecture',
        title: 'Card 17',
        subtitle: 'Subtitle 17',
        description: 'Description for card 17.',
      },
      {
        id: 18,
        imageUrl: 'https://source.unsplash.com/featured/?food',
        title: 'Card 18',
        subtitle: 'Subtitle 18',
        description: 'Description for card 18.',
      },
      {
        id: 19,
        imageUrl: 'https://source.unsplash.com/featured/?travel',
        title: 'Card 19',
        subtitle: 'Subtitle 19',
        description: 'Description for card 19.',
      },
      {
        id: 20,
        imageUrl: 'https://source.unsplash.com/featured/?nature',
        title: 'Card 20',
        subtitle: 'Subtitle 20',
        description: 'Description for card 20.',
      },
    ],
  }),
});