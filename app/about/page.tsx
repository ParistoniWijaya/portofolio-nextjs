import Image from "next/image";

const About = () => {
  return (
    <div>
      <Image
        className="rounded pt-5 float-left"
        src={`/bg13.png`}
        alt=""
        height={100}
        width={500}
      ></Image>

      <h1 className="text-center font-bold text-3xl pt-14">
        ARTStudio is a building and architecture construction company based in
        Lampung. We offer an integrated approach to handling all your
        construction, from design to architecture, interior, development and
        procurement. We are a small of group that have the same passion, have a
        commitment to help about design and build your Dream House!
      </h1>
      <div className="pt-16">
        <hr className="border-2 border-black" />
        <div>
          <h1 className="text-center font-bold text-xl pt-20">
            What we offer to our Customer about our Service
          </h1>
          <div className="px-1 pt-4 pb-2 text-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-2xl font-semibold text-gray-700 mr-2 mb-2">
              #Transparancy
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-2xl font-semibold text-gray-700 mr-2 mb-2">
              #Experienced
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-2xl font-semibold text-gray-700 mr-2 mb-2">
              #High Quality
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
