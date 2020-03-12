import React from 'react';
import Error500 from 'template/views/Error500';
import Error from 'template/layouts/Error';

export default function Page() {
  return (
    <Error>
      <Error500 />
    </Error>
  );
}
