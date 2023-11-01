import { Component } from 'react';
import { fetchImages } from 'components/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { StyledApp } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    error: false,
    showBtn: false,
    isModalOpen: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        const fetchedImages = await fetchImages(query, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...fetchedImages.hits],
        }));
        this.setState({
          showBtn: page < Math.ceil(fetchedImages.totalHits / 12),
        });
      } catch (error) {
        console.log(error.message);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleSubmit = inputValue => {
    this.setState({
      query: inputValue,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, loading, showBtn } = this.state;
    return (
      <StyledApp>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        {loading && <Loader />}
        {showBtn && <Button onClick={this.handleLoadMore}>Load more</Button>}
      </StyledApp>
    );
  }
}
