'use client';

import { useState } from 'react';
import TweetSearch from '@/components/tweet-search';

export default function SearchPage() {
  const [keyword, setKeyword] = useState('');
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    if (!keyword) {
      setError('검색어를 입력해주세요.');
      return;
    }

    const response = await fetch(
      `/api/search?keyword=${encodeURIComponent(keyword)}`
    );
    const data = await response.json();
    setTweets(data);
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-5 pt-6">
      <h1 className="mt-5 mb-10 font-semibold text-lg text-blue-400">
        트윗 검색
      </h1>
      <form onSubmit={handleSearch} className="w-full max-w-md">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="검색어를 입력하세요..."
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="mt-3 w-full bg-blue-400 text-white py-2 rounded-md"
        >
          검색
        </button>
      </form>

      {error && <div className="mt-3 text-red-500">{error}</div>}

      {tweets.length > 0 && (
        <div className="mt-8 w-full max-w-md">
          <TweetSearch initialTweets={tweets} keyword={keyword} />
        </div>
      )}

      {tweets.length === 0 && keyword && !error && (
        <div className="mt-8">
          <p>검색 결과가 없습니다.</p>
        </div>
      )}
    </div>
  );
}
