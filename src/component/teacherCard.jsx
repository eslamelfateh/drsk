const TeacherCard = () => {
  return (
    <div class="bg-white rounded-lg shadow">
      <img
        class="h-32 w-32 mx-auto mt-7 object-cover rounded-full"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="img"
      />
      <div class="p-5 text-center">
        <h4 class="font-semibold">John Doe</h4>
        <h5 class="text-sm text-gray-400">Director of Photography</h5>
        <div class="flex justify-center mt-3">
          <div class="bg-blue-200 text-blue-900 rounded-full px-2 py-1 text-xs">
            Admin
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 border-t text-sm">
        <div class="py-3 flex justify-center items-center space-x-2 border-b lg:border-b-0 lg:border-r">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span>john@doe.com</span>
        </div>
        <div class="py-3 flex justify-center items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>+1 234 567 890</span>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard