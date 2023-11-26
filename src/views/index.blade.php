<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>Laravel</title>
  @viteReactRefresh
  {{-- @vite(['resources/sass/app.scss', 'resources/ts/Index.tsx']) --}}
  @vite(['resources/ts/Index.tsx'])
</head>

<body>
  <div id="index"></div>
</body>

</html>
