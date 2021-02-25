import styled from "@emotion/styled";

type IMargin = "none" | "medium" | "large";

const StyledTitle = styled.div`
  margin-bottom: 1rem;
  text-align: center;

  &.none {
    margin-top: 0rem;
  }

  & .medium {
    margin-top: 2rem;
  }

  &.large {
    margin-top: 4rem;
  }

  &.isBlog {
    margin-top: 8rem;
  }

  & h1 {
    font-size: 3.6rem;
    margin: 0;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    & h1 {
      font-size: 3rem;
      margin-top: 2rem;
    }
  }
  @media ${(props) => props.theme.breakpoints.mobile} {
    & h1 {
      font-size: 2.5rem;
      margin-top: 1rem;
    }
  }
`;

const SectionTitle = ({
  title,
  margin = "large",
  isBlog = false,
}: {
  title: string;
  margin?: IMargin;
  isBlog?: boolean;
}) => {
  return (
    <StyledTitle className={`${margin} ${isBlog && "isBlog"}`}>
      <h1>{title}</h1>
    </StyledTitle>
  );
};

export default SectionTitle;
