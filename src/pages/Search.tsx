import SearchResults from '@/components/search/SearchResults';
import SearchInput from '@/components/ui/SearchInput';
import { useSearchParams } from 'react-router';

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  return (
    <div className="cont-wrap py-8">
      {/* <SearchInput /> */}
      <SearchResults query={query} />
    </div>
  );
}
