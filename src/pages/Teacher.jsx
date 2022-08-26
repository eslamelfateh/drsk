import Header from "../component/header";

const Teacher = () => {
  let teacherData = {
    subdomain: "elfateh",
    display_name: "",
    ui_meta_data: {},
    tax_number: "",
    commercial_register: "",
  };

  let subjectData = {
    name: "Arabic",
    language: "english",
    academic_year: 2022,
    grade_level: "secondary",
    grade_year: 3,
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden z-i">
      <Header />
      <section className="bg-gray-100 p-10 ">
        {/* Teacher Data */}
        <div className="grid grid-cols-1  gap-5 ">
          <img
            className="h-40 w-40 mx-auto mt-7 object-cover rounded-full"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="img"
          />
          <div className="w-1/2 bg-gray-200 rounded-full mx-auto">
            <div
              class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
              style={{ width: "25%" }}
            >
              {" "}
              25%
            </div>
          </div>
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

        {/* Subject Data */}
        <div className="grid grid-cols-1 gap-5 border-2 border-gray-300 rounded-lg">
          <h1 className="mx-auto text-center font-bold text-2xl py-3">
            Create New Subject
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            <div class="flex justify-center m-10">
              <div class="w-80">
                <label
                  for="country"
                  class="block text-sm font-medium text-gray-700"
                >
                  Subject Name
                </label>
                <select
                  name="country"
                  id="country"
                  class="w-full rounded-md px-4 py-2 mt-1 text-sm outline-none border-2 border-gray-200 focus:border-indigo-500"
                >
                  <option value="" selected disabled>
                    Choose Subject Name
                  </option>
                  <option value="India">Arabic</option>
                  <option value="United States">English</option>
                  <option value="Australia">Physiqus</option>
                  <option value="Vietnam">Chemistry</option>
                </select>
              </div>
            </div>
            <div class="flex justify-center m-10">
              <div class="w-80">
                <label
                  for="country"
                  class="block text-sm font-medium text-gray-700"
                >
                  Language
                </label>
                <select
                  name="country"
                  id="country"
                  class="w-full rounded-md px-4 py-2 mt-1 text-sm outline-none border-2 border-gray-200 focus:border-indigo-500"
                >
                  <option value="" selected disabled>
                    Choose Tha Language
                  </option>
                  <option value="India">English</option>
                  <option value="United States">Arabic</option>
                </select>
              </div>
            </div>
            <div class="flex justify-center m-10">
              <div class="w-80">
                <label
                  for="country"
                  class="block text-sm font-medium text-gray-700"
                >
                  Academic Year
                </label>
                <select
                  name="country"
                  id="country"
                  class="w-full rounded-md px-4 py-2 mt-1 text-sm outline-none border-2 border-gray-200 focus:border-indigo-500"
                >
                  <option value="" selected disabled>
                    Choose The Academic Year
                  </option>
                  <option value="India">2021</option>
                  <option value="United States">2022</option>
                  <option value="Australia">2023</option>
                </select>
              </div>
            </div>
            <div class="flex justify-center m-10">
              <div class="w-80">
                <label
                  for="Grade Level"
                  class="block text-sm font-medium text-gray-700"
                >
                  Grade Level
                </label>
                <select
                  name="Grade Level"
                  id="country"
                  class="w-full rounded-md px-4 py-2 mt-1 text-sm outline-none border-2 border-gray-200 focus:border-indigo-500"
                >
                  <option value="" selected disabled>
                    Choose The Grade Level
                  </option>
                  <option value="Secondary">Secondary</option>
                  <option value="High school">High school</option>
                </select>
              </div>
            </div>
            <div class="flex justify-center m-10">
              <div class="w-80">
                <label
                  for="Grade Year"
                  class="block text-sm font-medium text-gray-700"
                >
                  Grade Year
                </label>
                <select
                  name="Grade Year"
                  id="country"
                  class="w-full rounded-md px-4 py-2 mt-1 text-sm outline-none border-2 border-gray-200 focus:border-indigo-500"
                >
                  <option value="" selected disabled>
                    Choose The Grade Year
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teacher;
