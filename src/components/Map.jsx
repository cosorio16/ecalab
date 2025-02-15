function Map() {
  return (
    <div data-aos="zoom-in" className="w-full h-full shadow rounded-xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d33909.28379713848!2d-99.0084!3d19.584637!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1efdacfa1d0bd%3A0x16ee6db2fa48b371!2sLaboratorio%20Ecalab!5e1!3m2!1ses-419!2sco!4v1739634046455!5m2!1ses-419!2sco"
        className="w-full h-150 shadow-md rounded-md"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
