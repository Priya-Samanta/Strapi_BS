import React from 'react';
import { useRouter } from 'next/router';

const GamePage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <iframe
        src={`/games/${slug}/index.html`}
        style={{ width: '100%', height: '80vh', border: 'none' }}
        title={`${slug} game`}
      ></iframe>
    </div>
  );
};

export default GamePage;