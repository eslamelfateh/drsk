import Header from "../component/header";
import TeacherCard from "../component/teacherCard";

const Teacher = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden z-i">
      <Header />
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-gray-100 p-10 ">
        <TeacherCard/>
      </section>
    </div>
  );
};

export default Teacher;
