import { useState } from "react";
import EditProfileCard from "../components/UserProfile/EditProfileCard";
import PageMeta from "../components/common/PageMeta";

export default function UserProfiles() {
  const [selected, setSelected] = useState<
    "Edit Profile" | "Preferences" | "Security"
  >("Edit Profile");

  const getButtonClass = (option: "Edit Profile" | "Preferences" | "Security") =>
    selected === option
      ? "text-charcoal border-b-2 border-charcoal"
      : "text-steel-blue";

  return (
    <>
      <PageMeta
        title="React.js Dashboard | Soar Frontend Assessment"
        description="A React and Tailwind CSS Admin Dashboard Template for Soar Frontend Assessment"
      />
      
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <div className="border-b-1 border-pale-gray mb-4">
          <div className="flex items-center gap-0.5 bordoer-b-1 border-red">
            <button
              onClick={() => setSelected("Edit Profile")}
              className={`px-3 py-2 font-medium w-full lg:w-40 lg:mx-3 text-base hover:text-charcoal ${getButtonClass(
                "Edit Profile"
              )}`}
            >
              Edit Profile
            </button>

            <button
              onClick={() => setSelected("Preferences")}
              className={`px-3 py-2 font-medium w-full lg:w-40 lg:mx-3 text-base hover:text-charcoal ${getButtonClass(
                "Preferences"
              )}`}
            >
              Preferences
            </button>

            <button
              onClick={() => setSelected("Security")}
              className={`px-3 py-2 font-medium w-full lg:w-40 lg:mx-3 text-base hover:text-charcoal ${getButtonClass(
                "Security"
              )}`}
            >
              Security
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <EditProfileCard />
        </div>
      </div>
    </>
  );
}
