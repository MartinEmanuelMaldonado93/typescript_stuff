// to see nested types:
type Prettify<T> = {
  [K in keyof T]: T[K];
} & unknown;

const address = {
  street: "capello",
  country: "Argentina",
  state: "Buenos Aires",
  PCS: ["asus", "dell", "asus", "intel"],
};
const userThree = {
  userName: "martin",
  age: 30,
  role: "frontend",
};
type adress = {
  street: string;
  country: string;
  pcs: string[];
};
type user = {
  userName: string;
  age: number;
  role: string;
};

type unionOfTypes = adress & user; // before -> adress & user
type three = Prettify<unionOfTypes>; // after ->
//  three = {
//     street: string;
//     country: string;
//     pcs: string[];
//     userName: string;
//     age: number;
//     role: string;
// }

async function getSomeDataFromApi(values: number[] | null) {
  return "hola";
}

type data = NonNullable<Awaited<ReturnType<typeof getSomeDataFromApi>>>;
type dataParameters = Awaited<Parameters<typeof getSomeDataFromApi>[0]>;
type dataParametersWithoutFalsy = NonNullable<
  Awaited<Parameters<typeof getSomeDataFromApi>[0]>
>;