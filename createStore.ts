const userOne = {
  userName: "martin",
  age: 30,
};
const userTwo = {
  userName: "martin",
  age: 30,
  role: "frontend",
};
const store = createStore<typeof userOne>(userOne); // should return { set, get }

console.log(store.get("userName")); // => 'martin'
store.set("userName", "yicon");
console.log(store.get("userName")); // => 'yicon'
store.setCb("age", () => 45);

type MyStore = ReturnType<typeof createStore<typeof userOne>>;
type MyStoreUnpromised = Awaited<ReturnType<typeof store.set<'userName'>>>;

function createStore<TStore>(initialState: TStore) {
  const store = initialState;
  return {
    set<K extends keyof TStore>(key: K, value: TStore[K]) {
      initialState[key] = value;
      return value; // optional
    },
    setCb<K extends keyof TStore>(
      key: K,
      callback: (current: TStore[K]) => TStore[K]
    ) {
      store[key] = callback(store[key]);
    },
    get: (key: keyof TStore) => initialState[key],
    getAsync: async (key: keyof TStore) =>
      new Promise((resolve) => resolve(initialState[key])),
  };
}
