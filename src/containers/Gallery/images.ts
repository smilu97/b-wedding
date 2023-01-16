import GalleryImg1 from '../../assets/gallery/gallery_1.jpg';
import GalleryImg2 from '../../assets/gallery/gallery_2.jpg';
import GalleryImg3 from '../../assets/gallery/gallery_3.jpg';
import GalleryImg4 from '../../assets/gallery/gallery_4.jpg';
import GalleryImg5 from '../../assets/gallery/gallery_5.jpg';
import GalleryImg6 from '../../assets/gallery/gallery_6.jpg';
import GalleryImg7 from '../../assets/gallery/gallery_7.jpg';
import GalleryImg8 from '../../assets/gallery/gallery_8.jpg';
import GalleryImg9 from '../../assets/gallery/gallery_9.jpg';
import GalleryImg10 from '../../assets/gallery/gallery_10.jpg';
import GalleryImg11 from '../../assets/gallery/gallery_11.jpg';
import GalleryImg12 from '../../assets/gallery/gallery_12.jpg';
import GalleryImg13 from '../../assets/gallery/gallery_13.jpg';
import GalleryImg14 from '../../assets/gallery/gallery_14.jpg';
import GalleryImg15 from '../../assets/gallery/gallery_15.jpg';
import GalleryImg16 from '../../assets/gallery/gallery_16.jpg';
import GalleryImg17 from '../../assets/gallery/gallery_17.jpg';
import GalleryImg18 from '../../assets/gallery/gallery_18.jpg';
import GalleryImg19 from '../../assets/gallery/gallery_19.jpg';
import GalleryImg20 from '../../assets/gallery/gallery_20.jpg';

export const galleryImages = [
  GalleryImg1,
  GalleryImg2,
  GalleryImg3,
  GalleryImg4,
  GalleryImg5,
  GalleryImg6,
  GalleryImg7,
  GalleryImg8,
  GalleryImg9,
  GalleryImg10,
  GalleryImg11,
  GalleryImg12,
  GalleryImg13,
  GalleryImg14,
  GalleryImg15,
  GalleryImg16,
  GalleryImg17,
  GalleryImg18,
  GalleryImg19,
  GalleryImg20,
];
export const galleryImagesWithId: [string, number][] = galleryImages
  .map((s) => `url("${s}")`)
  .map((s, i) => [s, i + 1]);
