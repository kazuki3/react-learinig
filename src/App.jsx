import React, { useState, useEffect } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";
import ColorfulMessage2 from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickDisplay = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
    // eslint-disable-next-line react-hooks/exaustive-deps
  }, [num]);
  // []の場合はページ読み込み時のみ実行される。
  // 変数を入れるとその変数が変化した時だけ実行される

  return (
    <>
      <h1 style={{ color: "blue" }}>React学習</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage2 color="pink">お元気です。　</ColorfulMessage2>
      <button onClick={onClickCountUp}>・カウントアップ</button>
      <button onClick={onClickDisplay}>・ON/OFF</button>
      <p>{num}</p>
      {faceShowFlag && <p>٩( ᐛ )و</p>}
    </>
  );
};

export default App;
