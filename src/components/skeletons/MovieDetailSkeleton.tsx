import SkeletonBox from './SkeletonBox';

export default function MovieDetailSkeleton() {
  return (
    <section className="cont-wrap relative min-h-dvh">
      {/* 배경 */}
      <SkeletonBox className="absolute inset-0 h-full w-full" />

      {/* 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />

      <div className="flex-between relative z-10 mx-auto w-full gap-10 py-10">
        {/* 포스터 */}
        <SkeletonBox className="h-[480px] w-80 rounded shadow-lg" />

        {/* 정보 */}
        <div className="flex flex-1 flex-col gap-4 text-white">
          <SkeletonBox className="h-10 w-2/3" /> {/* 제목 */}
          <div className="flex gap-3">
            <SkeletonBox className="h-8 w-20 rounded-full" />
            <SkeletonBox className="h-8 w-16 rounded-full" />
            <SkeletonBox className="h-8 w-24 rounded-full" />
          </div>
          <SkeletonBox className="h-5 w-full" />
          <SkeletonBox className="h-5 w-5/6" />
          <SkeletonBox className="h-5 w-2/3" />
          <SkeletonBox className="h-5 w-1/2" />
        </div>
      </div>
    </section>
  );
}
