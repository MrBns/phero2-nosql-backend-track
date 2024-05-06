{
  // constraint;

  const getPropertyValue = <T>(obj: T, key: keyof T) => obj[key];

  const user = {
    name: "Nazmul",
    wife: "Sabina",
  };

  const result = getPropertyValue(user, "name");
}
