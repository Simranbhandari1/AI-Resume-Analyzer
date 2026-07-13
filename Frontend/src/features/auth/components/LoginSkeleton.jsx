// components/LoginSkeleton.jsx
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoginSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#1d2430" highlightColor="#2c3647">
      <main>
        <div className="form-container">
          <Skeleton width={120} height={40} />

          <div className="input-group">
            <Skeleton width={60} height={20} />
            <Skeleton height={45} />
          </div>

          <div className="input-group">
            <Skeleton width={80} height={20} />
            <Skeleton height={45} />
          </div>

          <Skeleton height={45} borderRadius={8} />

          <div style={{ marginTop: '20px' }}>
            <Skeleton width={220} height={20} />
          </div>
        </div>
      </main>
    </SkeletonTheme>
  );
};

export default LoginSkeleton;
