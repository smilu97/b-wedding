import GalleryImg1 from '../../assets/gallery/gallery_1.jpg';
import GalleryImg2 from '../../assets/gallery/gallery_2.jpg';

export const galleryImages = [
  GalleryImg1,
  GalleryImg2,
  GalleryImg1,
  GalleryImg2,
  GalleryImg1,
  GalleryImg2,
  GalleryImg1,
  GalleryImg2,
  GalleryImg1,
  GalleryImg2,
];
export const galleryImagesWithId: [string, number][] = galleryImages
  .map((s) => `url("${s}")`)
  .map((s, i) => [s, i + 1]);
