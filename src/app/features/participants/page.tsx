import Navbar from "./components/features/Navbar"
import ParticipantsCatalog from "./components/features/ParticipantsCatalog"
import Sidebar from "./components/features/Sidebar"

const Page = () => {
    return (
        <main className='flex w-full h-[100vh]'>
            <div className='h-full hidden md:block'>
                <Sidebar />
            </div>
            <div className='flex flex-col flex-1 h-full bg-gray-100 p-10'>
                <Navbar />
                <section className='flex mt-10 flex-grow flex-1'>
                    <ParticipantsCatalog />
                </section>
            </div>
        </main>
    )
}

export default Page