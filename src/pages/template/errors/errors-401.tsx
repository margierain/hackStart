import React from 'react';
import Error401 from 'template/views/Error401';
import Error from 'template/layouts/Error';

export default function Page() {
  return (
    <Error>
      <Error401 />
    </Error>
  );
}
