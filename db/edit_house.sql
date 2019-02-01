UPDATE houses
SET name=$2, address=$3, city=$4, state=$5, zip=$6
WHERE id=$1;

SELECT * FROM houses;