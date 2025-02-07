import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import GitHubButton from 'react-github-btn';
import styles from './styles.module.css';
import MovingBoxes from '../components/MovingBoxes';
import HowtoSetup from '../components/HowtoSetup';
import CodeBlocks from '../components/CodeBlocks';
import BenchmarkChart from '../components/BenchmarkChart';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig } = context;
  return (
    <Layout title={siteConfig.tagline}>
      <header className={styles.heroBanner}>
        <div className={styles.movingBoxes}>
          <MovingBoxes />
        </div>
        <div className={clsx(styles.container, 'container')}>
          <p className={styles.heroTitle}>フルスタック開発環境を</p>
          <p className={styles.heroTitle}>コマンド一発で</p>
          <p className={clsx(styles.heroTitle, styles.heroTitleBold)}>必要なのは TypeScript だけ</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to={useBaseUrl('docs/')}>
              はじめる
            </Link>
            <Link
              className={clsx(
                'button button--outline button--primary button--lg',
                styles.startTutorial
              )}
              to={useBaseUrl('/docs/tutorial')}
            >
              チュートリアル
            </Link>
          </div>
          <div className="margin-top--md">
            <GitHubButton
              href="https://github.com/frouriojs/frourio"
              data-icon="octicon-star"
              data-size="large"
              data-show-count={true}
              aria-label="Star frouriojs/frourio on GitHub"
            >
              Star
            </GitHubButton>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className={clsx('text--center', styles.feature)}>
              <h2>セットアップ手順</h2>
              <div className={styles.setupWrapper}>
                <p className={styles.setupHeadline}>GUI で環境構築を簡単に</p>
                <HowtoSetup />
              </div>
            </div>
          </div>

          <div className={styles.typeDevWrapper}>
            <div className="container">
              <div className={clsx('text--center')}>
                <h2>型駆動開発</h2>
                <CodeBlocks />
                <div className={styles.rightTriangle}></div>
                <p className={styles.highlightTextGreen}>
                  TypeScript を用いてプロジェクト全体を静的型検査できます
                </p>
              </div>
            </div>
          </div>

          <div className={clsx('text--center', styles.feature)}>
            <div className="container">
              <div className={styles.typeDevDescription}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className={styles.typeDevDescriptionIcon}
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
                  />
                </svg>
                <p className={styles.highlightTextBlk}>
                  API 型定義によってコントローラーと HTTP リクエストの型が強制されるので、HTTP
                  通信のテストは必要ありません。
                </p>
              </div>
              <div className={styles.typeDevDescription}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className={styles.typeDevDescriptionIcon}
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                  <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
                </svg>
                <p className={styles.highlightTextBlk}>
                  型安全なフルスタック開発環境の構築が簡単なので、短期間で安全に製品を完成させることができます。
                </p>
              </div>
            </div>
          </div>

          <div className={clsx('text--center', styles.feature)}>
            <div className="container">
              <h2>TypeScript フレームワークのベンチマーク</h2>
              <BenchmarkChart />
              <div className={clsx('text--center', styles.feature)}>
                <Link
                  className={clsx('button button--primary button--lg', styles.getStarted)}
                  to={useBaseUrl('docs/')}
                >
                  はじめる
                </Link>
              </div>
              <div className="margin-top--md text--center">
                <GitHubButton
                  href="https://github.com/frouriojs/frourio"
                  data-icon="octicon-star"
                  data-size="large"
                  data-show-count={true}
                  aria-label="Star frouriojs/frourio on GitHub"
                >
                  Star
                </GitHubButton>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
