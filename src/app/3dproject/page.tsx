import ImageScroller from "@/components/ImageScroller";

import { images } from "../../../lib/imageData";

export default function Project3D() {
  return (
    <main>
      <p>Project3D</p>
      <ImageScroller images={images} />
    </main>
  );
}
