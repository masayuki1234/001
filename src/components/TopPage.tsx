import { Link } from "react-router-dom";
import { Menu } from "./Menu";
export const Top = () => {
  return (
    <div className="top">
      <a className="title">この占いの館について</a>
      <p className="pppp">
        ようこそ、「占いの館」へ。
        <br />
        経験豊富な実力派占い師たちが、あなたの抱えるお悩みや未来への不安に真摯に向き合います。
        <br />
        恋愛、仕事、人間関係...
        あなたの人生をより豊かにするためのヒントを、タロット、西洋占星術、四柱推命など、多岐にわたる占術で深く読み解きます。
        <br />
        一人で悩まず、どうぞ私たちにご相談ください。
        未来への扉を開く鍵は、いつもあなたの手の中にあります。
      </p>

      <Link to="/form" className="button-link">
        申し込みへ
      </Link>
      <Menu />
      <style jsx>
        {`
          .top {
            width: 100%;
            text-align: center;
            padding: 20px;
            background-color: black;
            color: #ddd;
          }
          .title {
            font-family: "Noto Sans JP", "Arial", sans-serif;
            font-size: 30px;
          }
          .pppp {
            font-family: serif;
            padding: 50px;
            max-width: 800px;
            margin: 0 auto;
            text-align: left;
          }
          .button-link {
            /*表示形式の変更：重要*/
            display: inline-block;

            /* ボタンの装飾 */
            background-color: #ffd700;
            color: #333;
            text-decoration: none; /* 下線を削除 */
            padding: 15px 40px;
            border-radius: 30px;
            font-size: 20px;
            font-weight: bold;
            /* ... その他のボタンのスタイル ... */
          }
        `}
      </style>
    </div>
  );
};
