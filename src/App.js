import React, { Component } from 'react'
import Loader from './Components/Loader/Loader'
import * as API from './services/pixaby-api'
import SearchBar from './Components/Searchbar/SearchBar'
import ImageGallery from './Components/ImageGallery/ImageGallery'
import Button from './Components/Button/Button'
import Modal from './Components/Modal/Modal'
import s from './App.modules.css'



export default class App extends Component {

  state = {
    images: [],
    isLoading: false,
    pageNumber: 1,
    query: '',
    isModalOpen: false,
  }
  openModal = image => this.setState({ isModalOpen: true, image });

  closeModal = () => this.setState({ isModalOpen: false });

  componentDidMount() {
    const { pageNumber } = this.state;
    this.getImages(pageNumber);

  }

  componentDidUpdate(prevProps, prevState) {
    const { pageNumber, images } = this.state;
    if (prevState.pageNumber !== pageNumber) {
      this.loadMoreImages()
    }
    if (images.length > 12) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }


  loadMoreImages = () => {
    const { query, pageNumber } = this.state;
    this.setState({ isLoading: true });

    API.fetchImages(query, pageNumber)
      .then(res => this.setState(state => ({ images: [...state.images, ...res.data.hits] })))
      .finally(() => this.setState({ isLoading: false }));
  }


  loadMore = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }))
  }

  getImages = (query) => {
    const { pageNumber } = this.state;
    this.setState({ isLoading: true, query });

    API.fetchImages(query, pageNumber)
      .then(res => this.setState({ images: res.data.hits }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { images, isLoading, isModalOpen, image } = this.state

    return (
      <div className={s.App}>
        <SearchBar onSearch={this.getImages} />
        <ImageGallery images={images} openModal={this.openModal} />
        {isLoading && <Loader />}
        <Button onClick={this.loadMore} />
        {isModalOpen &&
          <Modal onClose={this.closeModal} image={image} />
        }
      </div>
    )
  }
}
