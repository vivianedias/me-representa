export default function normalizeName(name) {
  const names = name.split(" ");
  const normalizedNames = names.map((name) => {
    const lowerCaseName = name.toLowerCase();
    let splitName = lowerCaseName.split("");

    if (splitName.length < 1) return name;

    splitName[0] = splitName[0].toUpperCase();
    return splitName.join("");
  });

  return normalizedNames.join(" ");
}
