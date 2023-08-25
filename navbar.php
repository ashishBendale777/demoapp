<!-- navbar.php -->
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Document</title>

    <link rel="stylesheet" href="style.css" />
    <style>
        nav {
            margin-top: 20px;
            background-color: red;
            padding: 10px;
        }

        ul {
            display: flex;
            list-style: none;
            justify-content: space-around;

        }

        a {
            color: white;
            text-decoration: none;
            font-size: 30px;
        }

        a:hover{
            color: blue;
            background-color: black;
            border-radius: 5px;
        }
    </style>
</head>

<body>
    <nav>
        <ul>
            <li><a href="home.php">Home</a></li>
            <li><a href="about.php">About</a></li>
            <li><a href="contact.php">Contact</a></li>
            <li><a href="allcontacts.php">All Contacts</a></li>
            
        </ul>
    </nav>

</body>

</html>