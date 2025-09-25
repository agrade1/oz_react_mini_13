import { useSuspenseQuery, type UseSuspenseQueryResult } from '@tanstack/react-query';
import { TMDB_BASE_URL, TMDB_TOKEN } from '@/constants/tmdb';

export function useTmdbQuery<T>(
  key: string[],
  endpoint: string,
  params: Record<string, string | number | boolean> = {},
  staleTime: number = 1000 * 60,
): UseSuspenseQueryResult<T, Error> {
  const searchParams = new URLSearchParams({
    language: 'ko-KR',
    ...Object.fromEntries(Object.entries(params).map(([k, v]) => [k, String(v)])),
  });

  const url = `${TMDB_BASE_URL}${endpoint}?${searchParams}`;

  return useSuspenseQuery<T, Error>({
    queryKey: key,
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${TMDB_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) throw new Error(`TMDB 오류: ${res.status}`);
      return res.json();
    },
    staleTime,
  });
}
