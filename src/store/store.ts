import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import dashboardReducer from '../features/dashboard/dashboardSlice';
import studentReducer from '../features/students/studentsSlice';
import attendanceReducer from '../features/attendance/attendanceSlice';
import teacherReducer from '../features/teachers/teachersSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['dashboard', 'students', 'attendance', 'teachers'],
};

const persistedDashboardReducer = persistReducer(
  { ...persistConfig, key: 'dashboard' },
  dashboardReducer
);
const persistedStudentReducer = persistReducer(
  { ...persistConfig, key: 'students' },
  studentReducer
);
const persistedAttendanceReducer = persistReducer(
  { ...persistConfig, key: 'attendance' },
  attendanceReducer
);
const persistedTeacherReducer = persistReducer(
  { ...persistConfig, key: 'teachers' },
  teacherReducer
);

export const store = configureStore({
  reducer: {
    dashboard: persistedDashboardReducer,
    students: persistedStudentReducer,
    attendance: persistedAttendanceReducer,
    teachers: persistedTeacherReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: { ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], },
  }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;