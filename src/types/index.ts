// src/types/index.ts

export interface Student {
    id: number;
    name: string;
    age: number;
    class: string;
}

export interface Teacher {
    id: number;
    name: string;
    subject: string;
}

export interface AttendanceRecord {
    studentId: number;
    date: string;
    status: 'present' | 'absent';
}

export interface DashboardStats {
    totalStudents: number;
    totalAttendance: number;
    totalTeachers: number;
}

export interface ApiState {
    loading: boolean;
    error: string | null;
}