import { GalleryPhoto } from './ImageGalleryItem.styled';
import { Component } from 'react';
import { ModalWindow } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () =>
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));

  render() {
    const {
      item: { largeImageURL, webformatURL, tags },
    } = this.props;
    return (
      <>
        <GalleryPhoto
          src={webformatURL}
          alt={tags}
          onClick={this.toggleModal}
        />
        <ModalWindow
          isOpen={this.state.isModalOpen}
          isClose={this.toggleModal}

          // isOpen={isOpen}
          // onRequestClose={isClose}
          // style={customStyles}
        >
          <img src={largeImageURL} alt={tags} />
        </ModalWindow>
        {/* <ModalWindow isOpen={this.state.isModalOpen} isClose={this.toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </ModalWindow> */}
      </>
    );
  }
}
