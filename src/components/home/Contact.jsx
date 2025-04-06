import Map from "../Map";
import Location from "../../icons/Location";
import Phone from "../../icons/Phone";
import Whatsapp from "../../icons/Whatsapp";
import Mail from "../../icons/Mail";

function Contact() {
  return (
    <section 
    id="CONTACTANOS"
    className="px-5 lg:px-16 py-10 flex flex-col gap-10">
      <h1
        data-aos="fade-right"
        className="text-5xl font-semibold flex items-center gap-5"
      >
        Contáctanos
      </h1>
      <div
        data-aos="fade-up"
        className=" grid grid-cols-1 xl:grid-cols-4 gap-16 border-b py-5 pb-10"
      >
        <h1 className="flex items-center gap-4 text-lg font-medium">
          <span className="bg-[#6cc4cc] text-white size-12 flex items-center justify-center aspect-square rounded-full">
            <Location sizes={25} difference={5} />
          </span>
          Av. America Latina 65, Las Américas, 55076 Ecatepec de Morelos, Méx.
        </h1>

        <h1 className="flex items-center gap-4 text-lg font-medium">
          <span className="bg-[#6cc4cc] text-white size-12 flex items-center justify-center aspect-square rounded-full">
            <Mail sizes={25} />
          </span>
          contacto@ecalabdv.com
        </h1>

        <h1 className="flex items-center gap-4 text-lg font-medium">
          <span className="bg-[#6cc4cc] text-white size-12 flex items-center justify-center aspect-square rounded-full">
            <Phone sizes={25} />
          </span>
          <div className="flex flex-col">
            <span>+52 55 4274 5321</span> <span>+52 55 5510 6931</span>
          </div>
        </h1>

        <h1 className="flex items-center gap-4 text-lg font-medium">
          <span className="bg-[#6cc4cc] text-white size-12 flex items-center justify-center aspect-square rounded-full">
            <Whatsapp sizes={25} />
          </span>
          +52 (55) 5555 5555
        </h1>
      </div>
      <Map />
    </section>
  );
}

export default Contact;
