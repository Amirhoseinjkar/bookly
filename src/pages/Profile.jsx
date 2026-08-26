import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router";
import { FiUser, FiMail, FiBookOpen, FiLogOut } from "react-icons/fi";

function Profile() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSignOut() {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  return (
    <main className="min-h-[calc(100vh-64px)] bg-[#FDF6EC] px-5 py-10">
      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B07A5A]">
            Your account
          </p>

          <h1 className="mt-1 font-serif text-4xl font-semibold text-[#332B26]">
            Profile
          </h1>

          <p className="mt-2 text-[#806F63]">
            Manage your Bookly account and reading journey.
          </p>
        </div>


        {/* Profile card */}
        <section className="overflow-hidden rounded-2xl border border-[#E8DCCF] bg-[#FFF9F2] shadow-sm">

          {/* Top profile section */}
          <div className="flex flex-col items-center gap-5 border-b border-[#E8DCCF] px-6 py-8 sm:flex-row sm:px-8">

            {/* Avatar */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#FDD6AE] text-[#9B5E3C]">
              <FiUser size={34} />
            </div>

            <div className="text-center sm:text-left">
              <h2 className="font-serif text-2xl font-semibold text-[#332B26]">
                Welcome back
              </h2>

              <p className="mt-1 text-sm text-[#806F63]">
                {user?.email}
              </p>
            </div>

          </div>


          {/* Account information */}
          <div className="px-6 py-7 sm:px-8">

            <h2 className="mb-5 font-serif text-xl font-semibold text-[#332B26]">
              Account information
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">

              {/* Email */}
              <div className="rounded-xl border border-[#E8DCCF] bg-white/70 p-4">
                <div className="mb-2 flex items-center gap-2 text-[#B07A5A]">
                  <FiMail size={18} />
                  <span className="text-sm font-medium">
                    Email
                  </span>
                </div>

                <p className="break-all text-sm text-[#332B26]">
                  {user?.email}
                </p>
              </div>


              {/* Account */}
              <div className="rounded-xl border border-[#E8DCCF] bg-white/70 p-4">
                <div className="mb-2 flex items-center gap-2 text-[#B07A5A]">
                  <FiBookOpen size={18} />
                  <span className="text-sm font-medium">
                    Bookly account
                  </span>
                </div>

                <p className="text-sm text-[#806F63]">
                  Your personal reading space
                </p>
              </div>

            </div>

          </div>


          {/* My books */}
          <div className="border-t border-[#E8DCCF] px-6 py-7 sm:px-8">

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

              <div>
                <h2 className="font-serif text-xl font-semibold text-[#332B26]">
                  Your library
                </h2>

                <p className="mt-1 text-sm text-[#806F63]">
                  Keep track of the books you want to read and the ones
                  you've finished.
                </p>
              </div>

              <button
                onClick={() => navigate("/my-books")}
                className="rounded-full bg-[#FDD6AE] px-5 py-2.5 text-sm font-medium text-[#7A4931] transition hover:bg-[#FCB773]"
              >
                View my books →
              </button>

            </div>

          </div>


          {/* Sign out */}
          <div className="flex justify-end border-t border-[#E8DCCF] bg-[#FFF4E8] px-6 py-5 sm:px-8">

            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 rounded-full border border-[#D8BFB0] px-5 py-2.5 text-sm font-medium text-[#8C4D35] transition hover:border-[#C56A45] hover:bg-[#FDE3D3]"
            >
              <FiLogOut size={17} />
              Sign out
            </button>

          </div>

        </section>

      </div>
    </main>
  );
}

export default Profile;