import React from "react";

function Search() {
  return (
    <div className="flex gap-4 mt-10 justify-center px-10">
      <select className="w-64 py-3 pl-4 bg-zinc-100 rounded-md">
        <option value="" disabled hidden defaultValue="">
          Job role
        </option>
        <option value="ios developer">ios developer</option>
        <option value="Frontend developer">Frontend developer</option>
        <option value="Fullstack developer">Fullstack developer</option>
        <option value="Mernstack developer">Mernstack developer</option>
        <option value="React developer">React developer</option>
      </select>

      <select className="w-64 py-3 pl-4 bg-zinc-100 rounded-md">
        <option value="" disabled hidden defaultValue="">
          Job type
        </option>
        <option value="Remote">Remote</option>
        <option value="hybrid">hybrid</option>
        <option value="Onsite">Onsite</option>
        
      </select>

      <select className="w-64 py-3 pl-4 bg-zinc-100 rounded-md">
        <option value="" disabled hidden defaultValue="">
          Location
        </option>
        <option value="Noida">Noida</option>
        <option value="Delhi">Delhi</option>
        <option value="Gurugram">Gurugram</option>
        <option value="Banglore">Banglore</option>
        <option value="Hyderabad">Hyderabad</option>
      </select>

      <select className="w-64 py-3 pl-4 bg-zinc-100 rounded-md">
        <option value="" disabled hidden defaultValue="">
          Experience
        </option>
        <option value="Freshers">Freshers</option>
        <option value="1-3">1-3</option>
        <option value="3-5">3-5</option>
        <option value="5-more">5-more</option> 
      </select>
      <button className="w-64 bg-blue-400 font-bold py-3 rounded-md">Search</button>
    </div>
  );
}

export default Search;
