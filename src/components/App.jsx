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
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const inputValue = evt.target.elements.input.value
      .trim()
      .replace(' ', '+')
      .toLowerCase();

    this.setState({
      query: inputValue,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      images: [...prevState.images, ...this.state.images],
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        const fetchedImages = await fetchImages(query, page);
        this.setState({ images: fetchedImages.hits });
      } catch (error) {
        console.log(error.message);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { images, loading } = this.state;
    return (
      <StyledApp>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        {loading && <Loader />}
        {images.length > 0 && (
          <Button onClick={this.handleLoadMore}>Load more</Button>
        )}
      </StyledApp>
    );
  }
}
