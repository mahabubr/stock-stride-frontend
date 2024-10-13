"use client";

import Button from "@/components/shared/Button";
import Modal from "@/components/shared/Modal";
import { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    marketCap: "",
    description: "",
    ceo: "",
    foundedYear: "",
    industry: "",
    website: "",
  });

  const [companies, setCompanies] = useState([]);
  const router = useRouter();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirm = async () => {
    const data = {
      ...formData,
      marketCap: Number(formData.marketCap),
      foundedYear: Number(formData.foundedYear),
    };

    try {
      await axios.post("http://localhost:5000/api/companies", data);
      // Reset the fields after submission
      setFormData({
        name: "",
        symbol: "",
        marketCap: "",
        description: "",
        ceo: "",
        foundedYear: "",
        industry: "",
        website: "",
      });

      handleCloseModal();

      toast.success("Company added successfully!");

      fetchCompanies();
    } catch (error) {
      console.error("Error adding company:", error);
    }
  };

  const fetchCompanies = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/companies");
      setCompanies(response.data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const handleStockPage = (id: string) => {
    router.push(`/stock/${id}`);
  };

  console.log(companies);

  return (
    <div>
      <div className="flex justify-end">
        <Button label="Add Company" onClick={handleOpenModal} />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        title="Add Company"
      >
        <div className="p-4">
          {/* Company Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              placeholder="Enter company name"
            />
          </div>
          {/* Company Symbol */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Company Symbol
            </label>
            <input
              type="text"
              name="symbol"
              value={formData.symbol}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              placeholder="Enter company symbol"
            />
          </div>
          {/* Market Capitalization */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Market Capitalization
            </label>
            <input
              type="number"
              name="marketCap"
              value={formData.marketCap}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              placeholder="Enter market cap"
            />
          </div>
          {/* Company Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              placeholder="Enter company description"
              rows={3}
            />
          </div>
          {/* CEO Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              CEO Name
            </label>
            <input
              type="text"
              name="ceo"
              value={formData.ceo}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              placeholder="Enter CEO name"
            />
          </div>
          {/* Founded Year */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Founded Year
            </label>
            <input
              type="number"
              name="foundedYear"
              value={formData.foundedYear}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              placeholder="Enter founded year"
            />
          </div>
          {/* Industry */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Industry
            </label>
            <input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              placeholder="Enter industry"
            />
          </div>
          {/* Website */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Website
            </label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              placeholder="Enter company website"
            />
          </div>
        </div>
      </Modal>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-5">Company List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {companies.map((company: any) => (
            <div
              key={company.symbol}
              className="border p-4 rounded shadow-md bg-white"
            >
              <h3 className="text-xl font-bold mb-2">{company.name}</h3>
              <p className="text-gray-700 mb-1">
                <strong>Symbol:</strong> {company.symbol}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Market Cap:</strong> $
                {company.marketCap.toLocaleString()}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Description:</strong> {company.description}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>CEO:</strong> {company.ceo}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Founded Year:</strong> {company.foundedYear}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Industry:</strong> {company.industry}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Website:</strong>{" "}
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {company.website}
                </a>
              </p>
              <Button
                label="View Stock Page"
                onClick={() => handleStockPage(company._id)}
                className="mt-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
