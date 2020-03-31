const _random = (n: number = 10): number => Math.floor(Math.random() * n);

const generateRandomString = (): string =>
  Math.random()
    .toString(36)
    .substring(_random());

export const Tracks = () => {
  const ar = new Array(~~_random() + 1).fill(null);

  return ar.map((_, i) => ({
    id: i + 1,
    title: generateRandomString(),
    likes: _random(1000),
    artist: generateRandomString(),
    rate: _random(),
  }));
};

export default [
  {
    id: 1,
    title: 'All gender',
    tracks: Tracks(),
  },
  {
    id: 2,
    title: 'Tech house',
    tracks: Tracks(),
  },
  {
    id: 3,
    title: 'Techno',
    tracks: Tracks(),
  },
  {
    id: 4,
    title: 'Progressive house',
    tracks: Tracks(),
  },
];
