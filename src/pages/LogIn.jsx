import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import bg from "../assets/bg.jpg";

function LogIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(userCredential);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        px-5
        overflow-hidden
      "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* warm dark overlay */}
      <div
        className="
          absolute
          inset-0
          bg-[#241A15]/60
          backdrop-blur-[2px]
        "
      />


      <form
        onSubmit={handleSubmit}
        className="
          relative
          z-10
          w-full
          max-w-md
          rounded-3xl
          border
          border-white/20
          bg-[#FFF9F2]/80
          p-8
          shadow-2xl
          backdrop-blur-xl
        "
      >

        <h1
          className="
            mb-2
            text-center
            font-serif
            text-4xl
            font-semibold
            text-[#332B26]
          "
        >
          Welcome back
        </h1>


        <p
          className="
            mb-8
            text-center
            text-sm
            text-[#806F63]
          "
        >
          Continue your reading journey
        </p>


        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
            mb-4
            w-full
            rounded-xl
            border
            border-[#D8C8BA]
            bg-white/90
            px-4
            py-3
            text-[#332B26]
            outline-none
            transition
            focus:border-[#FFB38A]
          "
        />


        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="
            mb-6
            w-full
            rounded-xl
            border
            border-[#D8C8BA]
            bg-white/90
            px-4
            py-3
            text-[#332B26]
            outline-none
            transition
            focus:border-[#FFB38A]
          "
        />


        <button
          className="
            w-full
            rounded-xl
            bg-[#FFB38A]
            py-3
            font-medium
            text-[#332B26]
            transition-all
            duration-300
            hover:bg-[#FFD6A5]
            hover:shadow-lg
          "
        >
          Log in
        </button>


        <p
          className="
            mt-6
            text-center
            text-sm
            text-[#806F63]
          "
        >
          Don't have an account?
          <span
            className="
              ml-1
              cursor-pointer
              font-medium
              text-[#9B5E3C]
              hover:text-[#FF9B68]
            "
            onClick={()=> navigate("/register")}
          >
            Register
          </span>
        </p>

      </form>

    </main>
  );
}

export default LogIn;