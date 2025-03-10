import services from "../../lib/def";
import Check from "../../icons/Check";
import Syringe from "../../icons/Syringe";
import Star from "../../icons/Star";

function Card({
  title,
  description,
  recommendations,
  ventajas,
  metodos,
  image,
}) {
  return (
    <div
      data-aos="fade-up"
      className="min-w-96 lg:min-w-80 w-full shadow-lg rounded-lg"
    >
      <img
        src={image}
        alt=""
        className="rounded-t-lg h-64 w-full object-cover"
      />
      <div className="flex flex-col gap-2 py-8 px-6">
        <h1 className="text-3xl font-bold text-[#60afb6] uppercase">{title}</h1>
        <p className="text-lg font-medium border-b border-slate-300 pb-5 text-pretty">
          {description}
        </p>
        {recommendations && (
          <ul className="flex items-start flex-col gap-2 py-4">
            {recommendations.map((r, i) => (
              <li key={i} className="flex items-center gap-3 font-medium">
                <span className="border bg-[#6cc4cc] text-white rounded-full p-1">
                  <Check sizes={25} />
                </span>
                {r}
              </li>
            ))}
          </ul>
        )}

        {ventajas && (
          <ul className="flex items-start flex-col gap-2 py-4">
            {ventajas.map((r, i) => (
              <li key={i} className="flex items-center gap-3 font-medium">
                <span className="border bg-[#6cc4cc] text-white rounded-full p-1">
                  <Star sizes={25} />
                </span>
                {r}
              </li>
            ))}
          </ul>
        )}
        {metodos && (
          <ul className="flex items-start flex-col gap-2 py-4">
            {metodos.map((r, i) => (
              <li key={i} className="flex items-center gap-3 font-medium">
                <span className="border bg-[#6cc4cc] text-white rounded-full p-1">
                  <Syringe sizes={25} />
                </span>
                {r}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Card;
