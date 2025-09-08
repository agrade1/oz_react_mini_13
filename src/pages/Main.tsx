import { MovieBanner, MovieCarousel } from '@/components/movie';

const categories = [
  { key: 'popular', title: '인기 영화' },
  { key: 'now_playing', title: '현재 상영중' },
  { key: 'upcoming', title: '개봉 예정' },
  { key: 'top_rated', title: '평점 높은 영화' },
] as const;

export default function Main() {
  return (
    <div className="-mt-24">
      <MovieBanner />
      <section className="cont-wrap py-16">
        {categories.map(({ key, title }) => (
          <MovieCarousel key={key} category={key} title={title} />
        ))}
      </section>
    </div>
  );
}
