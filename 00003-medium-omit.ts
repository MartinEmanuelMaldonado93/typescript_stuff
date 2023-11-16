import type { Equal, Expect } from "./test-utils";
type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, "description">>>,
  Expect<Equal<Expected2, MyOmit<Todo, "description" | "completed">>>
];
// @ts-expect-error
type error = MyOmit<Todo, "description" | "invalid">;
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
interface Expected1 {
  title: string;
  completed: boolean;
}
interface Expected2 {
  title: string;
}

type MyOmit<T extends Object, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};
// if selected key return 'never' type or else return simple P
