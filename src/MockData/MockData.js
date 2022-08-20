export function makeHousehold() {
  const members = [
    makeMember(1, "John", 100),
    makeMember(2, "Alex", 2000),
    makeMember(3, "Joe", 500),
    makeMember(4, "Steve", 1000),
  ];

  return {
    householdId: Math.random(1000),
    totalAllowance: 1000000,
    members,
    name: "test household",
  };
}

export function makeMember(id, name, allowance) {
  return {
    id,
    username: "test user",
    name,
    allowance,
    expenses: [
      {
        category: "Housing",
        items: [makeItem("res", "wilmot", 1000, Date.now())],
      },
      {
        category: "Education",
        items: [makeItem("Textbooks", "Intro to Quantum", 2000, Date.now())],
      },
      {
        category: "Groceries",
        items: [makeItem("Fortinos", "steak", 20, Date.now())],
      },
    ],
  };
}

export function makeItem(title, description, amount, date) {
  return { title, description, amount, date };
}
