import styled from "styled-components";

export const Text = styled.p`
  line-height: 1.5;
  color: ${({ theme }) => theme.text};
`;

const headingBase = ({ theme }) => `
  color: ${theme.text};
`;
export const H1 = styled.h1`
  ${headingBase};
  font-size: 2.5rem;
  margin: 1.25em 0 0.67em;
  letter-spacing: -1.2px;
`;
export const H2 = styled.h2`
  ${headingBase};
  margin: 3.125rem 0 1.56rem;
  letter-spacing: -1.2px;
`;
export const H3 = styled.h3`
  ${headingBase};
`;
export const H4 = styled.h4`
  ${headingBase};
`;
export const H5 = styled.h5`
  ${headingBase};
`;
export const H6 = styled.h6`
  ${headingBase};
`;

export const Quote = styled.blockquote``;
export const List = styled.ul``;
export const OrderedList = styled.ol``;
export const ListItem = styled.li``;
export const Table = styled.table``;
export const TableHead = styled.thead``;
export const TableHeadCell = styled.th``;
export const TableBody = styled.tbody``;
export const TableRow = styled.tr``;
export const TableCell = styled.td``;
export const Preformatted = styled.pre``;
export const Code = styled.code``;
export const Italic = styled.em``;
export const Bold = styled.strong``;
export const Muted = styled(Text).attrs(() => ({ as: "span" }))`
  color: ${({ theme }) => theme.medium};
`;
export const Strike = styled(Text)`
  text-decoration: line-through;
`;
export const HorizontalRule = styled.hr`
  margin: 2rem 0;
`;

export const Small = styled.small``;
