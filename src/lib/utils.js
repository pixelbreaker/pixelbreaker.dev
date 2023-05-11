export const themeColors = () => [
  '--col-blue',
  '--col-violet',
  '--col-teal',
  '--col-brown',
  '--col-yellow',
  '--col-green'
];

export const uniqueRandomThemeColors = (count) => {
  const colors = themeColors();
  if (count > colors.length) throw new Error('You need more colors');

  let picked = [];
  while (count-- > 0) {
    picked = picked.concat(colors.splice(~~(Math.random() * colors.length), 1));
  }
  return picked;
};
