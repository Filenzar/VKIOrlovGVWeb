import type StudentInterface from '@/types/StudentInterface';

export const getStudentsApi = async (): Promise<StudentInterface[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}students`);
    const groups = await response.json() as StudentInterface[];
    return groups;
  }
  catch (err) {
    console.log('>>> getStudentsApi', err);
    return [] as StudentInterface[];
  }
};
