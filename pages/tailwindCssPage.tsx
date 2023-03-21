import styles from '@/styles/TailwindPage.module.css';

export default function TailwindPage(props: {}) {
  return (
    <>
      <div className={`${styles.h1} p-5`}>
        <h1 className="text-3xl text-bold text-center">Hello World</h1>
      </div>
    </>
  );
}
