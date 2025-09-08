import { useDebounce } from '@/hooks/useDebounce';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type SearchInputProps = {
  debounce?: boolean;
  delay?: number;
  placeholder?: string;
  className?: string;
};

export default function SearchInput({
  debounce = true,
  delay = 500,
  placeholder = '검색어 입력',
  className = '',
}: SearchInputProps) {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, delay);
  const navigate = useNavigate();

  useEffect(() => {
    if (debounce && debouncedQuery.trim()) {
      navigate(`/search?query=${debouncedQuery}`);
    }
  }, [debouncedQuery, debounce, navigate]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.trim()) {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      className={`min-w-60 rounded-sm border border-white p-2 outline-0 ${className}`}
    />
  );
}
