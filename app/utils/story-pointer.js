export default function storyPointer(difficulty) {
  switch (difficulty) {
    case 'easy':
      return 2;
    default:
      return 5;
  }
}
