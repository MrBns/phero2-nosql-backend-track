{
  // Mapped Type;

  type AreaInNumber = {
    height?: number;
    width: number;
  };

  // Lookup Type; look for a type with the key of a type;
  //example;
  type height = AreaInNumber["height"]; // this is a look up type;;

  type AreaInString = {
    [key in keyof AreaInNumber]: string;
  };

  type MyPartial<T> = {
    [key in keyof T]?: T[key];
  };

  type AreaInNumberOption = MyPartial<undefined>;
}
