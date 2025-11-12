import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> =({
    name,
    username,
    email,
    phone,
    website,
    address,
    company,
}) => {
    return (
    <div className="border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition">
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500">@{username}</p>

      <div className="mt-2 text-sm text-gray-600 space-y-1">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Website:</strong> {website}</p>
        <p><strong>Company:</strong> {company.name}</p>
        <p><strong>Address:</strong> {address.city}, {address.street}</p>
      </div>
    </div>
  );
}
export default UserCard;