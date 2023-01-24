---
id: why-frourio
title: Frourio について
---

## Frourio とは {#what-is-frourio}

Frourio はクライアントとサーバーとの間で TypeScript による静的な型検査を可能とする CLI ツールです。橋渡しのためのファイルを生成することで、型駆動開発を実現します。

Frourio が対応しているクライアントとサーバーのフレームワークを自由に組み合わせて、簡単に環境を構築することができます。

## なぜ frourio を使うのか {#why-frourio}

クライアントとサーバーの双方を TypeScript で開発している場合においても、両者間の API リクエストを型安全に実装することは困難でした。

言うなれば、私たちは「２つ」の TypeScript を書かざるを得なかったのです。
そしてブラウザとサーバーを用いたテストに多くの時間を費やしてきました。

![2 つの TypeScript](/img/docs/TwoTS.svg#gh-light-mode-only)
![2 つの TypeScript](/img/docs/TwoTS-dark.svg#gh-dark-mode-only)

しかし frourio を用いることで、型を通じてそれらを「接続」することができます。
Frourio は「接続」された TypeScript で開発体験を大幅に改善します。

![1 つの TypeScript](/img/docs/OneTS.svg#gh-light-mode-only)
![1 つの TypeScript](/img/docs/OneTS-dark.svg#gh-dark-mode-only)

---

それでは次のページに進んで、実際に手を動かしてみましょう。
