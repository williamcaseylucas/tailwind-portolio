const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="w-full max-w-[1000px] grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm William. Please take a look around. </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              voluptate repellat fuga asperiores minus omnis sapiente, aliquam
              nobis maxime, praesentium officia quis ullam expedita delectus,
              quos hic deleniti nesciunt illo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
