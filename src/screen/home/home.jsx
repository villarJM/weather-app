import { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { App } from '@capacitor/app';

const Home = () => {

  const [weekWeather, setWeekWeather] = useState([
    {
      day: 'Sunday',
      dayXMonth: '6 April',
      temperature: 30
    },
    {
      day: 'Sunday',
      dayXMonth: '7 April',
      temperature: 36
    },
    {
      day: 'Sunday',
      dayXMonth: '8 April',
      temperature: 28
    },
    {
      day: 'Sunday',
      dayXMonth: '9 April',
      temperature: 39
    },{
      day: 'Sunday',
      dayXMonth: '10 April',
      temperature: 37
    },
  ]);

  const [property, setProperty] = useState([
    {
      property: 'Precipitation',
      value: '2%'
    },
    {
      property: 'Humidity',
      value: '45%'
    },
    {
      property: 'Visibilty',
      value: '1.6 km'
    },
    {
      property: 'Wind',
      value: '6 km/h'
    }
  ]);
  
  useEffect(() => {
    const backButtonListener = App.addListener('backButton', ({ canGoBack }) => {
      if (canGoBack) {
        window.history.back();
      } else {
        // Maneja la acción cuando no hay más páginas para retroceder
        // Puedes mostrar un diálogo de confirmación para salir de la aplicación
        App.exitApp();
      }
    })})
  return ( 
    <>
      <div className='h-screen w-screen bg-[#0B0C1E]'>
        <div className="relative h-screen w-screen overflow-hidden">
          <div className='w-screen landscape:blur-2xl landscape:transform landscape:scale-[1.8] landscape:-translate-y-[27rem] blur-[100px] ellipse transform scale-125 -translate-y-60'></div>
          <div className='overflow-y-auto h-screen fixed bottom-0 text-white flex flex-col text_center py-10'>
            <div className="flex flex-row justify-center items-baseline">
              <IoLocationSharp/>
              <div className="ml-2 leading-none font-epilogue text-[14px] text-center font-semibold">New York</div>
            </div>
            <div className="flex justify-center">
              <span className="font-termina font-bold text-[208px] text-center leading-none">32</span>
              <div className="relative font-termina text-[24px] align-top leading-none top-10 right-2">°C</div>
            </div>
            <div className="font-epilogue text-[24px] text-center">It’s sunny today buddy!</div>
            <hr className="mx-5 h-px my-5 bg-white border-x-4"/>
            <div className="px-5 w-screen flex justify-between font-epilogue font-bold text-[12px]">
              {
                property.map((prop) => (
                  <div className="flex flex-col">
                    <span className="pb-2">{prop.property}</span>
                    <span className="font-epilogue text-[20px] font-normal">{prop.value}</span>
                  </div>
                ))
              }
            </div>
            <hr className="mx-5 h-px my-4 bg-white border-x-4"/>
            <div className="pb-2 pt-6 mx-5 font-epilogue text-[14px] font-semibold">NEXT 7 DAYS</div>
            <div className="px-5 pb-10">
              <div className="flex flex-col">
                {
                  weekWeather.map((item) => (
                    <div className="flex flex-row justify-between items-center bg-[#151623] h-[70px] px-5 my-3">
                      <div className="flex flex-col font-epilogue">
                        <span className="text-[20px] font-medium">{item.day}</span>
                        <span className="text-[12px]">{item.dayXMonth}</span>
                      </div>
                      <span className="font-termina text-[30px]">{item.temperature}°C</span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </> 
  );
}
 
export default Home;