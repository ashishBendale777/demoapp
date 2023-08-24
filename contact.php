<!-- contact.php -->

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Document</title>
    <style>
        * {
            font-family: sans-serif;
        }

        .Container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 60px;
            font-size: large;
        }

        .main-div {
            height: 400px;
            width: 800px;
            display: flex;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            border-radius: 17px;
        }

        .Contact-img {
            height: 400px;
            width: 400px;
            border-top-left-radius: 50px;
            border-bottom-right-radius: 50px;
        }

        .form-div {
            margin: 10px 10px 10px 20px;
            /* display: flex; */
        }

        input,
        Select,
        textarea {
            border: 1px solid rgb(122, 118, 118);
            border-radius: 5px;
            padding: 7px;
        }

        .button-div {
            height: 20px;
            width: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        h2 {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>
</head>

<body>
    <?php include 'navbar.php' ?>
    <h2>Contact Form</h2>
    <div class="Container">
        <div class="main-div">
            <div>
                <img src="contact.jpg" alt="ContactImg" class="Contact-img">
            </div>
            
            <div>
                <form method="post">

                    <div class="form-div">
                        <label>Full Name :</label><br>
                        <input type="text" size="48" name="fullname" placeholder="Enter Your Name">
                    </div>
                    
                    <div class="form-div">
                        <label>Email :</label><br>
                        <input type="email" size="48" name="email" placeholder="Enter Your Email">
                    </div>

                    <div style="display: flex;">
                        <div class="form-div">
                            <label>Mobile Number :</label><br>
                            <input type="number" name="mobileno" placeholder="Enter Your Mobile">
                        </div>

                        <div class="form-div">
                            <label>Country :</label><br>
                            <select style="width: 150px;" name="country">
                                <option>Select</option>
                                <option value="INDIA">India</option>
                                <option value="NEPAL">Nepal</option>
                                <option value="BHUTAN">Bhutan</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-div">
                        <label>Gender :</label><br>
                        <input type="radio" name="gender" id="m" value="Male ">
                        <label for="m">Male</label>
                        <input type="radio" name="gender" id="f" value="female ">
                        <label for="f">Female</label>
                    </div>

                    <div class="form-div">
                        <label>Massage :</label>

                        <textarea name="message" placeholder="Write something.." style="height:50px; width: 340px;"></textarea>
                    </div>
                    
                    <div class="button-div">
                        <button type="submit" name="add">Submit</button>
                    </div>


                </form>
            </div>
        </div>
    </div>

    <div>
        <h1>DATA</h1>
        <?php
        if (isset($_POST['add'])) {
            $fullname = $_POST['fullname'];
            $emailid = $_POST['email'];
            $mobileno = $_POST['mobileno'];
            $gender = $_POST['gender'];
            $country = $_POST['country'];
            $message = $_POST['message'];

            echo $fullname . "<br>";
            echo $mobileno . "<br>";
            echo $emailid . "<br>";
            echo $gender . "<br>";
            echo $country . "<br>";
            echo $message . "<br>";
        }
        ?>

    </div>
</body>

</html>