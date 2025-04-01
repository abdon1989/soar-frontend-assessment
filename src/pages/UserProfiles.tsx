import PageBreadcrumb from "../components/common/PageBreadCrumb";
import EditProfileCard from "../components/UserProfile/EditProfileCard";
import PageMeta from "../components/common/PageMeta";

export default function UserProfiles() {
  return (
    <>
      <PageMeta
        title="React.js Dashboard | Soar Frontend Assessment"
        description="A React and Tailwind CSS Admin Dashboard Template for Soar Frontend Assessment"
      />
      
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        
        <div className="space-y-6">
          <EditProfileCard />
        </div>
      </div>
    </>
  );
}
