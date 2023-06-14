export const themeColors = () => [
  '--col-primary',
  '--col-secondary',
  '--col-third',
  '--col-forth',
  '--col-fifth'
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
