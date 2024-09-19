import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <main className="container mx-auto">
        <div className="flex justify-center items-center mt-20 gap-10 font-bold">
          <h1 className="text-6xl font-bold text-neutral-600">We love</h1>
          <p className="py-5 px-10 bg-info text-4xl rounded-2xl text-white">
            comfy
          </p>
        </div>
        <p className="mt-6 text-lg leading-8 w-2/3 mx-auto mb-24">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
          quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia
          optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo
          sed officiis ea tempore! Similique eos minima sit porro, ratione
          aspernatur!
        </p>
      </main>
    </div>
  );
};

export default About;
