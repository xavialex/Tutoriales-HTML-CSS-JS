<?php
$q=$_GET["q"];
echo "<table border='1'>
<tr>
<th>Nombre</th>
<th>Apellidos</th>
<th>Edad</th>
<th>Ciudad</th>
<th>Trabajo</th>
</tr>";
  echo "<tr>";
  echo "<td>Nombre: " . $q . "</td>";
  echo "<td>Apellido: " . $q . "</td>";
  echo "<td>Edad: " . $q. "</td>";
  echo "<td>Ciudad: " . $q . "</td>";
  echo "<td>Trabajo: " . $q . "</td>";
  echo "</tr>";
  
echo "</table>";

?>