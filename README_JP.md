# "Next.js 認証 - AuthJS / NextAuth を使用した役割ベースのセキュリティ"

[Github Repo]https://github.com/daikiejp/learn_next-auth/
[[English version]](https://github.com/daikiejp/learn_next-auth/blob/master/README.md)

> ごめんなさい、翻訳が不十分です。翻訳機と ChatGPT を使用しています。数か月後にはもっと日本語が上達し、アイデアをより良く表現できるようになることを期待しています。
>
> これを通じて、もっと多くの日本人が学ぶ機会を得ることができればと思っています。

このプロジェクトチュートリアルは、[freeCodeCamp Channel](https://www.youtube.com/watch?v=MNm1XhDjX1s)を基にしており、mongoose の代わりに Prisma を使用し、TypeScript サポートなどの追加機能があります。

## 特徴

- NextJS 14 を使う
- NexAuth プロバイダ（Github と Google）
- NextAuth クレデンシャル（mongoDB を使ったメールアドレスとパスワード）
- Prisma ORM のサポート
- TypeScript のサポート
- マイナーな修正と Tailwind CSS の変更

## はじめに

1. ここで **Github** 用の OAuth App を作成する： [https://github.com/settings/developers](https://github.com/settings/developers) と `Client ID` と `Client Secret` を安全な場所にコピーしてください。
2. **Google** ログインの場合は、以下にアクセスしてください： [https://console.cloud.google.com/](https://console.cloud.google.com/)にアクセスし、`Api & Services`、`Credentials`の順にクリックし、`OAuthクライアントIDを作成`をクリックし、`Webアプリケーション`を選択し、ローカルホストのリダイレクト URI を入力し、ビデオのように続行します。
3. [mongodb.com](mongodb.com)でアカウントを作成し、ビデオの指示に従って接続 URL をコピーします。接続 URL の最後にはデータベースの名前を追加してください： mongodb://<USER>:<PASSWORD>@XXX.mongo.net/<YOUR-DATABASE-NAME-HERE>`のようにします。
4. コンソールで openssl rand -base64 32 を使用して、独自の`NEXTAUTH_SECRET` 環境変数を生成してください。
5. 新しいユーザーを作成するために、`ADMIN_EMAIL` 環境変数に GitHub のメールアドレスを追加してください。

> 注意: Google OAuth の場合、`Oauth App` を作成する前にプロジェクトを作成する必要があります。

ブラウザで[http://localhost:3000](http://localhost:3000)を開くと結果が表示されます。

## Vercel へのデプロイ

プロジェクトを Vercel にデプロイするには、以下を追加する必要がある： "postinstall"： "prisma generate"`を`scripts`内の`package.json` に追加する。このプロジェクトには既にありますが、自分でやる場合は追加してください。

次に、Vercel の.env 変数をすべて Settings に入れる。

これで準備完了です :-)

## 注意事項

私は TypeScript を学んでいるため、いくつかのエラーや悪い構文が発生する可能性があります。プロジェクトはテストされ、エラーがないことを確認していますが、誰もが学んでいることを考慮してください。何か問題があれば、[GitHub Issues](https://github.com/daikiejp/learn_next-auth/issues) で報告してください。

貢献したり質問したりするのは自由です。このリポジトリは将来的に更新される可能性があります。
