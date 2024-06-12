const createUser = async () => {
  "use server";
  console.log("creating user..");
};

function Form() {
  return (
    <form action={createUser} className={formStyle}>
      <h2 className="text-2xl capitalize mb-4">Create user</h2>
      <input
        type="text"
        name="firstName"
        defaultValue="peter"
        required
        className={inputStyle}
      />
      <input
        type="text"
        name="lastName"
        defaultValue="smith"
        required
        className={inputStyle}
      />
      <button type="submit" className={buttonStyle}>
        Submit
      </button>
    </form>
  );
}

const formStyle = "max-w-lg flex flex-col gap-y-4 shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
const buttonStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize";

export default Form;