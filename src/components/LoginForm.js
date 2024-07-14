const SignIn = () => {
    return (
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
        <h2 className="p-3 text-3xl font-bold text-pink-400">App</h2>
        <div className="inline-block border-[1px] justify-center w-20 border-blue-460 border-solid"></div>
        <h3 className="text-xl font-semibold text-blue-400 pt-2">Sign In!</h3>
        {/* Icons */}
        <div className="flex space-x-2 m-4 items-center justify-center">
          <div className="socialIcon">
            <Facebook />
          </div>
          <div className="socialIcon">
            <GitHub />
          </div>
          <div className="socialIcon">
            <Google />
          </div>
        </div>
        {/* Inputs */}
        <div className="flex flex-col items-center justify-center">
          <input
            type="email"
            className="rounded-2x1 px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-408 focus:outline-none focus:ring-8 placeholder='Email'"
          />
          <input
            type="password"
            className="rounded-2x1 px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-488 focus:outline-none focus:ring- placeholder='Password'"
          />
          <button className="rounded-2x1 m-2 text-white bg-blue-480 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in">
            Sign In
          </button>
        </div>
        {/* Toggle */}
        <div className="inline-block border-[1px] justify-center w-20 border-blue-488 border-solid"></div>
        <p className="text-blue-400 mt-4 text-sm">Don't have an account?</p>
        <p className="text-blue-400 mb-4 text-sm font-medium cursor-pointer" onClick={() => setIsLogin(false)}>
          Create Account?
        </p>
      </div>
    );
  };
  