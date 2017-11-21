<?php
$host = getenv('IP');
$username = "root";
$password = '';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

$country =$_GET['country']; 
$all = $_GET['all']; 

function($country, $all){ 
    
    if($country==null && $all==null){
        echo "";
        
    }else if ($country!=null && $all==null){
        
                $stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
        
    }else if ($country == null && $all!=null){
                
                $stmt=$conn->query("SELECT * FROM countries"); 
    }

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo '<ul>';
foreach ($results as $row) {
  echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
}
echo '</ul>';
