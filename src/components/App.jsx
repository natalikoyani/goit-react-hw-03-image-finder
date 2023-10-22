import { Component } from 'react';
import { fetchImages } from 'api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

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
    });
    this.setState({ page: 1 });

    // Сохраняем термин поиска (query)
    // Сбрасываем page в 1
    // Очистить массив картинок
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        const fetchedImages = await fetchImages(query, page);
        console.log(fetchedImages.hits);
        this.setState({ images: fetchedImages.hits });
        console.log(this.state.images);
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
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        {loading && <div>Loader...</div>}
        {images.length > 0 && (
          <Button onClick={this.handleLoadMore}>Load more</Button>
        )}
      </div>
    );
  }
}
