// import * as React from 'react';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';

// export default function PaginationRounded() {
//   return (
//     <Stack spacing={2}>
//       {/* <Pagination count={10} shape="rounded" /> */}
//       <Pagination count={10} variant="outlined" shape="rounded" />
//     </Stack>
//   );
// }

import React from 'react';
import { Pagination } from 'react-bootstrap';

const CustomPagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Pagination>
        {pageNumbers.map(number => (
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => paginate(number)}
          >
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
    </nav>
  );
};

export default CustomPagination;
