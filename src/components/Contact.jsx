import Map from "../components/Map";

function Contact() {
  return (
    <section className="px-5 lg:px-16 py-10 flex flex-col gap-10">
      <h1 className="text-5xl font-medium flex items-center gap-5">
        <span className="bg-orange-400 text-white size-12 flex items-center justify-center aspect-square rounded-full">
          <svg width="20" height="25" viewBox="0 0 304 432">
            <path
              fill="currentColor"
              d="M149 3q62 0 106 43.5T299 152q0 31-15.5 71.5t-37.5 75t-44 65t-37 48.5l-16 17q-6-6-16-18t-35.5-46.5t-45.5-67T16 224T0 152Q0 90 43.5 46.5T149 3m0 202q22 0 38-15.5t16-37.5t-16-37.5T149 99t-37.5 15.5T96 152t15.5 37.5T149 205"
            />
          </svg>
        </span>
        Contactanos
      </h1>
      <div className=" grid grid-cols-1 xl:grid-cols-3 gap-16">
        <h1 className="flex items-center gap-4 text-lg font-medium">
          <span className="bg-orange-400 text-white size-12 flex items-center justify-center aspect-square rounded-full">
            <svg width="20" height="25" viewBox="0 0 304 432">
              <path
                fill="currentColor"
                d="M149 3q62 0 106 43.5T299 152q0 31-15.5 71.5t-37.5 75t-44 65t-37 48.5l-16 17q-6-6-16-18t-35.5-46.5t-45.5-67T16 224T0 152Q0 90 43.5 46.5T149 3m0 202q22 0 38-15.5t16-37.5t-16-37.5T149 99t-37.5 15.5T96 152t15.5 37.5T149 205"
              />
            </svg>
          </span>
          Ubicación: Av. America Latina 65, Las Américas, 55076 Ecatepec de
          Morelos, Méx.
        </h1>

        <h1 className="flex items-center gap-4 text-lg font-medium">
          <span className="bg-orange-400 text-white size-12 flex items-center justify-center aspect-square rounded-full">
            <svg width="25" height="25" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
              />
            </svg>
          </span>
          Email: contacto@ecalabdv.com
        </h1>

        <h1 className="flex items-center gap-4 text-lg font-medium">
          <span className="bg-orange-400 text-white size-12 flex items-center justify-center aspect-square rounded-full">
            <svg width="25" height="25" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
              />
            </svg>
          </span>
          Teléfono: +52 55 4274 5321 +52 55 5510 6931
        </h1>

        <h1 className="flex items-center gap-4 text-lg font-medium">
          <span className="bg-orange-400 text-white size-12 flex items-center justify-center aspect-square rounded-full">
            <svg width="20" height="25" viewBox="0 0 304 432">
              <path
                fill="currentColor"
                d="M149 3q62 0 106 43.5T299 152q0 31-15.5 71.5t-37.5 75t-44 65t-37 48.5l-16 17q-6-6-16-18t-35.5-46.5t-45.5-67T16 224T0 152Q0 90 43.5 46.5T149 3m0 202q22 0 38-15.5t16-37.5t-16-37.5T149 99t-37.5 15.5T96 152t15.5 37.5T149 205"
              />
            </svg>
          </span>
          ECALAB D.V. Av. America Latina 65, Las Américas, 55076 Ecatepec de
          Morelos, Méx.
        </h1>

        <h1 className="flex items-center gap-4 text-lg font-medium">
          <span className="bg-orange-400 text-white size-12 flex items-center justify-center aspect-square rounded-full">
            <svg width="25" height="25" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"
              />
            </svg>
          </span>
          WhatsApp: +52 (55) 5555 5555 Email:contacto@ecalabdv.com
        </h1>
      </div>
      <Map />
    </section>
  );
}

export default Contact;
