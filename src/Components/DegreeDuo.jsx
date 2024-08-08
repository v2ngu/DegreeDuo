import React from 'react';
import CourseList from './ListCourses';
import Header from './Header';

function DegreeDuo() {
  return (
    <main className="flex flex-col px-4 pt-4 pb-56 bg-zinc-900 max-w-[300px]">
      <Header />
      <h1 className="flex items-center px-2.5 py-1 mt-4 w-full text-4xl font-bold text-center whitespace-nowrap min-h-[48px]">
        <span className="self-stretch my-auto text-white">Degree</span>
        <span className="self-stretch my-auto text-amber-700">Duo</span>
      </h1>
      <CourseList />
    </main>
  );
}

export default DegreeDuo;