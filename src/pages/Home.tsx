import React from "react";

const Home = () => {
  return (
    <>
      <div className="min-h-screen w-full relative bg-black">
        {/* Indigo Cosmos Background with Top Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
          }}
        />

        <h1 className="text-white">Your Vision, Intelligently Engineered</h1>
      </div>
    </>
  );
};

export default Home;
