import GalleryImg1 from '../../assets/gallery/gallery_1.jpg';

export const galleryImages = [
  GalleryImg1,
  GalleryImg1,
  GalleryImg1,
  GalleryImg1,
];
export const galleryImagesWithId: [string, number][] = galleryImages
  .map((s) => `url("${s}")`)
  .map((s, i) => [s, i]);
