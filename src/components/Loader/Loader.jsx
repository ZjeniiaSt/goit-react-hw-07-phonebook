import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

const Load = () => {
  return (
    <Loader
      type="BallTriangle"
      color="#808080"
      height={100}
      width={100}
      timeout={500}
      className={s.loader}
    />
  );
};

export default Load;
