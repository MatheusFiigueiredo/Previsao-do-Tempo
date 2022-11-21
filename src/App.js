import { useState } from "react";

function App() {

  const [city, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(null)

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const handleSearch = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=e751ea9cf5bc4fcbbb3225428211810&q=${city}&lang=pt`)
      .then((response) => {
        if(response.status === 200){
          return response.json()
        }
      })
      .then((data) =>{
        //console.log(data)
        setWeatherForecast(data)
      })
  }

  return (
    <div className="App">
      <nav className=" navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a className="navbar-brand text-white" href="#top">Previsão do Tempo</a>
      </nav>

      <main className="container">
        <div className="jumbotron">
          <h3>Pesquise pela cidade para obter suas informações climaticas</h3>

          <div className="row mb-4">
            <div className="col-md-6">
              <input className="form-control" onChange={handleChange} value={city} />
            </div>
          </div>

          <button onClick={handleSearch} className="btn btn-primary btn-lg">Pesquisar</button>

          {weatherForecast?(
              <div>
            <div className="mt-4 d-flex aling-intens-center">
              <div>
                <img src={weatherForecast.current.condition.icon}/>
              </div>
              <div>
                <h3>{weatherForecast.current.condition.text}</h3>
                <p className="lead">Temp: {weatherForecast.current.temp_c}°</p>
                <p className="lead">Sensação: {weatherForecast.current.feelslike_c}°</p>
                <p className="lead">Humidade: {weatherForecast.current.humidity}</p>
                <p className="lead">Pressão: {weatherForecast.current.pressure_mb}</p>
                <p className="lead">Vento: {weatherForecast.current.wind_kph} km/h</p>
              </div>
            </div>
          </div>
            ):null}
        </div>
      </main>
    </div>
  );
}

export default App;
