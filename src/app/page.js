// pages/page.js

import Header from "./components/Header";
import LeftModule from "./components/LeftModule";
import RightModule from "./components/RightModule"
export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <div className="flex justify-center">

      
        <div className='w-2/3 flex mt-8'>
          <LeftModule />
          <RightModule />
        </div>
      </div>
    </main>
  );
}
