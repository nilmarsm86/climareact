import React from "react";
import PropTypes from "prop-types";
import { useFormModel } from "../hooks/form";

const Form = (props) => {
  const countries = [
    { code: "US", name: "Estados Unidos" },
    { code: "MX", name: "Mexico" },
    { code: "CU", name: "Cuba" },
    { code: "CO", name: "Colombia" },
    { code: "AR", name: "Argentina" },
    { code: "CR", name: "Costa Rica" },
    { code: "ES", name: "España" },
    { code: "PE", name: "Perú" },
  ];

  const initialData = {
    city: "",
    country: "",
  };
  let [weather, setWeather] = useFormModel(initialData);

  function searchAction(e) {
    e.preventDefault();

    let { city, country } = weather;
    console.log(city.value);
    console.log(country.value);
  }

  return (
    <form onSubmit={searchAction.bind(this)}>
      <div className="input-field col s12">
        <input type="text" {...weather.city} />
        <label htmlFor="city">Ciudad:</label>
      </div>

      <div className="input-field col s12">
        <select {...weather.country}>
          <option value="">Selecciona un pais</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div className="input-field col s12">
        <input
          type="submit"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
          value="Buscar clima"
        />
      </div>
    </form>
  );
};

Form.propTypes = {};

export default Form;
