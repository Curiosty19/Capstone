import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ClientsPage = () => {
  // List of clients
  const clients = [
    "PT. Central Mitrausaha Cemerlang (PT. CMC)",
    "PT. Pudjiadi Prestige Limited, Tbk",
    "PT. Pudjiadi & Sons, Tbk",
    "PT. Hotel Marbella Pengembang Indonesia",
    "PT. Istana Kuta Ratu Prestige",
    "PT. Hotel Juwara Warga",
    "PT. Kennlines Consultant",
    "PT. Java Airlines",
    "PT. Pembangunan Jaya Ancol, Tbk",
    "PT. Jaya Real Property, Tbk",
    "PT. Maas Natural Sentosa",
    "PT. Karya Guna Bahari",
    "Societte General Indonesia (Top Finance)",
    "PT. Mitsubishi Jaya Elevator and Escalator",
    "UNHCR (United Nations High Commissioner for Refugees), Branch Office for Indonesia",
    "HERBERT A.H. BEHRENS GmbH & Co.KG.2 Hamburg 1, Ballindum 11.",
    "Departemen Keuangan Republik Indonesia",
    "PT. Pertani",
    "PT. Kecap Cap “Bango”",
    "PT Dipo Star Finance and Leasing",
    "Bank Dipo International",
    "PT. Goro Batara Sakti",
    "PT. Binawahana Petrindo Meruap",
    "PT. Iroda Mitra",
    "PT. CV. Titipan Kilat",
    "PT. Kencana Gula Manis",
    "PT. Bank Muamalat Indonesia, Tbk",
  ];

  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#284b63] text-white py-12">
        <div className="max-w-7xl mx-auto text-center mt-10">
          <h1 className="text-4xl font-bold">Our Clients</h1>
          <p className="mt-4 text-lg">
            We are proud to have represented a diverse range of clients across various industries.
          </p>
        </div>
      </section>

      {/* Client List Section */}
      <section className="py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center text-center"
            >
              <h3 className="text-xl font-semibold text-[#284b63] mb-4">{client}</h3>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClientsPage;