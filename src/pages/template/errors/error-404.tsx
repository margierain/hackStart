import React from 'react';
import Error404 from 'template/views/Error404';
import Error from 'template/layouts/Error';

export default function Page() {
  return (
    <Error>
      <Error404 />
    </Error>
  );
}
