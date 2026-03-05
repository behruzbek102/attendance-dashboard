export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  class: string;
  rollNumber: number;
  image?: string;
  joinDate: string;
}

export interface Teacher {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  specialization: string;
  image?: string;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  date: string;
  status: 'present' | 'absent' | 'leave';
  subject?: string;
  remarks?: string;
}

export interface DashboardStats {
  totalStudents: number;
  totalTeachers: number;
  presentToday: number;
  attendancePercentage: number;
  lastUpdated: string;
}

export interface ApiState {
  loading: boolean;
  error: string | null;
  success: boolean;
}