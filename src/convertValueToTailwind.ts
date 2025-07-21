export function convertValueToTailwind(
  valueType: string,
  value: number
): string {
  switch (valueType) {
    case "gap":
      const tValue = value / 4;
      if (value % 4 === 0) {
        return `gap-${tValue}`;
      } else {
        return `gap-[${value}]`;
      }
    default:
      return "";
  }
}
