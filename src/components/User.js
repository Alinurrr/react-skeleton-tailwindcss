import React, { useEffect, useState } from 'react';

function User(props) {

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/3');
      const data = await res.json();
      setProfile(data)
    }, 1000)
  })
  return (
    <>
      {
        profile ?
          <div className="max-w-2xl mx-auto">
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center py-5">
                <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Profile" />
                <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{profile.username}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{profile.email}</span>
                <a className="text-blue-600 hover:underline" href={profile.website}>{profile.website}</a>
              </div>
            </div>
          </div>

          :
          <div>Loading...</div>
      }


    </>
  );
}

export default User;