import SearchResults from '@/components/search/SearchResults';
import { useSearchParams } from 'react-router';

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  return (
    <div className="cont-wrap py-8">
      <SearchResults query={query} />
    </div>
  );
}
