import { useState } from 'react';
import Counter from './Counter';
import Info from './Info';
import Average from './Average';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <main>
      <h2>Counter</h2>
      <Counter />

      <hr />

      <h2>Info</h2>
      <button onClick={() => setVisible(!visible)}>
        {visible ? '숨기기' : '보이기'}
      </button>
      {visible && <Info />}

      <hr />

      <h2>Average</h2>
      <Average />
    </main>
  );
};

export default App;