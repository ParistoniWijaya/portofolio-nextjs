import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section> 
      <div>
        <Image
          className="flex-col float-left"
          src={`/bg12.png`}
          alt=""
          height={700}
          width={700}
        ></Image>
      </div>
      <div>
        <h1 className="text-wrap text-2xl font-bold text-black text-center pt-24">
          WELCOME TO ARTStudio, YOUR SOLUTION FOR YOUR DREAM HOUSE
        </h1>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold pt-12 text-center">
          {" "}
          Click below to know more about Us!
        </p>
        <Link className="font-bold text-xl hover:underline" href="/about">
          About Us
        </Link>
        <div className="px-1 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Architecture{" "}
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
      <div className=" pt-44">
        <hr className="border-2 border-black" />
        <h1 className="font-serif text-center bold text-2xl pt-6">
          TESTIMONIAL
        </h1>
      </div>
      <div className="flex justify-center pt-0">
        <div className=" text-black leading-7 my-3 font-semibold max-w-sm rounded-2xl overflow-hidden shadow-2xl mr-3 mt-12 bg-gray-500">
          <p>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            harum eos, qui atque blanditiis culpa in magnam error suscipit modi
            porro unde odit incidunt delectus. Eaque facilis provident
            aspernatur aliquam?
          </p>
        </div>
        <div className="  text-black leading-7 my-3 font-semibold max-w-sm rounded-2xl overflow-hidden shadow-2xl mr-3 mt-12 bg-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            commodi. Doloribus magni praesentium voluptatibus. Magni tempora cum
            assumenda corporis, numquam iure at ducimus a labore fugiat incidunt
            vel vero modi.
          </p>
        </div>
        <div className="  text-black leading-7 my-3 font-semibold max-w-sm rounded-2xl overflow-hidden shadow-2xl mr-3 mt-12 bg-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illo
            ipsum provident dolorum, cum maiores voluptatibus porro nisi
            repudiandae, quis dolorem unde quia eos doloremque adipisci,
            consequuntur at alias dolores.
          </p>
        </div>
      </div>
    </section>
  );
}
