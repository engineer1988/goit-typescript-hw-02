import css from './LoadMoreBtn.module.css';
import { FC } from 'react';

interface LoadMoreBtnProp {
  onAddPage: () => void;
}
const LoadMoreBtn: FC<LoadMoreBtnProp> = ({ onAddPage }) => {
  return (
    <div className={css.loadMoreBtn_div}>
      <button
        onClick={() => {
          onAddPage();
        }}
        className={css.loadMoreBtn}
      >
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
