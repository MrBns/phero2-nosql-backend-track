{
  interface IStudent {
    // studyHour(): number;
    studyHour(addition: number): number;
  }

  class GoodStudent implements IStudent {

    // Overriding Polymorphism
    studyHour(): number {
      return 10;
    }
  }
}
