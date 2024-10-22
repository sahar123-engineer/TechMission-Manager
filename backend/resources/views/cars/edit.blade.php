<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Edit a car</h1>
    <form method="post" action="{{route('car.update', ['car' => $car])}}">
    @csrf
        @method('put')
        <div>
            <label>Name</label>
            <input type="text" name="name" placeholder="name" value= "{{ $car->name }}"  />
        </div>
        <div>
            <label>Num</label>
            <input type="text" name="num" placeholder="num" value="{{$car->num}}" />
        </div>
        <div>
            <input type="submit" value="Update">
        </div>
    </form>
</body>
</html>