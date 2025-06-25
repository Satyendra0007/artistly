'use client'
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaAngleDown } from "react-icons/fa6";
import bg from "@/app/images/bg.jpg"
import Image from "next/image";

// Dummy data for categories and languages
const categories = ["Singer", "Dancer", "DJ", "Speaker"];
const languages = ["Hindi", "English", "Punjabi", "Tamil"];
const feeRanges = ["₹5,000 - ₹10,000", "₹10,000 - ₹30,000", "₹30,000 - ₹60,000", "₹60,000 - ₹1,00,000"];

// Yup validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  feeRange: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
});

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      category: [],
      languages: [],
    },
  });

  // Control dropdown open/close
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const selectedCategories = watch("category") || [];
  const selectedLanguages = watch("languages") || [];

  // Toggle checkboxes for multi-select dropdowns
  const handleCheckboxChange = (name, value) => {
    const selectedValues = watch(name) || [];
    if (selectedValues.includes(value)) {
      setValue(
        name,
        selectedValues.filter((item) => item !== value)
      );
    } else {
      setValue(name, [...selectedValues, value]);
    }
  };

  // Form submit handler
  const onSubmit = (data) => {
    console.log("Form Data:", { ...data });
    alert("form submitted ")
    reset();
  };

  return (

    <div className="h-fit relative p-3 ">
      <div className="image h-full absolute top-0 left-0 -z-10 ">
        {/* <Image className="h-full object-cover  w-full " width={600} height={700} quality={100} priority src={bg} alt="background image" ></Image> */}
        <img className="h-full object-cover  w-full" src="https://cdn.eventplanner.net/imgs/adv-3812/12437-hp-sb-desktop-sprdlux-events@2x.jpg" alt="background image" />
      </div>
      <div className="max-w-lg mx-auto p-6 bg-white/90 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4 text-center">Artist Onboarding Form</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Name */}
          <div>
            <label className="ml-1 text-sm font-semibold " htmlFor="name">Name : </label>
            <input
              id="name"
              {...register("name")}
              placeholder=" Enter Your Name"
              className="border w-full p-2 rounded-lg "
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Bio */}
          <div>
            <label className="ml-1 text-sm font-semibold " htmlFor="bio">Bio : </label>
            <textarea
              id="bio"
              {...register("bio")}
              placeholder="Tell About Your Self"
              className="border w-full p-2 rounded"
            />
            {errors.bio && <p className="text-red-500 text-sm">{errors.bio.message}</p>}
          </div>

          {/* Category Dropdown */}
          <div className="relative">
            <div className="ml-1 text-sm font-semibold " >Choose Your Category : </div>
            <button
              type="button"
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="border w-full p-2 rounded flex justify-between text-gray-600"
            >
              {selectedCategories.length > 0
                ? selectedCategories.join(", ")
                : "Select Category"}
              <FaAngleDown className="text-xs mt-2" />
            </button>
            {categoryOpen && (
              <div className="absolute z-10 w-full bg-white border mt-1 rounded shadow">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center p-2 hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => handleCheckboxChange("category", cat)}
                      className="mr-2"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            )}
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>

          {/* Languages Dropdown */}
          <div className="relative">
            <div className="ml-1 text-sm font-semibold " >Choose Your Language : </div>
            <button
              type="button"
              onClick={() => setLanguageOpen(!languageOpen)}
              className="border w-full p-2 rounded flex justify-between text-gray-600"
            >
              {selectedLanguages.length > 0
                ? selectedLanguages.join(", ")
                : "Select Languages"}
              <FaAngleDown className="text-xs mt-2" />
            </button>
            {languageOpen && (
              <div className="absolute z-10 w-full bg-white border mt-1 rounded shadow">
                {languages.map((lang) => (
                  <label key={lang} className="flex items-center p-2 hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={selectedLanguages.includes(lang)}
                      onChange={() => handleCheckboxChange("languages", lang)}
                      className="mr-2"
                    />
                    {lang}
                  </label>
                ))}
              </div>
            )}
            {errors.languages && (
              <p className="text-red-500 text-sm">{errors.languages.message}</p>
            )}
          </div>

          {/* Fee Range */}
          <div>
            <label className="ml-1 text-sm font-semibold " htmlFor="pricerange" >Select Price Range : </label>
            <select
              id="pricerage"
              {...register("feeRange")}
              className="border w-full p-2 rounded text-gray-600"
            >
              <option className="text-gray-600" value="">Select Fee Range</option>
              {feeRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
            {errors.feeRange && (
              <p className="text-red-500 text-sm">{errors.feeRange.message}</p>
            )}
          </div>



          {/* Location */}
          <div>
            <label className="ml-1 text-sm font-semibold " htmlFor="location" >Location : </label>
            <input
              id="location"
              {...register("location")}
              placeholder="Enter Your Location"
              className="border w-full p-2 rounded"
            />
            {errors.location && (
              <p className="text-red-500 text-sm">{errors.location.message}</p>
            )}
          </div>

          {/* Profile Image */}
          <div>
            <label className="py-2 px-4 font-semibold bg-blue-600 rounded-full shadow-lg text-white cursor-pointer" htmlFor="file">Choose Profile Pic </label>
            <input
              id="file"
              type="file"
              {...register("profileImage")}
              accept="image/*"
              className="hidden"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 font-semibold text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

