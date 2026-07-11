import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../../interview/style/interview.scss';

const InterviewSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#1d2430" highlightColor="#2c3647">
      <div className="interview-skeleton-page">
        <div className="interview-skeleton-layout">
          {/* Left Sidebar */}
          <nav className="interview-nav">
            <div className="nav-content">
              <Skeleton width={70} height={14} />

              <div className="skeleton-nav">
                {[1, 2, 3].map((item) => (
                  <Skeleton
                    key={item}
                    height={46}
                    borderRadius={10}
                    style={{ marginBottom: 14 }}
                  />
                ))}
              </div>
            </div>

            <Skeleton
              height={48}
              borderRadius={12}
              style={{ marginTop: 'auto' }}
            />
          </nav>

          <div className="interview-divider" />

          {/* Center */}
          <main className="interview-content">
            <div className="content-header">
              <Skeleton width={240} height={32} />
              <Skeleton width={90} height={28} borderRadius={20} />
            </div>

            <Skeleton height={1} style={{ margin: '20px 0 30px' }} />
        
          </main>

          <div className="interview-divider" />

          {/* Right Sidebar */}
          <aside className="interview-sidebar">
            <Skeleton width={110} height={18} />

            <div className="circle-wrapper">
              <Skeleton circle width={120} height={120} />
            </div>

            <Skeleton width={150} height={16} />

            <Skeleton height={1} style={{ margin: '30px 0' }} />

            <Skeleton width={90} height={18} />

            {[1, 2, 3].map((item) => (
              <Skeleton
                key={item}
                height={60}
                borderRadius={10}
                style={{ marginTop: 14 }}
              />
            ))}
          </aside>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default InterviewSkeleton;
