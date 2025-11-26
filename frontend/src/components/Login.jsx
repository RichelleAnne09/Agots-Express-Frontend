import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPhone, setSignupPhone] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#323C4D] to-[#0F2247] px-4 sm:px-6">
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 w-full max-w-sm sm:max-w-md lg:max-w-lg shadow-2xl">
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="bg-yellow-400 rounded-full p-3 sm:p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 64 64"
              className="w-10 h-10 cursor-pointer transition-all duration-10 hover:animate-pulse"
            >
              <path
                fill="#000000"
                d="M30.456 20.765c0 2.024-1.844 4.19-4.235 4.19v34.164c0 4.851-6.61 4.851-6.61 0V24.955c-2.328 0-4.355-1.793-4.355-4.479V1.674c0-1.636 2.364-1.698 2.364.064v13.898h1.98V1.61c0-1.503 2.278-1.599 2.278.064v13.963h2.046V1.63c0-1.572 2.21-1.635 2.21.062v13.945h2.013V1.63c0-1.556 2.309-1.617 2.309.062v19.074zm17.633-14.72v53.059c0 4.743-6.624 4.673-6.624 0V38.051h-3.526V6.045c0-7.451 10.151-7.451 10.151 0z"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-xl sm:text-2xl font-semibold text-center text-gray-900">
          Agot's Express
        </h1>
        <p className="text-center text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">
          Authentic Filipino Cuisine
        </p>

        <div className="flex justify-center mb-4 sm:mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("login")}
            className={`px-3 sm:px-4 py-2 font-medium text-sm sm:text-base ${
              activeTab === "login"
                ? "border-b-2 border-yellow-400 text-gray-900"
                : "text-gray-400"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`px-3 sm:px-4 py-2 font-medium text-sm sm:text-base ${
              activeTab === "signup"
                ? "border-b-2 border-yellow-400 text-gray-900"
                : "text-gray-400"
            }`}
          >
            Sign Up
          </button>
        </div>

        <div className="overflow-hidden">
          <div
            className={`flex transition-transform duration-500 ${
              activeTab === "login" ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="w-full flex-shrink-0">
              <LoginForm
                loginEmail={loginEmail}
                setLoginEmail={setLoginEmail}
                loginPassword={loginPassword}
                setLoginPassword={setLoginPassword}
              />
            </div>
            <div className="w-full flex-shrink-0">
              <SignupForm
                signupName={signupName}
                setSignupName={setSignupName}
                signupEmail={signupEmail}
                setSignupEmail={setSignupEmail}
                signupPhone={signupPhone}
                setSignupPhone={setSignupPhone}
                signupUsername={signupUsername}
                setSignupUsername={setSignupUsername}
                signupPassword={signupPassword}
                setSignupPassword={setSignupPassword}
                signupConfirmPassword={signupConfirmPassword}
                setSignupConfirmPassword={setSignupConfirmPassword}
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="/" className="text-gray-700 hover:text-gray-900 text-sm">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
