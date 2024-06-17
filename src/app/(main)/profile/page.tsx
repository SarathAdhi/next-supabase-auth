import { createClient } from "@/utils/supabase/server";

const ProfilePage = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="space-y-3">
      <h3>Profile Page</h3>

      <p>
        <strong>Email:</strong> {user?.email}
      </p>
    </div>
  );
};

export default ProfilePage;
