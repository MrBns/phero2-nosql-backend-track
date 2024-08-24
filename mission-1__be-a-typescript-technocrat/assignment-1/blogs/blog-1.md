# The significance of union and intersection types in Typescript

In Typescript, **Union** and **Intersection** types are kind of Logical Type. For example by Union and Logical type you can check one or more type or One type from multiple. Which makes our Code More clean, Readable and Type Predictable.

In Typescript, We are used to create type with one type or just using primitive (builtin types). Suppose A function where you need take user input. but you are not sure either user will give you `number` or `string` as input. in this case **Union** type come in the scene.

### Union : The Power of `Or` (`|`).

In Typescript, you always cannot go with one static type.. May be you can go through `enum` but its a little bit complicated.
as I said above sometimes we need to take single argument or variable for multiple type.

for example

```ts
// Suppose We have a variable for Logged in user;
type TUser = {
  username: string;
  isLoggedIn: true;
};

// here we are not sure if this `loggedInUser` would always have data or not.
//Since we are not Sure thats why we said here `undefined` and `TUser`. when we won't have user data this variable will contain  undefined
let loggedInUser: undefined | TUser;
```

In above example, You can see we have `TUser` type. and a variable `loggedInUser`. and the interesting thing is the type of `loggedInUser` is not single. it has two type `undefined` and `TUser`. its because in real world application we always won't have a loggedIn user in our application. when won't have the the data we will assign `undefined` or When we will have our logged in user then we will assign `TUser` object. after that we can verify our data existence through `if` & `else` condition.

now lets move on Intersection type.

### Intersection : The Power of `and` (`&`)

when your specific type need to met multiple type requirement that time we can use intersection operator.. a common example is, suppose you have predefined a `Book` Object. now you need a extra property in that book object. then its the best time to use `&` intersection type in typescript. See the Below Example

```ts
type TUser = { username: string; role: "admin" | "user" };

function saveUser( user: TUser & {password: string}){
    // Now here Our user parameter will have `username`, `role` and `password`.
}
```
You see that our `TUser` only has `username` and `role` but in the parameter we also needed the `password` to save user in database. that time we can say to typescript that, hey typescript you need to look for an extra `password` property for user parameter with `TUser`. So typescript will check the parameter if it satisfy all `TUser` property and as well `password` property. its kind of extending type with another additional property or value. that's it.. its the `intersection` type.  so overall, we can say that 
> when we need to validate a object or type with additional/Extra type together its call intersection.


----------

From the above example and description, we have seen that how useful intersection and union type is. and Yeah its truely is. Now a days Industry standard typescript library and application are taking benefit of `union` and `intersection` type.. from my honest perspective - without  **Union** and **intersection** type there a lots of problem that would take extra boilerplate code and extra valueable time of developer.  and So I can say it truly has a huge importance in typescript. 