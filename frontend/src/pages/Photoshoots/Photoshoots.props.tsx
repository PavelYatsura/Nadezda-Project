export interface PhotoshootsProps {
  foto: {
    id: number;
    src: string;
    alt: string;
    images: [
      {
        src: string;
        alt: string;
      }
    ];
  };
}
