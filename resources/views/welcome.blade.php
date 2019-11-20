<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <title>Phone Book</title>
</head>
<body>
<div id="app">
    <v-app>
        <app-main/>
    </v-app>
</div>
    <script src="/js/app.js"></script>
</body>
</html>
