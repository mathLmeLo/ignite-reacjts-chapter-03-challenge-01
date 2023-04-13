import { GetStaticProps } from 'next';

import { FiCalendar, FiUser } from 'react-icons/fi';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';

import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps): JSX.Element {
  return (
    <>
      <main className={styles.container}>
        <img src="/images/logo.svg" alt="logo" />
        <ul>
          <li>
            <h1>Título</h1>
            <h2>Um subtítulo</h2>
            <div>
              <div className={styles.time}>
                <FiCalendar />
                <time> 19 Abr 2021</time>
              </div>
              <div>
                <FiUser />
                <address rel="author">Jason Gennaro</address>
              </div>
            </div>
          </li>
          <li>
            <h1>Título</h1>
            <h2>Um subtítulo</h2>
            <div>
              <div className={styles.time}>
                <FiCalendar />
                <time> 19 Abr 2021</time>
              </div>
              <div>
                <FiUser />
                <address rel="author">Jason Gennaro</address>
              </div>
            </div>
          </li>
          <li>
            <h1>Título</h1>
            <h2>Um subtítulo</h2>
            <div>
              <div className={styles.time}>
                <FiCalendar />
                <time> 19 Abr 2021</time>
              </div>
              <div>
                <FiUser />
                <address rel="author">Jason Gennaro</address>
              </div>
            </div>
          </li>
        </ul>
        <span className="more">Carregar mais posts</span>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient({});
//   // const postsResponse = await prismic.getByType(TODO);
//   // TODO
// };
