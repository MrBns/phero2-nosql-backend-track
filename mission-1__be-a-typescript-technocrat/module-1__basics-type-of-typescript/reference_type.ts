//Reference Type --> Object;

const user: {
  company: "Programming Hero";
  firstName: string;
  middleName?: string;
  lastName: string;
  readonly isMarried: boolean; // Cannot modify because it is read onley
} = {
  company: "Programming Hero",
  firstName: "Jhankar",
  lastName:"Mahbub",
  isMarried:true,

};
