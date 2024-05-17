import { useState, useEffect } from 'react';
import SearchBar from './searchBar/SearchBar';
import ErrorMessage from './errorMessage/ErrorMessage';
import ImageGallery from './imageGallery/ImageGallery';
import { fetchPhotosWithLoadMore } from './fetchPhotosWithQuery';
import Loader from './loader/Loader';
import toast from 'react-hot-toast';
import { IoMdNotifications } from 'react-icons/io';
import LoadMoreBtn from './loadMoreBtn/LoadMoreBtn';
import ImageModal from './imageModal/ImageModal';
import { Image } from '../types';

interface resDataProps {
  results: Image[];
  total: number;
  total_pages: number;
}

const notify = () =>
  toast('Whoops, something went wrong! Please try reloading this page!', {
    icon: <IoMdNotifications />,
    style: {
      borderRadius: '10px',
      background: 'red',
      color: '#fff',
    },
  });

function App() {
  const [photos, setPhotos] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [photoForModalWindow, setPhotoForModalWindow] = useState<string>('');
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [showBtn, setShowBtn] = useState(false);

  const addPage = (): void => {
    setPage(page + 1);
  };

  const openModal = (): void => {
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setPhotoForModalWindow('');
    setIsOpen(false);
  };

  const clickPhoto = (photo: string): void => {
    setPhotoForModalWindow(photo);
    openModal();
  };

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      try {
        {
          page === 1 && setPhotos([]);
        }
        setLoading(true);
        const resData: resDataProps = await fetchPhotosWithLoadMore(
          query,
          page
        );
        setPhotos(prev => {
          return [...prev, ...resData.results];
        });
        setTotalPages(resData.total_pages);
      } catch (error) {
        setError(true);
        notify();
      } finally {
        setLoading(false);
      }
    };
    loadImages();
  }, [query, page]);

  useEffect(() => {
    if (totalPages && totalPages !== page) {
      setShowBtn(!!totalPages);
    }
  }, [page, totalPages]);
  return (
    <div>
      <SearchBar onQuery={setQuery} setPage={setPage} />
      {page === 1 && loading && <Loader />}
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery photos={photos} onClickPhoto={clickPhoto} />
      )}
      {page > 1 && loading && <Loader />}
      {showBtn && <LoadMoreBtn onAddPage={addPage} />}
      <ImageModal
        isFoto={photoForModalWindow}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
    </div>
  );
}

export default App;
