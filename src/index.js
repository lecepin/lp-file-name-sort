export default function (file1, file2) {
  let a = file1,
    b = file2;

  const aNums = a.match(/[0-9]+/g);
  const bNums = b.match(/[0-9]+/g);

  if (!aNums || !bNums) {
    return a.localeCompare(b);
  }
  for (
    let i = 0, minLen = Math.min(aNums.length, bNums.length);
    i < minLen;
    i++
  ) {
    let aIndex = a.indexOf(aNums[i]);
    let bIndex = b.indexOf(bNums[i]);

    let aPrefix = a.substring(0, aIndex);
    let bPrefix = a.substring(0, bIndex);

    if (aIndex != bIndex || aPrefix != bPrefix) {
      return a.localeCompare(b);
    } else {
      if (aNums[i] === bNums[i]) {
        if (i == minLen - 1) {
          return a.substring(aIndex).localeCompare(b.substring(bIndex));
        } else {
          a = a.substring(aIndex + aNums[i].length);
          b = b.substring(bIndex + bNums[i].length);
        }
      } else if (~~aNums[i] === ~~bNums[i]) {
        return (
          aNums[i].lastIndexOf(~~aNums[i] + "") -
          bNums[i].lastIndexOf(~~bNums[i] + "")
        );
      } else {
        return ~~aNums[i] - ~~bNums[i];
      }
    }
  }
};
