<!-- allcontacts.php -->
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Document</title>
</head>

<body>
    <?php include 'navbar.php' ?>
    <table border="">
        <tbody>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Gender</th>
                <th>Country</th>
                <th>Message</th>
                <th>Actions</th>
            </tr>
            <?php
            include 'dbconnect.php';

            $result = mysqli_query($conn, "SELECT * FROM contactdata");
            foreach ($result as $row) {
            ?>
                <tr>
                    <td><?= $row['ID']; ?></td>
                    <td><?= $row['Full_Name']; ?></td>
                    <td><?= $row['Email']; ?></td>
                    <td><?= $row['Mobile']; ?></td>
                    <td><?= $row['Gender']; ?></td>
                    <td><?= $row['Country']; ?></td>
                    <td><?= $row['Massage']; ?></td>
                    <td>
                        <a href="allcontacts.php?con_id=<?= $row['ID']; ?>" onclick="return confirm('Are you sure?')">Delete</a> -->
                    </td>
                </tr>
            <?php } ?>
        </tbody>
    </table>


    <?php
    //include 'koneksi.php';
    if (isset($_GET['con_id'])) {
        $con_id = $_GET['con_id'];
        $sql = "DELETE FROM contactdata WHERE ID='$con_id'";
        if ($conn->query($sql) === false) { // Jika gagal meng-insert data tampilkan pesan dibawah 'Perintah SQL Salah'
            trigger_error('Wrong SQL Command: ' . $sql . ' Error: ' . $conn->error, E_USER_ERROR);
        } else { // Jika berhasil alihkan ke halaman tampil.php
            echo "<script>alert('Delete Success!')</script>";
        }
    }

    ?>
</body>

</html>