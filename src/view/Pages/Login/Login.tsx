import {useNavigate} from "react-router-dom";

export function Login() {

    const navigate = useNavigate();


    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form
                className="bg-white p-8 rounded-xl shadow-md w-80"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                <div className="mb-4">
                    <label className="block text-gray-600 mb-1" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-600 mb-1" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Log In
                </button>
                <div className="mt-1 mb-4 text-center">
                    <button onClick={() => navigate("/")}
                            className="text-sm text-gray-500 hover:text-gray-700 underline cursor-pointer mt-3.5">Home
                    </button>
                </div>
            </form>
        </div>
    );
}