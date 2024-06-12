import React from "react";

const SignInPage = ({ params }: { params: { "sign-in": string } }) => {
  console.log(params);
  return <div>SignInPage</div>;
};

export default SignInPage;
