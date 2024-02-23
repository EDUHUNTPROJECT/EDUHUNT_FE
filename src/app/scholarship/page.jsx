"use client";
import React from "react";
import MainLayout from "../../components/core/layouts/MainLayout";
import { Image } from "antd";
import FPTU from "../../../public/images/FPTU.png";
import { useScholarship } from "../../hooks/useScholarship";
import { useState, useEffect } from "react";

const Scholarship = () => {
  const [scholarshipData, setScholarshipData] = useState([]);
  const { getScholarship } = useScholarship();
  const [searchParams, setSearchParams] = useState({
    schoolname: "",
    budget: "",
  });

  const handleInputChange = (event) => {
    setSearchParams({
      ...searchParams,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getScholarship();
        console.log(data);
        setScholarshipData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(scholarshipData);
    const filteredData = scholarshipData.filter((scholarship) => {
      let matchSchoolName = true;
      let matchBudget = true;

      if (searchParams.schoolname && scholarship.schoolName) {
        matchSchoolName = scholarship.schoolName
          .toLowerCase()
          .includes(searchParams.schoolname.toLowerCase());
      }

      if (searchParams.budget && scholarship.budget) {
        const budget = Number(scholarship.budget.replace(/[^0-9.-]+/g, ""));
        matchBudget = budget <= Number(searchParams.budget);
      }

      console.log(scholarship.schoolName);
      return matchSchoolName && matchBudget;
    });

    console.log(searchParams);
    setScholarshipData(filteredData);
  };

  if (!scholarshipData.length) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Tìm kiếm học bổng</h2>
        </div>

        <div className="mt-4">
          <form action="#" onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="country"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Quốc gia
                </label>
                <select
                  id="country"
                  name="country"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="">Chọn quốc gia</option>
                  <option value="Viet Nam">Việt Nam</option>
                  <option value="United States">Hoa Kỳ</option>
                  <option value="United Kingdom">Vương quốc Anh</option>
                  <option value="Australia">Úc</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Thành phố
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Nhập tên thành phố"
                />
              </div>

              <div>
                <label
                  htmlFor="schoolname"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Tên trường
                </label>
                <input
                  type="text"
                  id="schoolname"
                  name="schoolname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Nhập tên trường"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Ngân sách
                </label>
                <input
                  type="number"
                  id="budget"
                  name="budget"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Nhập ngân sách"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg px-4 py-2"
              >
                Tìm kiếm
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[100%] p-4">
          <div className="flex flex-wrap items-center justify-center">
            {scholarshipData.map((scholarship, index) => (
              <div key={index} className="p-4">
                <div className="bg-white rounded-lg shadow-lg">
                  <div className="flex flex-col items-center justify-center p-8 w-[400px]">
                    <Image
                      src={FPTU.src}
                      alt={`${scholarship.schoolName} logo`}
                      className="w-24 h-24 mb-4"
                    />
                    <h1 className="text-2xl font-bold text-gray-800">
                      {scholarship.schoolName}
                    </h1>
                    <p className="text-md text-gray-600">{scholarship.title}</p>
                    <div className="flex flex-row justify-between mt-4">
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-lg font-bold text-gray-800">
                          {scholarship.budget}$
                        </p>
                        <p className="text-sm text-gray-600">Học phí</p>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between mt-4 gap-4">
                      <a
                        href={scholarship.url}
                        target="_blank"
                        className="btn btn-primary"
                      >
                        LƯU TRƯỜNG
                      </a>
                      <a
                        href={scholarship.url}
                        target="_blank"
                        className="btn btn-secondary"
                      >
                        ĐĂNG KÝ ONLINE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Scholarship;
