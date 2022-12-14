import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { createFamily } from "../../APIs/CreateHousehold";

const CreateHousehold = ({ loggedin }) => {
  const [familyName, setFamilyName] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    console.log("here");
    await createFamily(familyName);
    navigate("../dashboard", { replace: true });
  };

  useEffect(() => {
    if (!loggedin) {
      navigate("../login", { replace: true });
    }
  });

  return (
    <>
      <div className="h-[800px] bg-gray-50 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
          <form
            action=""
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            <div>
              <label
                htmlFor=""
                className="text-sm text-left font-bold text-gray-600 block"
              >
                Family's Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                onChange={(changeEvent) =>
                  setFamilyName(changeEvent.target.value)
                }
                value={familyName}
              />
            </div>
            {/* <div className='flex items-center justify-between'>
            <div>
                <a href="/help" className='font-medium text-sm text-[#8b74bd]'>Don't have a Household Key yet?</a>
            </div>
            </div> */}
            <div>
              <button className="w-full py-2 px-4 bg-[#8b74bd] hover:bg-[#7953ab] rounded-md text-white text-sm">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateHousehold;
