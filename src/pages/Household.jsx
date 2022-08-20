import { fetchHouseholdById } from "../MockData/utils/FetchData";
import { Heading } from "@chakra-ui/react";

const Household = ({ id }) => {
  const data = fetchHouseholdById();

  return (
    <div>
      <Heading>{data.name}</Heading>
      <h2>Total Allowance: {data.totalAllowance}</h2>
      <h2>Number of Members: {data.members.length}</h2>

      {data.members.map((member) => (
        <>
          <h3>
            name: {member.name} | Allowance: {member.allowance}
          </h3>
          {member.expenses.map(({ category, items }) => (
            <>
              <h4>{category}: </h4>
              {items.map((item) => (
                <h5>
                  title: {item.title} | Descrption: {item.description} | Amount:{" "}
                  {item.amount}
                </h5>
              ))}
            </>
          ))}
          <p>
            ________________________________________________________________________________________________________________
          </p>
        </>
      ))}
    </div>
  );
};

export default Household;
