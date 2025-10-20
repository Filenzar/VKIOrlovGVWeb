// lib/api/students/addStudentApi.ts
export const addStudentApi = async (studentData: {
  firstName: string;
  lastName: string;
  middleName: string;
}) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...studentData,
        groupId: 1 // значение по умолчанию
      }),
    });

    if (!response.ok) {
      throw new Error('Ошибка при добавлении студента');
    }

    return await response.json();
  } catch (err) {
    console.log('>>> addStudentApi', err);
    throw err;
  }
};
