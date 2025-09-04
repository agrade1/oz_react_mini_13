import { useQuery, type UseQueryOptions, type UseQueryResult } from '@tanstack/react-query';

/**
 * 범용 fetch 훅 (React Query 기반)
 *
 * @template T - API 응답 데이터의 타입
 * @param key - React Query 캐싱을 위한 queryKey (문자열 또는 배열)
 * @param url - 호출할 API URL
 * @param staleTime - 데이터가 "fresh"로 간주되는 시간(ms). 기본값: 1분
 * @returns React Query의 UseQueryResult<T> 객체 (data, isLoading, isError 등)
 */
export function useFetchQuery<T>(
  key: string | (string | number)[], // queryKey
  url: string, // fetch할 URL
  staleTime: number = 1000 * 60, // 기본 1분 동안 fresh 처리
  options?: Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn'>,
): UseQueryResult<T> {
  return useQuery<T>({
    // queryKey는 배열이어야 함 → 캐싱 구분에 사용됨
    queryKey: Array.isArray(key) ? key : [key],

    // 실제 API 호출 함수
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) throw new Error('네트워크 오류'); // HTTP 에러 핸들링
      return res.json(); // JSON 응답 반환
    },

    // fresh로 간주되는 시간 (ms). 이 시간 안에는 재요청 안 함
    staleTime,
    ...options,
  });
}
