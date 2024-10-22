<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Create a car</h1>
    <form method="post" action="{{route('car.store')}}">
        @csrf
        @method('post')
        <div>
            <label>Name</label>
            <input type="text" name="name" placeholder="name" />
        </div>
        <div>
            <label>Num</label>
            <input type="text" name="num" placeholder="num" />
        </div>
        <div>
            <input type="submit" value="Save A New Car">
        </div>
    </form>
</body>
</html>