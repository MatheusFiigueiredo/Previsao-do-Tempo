import React, { useEffect, useState } from "react";

const Capitais = [
    ["Porto Velho", "RO"],
    ["Manaus", "AM"],
    ["Rio Branco", "AC"],
    ["Campo Grande", "MS"],
    ["Macapá", "AP"],
    ["Brasília", "DF"],
    ["Boa Vista", "RR"],
    ["Cuiabá", "MT"],
    ["Palmas", "TO"],
    ["São Paulo", "SP"],
    ["Teresina", "PI"],
    ["Rio de Janeiro", "RJ"],
    ["Belém", "PA"],
    ["Goiânia", "GO"],
    ["Salvador", "BH"],
    ["Florianópolis", "SC"],
    ["São Luís", "MA"],
    ["Maceió", "AL"],
    ["Porto Alegre", "RS"],
    ["Curitiba", "PR"],
    ["Belo Horizonte", "MG"],
    ["Fortaleza", "CE"],
    ["Recife", "PE"],
    ["João Pessoa", "PB"],
    ["Aracaju", "SE"],
    ["Natal", "RN"],
    ["Vitória", "ES"]
  ];

function Raffle(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

const Random = () => {
  const keyID = '276028a84e6f633afbd7b4e1d68552bf';

  const [cidade, setCidade] = useState("");
  const [stateActive, setStateActive] = useState(false);

  const resultadoAtualizado = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Capitais[Raffle(0, 26)][0]}&appid=${keyID}&units=metric&lang=pt`)
      .then(res => res.json())
      .then(data => {
        const { main, name, sys } = data;
        if (sys !== undefined) {
          setCidade(
            `<div>
              <div>
                <h1>${name}</h1>
                </div>
                <div>
                <h4>${sys.country}</h4>
                <h3>${main.temp} °C</h3>
              </div>
            </div>`
          );
        }
      });
  }

  useEffect(() => {
    const response = setInterval(() => {
      if (stateActive) {
        resultadoAtualizado();
      }
    }, 3000);
    return () => clearInterval(response);
  })

  return (
    
    
    <main className="container justify-content-center d-flex align-items-center">
        <div>
        <div className='jumbotron text-center'>
            <h3>Previsões das Capitais</h3>
            <br /> 
            <button onClick={() => setStateActive(true)} className="btn  btn-success  btn-lg" >Começar</button>
            <br />
            {
            (cidade !== "") ?
            <div  dangerouslySetInnerHTML={{ __html: cidade }} /> : ""
        }
        </div>
       

        </div>
    </main>
  );
}

export default Random;