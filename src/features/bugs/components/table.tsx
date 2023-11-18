import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { defaultStatusColor, primary, statusColors } from "@ui/colors";
import { format } from "date-fns";
import styled from "styled-components";
import { DEFAULT_FORMAT_DATE } from "@config/index";
import { Bug, statusType } from "../types";
import tinycolor from "tinycolor2";

const columnHelper = createColumnHelper<Bug>();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => (
      <p style={{ fontWeight: "bold", fontSize: ".9rem" }}>
        {" "}
        {info.getValue()}
      </p>
    ),
    header: () => <span style={{ fontWeight: "bold" }}>BUG</span>,
  }),
  columnHelper.accessor((row) => row.status, {
    id: "status",
    cell: (info) => (
      <span style={{ width: "100%" }}>
        <StatusTag $status={info.getValue()}>{info.getValue()}</StatusTag>
      </span>
    ),
    header: () => <span style={{ textAlign: "center" }}>STATUS</span>,
  }),
  columnHelper.accessor("created_at", {
    header: () => "created",
    cell: (info) => (
      <span>{format(new Date(info.getValue()), DEFAULT_FORMAT_DATE)}</span>
    ),
  }),
];

export const Table = ({ data = [] }: any) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <StyledTable>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        {table.getFooterGroups().map((footerGroup) => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.footer,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
    </StyledTable>
  );
};

const StyledTable = styled.table`
  caption-side: top;
  width: 100%;
  border: none;

  border-collapse: collapse;
  /* border-collapse: separate; */
  /* border-spacing: 5px 10px; */

  caption-side: bottom;
  /* empty-cell: show | hide;  */
  /* empty-cell is a property of table or the cells themselves */

  /* vertical-align: baseline | sub | super | text-top | 
              text-bottom | middle | top | bottom | 
              <percentage> | <length> */

  /* tbody {
  vertical-align: top;
}              */
  td,
  th {
    border: none;
    font-size: 0.8rem;
    color: ${primary};
    text-align: left;
    padding-left: 10px;
  }
  /* td,
 */

  tbody {
    height: 100px;
    overflow: hidden;
  }

  td {
    text-align: left;
    padding: 15px 10px;
    border-bottom: 1px solid #ccc;
  }

  tbody tr {
    :nth-of-type(odd) {
    }
    :hover {
      background-color: FFFF;
    }
  }
  thead > tr {
    background-color: #ffff;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;

const StatusTag = styled.div<{ $status: statusType }>`
  text-align: center;
  background-color: ${(props) =>
    statusColors?.[props.$status] || defaultStatusColor};
  padding: 0.4rem 0.5rem;
  color: ${(props) =>
    tinycolor(statusColors?.[props.$status] || defaultStatusColor)
      .darken(40)
      .toHexString()};
  border-radius: 6px;
  max-width: 100px;
`;
