import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-400 text-white">
      Github followers:{data.followers}
      <img src={data.avatar_url} alt="gitpicture" className="text-center" />
    </div>
  );
}

export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
