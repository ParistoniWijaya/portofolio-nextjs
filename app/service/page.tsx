import Image from "next/image";
const Service = () => {
  return (
    <div>
      <div className="flex flex-row gap-36 p-16 bg-gray-600">
        <div>
          <h1 className="font-bold text-3xl">
            Glad that you found us! Your solution for your dream House
          </h1>
          <hr className="border-4" />
          <h1 className="pt-5 font-bold text-white text-xl">
            We get it done for your expectation!
          </h1>
          <div className="px-1 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Architecture
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Design
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #DreamHouse
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Construction
            </span>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly max-w-screen-sm">
          <Image src={`/bg10.png`} alt="" height={170} width={180}></Image>
          <Image src={`/bg11.png`} alt="" height={170} width={160}></Image>
          <Image src={`/bg9.png`} alt="" height={170} width={250}></Image>
          <Image
            className="object-cover rounded-xl"
            src={`/bg1.png`}
            alt=""
            height={300}
            width={695}
          ></Image>
        </div>
      </div>
      <div className="px-2 py-2">
        <div className="font-bold text-x1 mb-2 text-black-300">
          {" "}
          Look what we offering, its all about our Services!{" "}
        </div>
        <h1></h1>
        <p className="text-black-700 text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
          fugiat, architecto exercitationem accusantium fugit ullam molestias
          voluptas, non, eaque neque quisquam adipisci iusto maiores! Quae harum
          nobis tenetur repellendus cum.
        </p>
      </div>
    </div>
  );
};

export default Service;
