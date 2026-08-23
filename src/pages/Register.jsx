import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import bg from "../assets/bg.jpg";
function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
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

    {/* dark warm overlay */}
    <div
      className="
        absolute
        inset-0
        bg-[#241A15]/60
        backdrop-blur-[2px]
      "
    />


    {/* register card */}
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
        Create an account
      </h1>


      <p
        className="
          mb-8
          text-center
          text-sm
          text-[#806F63]
        "
      >
        Start building your personal library
      </p>


      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className="
          mb-4
          w-full
          rounded-xl
          border
          border-[#D8C8BA]
          bg-white/90
          px-4
          py-3
          outline-none
          focus:border-[#FFB38A]
        "
      />


      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className="
          mb-4
          w-full
          rounded-xl
          border
          border-[#D8C8BA]
          bg-white/90
          px-4
          py-3
          outline-none
          focus:border-[#FFB38A]
        "
      />


      <input
        type="password"
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={(e)=>setConfirmPassword(e.target.value)}
        className="
          mb-6
          w-full
          rounded-xl
          border
          border-[#D8C8BA]
          bg-white/90
          px-4
          py-3
          outline-none
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
          hover:bg-[#FFD6A5]
          hover:shadow-lg
        "
      >
        Register
      </button>


      <p
        className="
          mt-6
          text-center
          text-sm
          text-[#806F63]
        "
      >
        Already have an account?
        <span
          className="
            ml-1
            cursor-pointer
            text-[#9B5E3C]
            font-medium
          "
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </p>

    </form>

  </main>
);
}

export default Register;