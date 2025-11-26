import { useState } from "react";

const LoginForm = ({
  loginUsername,
  setLoginUsername,
  loginPassword,
  setLoginPassword,
  handleLogin,
}) => {
  // ✅ State for show/hide password
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      {/* Username */}
      <div>
        <label className="block text-gray-700 mb-1 text-sm">Username:</label>
        <input
          type="text"
          placeholder="Enter username"
          value={loginUsername}
          onChange={(e) => setLoginUsername(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 text-sm"
          required
        />
      </div>

      {/* Password with show/hide */}
      <div className="relative">
        <label className="block text-gray-700 mb-1 text-sm">Password:</label>

        <input
          type={showPassword ? "text" : "password"}
          placeholder="********"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 text-sm pr-10"
          required
        />

        {/* 👁️ Show/Hide Password Button (same as your sample) */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 mt-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {showPassword ? (
              <>
                {/* Eye open */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-0.584 1.859-2.009 3.43-3.742 4.527"
                />
              </>
            ) : (
              <>
                {/* Eye closed */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3l18 18"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 9.879a3 3 0 104.242 4.242"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-2.1 0-4.03-.735-5.568-1.948"
                />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-md text-sm"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
