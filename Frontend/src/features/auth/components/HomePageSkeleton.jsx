import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../../interview/style/home.scss';

const HomeSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#1d2430" highlightColor="#2c3647">
      <div className="home-page">
        {/* Header */}
        <header className="page-header">
          <Skeleton width={350} height={35} />
          <Skeleton width={500} height={18} style={{ marginTop: 12 }} />
        </header>

        {/* Card */}
        <div className="interview-card">
          <div className="interview-card__body">
            {/* Left */}
            <div className="panel">
              <Skeleton width={180} height={24} />

              <Skeleton
                height={320}
                style={{ marginTop: 20, borderRadius: 12 }}
              />

              <Skeleton width={120} height={14} style={{ marginTop: 10 }} />
            </div>

            <div className="panel-divider" />

            {/* Right */}
            <div className="panel">
              <Skeleton width={160} height={20} />

              <Skeleton
                height={140}
                style={{ marginTop: 20, borderRadius: 12 }}
              />

              <Skeleton
                width={50}
                height={18}
                style={{ margin: '20px auto' }}
              />

              <Skeleton width={180} height={20} />

              <Skeleton
                height={120}
                style={{ marginTop: 20, borderRadius: 12 }}
              />

              <Skeleton
                height={70}
                style={{ marginTop: 20, borderRadius: 12 }}
              />
            </div>
          </div>

          {/* Footer */}
          <div className="interview-card__footer">
            <Skeleton width={220} height={18} />
            <Skeleton width={240} height={45} borderRadius={10} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default HomeSkeleton;
