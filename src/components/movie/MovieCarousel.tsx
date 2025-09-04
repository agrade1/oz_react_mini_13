import type { MovieListData } from '@/types/movieDataTypes';
import { useEffect } from 'react';
import Slider from 'react-slick';
import MovieCard from './MovieCard';

function blockWhileDragging(isDragging: boolean) {
  const slides = document.getElementsByClassName('slick-slide');
  for (let i = 0; i < slides.length; i++) {
    if (isDragging) {
      slides[i].classList.add('is-dragging');
    } else {
      slides[i].classList.remove('is-dragging');
    }
  }
}
type MovieCarouselProps = { movies: MovieListData[] };
export default function MovieCarousel({ movies }: MovieCarouselProps) {
  useEffect(() => {
    let isMouseDown = false;

    const handleMouseDown = () => {
      isMouseDown = true;
    };

    const handleMouseMove = () => {
      if (isMouseDown) {
        blockWhileDragging(true);
      }
    };

    const handleMouseUp = () => {
      isMouseDown = false;
      blockWhileDragging(false);
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    dots: false,
    swipe: true,
    draggable: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <Slider {...settings}>
      {movies.map((movie) => (
        <div key={movie.id} className="h-96 px-2">
          <MovieCard movie={movie} />
        </div>
      ))}
    </Slider>
  );
}
