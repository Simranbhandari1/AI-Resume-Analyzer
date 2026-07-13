import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../auth.form.scss';

const RegisterSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#1d2430" highlightColor="#2c3647">
      <main>
        <div className="form-container">
          {/* Heading */}
          <Skeleton width={140} height={40} />

          {/* Username */}
          <div className="input-group">
            <Skeleton width={80} height={18} />
            <Skeleton height={45} borderRadius={8} />
          </div>

          {/* Email */}
          <div className="input-group">
            <Skeleton width={60} height={18} />
            <Skeleton height={45} borderRadius={8} />
          </div>

          {/* Password */}
          <div className="input-group">
            <Skeleton width={80} height={18} />
            <Skeleton height={45} borderRadius={8} />
          </div>

          {/* Button */}
          <div style={{ marginTop: '20px' }}>
            <Skeleton height={45} borderRadius={8} />
          </div>

          {/* Footer Text */}
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <Skeleton width={230} height={18} />
          </div>
        </div>
      </main>
    </SkeletonTheme>
  );
};

export default RegisterSkeleton;
