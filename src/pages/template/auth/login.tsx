import React from 'react';
import Login from 'template/views/Login';
import Auth from 'template/layouts/Auth';

export default function Page() {
  return (
    <Auth>
      {false && <Login />}
      <h1>hello world!!</h1>
    </Auth>
  );
}
