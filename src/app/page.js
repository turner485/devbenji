// pages/page.js

import Header from "./components/Header";
import LeftModule from "./components/LeftModule";
import RightModule from "./components/RightModule"
export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <div className="flex justify-center">
        <div className='lg:w-2/3 flex lg:flex-row flex-col mt-2 md:mt-6 px-4'>
          <LeftModule />
          <RightModule />
        </div>
      </div>
    </main>
  );
}
