import type { Equal, Expect } from "./test-utils";
type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<
  Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >
];
//@ts-expect-error
Expect<Equal<MyExclude<"a" | "b", "a" | "b" | "c">, "c">>
// ============= Your Code Here =============
type MyExclude<T, U> = T extends U ? never : T;
