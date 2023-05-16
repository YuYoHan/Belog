
export const maskingName = (value : string) => {
      return value.replace(/(?<=.{0})./gi, '•');
}