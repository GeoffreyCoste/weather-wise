'use client'

import Modal from "../components/modal";
import Searchbar from "../components/searchbar";

export default function CityLayout({ children }: { children: React.ReactNode}) {
    return (
      <main className="w-1/2 flex flex-wrap justify-between mx-auto pt-4">
        <Modal>
          <Searchbar placeholder="Search location" />
        </Modal>
        {children}
      </main>
    )
  }