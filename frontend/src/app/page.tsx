export default function Home() {
  return (
    // landing page
    <>
      <div id="landing" className="p-5 text-white flex flex-col justify-between min-h-screen">
        <div className="flex justify-between">
          <img src="assets/logo.png" className="w-20" alt="logo" />
          <button className="py-2 px-4 bg-black rounded-lg font-bold">Sign in</button>
        </div>
        <div>
          <p className="text-7xl">Find Your,<b>photographer</b></p>
          <p>in Sri Lanka.</p>
          <p>SriLink connects you with reliable service providers across </p>
          <p>Sri Lanka — instantly, effortlessly, and in one place.</p>
        </div>
      </div>
    </>
  );
}
