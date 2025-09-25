import SkeletonBox from './SkeletonBox';

export default function MovieBannerSkeleton() {
  return (
    <section className="relative h-dvh w-full">
      {/* 배경 스켈레톤 */}
      <SkeletonBox className="h-dvh w-full" />
      배너 스켈레톤입니다.
      {/* 고정 콘텐츠 */}
      <div className="absolute bottom-20 left-10 z-10 max-w-xl text-white">
        <SkeletonBox className="mb-4 h-10 w-2/3" /> {/* 제목 */}
        <SkeletonBox className="mb-2 h-6 w-full" /> {/* 설명 1 */}
        <SkeletonBox className="mb-2 h-6 w-5/6" /> {/* 설명 2 */}
        <SkeletonBox className="h-6 w-4/6" /> {/* 설명 3 */}
        <div className="mt-6 flex gap-4">
          <SkeletonBox className="h-10 w-40" /> {/* 버튼 */}
        </div>
      </div>
    </section>
  );
}
