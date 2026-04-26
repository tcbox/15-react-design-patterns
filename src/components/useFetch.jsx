import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

export default function FetchUser({ userId }) {
  const userObj = {
    id: "",
    avatar: "",
    bio: "",
    email: "",
    followers: "",
    following: "",
    joinedAt: "",
    location: "",
    name: "",
    website: "",
  };
  const [originalUser, setOriginalUser] = useState(userObj);
  const [form, setForm] = useState(userObj);

  useEffect(() => {
    const fetchUser = async () => {
      const url = "http://localhost:3001/users";
      try {
        const response = await axios.get(`${url}/${userId}`);
        if (!response.data) return;

        setOriginalUser(response.data);
        setForm((prevForm) => ({ ...prevForm, ...response.data }));
      } catch (error) {
        if (error instanceof AxiosError) {
          throw new Error(`axios error: ${error.message}`, { cause: error });
        }
        if (error) {
          throw new Error(`something error wrong: ${error.message}`, {
            cause: error,
          });
        }
      }
    };

    if (userId) fetchUser();
  }, [userId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setForm(originalUser);
  };

  const handleSave = async () => {
    try {
      const url = `http://localhost:3001/users/${userId}`;
      const response = await axios.put(url, form);

      setOriginalUser(response.data);
      alert("Data Saved Successfully!");
    } catch (error) {
      console.error("Error saving data", error);
      alert("Save failed ");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>

      <div className="flex flex-col gap-4 max-w-sm mb-6">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            name="name"
            value={form.name || ""}
            onChange={handleChange}
            className="border p-2 rounded w-full "
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            name="email"
            value={form.email || ""}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Cancel / Reset
        </button>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded text-sm">
        <p>
          <strong>Database Data (originalUser):</strong> {originalUser.name} |{" "}
          {originalUser.email}
        </p>
        <p>
          <strong>Typing Data (form):</strong> {form.name} | {form.email}
        </p>
      </div>
    </div>
  );
}
