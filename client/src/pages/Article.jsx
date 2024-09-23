import { NavLink } from "react-router-dom";

const Article = () => {
  return (
    <main className="z-0 min-h-screen bg-white overflow-clip">
      <div className="absolute z-10 w-full h-96 bg-articleGradient"></div>
      <img
        className="absolute object-cover w-full h-96"
        src="https://www.bpmcdn.com/f/files/shared/feeds/gps/2024/09/web1_20240905170956-66da2946530ede66721e36d3jpeg.jpg;w=967;h=640;mode=crop"
      />
      <div className="relative z-30 flex justify-between p-4 sm:mx-auto sm:w-11/12 lg:w-9/12">
        <NavLink to="/">
          <div className="grid w-8 h-8 bg-gray-700 rounded-full mix-blend-color lg:w-12 lg:h-12 place-items-center">
            <img
              loading="lazy"
              className="w-4 lg:w-6 "
              src="./arrow-left.svg"
            />
          </div>
        </NavLink>
      </div>
      <div className="relative z-30 w-11/12 p-4 mx-auto mt-32 mb-4 bg-gray-100 sm:w-9/12 rounded-3xl">
        <div className="flex items-center justify-between gap-2 p-1 mx-auto text-sm font-light text-center text-white lg:gap-4 lg:p-1 w-max rounded-3xl bg-vivid-cyan-blue font-comfortaa">
          <img
            className="w-6 h-6 rounded-full lg:h-12 lg:w-12"
            src="./profile.png"
          />
          <strong className="text-xl font-semibold">Personal Growth</strong>
        </div>

        <h1 className="w-5/6 mx-auto my-4 text-3xl font-extrabold text-center lg:my-8 lg:text-5xl lg-font-black">
          8 Steps To Help You Stop Overthinking Everything
        </h1>

        <div className="flex mx-auto justify-evenly lg:justify-around">
          <div className="text-sm font-bold font-comfortaa text-luminous-vivid-orange">
            Trending ❤️‍🔥
          </div>
          <div className="text-sm font-bold font-manrope text-vivid-purple">
            2 Days Ago
          </div>
        </div>
        <article className="mt-10">
          <div className="mx-auto">
            <h4 className="text-lg font-bold lg:text-center font-comfortaa ">
              Lorem ipsum dolor sit amet consectetur.
            </h4>
            <p className="my-2 text-sm text-gray-600 lg:mx-auto lg:text-center font-manrope max-w-prose">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore architecto tenetur dignissimos quisquam placeat deserunt
              praesentium incidunt laboriosam, explicabo totam minus maiores
              labore ex voluptas. Iste, animi! Illum, vitae officia? Mollitia
              odio assumenda laboriosam provident error, qui voluptates ad.
              Minus quam adipisci perspiciatis libero aperiam numquam
              consequuntur? Expedita, eos dolorum.
            </p>
            <p className="my-2 text-sm text-gray-600 lg:mx-auto lg:text-center font-manrope max-w-prose">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore architecto tenetur dignissimos quisquam placeat deserunt
              praesentium incidunt laboriosam, explicabo totam minus maiores
              labore ex voluptas. Iste, animi! Illum, vitae officia? Mollitia
              odio assumenda laboriosam provident error, qui voluptates ad.
              Minus quam adipisci perspiciatis libero aperiam numquam
              consequuntur? Expedita, eos dolorum. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Unde consequuntur molestias cumque
              error reprehenderit ad sunt aut sequi? Nulla, repellat sunt sequi
              consectetur aliquam ullam nisi saepe expedita ab blanditiis?
              Dolorem aliquam doloribus neque nobis praesentium ratione modi
              dolore laboriosam earum dolor placeat accusamus tempora beatae
              libero, impedit quos quis quaerat dicta provident amet,
              accusantium sit, hic nisi. Distinctio, dicta! Odio ad numquam ea
              voluptate libero placeat tenetur quisquam, ratione perspiciatis
              quos at doloremque harum excepturi blanditiis nobis autem
              cupiditate rem accusamus? Minima perspiciatis eum eos delectus
              sunt maiores veritatis! Corporis cum delectus totam laborum
              asperiores quisquam voluptate quam a maiores pariatur consequuntur
              nulla, obcaecati, dolorem ab vel reprehenderit saepe culpa? Quis
              repellat ut tempora porro maiores ipsum iure deleniti!
            </p>
          </div>
        </article>
      </div>
    </main>
  );
};

export default Article;
