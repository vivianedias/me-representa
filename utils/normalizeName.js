export default function normalizeName(name) {
  const names = name.split(" ");
  const normalizedNames = names.map((name) => {
    const lowerCaseName = name.toLowerCase();
    let splitName = lowerCaseName.split("");
    splitName[0] = splitName[0].toUpperCase();
    return splitName.join("");
  });

  return normalizedNames.join(" ");
}
