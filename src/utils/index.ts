export default class AppUtils {
  public static isEvenNumber(number: number): boolean {
    return number % 2 === 0;
  }

  public static isMyHoliday(day: string): boolean {
    return ['Friday'].includes(day);
  }

  public static isFactorial(number: number): number {
    const factorial = (number) => {
      if (number == 0) {
        return 1;
      } else {
        return number * factorial(number - 1);
      }
    };
    return factorial(number);
  }

  public static isVAT(price: number): number {
    return (price * 7) / 100;
  }
}
