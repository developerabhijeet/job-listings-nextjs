'use client';
// import styles from './page.module.css';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import JobList from '@/component/JobList';
export default function Home() {
  return (
    <main >
      <Provider store={store}>
        <JobList />
      </Provider>
    </main>
  );
}
