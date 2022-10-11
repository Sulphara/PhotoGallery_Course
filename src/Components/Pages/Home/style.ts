import styled from "styled-components";

export const Container = styled.div`
display: grid;
gap: 0.5rem;
grid-template-columns: repeat(3, 1fr);
    
`;

export const AlbumTitle = styled.div`
  border: solid 1px;
  margin: 3px 5px;
  width: 85%;
  height: 2rem;

  p {
    color: white;
    font-size: 15px;
  }
  `;