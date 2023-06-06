"use client"

import Modal from "./components/modal";
import Searchbar from "./components/searchbar";

export default function Home() {

  return (
    <main className="w-1/2 flex flex-wrap justify-between mx-auto pt-4">
      <Modal>
        <Searchbar placeholder="Search location" />
      </Modal>
      <div className="w-full h-1/2 flex flex-col gap-x-2 bg-blue-700 p-2 mb-2 rounded-lg shadow">
        <h2 className="text-white text-lg font-bold mb-4">Suggested cities</h2>
        <div className="w-full h-full flex gap-x-2">
          <div className="basis-1/4 h-full bg-slate-200 rounded-lg p-4">City 1</div>
          <div className="basis-1/4 h-full bg-slate-200 rounded-lg p-4">City 2</div>
          <div className="basis-1/4 h-full bg-slate-200 rounded-lg p-4">City 3</div>
          <div className="basis-1/4 h-full bg-slate-200 rounded-lg p-4">City 4</div>
        </div>
      </div>
    </main>
  )
}
