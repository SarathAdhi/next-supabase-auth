import { supabaseServerComponent } from "@lib/supabase-server";
import React from "react";

const ProfilePage = async () => {
  const supabase = supabaseServerComponent();

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
