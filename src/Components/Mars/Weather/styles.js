import Styled from '@emotion/styled';

export const Wrapper = Styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2em;
  padding: 40px 0;
`;

export const Date = Styled.div`
  h2 {
    font-size:${(props) => props.theme.fontSize.xl};
    margin: 0;
  }
  p {
    font-size:${(props) => props.theme.fontSize.h2};
    margin: 0;
    color: ${(props) => props.theme.colors.gray};
    font-weight: ${(props) => props.theme.fontWeight.light};
  }
`;

export const Temp = Styled.div`
  --border: solid 0.25em ${(props) => props.theme.colors.dark};
  border-left: var(--border);
  border-right: var(--border);
  padding: 0 2em;
  @media (max-width: 988px) {
    h2 {
      font-size: 1.5rem!important;
    }
  }
  @media (max-width: 768px) {
    border: 0;
  }
`;

export const Wind = Styled.div`
  display: grid;
  .section-title,
  .reading {
    grid-column: 2 / 3;
  }
  .wind__direction {
    --size: 6rem;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    display: -ms-grid;
    display: grid;
    place-items: center;
    grid-row: 1 / span 2;
  }
  .wind__arrow {
    --direction: ${(props) => `${props.deg}deg`};
    --size: 0.8rem;
    height: calc(var(--size) * 3);
    width: var(--size);
    background: ${(props) => props.theme.colors.dark};
    clip-path: polygon(50% 0, 0% 100%, 100% 100%);
    transform: translateY(-50%) rotate(var(--direction));
    transform-origin: bottom center;
    transition: -webkit-transform 500ms ease;
    transition: transform 500ms ease;
    transition: transform 500ms ease, -webkit-transform 500ms ease;
  }
  @media (max-width: 988px) {
    h2 {
      font-size: 1.5rem!important;
    }
  }
`;
