import Image from "next/image";
import styled from "@emotion/styled";

const StyledServicesImage = styled.div`
    background-color; red;
  overflow: hidden;

    height: 300px;
    width: 100%;

  position: relative;

  @media ${(props) => props.theme.breakpoints.mobile} {
    min-height: 300px;
    padding: 1rem;
  }
`;

const ServicesImage = ({ alt, image }: { alt: string; image: string }) => {
  return (
    <StyledServicesImage>
      <Image src={image} alt={alt} layout="fill" objectFit="cover" />
    </StyledServicesImage>
  );
};

export default ServicesImage;
