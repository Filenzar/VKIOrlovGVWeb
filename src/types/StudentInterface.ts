import type GroupInterface from './GroupInterface';

interface StudentInterface {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  isDeleted?: boolean;
  groupId: number;
  contacts: string;
  group?: GroupInterface;

}

export default StudentInterface;
