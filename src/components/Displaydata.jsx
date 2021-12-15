import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
export default function DisplayData(props) {
  const { id, en, author } = props.item;

  return (
    <>
    <Table>
      <Thead>
        <Tr>
          <Th>{id}</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{author}</Td>
        </Tr>
      </Tbody>
    </Table>
      {/* </div> */}
    </>
  );
}
