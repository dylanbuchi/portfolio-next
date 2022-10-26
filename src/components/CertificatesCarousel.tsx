import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { certificates } from 'constants/images/certificates';
import { ReactNode } from 'react';

const CertificatesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    autoplaySpeed: 3000,
    autoplay: true,
    fade: false,
    pauseOnHover: false,
    appendDots: (dots: ReactNode) => (
      <ul>{<div className="mb-2">{dots}</div>}</ul>
    ),
  };

  const CERTIFICATE_BASE_URL =
    'https://www.coursera.org/account/accomplishments';

  const certificateStyles =
    'text-center shadow-lg transition sm:hover:scale-[1.01] object-cover';

  return (
    <Slider {...settings}>
      <Link
        href="https://www.credly.com/badges/1f67f34b-23b4-4fc6-98ac-3d4187a833b5"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={`${certificateStyles}`}
          src={certificates.googleIt.src}
          alt="certificate"
          width={certificates.googleIt.width}
          height={certificates.googleIt.height}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </Link>
      <Link
        href={`${CERTIFICATE_BASE_URL}/verify/6SAX4ZTWL3U9`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={certificateStyles}
          src={certificates.javaInitEPFL.src}
          alt="certificate"
          width={certificates.javaInitEPFL.width}
          height={certificates.javaInitEPFL.height}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </Link>
      <Link
        href={`${CERTIFICATE_BASE_URL}/verify/WH9PKH3CCPYV`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={certificateStyles}
          src={certificates.javaOopEPFL.src}
          alt="certificate"
          width={certificates.javaOopEPFL.width}
          height={certificates.javaInitEPFL.height}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </Link>

      <Link
        href={`${CERTIFICATE_BASE_URL}/specialization/K4KYAYQEZ3NU`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={certificateStyles}
          src={certificates.python4Everybody.src}
          alt="certificate"
          width={certificates.python4Everybody.width}
          height={certificates.python4Everybody.height}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </Link>
      <Link
        href={`${CERTIFICATE_BASE_URL}/specialization/SMLQ59LT64FW`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={certificateStyles}
          src={certificates.scriptPython.src}
          alt="certificate"
          width={certificates.scriptPython.width}
          height={certificates.scriptPython.height}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </Link>
      <Link
        href={`${CERTIFICATE_BASE_URL}/verify/UTRYFKDX3RZH`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={certificateStyles}
          src={certificates.djangoWeb.src}
          alt="certificate"
          width={certificates.djangoWeb.width}
          height={certificates.djangoWeb.height}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </Link>
      <Link
        href={`${CERTIFICATE_BASE_URL}/verify/4TVBFTZTU3P5`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={certificateStyles}
          src={certificates.djangoWebTech.src}
          alt="certificate"
          width={certificates.djangoWebTech.width}
          height={certificates.djangoWebTech.height}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </Link>
    </Slider>
  );
};

export default CertificatesCarousel;
