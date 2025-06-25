import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-emerald-100">
        <h2 className="text-3xl font-bold mb-6 text-center text-emerald-800">Welcome Back</h2>
        <form>
          <div className="mb-5">
            <label className="block text-emerald-700 mb-2 font-medium">Email*</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-emerald-700 mb-2 font-medium">Password*</label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-500 text-white py-3 px-4 rounded-lg hover:bg-amber-600 transition duration-300 font-medium shadow-md hover:shadow-lg"
          >
            Login
          </button>
          <div className="mt-5 text-center">
            <Link to="/signup" className="text-emerald-600 hover:text-emerald-800 hover:underline font-medium">
              Don't have an account? <span className="text-amber-600">Sign Up</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;