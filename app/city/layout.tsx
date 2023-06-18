'use client'

import Modal from "../components/Modal";
import Searchbar from "../components/Searchbar";
import { useTheme } from "../utils/hooks/useTheme";

export default function CityLayout({ children }: { children: React.ReactNode}) {
  const { theme } = useTheme();

  return (
      <main className={`w-full flex flex-wrap justify-center items-center px-4 md:px-0 pt-4 ${ theme === "dark" ? "bg-blue-900" : ""}`}>
        <Modal>
          <Searchbar placeholder="Search location" />
        </Modal>
        {children}
      </main>
    )
  }