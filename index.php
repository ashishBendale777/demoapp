<!-- index.php -->
<!-- demoapp -->
<?php
    $fname="Ashish";
    $lname="Bendale";

    echo $fname." ".$lname."<br>";
    $names=array("Ashish","Pawan","SAm");
    // var_dump($names)
    // echo $names[2];

    $student=array("name"=>"Sagar","age"=>"26","course"=>"MCA");

    // echo $student['name'];
    foreach ($student as $k => $v) {
        echo $v."<br>";
    }
?>