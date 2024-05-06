{
  // Utility Type;
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type Persons = Person[];

  // Pick.. to pick up some types from another type. example belowe;
  type NameAge = Pick<Person, "name" | "age">;

  //Omit .. to omit some values from a type and return a new type;
  type ContactInfo = Pick<Person, "name" | "age">;

  //  Required.. To make all of the property requrid and return new type;;
  type PersonRequired = Required<Person>;

  // Partial.. to make all of the property partial;
  type PersonPartial = Partial<Person>;

  // Readonly .. to make all of the Property ReadOnly;
  type ReadOnlyPerson = Readonly<Person>;
  type ReadonlyPersonsAge = ReadonlyArray<Readonly<Pick<Person, "age">>>; // Make all of the index Readonly
  const personsAge: ReadonlyPersonsAge = [{ age: 10 }];

  // Record ... Object type .. infer key and value type;

  const obj: Record<string, string> = {
    name: "Sabina",
    // name2: 01  invalid because value type is number;
  };
}
