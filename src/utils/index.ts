export const keyParser = (key: string) => {
  const keyArray: string[] = key.split("_");
  const capitalizeKeyArray: string[] = keyArray.map((key: string) => {
    return key.charAt(0).toUpperCase() + key.slice(1);
  });

  return capitalizeKeyArray.join(" ");
};
