import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/baseUrl';

import { CiSearch } from "react-icons/ci";

const CountryCard = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get(`${BASE_URL}`).then(function(response) {
            setData(response.data);
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = data.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="py-5">
        <div className=" py-[30px] ">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div
              className="flex items-center px-[20px]
             ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'} transition-colors duration-500`}"
            >
              <CiSearch className="w-[20px] h-[20px] ml-[35px] absolute left-[10px] text-gray-500" />
              <input
                type="text"
                className="w-[500px] px-[40px] py-[10px] rounded-md outline-none text-gray-500"
                placeholder="Search for a country..."
                value={searchTerm}
                onChange={handleChange}
              />
            </div>
            <div className="dropdown bg-transparent ">
              <select id="country" className="px-4 py-3 outline-none rounded-md bg-transparent border-2 border-gray-500">
                <option value="filtr" >Filtr by Region</option>
                <option value="america">America</option>
                <option value="africa">Africa</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
              </select>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 grid xl:grid-cols-5 justify-center items-center gap-5  mt-6">
          {filteredData.map((country) => (
            <div
              className="shadow-md bg-white text-black flex flex-col items-center p-4 transition-transform transform hover:scale-105"
              key={country.cca3}
              style={{ width: "270px", height: "350px" }}
            >
              <img
                src={country.flags.png}
                alt={country.flags.alt}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{country.name.common}</h3>
              <p className="text-md">
                Population: {country.population.toLocaleString()}
              </p>
              <p className="text-md">Region: {country.region}</p>
              <p className="text-md">
                Capital: {country.capital ? country.capital[0] : "N/A"}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default CountryCard;
