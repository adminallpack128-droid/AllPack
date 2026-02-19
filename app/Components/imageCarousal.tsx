// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// type BagImageGalleryProps = {
//   bag: {
//     images: string[];
//   };
// };

// const BagImageGallery = ({ bag }: BagImageGalleryProps) => {
//   const [selectedImage, setSelectedImage] = useState<string>(
//     bag?.images?.[1] || bag?.images?.[0]
//   );

//   return (
//     <div>
//       {/* Main Image Display */}
//       <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
//         {selectedImage && (
//           <Image
//             src={`/${selectedImage}.jpeg`}
//             alt="Selected Bag Image"
//             fill
//             className="object-cover hover:scale-105 transition-transform duration-300"
//           />
//         )}
//       </div>

//       {/* Thumbnails */}
//       <div className="grid grid-cols-4 gap-2 mt-4">
//         {bag.images?.map((img, index) => (
//           <div
//             key={index}
//             className={`relative aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 cursor-pointer ${
//               selectedImage === img
//                 ? 'border-orange-500'
//                 : 'border-orange-200 hover:border-orange-500'
//             }`}
//             onClick={() => setSelectedImage(img)}
//           >
//             <Image
//               src={`/${img}.jpeg`}
//               alt={`Product view ${index + 1}`}
//               fill
//               className="object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BagImageGallery;



'use client';

import { useState } from 'react';
import Image from 'next/image';

type BagImageGalleryProps = {
  bag: {
    images: string[];
  };
};

const BagImageGallery = ({ bag }: BagImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string>(
    bag?.images?.[0] || bag?.images?.[1]
  );

  return (
    <div>
      {/* Main Image Display */}
   <div className="relative aspect-[4/3] sm:aspect-square bg-gray-100 rounded-lg overflow-hidden flex justify-center items-center">
  {selectedImage && (
    <Image
      src={`/${selectedImage}.webp`}
      alt="Selected Bag Image"
      width={500}
      height={300}
      quality={90}
      className="object-cover hover:scale-105 transition-transform duration-300"
    />
  )}
</div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2 mt-4">
        {bag.images?.map((img, index) => (
          <div
            key={index}
            className={`relative aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 cursor-pointer ${
              selectedImage === img
                ? 'border-orange-500'
                : 'border-orange-200 hover:border-orange-500'
            }`}
            onClick={() => setSelectedImage(img)}
          >
            {img && (
              <Image
                src={`/${img}.webp`}
                alt={`${img}.webp ${index + 1}`}
                fill
                className="object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BagImageGallery;
