import Header from "../component/header";

const ClassRoom = () => {
  let classRoom = {
    subdomain: "elfateh",
    display_name: "",
    ui_meta_data: {},
    tax_number: "",
    commercial_register: "",
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden z-i">
      <Header />
      <section className="bg-gray-100 p-10 ">
        {/* Subject Data */}
        <div className="grid grid-x-1 gap-5 border-2 border-gray-300 rounded-lg lg:w-1/2  mx-auto">
          <h1 className="mx-auto text-center font-bold text-2xl py-3">
            Create Class Room
          </h1>
          {/* Teacher Data */}
          <div className="grid grid-cols-1 gap-5 ">
            <img
              className="h-40 w-40 mx-auto mt-7 object-cover rounded-full"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="img"
            />
            {/* <div className="w-1/2 bg-gray-200 rounded-full mx-auto">
            <div
              class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
              style={{ width: "25%" }}
            >
              {" "}
              25%
            </div>
          </div> */}
            <div className="p-5 text-center">
              <h4 className="font-semibold">John Doe</h4>
              <h5 className="text-sm text-gray-400">Director of Photography</h5>
              <div className="flex justify-center mt-3">
                <div className="bg-blue-200 text-blue-900 rounded-full px-2 py-1 text-xs">
                  Admin
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1  ">
            <div class="flex justify-center m-5">
              <div class="w-80">
                <label
                  for="first_name"
                  class="block text-sm font-medium text-gray-700"
                >
                  Display Name
									<span className="text-red-600 mx-1">*</span>
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  class="w-full rounded-md px-4 py-2 mt-1 text-sm outline-none border-2 border-gray-200 focus:border-indigo-500"
                  placeholder="Ahmed"
                />
              </div>
            </div>
            <div class="flex justify-center m-5">
              <div class="w-80">
                <label
                  for="twitter_handle"
                  class="block text-sm font-medium text-gray-700"
                >
                  Drsk Handle
									<span className="text-red-600 mx-1">*</span>
                </label>
                <div class="mt-1 flex rounded-md">
                  <span class="inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-xs">
                    https://drsk.online/
                  </span>
                  <input
                    type="text"
                    name="twitter_handle"
                    id="twitter_handle"
                    class="w-full rounded-r-md px-4 py-2 text-sm outline-none border-2 border-gray-200 focus:border-indigo-500"
                    placeholder="Ahmed"
                  />
                </div>
              </div>
            </div>
            <div class="flex justify-center m-5">
              <div class="w-80">
                <label
                  for="first_name"
                  class="block text-sm font-medium text-gray-700"
                >
                  Tax Number
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  class="w-full rounded-md px-4 py-2 mt-1 text-sm outline-none border-2 border-gray-200 focus:border-indigo-500"
                  placeholder="John"
                />
              </div>
            </div>
            <div class="flex justify-center m-5">
              <div class="w-80">
                <label
                  for="first_name"
                  class="block text-sm font-medium text-gray-700"
                >
                  Commercial Register
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  class="w-full rounded-md px-4 py-2 mt-1 text-sm outline-none border-2 border-gray-200 focus:border-indigo-500"
                  placeholder="John"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClassRoom;
