import Course from './course';
import { courses } from '@/constants/';

const Courses = () => {
  return (
    <section className='section'>
      <h3 className='mt-32 text-2xl font-bold text-secondary'>
        Most Popular Courses
      </h3>
      <div className='relative w-full mt-12 overflow-x-hidden'>
        <div className='flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide'>
          {courses.map((course) => {
            return (
              <Course
                key={course.id}
                {...course}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
