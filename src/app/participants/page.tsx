import Navbar from "../components/usersSearch/Navbar";

import ParticipantsCatalog from "./ParticipantsCatalog";

const ParticipantsPage = () => {
  return (
    <main className="flex w-full h-[100vh]">
      <div className="flex flex-col flex-1 h-full bg-gray-100 p-10">
        <Navbar />
        <section className="flex mt-10 flex-grow flex-1">
          <ParticipantsCatalog />
        </section>
      </div>
    </main>
  );
};

export default ParticipantsPage;
