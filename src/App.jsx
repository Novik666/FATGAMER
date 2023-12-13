import { Header } from "./componentes/Header";
import { Sidebar } from "./componentes/Sidebar";
import Carousel from "./componentes/carrusel";
import {Card} from './componentes/Card';
/*import { Sidebar  } from "./componentes/Sidebar";*/

function App() {
  let slides = [  
    "https://images.g2a.com/1024x576/1x1x1/red-dead-redemption-2-rockstar-key-global-i10000174280024/5bc416915bafe354f54c1d22",
    "https://images.g2a.com/1024x576/1x1x1/lies-of-p-pc-steam-key-global-i10000339622001/43a4b1f7fa9a41bf9eb647a4",
    "https://media.vandal.net/m/90453/hogwarts-legacy-20209173191472_1.jpg",
  ];
  

  return (
   
      <div className="min-h-screen bg-[#211a2c]">
        <Header/>
        <main className="h-full bg-[#211a2c] flex p-full gap-8 justify-center pt-[50px] px-full" >
          <div className="w-[350]">
          <Sidebar/>
          </div>
          <div className=" bg-[#211a2c] w-[59%] items-center" >
          {/*portadas */}
          <div className="py-10 pt-0 px-0 min-[650px]:px-11">
              <Carousel slides={slides} />
          </div>
          <div className="items-center justify-betwee flex lg:px-10 flex-wrap ">
              <Card/>
          </div>
          </div>
          
        </main>
      </div>
    
  )
}

export default App
