import React, { useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  // Manage modal open/close state
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Optional: manage user data dynamically
  const [users, setUsers] = useState<UserProps[]>(posts);

  // Handles adding a new user from modal
  const handleAddUser = (newUser: UserProps) => {
    setUsers((prev) => [...prev, { ...newUser, id: prev.length + 1 }]);
    console.log("New user added:", newUser);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Users</h1>

          {/* Add User Button */}
          <button
            className="bg-blue-700 text-white px-4 py-2 rounded-full"
            onClick={() => setIsModalOpen(true)}
          >
            Add User
          </button>
        </div>

        {/* User List */}
        <div className="grid grid-cols-3 gap-4">
          {users.map((user: UserProps) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>

        {/* Modal Component */}
        <UserModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddUser}
        />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
