import styled from 'styled-components';

const WinnersTable = styled.table`
  margin-top: 1rem;
  table-layout: fixed;
  font-size: 1.25rem;

  th {
    padding: 0.75em 1.25em;
    background-color: ${({ theme }) => theme.colors.primary[200]};
    text-align: left;
    text-transform: uppercase;
  }

  td {
    padding: 0.5em 1.25em;
  }

  .wins-column,
  .best-time-column {
    position: relative;
    cursor: pointer;

    img {
      position: absolute;
      top: 50%;
      transform: translateY(-45%) scale(1.4);
    }
  }

  svg {
    width: 100px;
  }
`;

export default WinnersTable;
