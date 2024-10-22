<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Car</h1>
<div>
<table border="1">
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Number</th>
        <th>Edit</th>
        <th>Delete</th>
    </tr>
@foreach($cars as $car)
<tr>
        <td>{{$car->id}}</td>
        <td>{{$car->name}}</td>
        <td>{{$car->num}}</td>
        <td>
            <a href="{{route('car.edit', ['car' => $car])}}">Edit</a>
        </td>
        <td>
            <form method="post" action="{{route('car.destroy', ['car' => $car])}}">
            @csrf
            @method('delete')
            <input type="submit" value="Delete" />
            </form>
        </td>
</tr>
@endforeach
</table>
</div>
<div>
    <form method="get" action="{{route('car.create')}}">
            @csrf
            @method('get')
            <input type="submit" value="Add a new car" />
        </div>
</body>
</html>