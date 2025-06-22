import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);
  const [gender, setGender] = useState(null);

  const handleSelectGender = (selected) => {
    setGender(selected);
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-[#0f1f2f] text-white flex flex-col items-center justify-center px-4 py-12">
      {step === 0 && (
        <div className="max-w-xl text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">VOCÊ ESTÁ PRONTO PRA ENCARAR A VERDADE?</h1>
          <p className="text-gray-300 mb-8 text-lg">
            Responda um quiz simples e descubra o que está bloqueando sua mente. Seu presente começa agora.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => handleSelectGender("Feminino")}
              className="bg-[#1a2e40] hover:bg-[#274862] px-6 py-4 rounded-xl flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span className="text-2xl">♀️</span> Feminino
            </button>
            <button
              onClick={() => handleSelectGender("Masculino")}
              className="bg-[#1a2e40] hover:bg-[#274862] px-6 py-4 rounded-xl flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span className="text-2xl">♂️</span> Masculino
            </button>
            <button
              onClick={() => handleSelectGender("Não-binário")}
              className="bg-[#1a2e40] hover:bg-[#274862] px-6 py-4 rounded-xl flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span className="text-2xl">⚧️</span> Não-binário
            </button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Você escolheu: {gender}</h2>
          <p className="text-gray-300">(próximas perguntas do quiz viriam aqui...)</p>
        </div>
      )}
    </div>
  );
}