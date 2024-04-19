import logo from "/assets/logo/logo.svg";

export default function Navbar() {
  const signOut = () => {
    localStorage.clear();
    location.reload();
  };

  return (
    <div className="bg-accent text-sm text-white">
      <div className="max-w-[1400px] mx-auto p-4 flex items-center justify-between">
        <img src={logo} alt="Logo" className="w-20" />

        <button
          className="px-4 py-2 bg-white/20 rounded-lg font-medium hover:bg-white/35"
          onClick={signOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
