import { useSession } from "next-auth/react";
import React from "react";

const AboutUs = () => {
  const { data: session } = useSession();
  return (
    <div className="h-about w-screen">
      <pre className="text-foreground">{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};

export default AboutUs;
