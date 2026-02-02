import React, { useState } from 'react';

const continentsData = {
  europe: [
    { name: 'Česko', capital: 'Praha', flag: 'https://flagcdn.com/w320/cz.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Prague_Castle_2016.jpg/320px-Prague_Castle_2016.jpg' },
    { name: 'Německo', capital: 'Berlín', flag: 'https://flagcdn.com/w320/de.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Berlin_Skyline_2021.jpg/320px-Berlin_Skyline_2021.jpg' },
    { name: 'Francie', capital: 'Paříž', flag: 'https://flagcdn.com/w320/fr.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/320px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg' },
    { name: 'Itálie', capital: 'Řím', flag: 'https://flagcdn.com/w320/it.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Colosseo_2020.jpg/320px-Colosseo_2020.jpg' },
    { name: 'Španělsko', capital: 'Madrid', flag: 'https://flagcdn.com/w320/es.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Madrid_Skyline_2021.jpg/320px-Madrid_Skyline_2021.jpg' },
    { name: 'Polsko', capital: 'Varšava', flag: 'https://flagcdn.com/w320/pl.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Warsaw_Old_Town_2016.jpg/320px-Warsaw_Old_Town_2016.jpg' },
    { name: 'Rakousko', capital: 'Vídeň', flag: 'https://flagcdn.com/w320/at.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Vienna_Skyline_2016.jpg/320px-Vienna_Skyline_2016.jpg' },
    { name: 'Maďarsko', capital: 'Budapešť', flag: 'https://flagcdn.com/w320/hu.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Budapest_Skyline_2016.jpg/320px-Budapest_Skyline_2016.jpg' },
    { name: 'Slovensko', capital: 'Bratislava', flag: 'https://flagcdn.com/w320/sk.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Bratislava_Castle_2016.jpg/320px-Bratislava_Castle_2016.jpg' },
    { name: 'Portugalsko', capital: 'Lisabon', flag: 'https://flagcdn.com/w320/pt.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Lisbon_Skyline_2016.jpg/320px-Lisbon_Skyline_2016.jpg' },
  ],
  asia: [
    { name: 'Japonsko', capital: 'Tokio', flag: 'https://flagcdn.com/w320/jp.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Shibuya_Crossing_2016.jpg/320px-Shibuya_Crossing_2016.jpg' },
    { name: 'Čína', capital: 'Peking', flag: 'https://flagcdn.com/w320/cn.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Beijing_Skyline_2016.jpg/320px-Beijing_Skyline_2016.jpg' },
    { name: 'Indie', capital: 'Nové Dillí', flag: 'https://flagcdn.com/w320/in.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/New_Delhi_Skyline_2016.jpg/320px-New_Delhi_Skyline_2016.jpg' },
    { name: 'Jižní Korea', capital: 'Soul', flag: 'https://flagcdn.com/w320/kr.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Seoul_Skyline_2016.jpg/320px-Seoul_Skyline_2016.jpg' },
    { name: 'Thajsko', capital: 'Bangkok', flag: 'https://flagcdn.com/w320/th.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Bangkok_Skyline_2016.jpg/320px-Bangkok_Skyline_2016.jpg' },
    { name: 'Vietnam', capital: 'Hanoj', flag: 'https://flagcdn.com/w320/vn.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Hanoi_Skyline_2016.jpg/320px-Hanoi_Skyline_2016.jpg' },
    { name: 'Indonésie', capital: 'Jakarta', flag: 'https://flagcdn.com/w320/id.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Jakarta_Skyline_2016.jpg/320px-Jakarta_Skyline_2016.jpg' },
    { name: 'Malajsie', capital: 'Kuala Lumpur', flag: 'https://flagcdn.com/w320/my.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Kuala_Lumpur_Skyline_2016.jpg/320px-Kuala_Lumpur_Skyline_2016.jpg' },
    { name: 'Filipíny', capital: 'Manila', flag: 'https://flagcdn.com/w320/ph.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Manila_Skyline_2016.jpg/320px-Manila_Skyline_2016.jpg' },
    { name: 'Turecko', capital: 'Ankara', flag: 'https://flagcdn.com/w320/tr.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ankara_Skyline_2016.jpg/320px-Ankara_Skyline_2016.jpg' },
  ],
  africa: [
    { name: 'Egypt', capital: 'Káhira', flag: 'https://flagcdn.com/w320/eg.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Cairo_Skyline_2016.jpg/320px-Cairo_Skyline_2016.jpg' },
    { name: 'Jižní Afrika', capital: 'Pretoria', flag: 'https://flagcdn.com/w320/za.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Pretoria_Skyline_2016.jpg/320px-Pretoria_Skyline_2016.jpg' },
    { name: 'Nigérie', capital: 'Abuja', flag: 'https://flagcdn.com/w320/ng.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Abuja_Skyline_2016.jpg/320px-Abuja_Skyline_2016.jpg' },
    { name: 'Keňa', capital: 'Nairobi', flag: 'https://flagcdn.com/w320/ke.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Nairobi_Skyline_2016.jpg/320px-Nairobi_Skyline_2016.jpg' },
    { name: 'Maroko', capital: 'Rabat', flag: 'https://flagcdn.com/w320/ma.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rabat_Skyline_2016.jpg/320px-Rabat_Skyline_2016.jpg' },
    { name: 'Alžírsko', capital: 'Alžír', flag: 'https://flagcdn.com/w320/dz.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Algiers_Skyline_2016.jpg/320px-Algiers_Skyline_2016.jpg' },
    { name: 'Ghana', capital: 'Akra', flag: 'https://flagcdn.com/w320/gh.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Accra_Skyline_2016.jpg/320px-Accra_Skyline_2016.jpg' },
    { name: 'Etiopie', capital: 'Addis Abeba', flag: 'https://flagcdn.com/w320/et.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Addis_Ababa_Skyline_2016.jpg/320px-Addis_Ababa_Skyline_2016.jpg' },
    { name: 'Tunisko', capital: 'Tunis', flag: 'https://flagcdn.com/w320/tn.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tunis_Skyline_2016.jpg/320px-Tunis_Skyline_2016.jpg' },
    { name: 'Angola', capital: 'Luanda', flag: 'https://flagcdn.com/w320/ao.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Luanda_Skyline_2016.jpg/320px-Luanda_Skyline_2016.jpg' },
  ],
  america: [
    { name: 'USA', capital: 'Washington, D.C.', flag: 'https://flagcdn.com/w320/us.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/US_Capitol_Building_at_night_Jan_2006.jpg/320px-US_Capitol_Building_at_night_Jan_2006.jpg' },
    { name: 'Kanada', capital: 'Ottawa', flag: 'https://flagcdn.com/w320/ca.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Ottawa_Parliment.jpg/320px-Ottawa_Parliment.jpg' },
    { name: 'Brazílie', capital: 'Brasília', flag: 'https://flagcdn.com/w320/br.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Brasilia_Cathedral_03_2010.jpg/320px-Brasilia_Cathedral_03_2010.jpg' },
    { name: 'Argentina', capital: 'Buenos Aires', flag: 'https://flagcdn.com/w320/ar.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Buenos_Aires_-_Obelisco_2.jpg/320px-Buenos_Aires_-_Obelisco_2.jpg' },
    { name: 'Mexiko', capital: 'Ciudad de México', flag: 'https://flagcdn.com/w320/mx.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Mexico_City_Metropolitan_Cathedral_-_Dec_2015.jpg/320px-Mexico_City_Metropolitan_Cathedral_-_Dec_2015.jpg' },
    { name: 'Kolumbie', capital: 'Bogotá', flag: 'https://flagcdn.com/w320/co.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Bogota_from_Monserrate.jpg/320px-Bogota_from_Monserrate.jpg' },
    { name: 'Peru', capital: 'Lima', flag: 'https://flagcdn.com/w320/pe.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Lima_Cathedral_from_Plaza_Mayor.jpg/320px-Lima_Cathedral_from_Plaza_Mayor.jpg' },
    { name: 'Chile', capital: 'Santiago', flag: 'https://flagcdn.com/w320/cl.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Santiago_de_Chile_-_Skyline.jpg/320px-Santiago_de_Chile_-_Skyline.jpg' },
    { name: 'Ekvádor', capital: 'Quito', flag: 'https://flagcdn.com/w320/ec.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Quito_Ecuador_Basilica_del_Voto_Nacional_and_Cotopaxi.jpg/320px-Quito_Ecuador_Basilica_del_Voto_Nacional_and_Cotopaxi.jpg' },
    { name: 'Uruguay', capital: 'Montevideo', flag: 'https://flagcdn.com/w320/uy.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Montevideo_from_Cerro_Pan_de_Azucar.jpg/320px-Montevideo_from_Cerro_Pan_de_Azucar.jpg' },
  ],
  oceania: [
    { name: 'Austrálie', capital: 'Canberra', flag: 'https://flagcdn.com/w320/au.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Canberra_from_Mount_Ainslie.jpg/320px-Canberra_from_Mount_Ainslie.jpg' },
    { name: 'Nový Zéland', capital: 'Wellington', flag: 'https://flagcdn.com/w320/nz.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Wellington_Harbour_from_Mount_Victoria_Lookout.jpg/320px-Wellington_Harbour_from_Mount_Victoria_Lookout.jpg' },
    { name: 'Fidži', capital: 'Suva', flag: 'https://flagcdn.com/w320/fj.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Suva_City_Fiji.jpg/320px-Suva_City_Fiji.jpg' },
    { name: 'Papua Nová Guinea', capital: 'Port Moresby', flag: 'https://flagcdn.com/w320/pg.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Port_Moresby_Skyline.jpg/320px-Port_Moresby_Skyline.jpg' },
    { name: 'Samoa', capital: 'Apia', flag: 'https://flagcdn.com/w320/ws.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Apia_Samoa.jpg/320px-Apia_Samoa.jpg' },
    { name: 'Tonga', capital: "Nuku'alofa", flag: 'https://flagcdn.com/w320/to.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Nuku%27alofa_Tonga.jpg/320px-Nuku%27alofa_Tonga.jpg' },
    { name: 'Vanuatu', capital: 'Port Vila', flag: 'https://flagcdn.com/w320/vu.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Port_Vila_Vanuatu.jpg/320px-Port_Vila_Vanuatu.jpg' },
    { name: 'Šalamounovy ostrovy', capital: 'Honiara', flag: 'https://flagcdn.com/w320/sb.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Honiara_Solomon_Islands.jpg/320px-Honiara_Solomon_Islands.jpg' },
    { name: 'Palau', capital: 'Ngerulmud', flag: 'https://flagcdn.com/w320/pw.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Palau_Capitol.jpg/320px-Palau_Capitol.jpg' },
    { name: 'Mikronésie', capital: 'Palikir', flag: 'https://flagcdn.com/w320/fm.png', cityImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Palikir_FSM.jpg/320px-Palikir_FSM.jpg' },
  ],
};

const App = () => {
  const [score, setScore] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [gameMode, setGameMode] = useState(null);
  const [continent, setContinent] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [countries, setCountries] = useState([]);

  const startGame = (mode, selectedContinent) => {
    setGameMode(mode);
    setContinent(selectedContinent);
    const shuffledCountries = [...continentsData[selectedContinent]].sort(() => 0.5 - Math.random()).slice(0, 10);
    setCountries(shuffledCountries);
    setCurrentQuestion(0);
    setScore(0);
    setAttempts(0);
    setGameOver(false);
  };

  const handleAnswerSubmit = () => {
    if (userAnswer.trim() === '') return;

    const correctAnswer = countries[currentQuestion].name;
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      setScore(score + 1);
      setFeedback('Správně!');
      setTimeout(nextQuestion, 1500);
    } else {
      setAttempts(attempts + 1);
      if (attempts >= 2) {
        setFeedback(`Špatně! Správná odpověď: ${correctAnswer}`);
        setTimeout(nextQuestion, 1500);
      } else {
        setFeedback(`Špatně! Zkus to znovu (${2 - attempts} pokusy zbývají).`);
      }
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < 9) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer('');
      setAttempts(0);
      setFeedback('');
    } else {
      const newAccuracy = Math.round((score + 1) / 10 * 100);
      setAccuracy(newAccuracy);
      setGameOver(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAnswerSubmit();
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">Učení států, vlajek a hlavních měst</h1>
      {!gameMode ? (
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">Skóre: {score} | Úspěšnost: {accuracy}%</h2>
          <h3 className="text-lg mb-2">Vyber herní mód:</h3>
          <div className="flex flex-col gap-2">
            <button onClick={() => setGameMode('select-continent-map')} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Slepá mapa</button>
            <button onClick={() => setGameMode('select-continent-flag')} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Vlajky</button>
            <button onClick={() => setGameMode('select-continent-capital')} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Hlavní města</button>
          </div>
        </div>
      ) : gameMode.startsWith('select-continent') ? (
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">Vyber světadíl:</h2>
          <div className="flex flex-col gap-2">
            {Object.keys(continentsData).map((cont) => (
              <button key={cont} onClick={() => startGame(gameMode.split('-')[1], cont)} className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">
                {cont === 'europe' ? 'Evropa' :
                 cont === 'asia' ? 'Asie' :
                 cont === 'africa' ? 'Afrika' :
                 cont === 'america' ? 'Amerika' :
                 'Oceánie'}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          {!gameOver ? (
            <div>
              {gameMode === 'map' && (
                <div>
                  <h2 className="text-lg font-semibold mb-2">Který stát je vyznačený?</h2>
                  <img src={countries[currentQuestion].flag} alt="Mapa" className="w-64 h-auto mx-auto mb-4" />
                </div>
              )}
              {gameMode === 'flag' && (
                <div>
                  <h2 className="text-lg font-semibold mb-2">Který stát má tuto vlajku?</h2>
                  <img src={countries[currentQuestion].flag} alt="Vlajka" className="w-64 h-auto mx-auto mb-4" />
                </div>
              )}
              {gameMode === 'capital' && (
                <div>
                  <h2 className="text-lg font-semibold mb-2">Hlavní město: {countries[currentQuestion].capital}</h2>
                  <img src={countries[currentQuestion].cityImage} alt={countries[currentQuestion].capital} className="w-64 h-auto mx-auto mb-4" />
                </div>
              )}
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Zadej název státu"
                className="border border-gray-300 p-2 rounded w-full mb-2"
              />
              <button onClick={handleAnswerSubmit} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full">Odeslat</button>
              <p className="mt-2">{feedback}</p>
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-semibold mb-2">Konec hry! Tvůj výsledek: {score}/10 ({accuracy}%)</h2>
              <button onClick={() => setGameMode(null)} className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded">Zpět do menu</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
