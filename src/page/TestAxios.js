import axios from "axios";
import React, { useEffect, useState } from "react";

export const TestAxios = () => {
  // untuk menyimn data
  const [LemariEs, setLemariEs] = useState(undefined);
  const [Detail, setDetail] = useState("");

  //  step 2 fungsi untuk mendapatkan data
  const getDataPokemon = () => {
    var config = {
      method: "get",
      url: process.env.REACT_APP_API_GATEWAY,
      headers: {},
    };

    //step 4 menyerahkan pesanan kepada dapur
    axios(config).then((ayambakar) => {
      setLemariEs(ayambakar.data);
    });
  };

  const getPokemonDetail = (dataDetail) => {
    var config = {
      method: "get",
      url: dataDetail,
      headers: {},
    };

    //step 4 menyerahkan pesanan kepada dapur
    axios(config).then((value) => {
        setDetail(value.data)
    });
  };

  const renderData = () => {
    return LemariEs?.results?.map((value, index) => {
      return (
        <div key={index}>
          <p>Nama :{value.name}</p>
          <p>Url {value.url} </p>
          <button
            onClick={() => {
              getPokemonDetail(value.url);
            }}
          >
            Ambil Detail Pokemon
          </button>
          <hr></hr>
        </div>
      );
    });
  };

  // step  1
  useEffect(() => {
    // step 4
    getDataPokemon();
  }, []);

  return (
    <div>
      <div>
        <h3>Pokemon Terpilih  : {Detail.name ? Detail.name : "tolong pilih pokemon kalian "} </h3>
        <h3>Tinggi Pokemon  {Detail.height}   </h3>
        <h3>base experience   {Detail.base_experience} </h3>
      </div>

      {renderData()}
    </div>
  );
};
