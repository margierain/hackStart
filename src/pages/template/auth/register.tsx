import React from 'react';
import Register from 'template/views/Register';
import Auth from 'template/layouts/Auth';

export default function Page() {
  return (
    <Auth>
      <Register />
    </Auth>
  );
}
